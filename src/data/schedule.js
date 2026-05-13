// Hour-by-hour calendar grid — base hotel: Grand Ginza, Higashi-Ginza Station
// Travel times measured from Higashi-Ginza / Ginza Station

export const gridDays = [
  { date: '13-Jun', dayOfWeek: 'Saturday',  label: 'Arrival',             emoji: '✈️' },
  { date: '14-Jun', dayOfWeek: 'Sunday',    label: 'Asakusa & Skytree',   emoji: '⛩️' },
  { date: '15-Jun', dayOfWeek: 'Monday',    label: 'Harajuku & Shibuya',  emoji: '🌸' },
  { date: '16-Jun', dayOfWeek: 'Tuesday',   label: 'Shinjuku',            emoji: '🌆' },
  { date: '17-Jun', dayOfWeek: 'Wednesday', label: 'Ueno & Akihabara',    emoji: '🏛️' },
  { date: '18-Jun', dayOfWeek: 'Thursday',  label: 'Kamakura Day Trip',   emoji: '🗿' },
  { date: '19-Jun', dayOfWeek: 'Friday',    label: 'Odaiba & teamLab',    emoji: '🤖' },
  { date: '20-Jun', dayOfWeek: 'Saturday',  label: 'Farewell & Departure',emoji: '🎌' },
]

export const timeSlots = [
  '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM',
  '10:00 PM', '11:00 PM',
]

// Cell types → color classes
// 'travel'    green   (#6ABF69)
// 'dining'    yellow  (#FFE566)
// 'highlight' orange  (#F0943D)
// 'culture'   blue    (#89C4E1)
// 'shopping'  purple  (#C5A8D4)
// 'prep'      gray    (#E0E0E0)
// 'hotel'     peach   (#FFCCBC)
// null        empty   (#FAFAFA)

// schedule[timeIndex] = array of 8 day-cells (Jun 13–20)
// Each cell: { text, sub, type } or null

