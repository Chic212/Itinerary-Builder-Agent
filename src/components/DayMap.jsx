import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

export default function DayMap({ day }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  const stops = day.activities.filter(a => a.coords)

  useEffect(() => {
    if (!containerRef.current || stops.length < 2) return

    if (mapRef.current) {
      mapRef.current.remove()
      mapRef.current = null
    }

    import('leaflet').then(({ default: L }) => {
      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map)

      const latlngs = stops.map(a => a.coords)

      // Route line
      L.polyline(latlngs, {
        color: day.color,
        weight: 3,
        opacity: 0.75,
      }).addTo(map)

      // Numbered markers
      stops.forEach((activity, i) => {
        const isFirst = i === 0
        const isLast = i === stops.length - 1
        const bg = isFirst ? '#2D7A3A' : isLast ? '#A0192E' : day.color

        const icon = L.divIcon({
          html: `<div style="
            background:${bg};color:#fff;
            width:26px;height:26px;border-radius:50%;
            display:flex;align-items:center;justify-content:center;
            font-size:11px;font-weight:700;
            border:2px solid rgba(255,255,255,0.9);
            box-shadow:0 1px 5px rgba(0,0,0,0.45);
            font-family:system-ui,sans-serif;
          ">${i + 1}</div>`,
          className: '',
          iconSize: [26, 26],
          iconAnchor: [13, 13],
          popupAnchor: [0, -16],
        })

        L.marker(activity.coords, { icon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family:system-ui,sans-serif;min-width:150px;padding:2px 0">
              <div style="font-size:12px;font-weight:700;color:#1A1A2E;margin-bottom:3px">${activity.title}</div>
              <div style="font-size:11px;color:#5A5A7A">${activity.timeRange}</div>
            </div>
          `)
      })

      map.fitBounds(L.latLngBounds(latlngs), { padding: [28, 28], maxZoom: 14 })
      mapRef.current = map
    })

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [day.id])

  if (stops.length < 2) return null

  const gmapsUrl =
    'https://www.google.com/maps/dir/' +
    stops.map(a => encodeURIComponent(a.mapQuery.replace(/\+/g, ' '))).join('/') +
    '/'

  return (
    <div className="day-map-wrap">
      <div className="day-map-header">
        <span className="day-map-label">🗺️ Day Route — {stops.length} stops</span>
        <a
          href={gmapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="day-map-gmaps"
        >
          Open in Google Maps ↗
        </a>
      </div>
      <div ref={containerRef} className="day-map" />
      <div className="day-map-legend">
        <span className="day-map-legend-item">
          <span className="day-map-dot" style={{ background: '#2D7A3A' }} />
          Start
        </span>
        <span className="day-map-legend-item">
          <span className="day-map-dot" style={{ background: '#A0192E' }} />
          End
        </span>
        <span className="day-map-legend-hint">Click any marker for details</span>
      </div>
    </div>
  )
}
