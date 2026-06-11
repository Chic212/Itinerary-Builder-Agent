import { useState } from 'react'
import { gridDays, timeSlots, schedule } from '../data/schedule'
import { days } from '../data/itinerary'

const TYPE_STYLES = {
  travel:     { bg: '#5B9E58', text: '#fff' },
  dining:     { bg: '#FFE566', text: '#3A2E00' },
  highlight:  { bg: '#F0943D', text: '#fff' },
  culture:    { bg: '#89C4E1', text: '#1A3A50' },
  shopping:   { bg: '#C5A8D4', text: '#2A0A40' },
  sightseeing:{ bg: '#A8D8A8', text: '#1A3A1A' },
  prep:       { bg: '#E0E0E0', text: '#555' },
  hotel:      { bg: '#FFCCBC', text: '#4A1A00' },
}

function Cell({ cell }) {
  if (!cell) return <td className="grid-cell grid-cell--empty" />

  const style = TYPE_STYLES[cell.type] || { bg: '#F5F5F5', text: '#333' }

  return (
    <td
      className="grid-cell grid-cell--filled"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      <span className="cell-text">{cell.text}</span>
      {cell.sub && <span className="cell-sub">{cell.sub}</span>}
    </td>
  )
}

function AgendaRow({ time, cell }) {
  if (!cell) {
    return (
      <div className="agenda-row">
        <span className="agenda-time">{time}</span>
        <div className="agenda-content agenda-content--empty">
          <span className="agenda-text">Free time</span>
        </div>
      </div>
    )
  }

  const style = TYPE_STYLES[cell.type] || { bg: '#F5F5F5', text: '#333' }

  return (
    <div className="agenda-row">
      <span className="agenda-time">{time}</span>
      <div className="agenda-content" style={{ backgroundColor: style.bg, color: style.text }}>
        <span className="agenda-text">{cell.text}</span>
        {cell.sub && <span className="agenda-sub">{cell.sub}</span>}
      </div>
    </div>
  )
}

export default function CalendarGrid() {
  const [mobileDay, setMobileDay] = useState(0)

  return (
    <div className="calendar-page">
      <div className="legend">
        {Object.entries(TYPE_STYLES).map(([type, s]) => (
          <span
            key={type}
            className="legend-item"
            style={{ background: s.bg, color: s.text }}
          >
            {type}
          </span>
        ))}
      </div>

      <div className="calendar-desktop">
        <div className="calendar-scroll-wrap">
          <table className="calendar-table">
            <thead>
              <tr>
                <th className="th-time">Time</th>
                {gridDays.map((d) => (
                  <th key={d.date} className="th-day">
                    <span className="th-dow">{d.dayOfWeek}</span>
                    <span className="th-date">{d.date}</span>
                    <span className="th-theme">{d.emoji} {d.label}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time, tIdx) => (
                <tr key={time} className={tIdx % 2 === 0 ? 'row-even' : 'row-odd'}>
                  <td className="td-time">{time}</td>
                  {schedule[tIdx].map((cell, dIdx) => (
                    <Cell key={dIdx} cell={cell} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="calendar-mobile">
        <div className="day-nav">
          <div className="day-nav-scroll">
            {gridDays.map((d, idx) => (
              <button
                key={d.date}
                className={`day-btn ${mobileDay === idx ? 'active' : ''}`}
                onClick={() => setMobileDay(idx)}
                style={mobileDay === idx ? { borderColor: days[idx].color, background: days[idx].color } : {}}
              >
                <span className="day-btn-emoji">{d.emoji}</span>
                <span className="day-btn-date">{d.date.split('-')[0]}</span>
                <span className="day-btn-label">{d.dayOfWeek.slice(0, 3)}</span>
              </button>
            ))}
          </div>
        </div>

        <h3 className="agenda-day-title">
          {gridDays[mobileDay].emoji} {gridDays[mobileDay].label}
        </h3>

        <div className="agenda-list">
          {timeSlots.map((time, tIdx) => (
            <AgendaRow key={time} time={time} cell={schedule[tIdx][mobileDay]} />
          ))}
        </div>
      </div>
    </div>
  )
}
