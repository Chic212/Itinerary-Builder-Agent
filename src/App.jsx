import { useState } from 'react'
import Header from './components/Header'
import DayNav from './components/DayNav'
import DayView from './components/DayView'
import HotelCard from './components/HotelCard'
import QuickFacts from './components/QuickFacts'
import { days } from './data/itinerary'

export default function App() {
  const [activeDay, setActiveDay] = useState(0)
  const [view, setView] = useState('itinerary') // 'itinerary' | 'hotel' | 'tips'

  return (
    <div className="app">
      <Header />
      <nav className="view-nav">
        <button
          className={`view-tab ${view === 'itinerary' ? 'active' : ''}`}
          onClick={() => setView('itinerary')}
        >
          📅 Itinerary
        </button>
        <button
          className={`view-tab ${view === 'hotel' ? 'active' : ''}`}
          onClick={() => setView('hotel')}
        >
          🏨 Hotel
        </button>
        <button
          className={`view-tab ${view === 'tips' ? 'active' : ''}`}
          onClick={() => setView('tips')}
        >
          💡 Travel Tips
        </button>
      </nav>

      <main className="main-content">
        {view === 'itinerary' && (
          <>
            <DayNav days={days} activeDay={activeDay} onSelect={setActiveDay} />
            <DayView day={days[activeDay]} />
          </>
        )}
        {view === 'hotel' && <HotelCard />}
        {view === 'tips' && <QuickFacts />}
      </main>

      <footer className="footer">
        <p>🌸 Tokyo · June 13–20, 2026 · Grand Ginza Hotel 🌸</p>
        <p className="footer-sub">いってらっしゃい — Safe travels!</p>
      </footer>
    </div>
  )
}
