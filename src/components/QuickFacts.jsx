import { quickFacts, tripInfo } from '../data/itinerary'

const packingList = [
  { category: 'Documents', items: ['Passport', 'Travel insurance docs', 'Hotel confirmation', 'Flight tickets (printed/digital)', 'IC card (Suica/Pasmo)'] },
  { category: 'Electronics', items: ['Phone + charger', 'Portable battery pack', 'Camera', 'Universal power adapter', 'Earphones'] },
  { category: 'Clothing', items: ['Light breathable clothing (June is warm/humid)', 'Light rain jacket or compact umbrella', 'Comfortable walking shoes', 'Smart casual outfit for dining', 'Slip-on shoes (easy for shrines)'] },
  { category: 'Health & Comfort', items: ['Sunscreen (SPF 50+)', 'Insect repellent', 'Personal medications', 'Face masks (still common in Japan)', 'Hand sanitizer'] },
  { category: 'Money', items: ['JPY cash (¥50,000–80,000 for 7 days)', 'Credit card (Visa/Mastercard)', 'Notify your bank of travel dates'] },
]

const etiquette = [
  { icon: '🚇', rule: 'No phone calls on trains. Speak quietly and set phone to silent.' },
  { icon: '🚭', rule: 'No eating while walking. Eat at designated areas or restaurants.' },
  { icon: '👟', rule: 'Remove shoes when entering homes, traditional restaurants, and some temples.' },
  { icon: '♻️', rule: 'No street-side trash cans — carry a small bag for your rubbish.' },
  { icon: '💴', rule: 'Pay cash at counters — don\'t hand money directly to a person, use the tray.' },
  { icon: '🙇', rule: 'Bow slightly as a greeting and thank-you. A small nod is enough for tourists.' },
  { icon: '📸', rule: 'Always ask before photographing people. Shrines may restrict photography.' },
  { icon: '🤫', rule: 'Queue patiently in a straight line. Cutting queues is extremely rude.' },
]

export default function QuickFacts() {
  return (
    <div className="tips-page">
      <section className="tips-section">
        <h2 className="section-title">🗾 Essential Japan Facts</h2>
        <div className="facts-grid">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="fact-card">
              <div className="fact-icon">{fact.icon}</div>
              <div className="fact-body">
                <div className="fact-label">{fact.label}</div>
                <div className="fact-value">{fact.value}</div>
                <div className="fact-detail">{fact.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tips-section">
        <h2 className="section-title">🎎 Japanese Etiquette</h2>
        <div className="etiquette-list">
          {etiquette.map((item) => (
            <div key={item.rule} className="etiquette-item">
              <span className="etiquette-icon">{item.icon}</span>
              <p>{item.rule}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tips-section">
        <h2 className="section-title">🧳 Packing Checklist</h2>
        <div className="packing-grid">
          {packingList.map((cat) => (
            <div key={cat.category} className="packing-card">
              <h3 className="packing-category">{cat.category}</h3>
              <ul className="packing-items">
                {cat.items.map((item) => (
                  <li key={item} className="packing-item">
                    <input type="checkbox" id={item} />
                    <label htmlFor={item}>{item}</label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="tips-section">
        <h2 className="section-title">🌦️ June Weather in Tokyo</h2>
        <div className="weather-card">
          <div className="weather-stats">
            <div className="weather-stat">
              <span className="weather-stat-val">{tripInfo.weather.avgHigh}°C</span>
              <span className="weather-stat-label">Avg High</span>
            </div>
            <div className="weather-stat">
              <span className="weather-stat-val">{tripInfo.weather.avgLow}°C</span>
              <span className="weather-stat-label">Avg Low</span>
            </div>
            <div className="weather-stat">
              <span className="weather-stat-val">~180mm</span>
              <span className="weather-stat-label">Monthly Rain</span>
            </div>
            <div className="weather-stat">
              <span className="weather-stat-val">78%</span>
              <span className="weather-stat-label">Humidity</span>
            </div>
          </div>
          <div className="weather-tips">
            <p>🌧️ <strong>Rainy Season (Tsuyu):</strong> June is typically within Tokyo's rainy season. Expect warm, humid weather with frequent rain showers.</p>
            <p>☀️ <strong>Silver Lining:</strong> Rain keeps tourist crowds lower. Carry a compact umbrella (100-yen shops sell great ones). Many top sights are indoors.</p>
            <p>👗 <strong>Dress Code:</strong> Light, breathable fabrics (linen, moisture-wicking) are best. A light rain shell is more useful than an umbrella.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
