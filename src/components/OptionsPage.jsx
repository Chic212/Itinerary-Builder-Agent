import { useState } from 'react'

const INTEREST_OPTIONS = [
  { id: 'food', label: '🍜 Food & Dining' },
  { id: 'shopping', label: '🛍️ Shopping' },
  { id: 'culture', label: '⛩️ Culture & History' },
  { id: 'nature', label: '🌿 Nature & Scenery' },
  { id: 'art', label: '🎨 Art & Museums' },
  { id: 'nightlife', label: '🌃 Nightlife' },
  { id: 'pop-culture', label: '🎮 Anime & Pop Culture' },
  { id: 'family', label: '👨‍👩‍👧 Family-Friendly' },
]

const DIETARY_OPTIONS = [
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'halal', label: 'Halal' },
  { id: 'gluten-free', label: 'Gluten-Free' },
  { id: 'pescatarian', label: 'Pescatarian' },
  { id: 'nut-allergy', label: 'Nut Allergy' },
]

const BUDGET_OPTIONS = [
  { id: 'budget', label: '💰 Budget-Friendly' },
  { id: 'moderate', label: '💴 Moderate' },
  { id: 'luxury', label: '💎 Luxury' },
]

const PACE_OPTIONS = [
  { id: 'relaxed', label: '🐢 Relaxed' },
  { id: 'balanced', label: '⚖️ Balanced' },
  { id: 'packed', label: '🚀 Packed' },
]

function toggleValue(list, value) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

export default function OptionsPage() {
  const [interests, setInterests] = useState([])
  const [dietary, setDietary] = useState([])
  const [budget, setBudget] = useState('moderate')
  const [pace, setPace] = useState('balanced')
  const [mobility, setMobility] = useState('')
  const [notes, setNotes] = useState('')

  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    setResult(null)

    try {
      const res = await fetch('/api/adjust-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          preferences: { interests, budget, pace, dietary, mobility, notes },
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')

      setResult(data)
      setStatus('done')
    } catch (err) {
      setError(err.message || 'Failed to reach the planning agent.')
      setStatus('error')
    }
  }

  return (
    <div className="options-page">
      <div className="options-hero">
        <div className="options-hero-icon">🧭</div>
        <div className="options-hero-text">
          <h2 className="options-title">Adjust My Itinerary</h2>
          <p className="options-subtitle">
            Tell the planning agent what matters most to you. It will research live, current
            options around Tokyo and suggest concrete tweaks to your trip — with sources.
          </p>
        </div>
      </div>

      <form className="options-form" onSubmit={handleSubmit}>
        <div className="options-section">
          <h3 className="options-section-title">What are you most interested in?</h3>
          <div className="chip-group">
            {INTEREST_OPTIONS.map((opt) => (
              <button
                type="button"
                key={opt.id}
                className={`chip ${interests.includes(opt.id) ? 'chip--active' : ''}`}
                onClick={() => setInterests((cur) => toggleValue(cur, opt.id))}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="options-row">
          <div className="options-section">
            <h3 className="options-section-title">Budget level</h3>
            <div className="chip-group">
              {BUDGET_OPTIONS.map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  className={`chip ${budget === opt.id ? 'chip--active' : ''}`}
                  onClick={() => setBudget(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="options-section">
            <h3 className="options-section-title">Preferred pace</h3>
            <div className="chip-group">
              {PACE_OPTIONS.map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  className={`chip ${pace === opt.id ? 'chip--active' : ''}`}
                  onClick={() => setPace(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="options-section">
          <h3 className="options-section-title">Dietary restrictions</h3>
          <div className="chip-group">
            {DIETARY_OPTIONS.map((opt) => (
              <button
                type="button"
                key={opt.id}
                className={`chip ${dietary.includes(opt.id) ? 'chip--active' : ''}`}
                onClick={() => setDietary((cur) => toggleValue(cur, opt.id))}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="options-row">
          <label className="options-field">
            <span className="options-field-label">Mobility considerations</span>
            <input
              type="text"
              placeholder="e.g. minimal walking, step-free routes preferred"
              value={mobility}
              onChange={(e) => setMobility(e.target.value)}
            />
          </label>

          <label className="options-field">
            <span className="options-field-label">Anything else the agent should know?</span>
            <input
              type="text"
              placeholder="e.g. traveling with kids, celebrating an anniversary…"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>
        </div>

        <button type="submit" className="options-submit" disabled={status === 'loading'}>
          {status === 'loading' ? '🔎 Researching live options…' : '✨ Get Personalized Suggestions'}
        </button>
      </form>

      {status === 'loading' && (
        <div className="options-status options-status--loading">
          <div className="spinner" />
          <p>The agent is searching the web and reasoning through your itinerary — this can take up to a minute.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="options-status options-status--error">
          <p>⚠️ {error}</p>
          <p className="options-status-hint">
            Make sure the planning agent server is running (<code>npm run dev:full</code>) and that{' '}
            <code>ANTHROPIC_API_KEY</code> is set in your <code>.env</code> file.
          </p>
        </div>
      )}

      {status === 'done' && result && (
        <div className="options-results">
          <h3 className="options-results-title">🗺️ Suggested Adjustments</h3>
          <div className="options-results-body">
            {result.text.split(/\n{2,}/).map((block, i) => (
              <p key={i}>{block}</p>
            ))}
          </div>

          {result.citations?.length > 0 && (
            <div className="options-citations">
              <h4>Sources</h4>
              <ul>
                {result.citations.map((c) => (
                  <li key={c.url}>
                    <a href={c.url} target="_blank" rel="noopener noreferrer">{c.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
