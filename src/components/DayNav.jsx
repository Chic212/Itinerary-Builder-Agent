export default function DayNav({ days, activeDay, onSelect }) {
  return (
    <div className="day-nav">
      <div className="day-nav-scroll">
        {days.map((day, idx) => (
          <button
            key={day.id}
            className={`day-btn ${activeDay === idx ? 'active' : ''}`}
            onClick={() => onSelect(idx)}
            style={activeDay === idx ? { borderColor: day.color, background: day.color } : {}}
          >
            <span className="day-btn-emoji">{day.emoji}</span>
            <span className="day-btn-date">{day.date.split(' ')[1]}</span>
            <span className="day-btn-label">{day.date.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
