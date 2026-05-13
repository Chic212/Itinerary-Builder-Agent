import { useState } from 'react'

const typeColors = {
  travel: '#6B7280',
  transport: '#3B82F6',
  sightseeing: '#059669',
  shopping: '#8B5CF6',
  dining: '#EF4444',
  culture: '#F59E0B',
}

const typeLabels = {
  travel: 'Travel',
  transport: 'Transport',
  sightseeing: 'Sightseeing',
  shopping: 'Shopping',
  dining: 'Dining',
  culture: 'Culture',
}

export default function ActivityCard({ activity, color, isLast }) {
  const [expanded, setExpanded] = useState(false)
  const typeColor = typeColors[activity.type] || color

  return (
    <div className="timeline-item">
      <div className="timeline-connector">
        <div className="timeline-dot" style={{ background: color }} />
        {!isLast && <div className="timeline-line" style={{ background: `${color}33` }} />}
      </div>

      <div className={`activity-card ${activity.highlight ? 'highlighted' : ''} ${expanded ? 'open' : ''}`}>
        <div
          className="activity-card-header"
          onClick={() => setExpanded(!expanded)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
        >
          <div className="activity-left">
            <span className="activity-icon">{activity.icon}</span>
            <div className="activity-info">
              <div className="activity-top-row">
                <span
                  className="activity-type-badge"
                  style={{ background: `${typeColor}20`, color: typeColor, border: `1px solid ${typeColor}40` }}
                >
                  {typeLabels[activity.type] || activity.type}
                </span>
                {activity.highlight && (
                  <span className="highlight-badge">⭐ Highlight</span>
                )}
              </div>
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-time">{activity.timeRange}</p>
            </div>
          </div>
          <button
            className="expand-btn"
            aria-label={expanded ? 'Collapse' : 'Expand'}
            style={{ color }}
          >
            {expanded ? '▲' : '▼'}
          </button>
        </div>

        {expanded && (
          <div className="activity-body">
            <p className="activity-description">{activity.description}</p>
            {activity.tips && (
              <div className="activity-tips">
                <span className="tips-icon">💡</span>
                <p>{activity.tips}</p>
              </div>
            )}
            {activity.mapQuery && (
              <a
                href={`https://www.google.com/maps/search/${activity.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
                style={{ color }}
              >
                📍 View on Google Maps →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
