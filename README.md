# Itinerary-Builder-Agent
Travel itinerary matched to the person's preferences and lifestyle.

## Adjust Trip — AI planning agent

The "🧭 Adjust Trip" tab lets travelers describe their preferences (interests, budget,
pace, dietary needs, mobility, notes) and get back live, researched suggestions for
tweaking the itinerary. It's powered by a small backend that calls the Claude API with
the `web_search` tool so the agent can look up current, real options.

### Setup

1. Copy `.env.example` to `.env` and add your Anthropic API key:

   ```
   cp .env.example .env
   ```

2. Install dependencies (already done if you've run `npm install`):

   ```
   npm install
   ```

3. Run both the frontend and the agent server together:

   ```
   npm run dev:full
   ```

   This starts the Vite dev server (http://localhost:5173) and the backend agent
   server (http://localhost:3001), with `/api` requests proxied through to the backend.

   You can also run them separately with `npm run dev` and `npm run server`.

> Note: the "Adjust Trip" feature requires the backend server and a valid
> `ANTHROPIC_API_KEY` — it will not work when viewing the static
> `Tokyo-Itinerary.html` build, since that file has no server to call.
