import { useState } from 'react'
import Header from './components/Header'
import CalendarGrid from './components/CalendarGrid'
import DayNav from './components/DayNav'
import DayView from './components/DayView'
import HotelCard from './components/HotelCard'
import QuickFacts from './components/QuickFacts'
import OptionsPage from './components/OptionsPage'
import { days } from './data/itinerary'

export default function App() {
  const [view, setView] = useState('calendar')
  const [activeDay, setActiveDay] = useState(0)

  return (
    <div className="app">
      <Header />

      <nav className="view-nav">
        <button
          className={`view-tab ${view === 'calendar' ? 'active' : ''}`}
          onClick={() => setView('calendar')}
        >
          📅 Calendar
        </button>
        <button
          className={`view-tab ${view === 'details' ? 'active' : ''}`}
          onClick={() => setView('details')}
        >
          📋 Details
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
          💡 Tips
        </button>
        <button
          className={`view-tab ${view === 'options' ? 'active' : ''}`}
          onClick={() => setView('options')}
        >
          🧭 <span className="tab-label-full">Adjust Trip</span><span className="tab-label-short">Trip</span>
        </button>
      </nav>

      <main className={`main-content ${view === 'calendar' ? 'main-content--wide' : ''}`}>
        {view === 'calendar' && <CalendarGrid />}
        {view === 'details' && (
          <>
            <DayNav days={days} activeDay={activeDay} onSelect={setActiveDay} />
            <DayView day={days[activeDay]} />
          </>
        )}
        {view === 'hotel' && <HotelCard />}
        {view === 'tips' && <QuickFacts />}
        {view === 'options' && <OptionsPage />}
      </main>

      <footer className="footer">
        <p>🌸 Tokyo · June 13–20, 2026 · Grand Ginza Hotel 🌸</p>
        <p className="footer-sub">いってらっしゃい — Safe travels!</p>
      </footer>
    </div>
  )
}
