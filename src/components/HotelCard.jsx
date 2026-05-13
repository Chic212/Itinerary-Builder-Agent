import { tripInfo } from '../data/itinerary'

export default function HotelCard() {
  const { hotel } = tripInfo

  return (
    <div className="hotel-page">
      <div className="hotel-hero">
        <div className="hotel-hero-icon">🏨</div>
        <div className="hotel-hero-text">
          <h2 className="hotel-name">{hotel.name}</h2>
          <p className="hotel-area">📍 {hotel.area}</p>
        </div>
      </div>

      <div className="hotel-grid">
        <div className="info-card">
          <h3 className="info-card-title">📋 Stay Details</h3>
          <div className="info-rows">
            <div className="info-row">
              <span className="info-label">Check-in</span>
              <span className="info-value">{hotel.checkIn}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Check-out</span>
              <span className="info-value">{hotel.checkOut}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Duration</span>
              <span className="info-value">7 Nights</span>
            </div>
            <div className="info-row">
              <span className="info-label">Address</span>
              <span className="info-value">{hotel.address}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Phone</span>
              <span className="info-value">{hotel.phone}</span>
            </div>
          </div>
        </div>

        <div className="info-card">
          <h3 className="info-card-title">✨ Amenities</h3>
          <div className="amenities-list">
            {hotel.amenities.map((a) => (
              <span key={a} className="amenity-tag">✓ {a}</span>
            ))}
          </div>
        </div>

        <div className="info-card full-width">
          <h3 className="info-card-title">📍 Location Notes</h3>
          <p className="hotel-notes">{hotel.notes}</p>
          <a
            href={`https://www.google.com/maps/search/Grand+Ginza+Hotel+Tokyo`}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link-btn"
          >
            📍 Open in Google Maps →
          </a>
        </div>

        <div className="info-card full-width ginza-card">
          <h3 className="info-card-title">🌟 About Ginza</h3>
          <p>
            Ginza is Tokyo's most prestigious upscale shopping, dining, and entertainment district —
            often compared to Fifth Avenue in New York or the Champs-Élysées in Paris.
            Your hotel puts you within walking distance of dozens of Michelin-starred restaurants,
            flagship luxury boutiques, and major subway connections to every part of the city.
          </p>
          <div className="ginza-highlights">
            <div className="ginza-item"><span>🛍️</span><span>Luxury shopping: Chanel, Hermès, Louis Vuitton, Mikimoto</span></div>
            <div className="ginza-item"><span>🍣</span><span>World-class dining: Sukiyabashi Jiro, Kyubey, Umi</span></div>
            <div className="ginza-item"><span>🚇</span><span>Ginza Station (4 metro lines) — 1 min walk</span></div>
            <div className="ginza-item"><span>🎭</span><span>Kabukiza Theatre (traditional kabuki performances) — 5 min walk</span></div>
            <div className="ginza-item"><span>✏️</span><span>Itoya stationery flagship store — 3 min walk</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
