import ActivityCard from './ActivityCard'
import DayMap from './DayMap'

export default function DayView({ day }) {
  if (!day) return null

  return (
    <div className="day-view">
      <div className="day-header" style={{ borderLeftColor: day.color }}>
        <div className="day-header-left">
          <span className="day-big-emoji">{day.emoji}</span>
          <div>
            <h2 className="day-title">{day.theme}</h2>
            <p className="day-subtitle">
              {day.dayOfWeek}, {day.date}, 2026
            </p>
          </div>
        </div>
        <div className="day-num" style={{ background: day.color }}>
          Day {day.id}
        </div>
      </div>

      <DayMap day={day} />

      <div className="timeline">
        {day.activities.map((activity, idx) => (
          <ActivityCard
            key={idx}
            activity={activity}
            color={day.color}
            isLast={idx === day.activities.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
