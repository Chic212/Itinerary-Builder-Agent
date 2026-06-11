import { tripInfo } from '../data/itinerary'

export default function Header() {
  const nights = 6

  return (
    <header className="header">
      <div className="header-bg">
        <div className="torii-accent">⛩</div>
      </div>
      <div className="header-content">
        <div className="header-tag">Vacation Itinerary</div>
        <h1 className="header-title">
          <span className="title-jp">東京</span>
          <span className="title-en">Tokyo, Japan</span>
        </h1>
        <div className="header-meta">
          <div className="meta-item">
            <span className="meta-icon">📅</span>
            <span>June 13 – June 20, 2026</span>
          </div>
          <div className="meta-divider" />
          <div className="meta-item">
            <span className="meta-icon">🌙</span>
            <span>{nights} Nights</span>
          </div>
          <div className="meta-divider" />
          <div className="meta-item">
            <span className="meta-icon">🏨</span>
            <span>{tripInfo.hotel.name}</span>
          </div>
        </div>
        <div className="weather-badge">
          <span>🌡️ {tripInfo.weather.avgHigh}°C avg high</span>
          <span className="weather-sep">·</span>
          <span>🌧️ {tripInfo.weather.condition}</span>
          <span className="weather-sep">·</span>
          <span>☂️ {tripInfo.weather.tip.split('.')[0]}</span>
        </div>
      </div>
    </header>
  )
}
