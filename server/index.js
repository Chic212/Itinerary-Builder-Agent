import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'
import { tripInfo, days } from '../src/data/itinerary.js'

const app = express()
app.use(cors())
app.use(express.json())

const anthropic = new Anthropic()

function summarizeItinerary() {
  return days
    .map((day) => {
      const activities = day.activities
        .map((a) => `    - [${a.time}] ${a.title} — ${a.description}`)
        .join('\n')
      return `Day ${day.id} — ${day.date} (${day.dayOfWeek}): ${day.theme}\n${activities}`
    })
    .join('\n\n')
}

function buildPrompt(preferences) {
  const {
    interests = [],
    budget = 'moderate',
    pace = 'balanced',
    dietary = [],
    mobility = '',
    notes = '',
  } = preferences || {}

  return `You are a Tokyo/Japan travel-planning assistant helping a traveler fine-tune their existing vacation itinerary.

TRIP OVERVIEW
Destination: ${tripInfo.destination}
Dates: ${tripInfo.startDate} to ${tripInfo.endDate}
Home base: ${tripInfo.hotel.name}, ${tripInfo.hotel.area}

CURRENT ITINERARY
${summarizeItinerary()}

TRAVELER PREFERENCES
- Interests: ${interests.length ? interests.join(', ') : 'no strong preferences stated'}
- Budget level: ${budget}
- Preferred pace: ${pace}
- Dietary restrictions: ${dietary.length ? dietary.join(', ') : 'none'}
- Mobility considerations: ${mobility || 'none stated'}
- Additional notes from traveler: ${notes || 'none'}

TASK
Use web search to research current (2026) options in Tokyo and the surrounding areas (Hakone, Kamakura, etc. as relevant to the itinerary) and recommend specific, concrete adjustments to this itinerary that better match the traveler's stated preferences. For each suggestion:
1. Reference the specific day and activity it would replace, supplement, or adjust.
2. Name a specific real place/restaurant/activity (not a generic category), with a one-line reason it fits their preferences.
3. Note anything practical the traveler should know (reservation requirements, cost level, opening hours, travel time from the existing plan).

Keep the overall structure of the trip intact — focus on swaps, additions, or refinements rather than a full rewrite. Organize your response by day, and keep it concise and easy to scan. If their stated preferences don't suggest any changes are needed for a given day, skip that day rather than forcing a change.`
}

app.post('/api/adjust-itinerary', async (req, res) => {
  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'Server is missing ANTHROPIC_API_KEY. Add it to a .env file and restart the server.' })
  }

  try {
    const prompt = buildPrompt(req.body?.preferences)

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      thinking: { type: 'adaptive' },
      tools: [{ type: 'web_search_20260209', name: 'web_search' }],
      messages: [{ role: 'user', content: prompt }],
    })

    let text = ''
    const citations = []
    const seenUrls = new Set()

    for (const block of response.content) {
      if (block.type === 'text') {
        text += block.text
        for (const citation of block.citations || []) {
          if (citation.url && !seenUrls.has(citation.url)) {
            seenUrls.add(citation.url)
            citations.push({ url: citation.url, title: citation.title || citation.url })
          }
        }
      }
    }

    res.json({ text, citations })
  } catch (err) {
    console.error('Itinerary adjustment request failed:', err)
    res.status(500).json({ error: 'Failed to generate suggestions. Please try again in a moment.' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Itinerary agent server running at http://localhost:${PORT}`)
})