export const schedule = [
  // ── 7:00 AM ──────────────────────────────────────────────────────────────
  [
    { text: 'Depart for Airport',          type: 'travel' },
    null,
    { text: 'Get ready',                   type: 'prep' },
    { text: 'Get ready',                   type: 'prep' },
    null,
    { text: 'Get ready',                   type: 'prep' },
    { text: 'Get ready',                   type: 'prep' },
    { text: 'Get ready',                   type: 'prep' },
  ],
  // ── 8:00 AM ──────────────────────────────────────────────────────────────
  [
    { text: 'Travel - Japan ✈️',           type: 'travel' },
    { text: 'Travel - Asakusa',
      sub:  'Toei Asakusa Line · 22 min',  type: 'travel' },
    { text: 'Get ready',                   type: 'prep' },
    { text: 'Get ready',                   type: 'prep' },
    { text: 'Travel - Ueno',
      sub:  'Ginza Line · 20 min',         type: 'travel' },
    { text: 'Get ready',                   type: 'prep' },
    { text: 'Get ready',                   type: 'prep' },
    { text: 'Get ready',                   type: 'prep' },
  ],
  // ── 9:00 AM ──────────────────────────────────────────────────────────────
  [
    { text: 'In Flight ✈️',               type: 'travel' },
    { text: 'Senso-ji Temple',
      sub:  'Arrive early — beat crowds',  type: 'highlight' },
    { text: 'Travel - Harajuku',
      sub:  'Hibiya → Chiyoda · 25 min',  type: 'travel' },
    { text: 'Travel - Shinjuku',
      sub:  'Marunouchi Line · 20 min',   type: 'travel' },
    { text: 'Tokyo National Museum',
      sub:  'Ueno Park · ¥1,000',         type: 'culture' },
    { text: 'Travel - Kamakura',
      sub:  'JR Yokosuka Line · 75 min',  type: 'travel' },
    { text: 'Travel - Odaiba',
      sub:  'Yurikamome fr. Shimbashi · 35 min', type: 'travel' },
    { text: 'Final Ginza Stroll',
      sub:  'Chuo-dori / Itoya',          type: 'sightseeing' },
  ],
  // ── 10:00 AM ─────────────────────────────────────────────────────────────
  [
    { text: 'In Flight ✈️',               type: 'travel' },
    { text: 'Nakamise Shopping Street',
      sub:  '89 shops · ningyo-yaki snacks', type: 'shopping' },
    { text: 'Meiji Jingu Shrine',
      sub:  'Forest path · bow & clap',   type: 'highlight' },
    { text: 'Shinjuku Gyoen',
      sub:  '144 acres · ¥500',           type: 'sightseeing' },
    { text: 'Tokyo National Museum',
      sub:  'Samurai armor · ukiyo-e',    type: 'culture' },
    { text: 'Arrive Kamakura',            type: 'travel' },
    { text: 'teamLab Planets',
      sub:  '⚡ Book tickets online!',     type: 'highlight' },
    { text: 'Itoya Stationery',
      sub:  '12 floors · washi tape',     type: 'shopping' },
  ],
  // ── 11:00 AM ─────────────────────────────────────────────────────────────
  [
    { text: 'Arrive Tokyo NRT / HND',     type: 'travel' },
    { text: 'Travel - Skytree',
      sub:  'Walk from Asakusa · 10 min', type: 'travel' },
    { text: 'Takeshita Street',
      sub:  'Harajuku · crepe + vintage', type: 'shopping' },
    { text: 'Shinjuku Gyoen',
      sub:  'Botanical greenhouse',       type: 'sightseeing' },
    { text: 'Ueno Park Stroll',
      sub:  'Shinobazu Pond lotus blooms',type: 'sightseeing' },
    { text: 'Kotoku-in - Great Buddha',
      sub:  '13m bronze · 1252 AD · ¥300',type: 'highlight' },
    { text: 'teamLab Planets',
      sub:  'Barefoot immersive art',     type: 'highlight' },
    { text: 'Travel - Tenichi',
      sub:  'Walk from Itoya · 5 min',   type: 'travel' },
  ],
  // ── 12:00 PM ─────────────────────────────────────────────────────────────
  [
    { text: 'Transfer - Grand Ginza Hotel',
      sub:  'N\'EX 85 min or Keikyu 30 min', type: 'travel' },
    { text: 'Tokyo Skytree',
      sub:  'Tembo Deck 350m · book ahead', type: 'highlight' },
    { text: 'Lunch - Afuri Ramen (阿夫利)',
      sub:  'Harajuku · Yuzu shio · Tabelog 3.52 · ~¥1,200', type: 'dining' },
    { text: 'Lunch - Fuunji (風雲児) つけ麺',
      sub:  'Shinjuku · Tabelog 3.83 · ~¥900', type: 'dining' },
    { text: 'Lunch - Yabu Soba (藪蕎麦)',
      sub:  'Ueno · Tabelog 3.73 · ~¥1,200 · since 1892', type: 'dining' },
    { text: 'Hase-dera Temple',
      sub:  'Hydrangeas in June!',        type: 'sightseeing' },
    { text: 'Lunch - Odaiba Decks',
      sub:  'Tokyo Bay view',             type: 'dining' },
    { text: 'Farewell Lunch - Tenichi (天一)',
      sub:  'Ginza · Tempura · Tabelog 3.76 · lunch set ~¥2,500', type: 'dining' },
  ],
  // ── 1:00 PM ──────────────────────────────────────────────────────────────
  [
    { text: 'Narita Express (N\'EX)',
      sub:  'or Keikyu from Higashi-Ginza',type: 'travel' },
    { text: 'Solamachi 6F Dining',
      sub:  'Ramen / tempura sets',       type: 'dining' },
    { text: '+81-50-3177-5032',           type: 'dining' },
    { text: '+81-3-6276-7816',            type: 'dining' },
    { text: 'Travel - Akihabara',
      sub:  'Hibiya Line · 5 min',        type: 'travel' },
    { text: 'Lunch - Mikasean (三笠苑)',
      sub:  'Shirasu-don · Tabelog 3.52', type: 'dining' },
    { text: 'DiverCity Tokyo Plaza',
      sub:  '18m Gundam RX-78 statue',    type: 'sightseeing' },
    { text: '+81-3-3571-1949',            type: 'dining' },
  ],
  // ── 2:00 PM ──────────────────────────────────────────────────────────────
  [
    { text: 'Settle in.',                 type: 'hotel' },
    { text: 'Sumida River Walk',
      sub:  'Scenic riverside path',      type: 'sightseeing' },
    { text: 'Omotesando & Cat Street',
      sub:  'Boutiques · Tadao Ando bldg',type: 'sightseeing' },
    { text: 'Kabukicho / Godzilla Head',
      sub:  'Toho Cinema rooftop',        type: 'sightseeing' },
    { text: 'Akihabara Electric Town',
      sub:  'Yodobashi · Mandarake',      type: 'shopping' },
    { text: 'Tsurugaoka Hachimangu',
      sub:  'Main Kamakura shrine',       type: 'sightseeing' },
    { text: 'Palette Town / Venus Fort',  type: 'shopping' },
    { text: 'Hotel Checkout',
      sub:  'Store luggage at front desk',type: 'hotel' },
  ],
  // ── 3:00 PM ──────────────────────────────────────────────────────────────
  [
    null,
    null,
    null,
    { text: 'Don Quijote (ドンキ)',
      sub:  '24-hr · 6 floors of everything', type: 'shopping' },
    { text: 'Akihabara Electric Town',
      sub:  'Maid café · retro games',    type: 'shopping' },
    { text: 'Komachi Street Shopping',
      sub:  'Local crafts · pickled plums',type: 'shopping' },
    { text: 'Odaiba Beach',
      sub:  'Rainbow Bridge sunset view', type: 'sightseeing' },
    { text: 'Travel - Airport',
      sub:  'N\'EX 85 min / Keikyu 30 min', type: 'travel' },
  ],
  // ── 4:00 PM ──────────────────────────────────────────────────────────────
  [
    { text: 'Ginza Stroll',
      sub:  'Chuo-dori · pedestrian street Sat', type: 'sightseeing' },
    null,
    { text: 'Travel - Shibuya',
      sub:  'Ginza Line · 15 min',        type: 'travel' },
    { text: 'Travel - TMG Building',
      sub:  'Marunouchi Line · Shinjuku', type: 'travel' },
    { text: 'Ameya-Yokocho Market',
      sub:  'Under JR tracks · seafood',  type: 'shopping' },
    { text: 'Travel - Tokyo',
      sub:  'JR Yokosuka Line · 75 min',  type: 'travel' },
    null,
    null,
  ],
  // ── 5:00 PM ──────────────────────────────────────────────────────────────
  [
    { text: 'Ginza Stroll',
      sub:  'Itoya · Mikimoto · Hermès',  type: 'sightseeing' },
    { text: 'Travel - Back to Asakusa',
      sub:  'Walk',                       type: 'travel' },
    { text: 'Shibuya Crossing 🚦',
      sub:  'World\'s busiest scramble',  type: 'highlight' },
    { text: 'Tokyo Metro Gov. Observatory',
      sub:  '202m · FREE · Mt Fuji view', type: 'highlight' },
    { text: 'Ameya-Yokocho Market',
      sub:  'Post-war black market vibes',type: 'shopping' },
    { text: 'Traveling - Tokyo',          type: 'travel' },
    { text: 'Travel - Tsukiji',
      sub:  'Hibiya Line · 8 min',        type: 'travel' },
    { text: 'Airport / Check-in',
      sub:  'International → 3 hrs early',type: 'travel' },
  ],
  // ── 6:00 PM ──────────────────────────────────────────────────────────────
  [
    null,
    { text: 'Hoppy Street (ホッピー通り)',
      sub:  'Yakitori · hoppy beer',      type: 'dining' },
    { text: 'Hachiko Statue',
      sub:  'Iconic loyal Akita dog',     type: 'sightseeing' },
    { text: 'Travel - Golden Gai',
      sub:  '5-min walk',                 type: 'travel' },
    null,
    { text: 'Arrive Tokyo',              type: 'travel' },
    { text: 'Tsukiji Outer Market',
      sub:  'Fresh oysters · grilled scallops', type: 'shopping' },
    { text: '✈️ Departure',
      sub:  'Gate open',                  type: 'travel' },
  ],
  // ── 7:00 PM ──────────────────────────────────────────────────────────────
  [
    { text: 'Dinner - Ginza Kagari (篝)',
      sub:  'Ginza · Chicken paitan ramen · Tabelog 3.82 · ~¥1,500', type: 'dining' },
    { text: 'Dinner - Komagata Dozeu (駒形どぜう)',
      sub:  'Asakusa · Loach hotpot · Tabelog 3.67 · ~¥3,000', type: 'dining' },
    { text: 'Dinner - Gyukatsu Motomura (牛かつ)',
      sub:  'Shibuya · Beef cutlet · Tabelog 3.68 · ~¥1,500', type: 'dining' },
    { text: 'Dinner - Omoide Yokocho 7:30pm',
      sub:  'Shinjuku · Yakitori alley · ~¥1,500–2,000', type: 'dining' },
    { text: 'Dinner - Kushikatsu Tanaka (串カツ田中)',
      sub:  'Ueno · Fried skewers · Tabelog 3.51 · ~¥2,000', type: 'dining' },
    { text: 'Dinner - Ginza Kagari (篝)',
      sub:  'Ginza · Ramen · Tabelog 3.82 · ~¥1,500', type: 'dining' },
    { text: 'Dinner - Sushi Dai (寿司大)',
      sub:  'Tsukiji · Tabelog 4.05 · ~¥3,500 · no reservation', type: 'dining' },
    { text: 'Sayonara Tokyo! ✈️',
      sub:  'いってきます',                type: 'travel' },
  ],
  // ── 8:00 PM ──────────────────────────────────────────────────────────────
  [
    { text: '+81-3-5537-7508',
      sub: 'Kagari · Ginza 1-chome exit 4', type: 'dining' },
    { text: '+81-3-3842-4001',            type: 'dining' },
    { text: 'Nonbei Yokocho',
      sub:  'Drunkard\'s Alley · 50+ tiny bars', type: 'dining' },
    { text: 'Omoide Yokocho (思い出横丁)',
      sub:  'Memory Lane yakitori & smoke',type: 'dining' },
    { text: '+81-3-3831-0954',            type: 'dining' },
    { text: '+81-3-5537-7508',            type: 'dining' },
    { text: 'Queue early or late',
      sub:  'No reservations accepted',   type: 'dining' },
    null,
  ],
  // ── 9:00 PM ──────────────────────────────────────────────────────────────
  [
    null,
    { text: 'Travel - Hotel',
      sub:  'Toei Asakusa Line · 22 min', type: 'travel' },
    { text: 'Travel - Hotel',
      sub:  'Ginza Line · 15 min',        type: 'travel' },
    null,
    { text: 'Travel - Hotel',
      sub:  'Ginza Line · 20 min',        type: 'travel' },
    { text: 'Travel - Hotel',
      sub:  'Walk · 5 min',               type: 'travel' },
    { text: 'Travel - Hotel',
      sub:  'Hibiya Line · 8 min',        type: 'travel' },
    null,
  ],
  // ── 10:00 PM ─────────────────────────────────────────────────────────────
  [
    { text: 'Travel - Hotel',
      sub:  'Ginza Line · 16 min',        type: 'travel' },
    null,
    null,
    { text: 'Travel - Hotel',
      sub:  'Marunouchi Line · 25 min',  type: 'travel' },
    null,
    null,
    null,
    null,
  ],
  // ── 11:00 PM ─────────────────────────────────────────────────────────────
  [null, null, null, null, null, null, null, null],
]

// 'sightseeing' type used in some cells above — add it to the color map
// in CalendarGrid.jsx as light teal
