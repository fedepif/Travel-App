/* ═══════════════════════════════════════════════════
   CONSTANTS & DATA
═══════════════════════════════════════════════════ */
const PEOPLE = ["Federico", "Manu", "Robi", "Giulia"];

const STOPS = [
  { name: "Barcellona",             lat: 41.3851,  lng:  2.1734, day: 1  },
  { name: "Valencia (transito)",    lat: 39.4699,  lng: -0.3763, day: 1  },
  { name: "Benidorm",               lat: 38.5409,  lng: -0.1319, day: 1  },
  { name: "Granada",                lat: 37.1773,  lng: -3.5986, day: 2  },
  { name: "Frigiliana",             lat: 36.7917,  lng: -3.9003, day: 4  },
  { name: "Nerja",                  lat: 36.7464,  lng: -3.8769, day: 4  },
  { name: "Malaga",                 lat: 36.7213,  lng: -4.4214, day: 4  },
  { name: "Caminito del Rey",       lat: 36.9122,  lng: -4.8389, day: 5  },
  { name: "Setenil de las Bodegas", lat: 36.8614,  lng: -5.1785, day: 5  },
  { name: "Ronda",                  lat: 36.7469,  lng: -5.1633, day: 5  },
  { name: "Siviglia",               lat: 37.3891,  lng: -5.9845, day: 6  },
  { name: "Cordoba",                lat: 37.8882,  lng: -4.7794, day: 9  },
  { name: "Valencia",               lat: 39.4699,  lng: -0.3763, day: 10 },
];

// 12 segments between the 13 stops
const SEGMENT_LABELS = [
  "Barcellona → Valencia (treno)",
  "Valencia → Benidorm (auto)",
  "Benidorm → Granada",
  "Granada → Frigiliana",
  "Frigiliana → Nerja",
  "Nerja → Malaga",
  "Malaga → Caminito del Rey",
  "Caminito del Rey → Setenil",
  "Setenil → Ronda",
  "Ronda → Siviglia",
  "Siviglia → Cordoba",
  "Cordoba → Valencia",
];
const SEGMENT_DAY = [1, 1, 2, 4, 4, 4, 5, 5, 5, 6, 9, 10];

const DAYS = [
  {
    day: 1, date: "2026-04-25", label: "Sabato 25 Aprile", route: "Barcellona → Benidorm",
    activities: [
      { time: "08:15", icon: "🚂", name: "Treno Barcellona → Valencia", type: "trasporto", segmentIdx: 0, note: "Arrivo Valencia 11:20 · Federico & Giulia" },
      { time: "11:20", icon: "🏙️", name: "Arrivo a Valencia", type: "free" },
      { time: "15:00", icon: "🚗", name: "Ritiro auto noleggio a Valencia", type: "trasporto", segmentIdx: 1,
        note: "Station Wagon – prenota ora (Pasqua = prezzi alti)", link: "https://drive.google.com/drive/u/0/folders/1MliR-xmBcYPVw0RnUAVJAO3n9mlgRI-G", linkLabel: "📁 Documenti" },
      { time: "17:00", icon: "🌅", name: "Balcón del Mediterráneo – tramonto", type: "free", confirmed: true, mapsQuery: "Balcon del Mediterraneo Benidorm" },
      { time: "20:30", icon: "🍽️", name: "Cena Benidorm – Rincon de Loix o centro", type: "cibo", estimatedCost: 20, note: "Tapas + menù del giorno" },
    ],
    hotel: { name: "Airbnb Benidorm", payer: "Federico", totalCost: 76, link: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMYPF9JECE", confirmed: true }
  },
  {
    day: 2, date: "2026-04-26", label: "Domenica 26 Aprile", route: "Benidorm → Granada",
    activities: [
      { time: "09:00", icon: "🚗", name: "Benidorm → Granada (A-92)", type: "trasporto", segmentIdx: 2, note: "~5h di guida" },
      { time: "15:00", icon: "🚶", name: "Albaicín – quartiere moresco", type: "free", confirmed: true, note: "Mirador de San Nicolás", mapsQuery: "Albaicin Granada" },
      { time: "20:00", icon: "🍺", name: "Tapas Calle Elvira / Plaza de Toros", type: "cibo", estimatedCost: 10, confirmed: true, note: "Granada unica: con 2-3 caña si cena con ~10€/testa" },
    ],
    hotel: { name: "Airbnb Granada (notte 1/2)", payer: "Federico", totalCost: 84, link: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMJXSZCA8B", confirmed: true, note: "2 notti 168€ totale" }
  },
  {
    day: 3, date: "2026-04-27", label: "Lunedì 27 Aprile", route: "Granada – Alhambra Full Day",
    activities: [
      { time: "13:30", icon: "🏛️", name: "Alhambra – Palacios Nazaríes + Generalife + Alcazaba", type: "ingresso", estimatedCost: 54, confirmed: true, payer: "Federico", note: "Biglietti esauriscono in pochi giorni!", link: "https://www.getyourguide.com/booking/F29GYXGQUXKELW9GZGC9WI2QN9U2ZV1H", linkLabel: "🎟️ Prenotazione", mapsQuery: "Alhambra Granada" },
      { time: "14:00", icon: "🍝", name: "Pranzo – zona Calle Pavaneras", type: "cibo", estimatedCost: 10 },
      { time: "16:00", icon: "🚶", name: "Paseo de los Tristes + zona Realejo", type: "free", confirmed: true },
      { time: "20:30", icon: "🍽️", name: "Cena – Calle Navas (tapas classiche)", type: "cibo", estimatedCost: 10 },
    ],
    hotel: { name: "Airbnb Granada (notte 2/2)", payer: "Federico", totalCost: 84, link: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMJXSZCA8B", confirmed: true }
  },
  {
    day: 4, date: "2026-04-28", label: "Martedì 28 Aprile", route: "Frigiliana → Nerja → Malaga",
    activities: [
      { time: "09:00", icon: "🚗", name: "Granada → Frigiliana", type: "trasporto", segmentIdx: 3 },
      { time: "10:30", icon: "🚶", name: "Frigiliana – pueblo blanco, viuzze moresche", type: "free", confirmed: true, estimatedCost: 2, mapsQuery: "Frigiliana pueblo blanco" },
      { time: "12:00", icon: "🚗", name: "Frigiliana → Nerja", type: "trasporto", segmentIdx: 4 },
      { time: "12:15", icon: "🌊", name: "Nerja – Balcón de Europa + Playa de Burriana", type: "free", confirmed: true, mapsQuery: "Balcon de Europa Nerja" },
      { time: "13:00", icon: "🍝", name: "Pranzo Nerja – chiringuito sul mare", type: "cibo", estimatedCost: 12 },
      { time: "14:30", icon: "🚗", name: "Nerja → Malaga", type: "trasporto", segmentIdx: 5 },
      { time: "16:00", icon: "🚶", name: "Malaga – Centro Histórico, Alcazaba", type: "ingresso", estimatedCost: 3, mapsQuery: "Alcazaba Malaga" },
      { time: "20:30", icon: "🍽️", name: "Cena Malaga – El Pimpi o Calle Granada", type: "cibo", estimatedCost: 15 },
    ],
    hotel: { name: "Booking Malaga", payer: "Federico", totalCost: 72, link: "https://secure.booking.com/confirmation.en-gb.html?bn=5407792525", linkLabel: "🏨 Prenotazione", confirmed: true }
  },
  {
    day: 5, date: "2026-04-29", label: "Mercoledì 29 Aprile", route: "Colomares → Caminito → Setenil → Ronda",
    activities: [
      { time: "08:30", icon: "🏰", name: "Castillo de Colomares – Benalmádena", type: "ingresso", estimatedCost: 3, mapsQuery: "Castillo de Colomares Benalmadena" },
      { time: "10:00", icon: "🚗", name: "Colomares → Caminito del Rey", type: "trasporto", segmentIdx: 6 },
      { time: "12:30", icon: "🧗", name: "Caminito del Rey – passerella nella gola", type: "ingresso", estimatedCost: 20, confirmed: true, payer: "Manu", realCost: 20, link: "https://www.caminitodelrey.info/en/tickets/my-tickets/pedido_id/727521", linkLabel: "🎟️ Prenotazione", mapsQuery: "Caminito del Rey" },
      { time: "16:00", icon: "🚗", name: "Caminito del Rey → Setenil", type: "trasporto", segmentIdx: 7 },
      { time: "17:00", icon: "🚶", name: "Setenil – case scavate nella roccia", type: "free", confirmed: true, mapsQuery: "Setenil de las Bodegas" },
      { time: "18:00", icon: "🚗", name: "Setenil → Ronda", type: "trasporto", segmentIdx: 8 },
      { time: "20:00", icon: "🌉", name: "Ronda – Puente Nuevo illuminato di notte", type: "free", confirmed: true, mapsQuery: "Puente Nuevo Ronda" },
      { time: "21:00", icon: "🍽️", name: "Cena Ronda", type: "cibo", estimatedCost: 15 },
    ],
    hotel: { name: "Airbnb Ronda", payer: "Federico", totalCost: 64.47, link: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HM83NB3JHZ", confirmed: true }
  },
  {
    day: 6, date: "2026-04-30", label: "Giovedì 30 Aprile", route: "Ronda → Siviglia",
    activities: [
      { time: "09:00", icon: "🌉", name: "Ronda – Puente Nuevo + Tajo di Ronda (mattina)", type: "free", confirmed: true, mapsQuery: "Puente Nuevo Ronda" },
      { time: "11:00", icon: "🚗", name: "Ronda → Siviglia (A-376)", type: "trasporto", segmentIdx: 9 },
      { time: "16:00", icon: "🚶", name: "Plaza de España + Parque de María Luisa", type: "free", confirmed: true, mapsQuery: "Plaza de Espana Sevilla" },
      { time: "20:30", icon: "🍽️", name: "Cena Siviglia – tapas zona Triana", type: "cibo", estimatedCost: 15 },
    ],
    hotel: { name: "Booking Siviglia (notte 1/3)", payer: "Robi", costPerPersonPerNight: 32, totalNights: 3, link: "https://secure.booking.com/confirmation.it.html?auth_key=nlD8fQCeBPvn5U2W&source=mytrips", linkLabel: "🏨 Prenotazione", confirmed: true, note: "32€/pers/notte" }
  },
  {
    day: 7, date: "2026-05-01", label: "Venerdì 1 Maggio", route: "Siviglia – Giornata Monumenti",
    activities: [
      { time: "09:30", icon: "🏛️", name: "Real Alcázar di Siviglia", type: "ingresso", estimatedCost: 20, realCost: 19.5, confirmed: true, payer: "Manu", link: "https://realalcazarsevilla-tickets.org/en/tours/real-alcazar-seville-skip-the-line-tickets/", linkLabel: "🎟️ Prenotazione", mapsQuery: "Real Alcazar Sevilla" },
      { time: "12:30", icon: "🕌", name: "Catedral di Siviglia + La Giralda", type: "ingresso", estimatedCost: 0, mapsQuery: "Catedral de Sevilla" },
      { time: "14:30", icon: "🍝", name: "Pranzo – Mercado de Triana", type: "cibo", estimatedCost: 10, mapsQuery: "Mercado de Triana Sevilla" },
      { time: "16:00", icon: "🚶", name: "Barrio de Santa Cruz", type: "free", confirmed: true, mapsQuery: "Barrio Santa Cruz Sevilla" },
      { time: "20:30", icon: "🍽️", name: "Cena Siviglia", type: "cibo", estimatedCost: 15 },
    ],
    hotel: { name: "Booking Siviglia (notte 2/3)", payer: "Robi", link: "https://secure.booking.com/confirmation.it.html?auth_key=nlD8fQCeBPvn5U2W&source=mytrips", confirmed: true }
  },
  {
    day: 8, date: "2026-05-02", label: "Sabato 2 Maggio", route: "Siviglia – Giornata Libera",
    activities: [
      { time: "10:00", icon: "🚶", name: "Alameda de Hércules + street food", type: "free", mapsQuery: "Alameda de Hercules Sevilla" },
      { time: "13:00", icon: "🍝", name: "Pranzo – Bar Eslava o mercato", type: "cibo", estimatedCost: 10 },
      { time: "16:00", icon: "🚶", name: "Torre del Oro + zona puerto", type: "ingresso", estimatedCost: 2, mapsQuery: "Torre del Oro Sevilla" },
      { time: "20:30", icon: "🍽️", name: "Cena Siviglia – ultima sera (speciale!)", type: "cibo", estimatedCost: 18 },
    ],
    hotel: { name: "Booking Siviglia (notte 3/3)", payer: "Robi", link: "https://secure.booking.com/confirmation.it.html?auth_key=nlD8fQCeBPvn5U2W&source=mytrips", confirmed: true }
  },
  {
    day: 9, date: "2026-05-03", label: "Domenica 3 Maggio", route: "Siviglia → Cordoba",
    activities: [
      { time: "09:00", icon: "🚗", name: "Siviglia → Cordoba (A-4)", type: "trasporto", segmentIdx: 10 },
      { time: "13:00", icon: "🚶", name: "Judería – quartiere ebraico + Sinagoga", type: "ingresso", estimatedCost: 3, confirmed: true, mapsQuery: "Juderia Cordoba" },
      { time: "14:00", icon: "🍝", name: "Pranzo – ristorante tipico cordobés", type: "cibo", estimatedCost: 12, note: "Specialità: salmorejo, rabo de toro" },
      { time: "15:00", icon: "🕌", name: "Mezquita-Catedral di Cordoba", type: "ingresso", estimatedCost: 32, realCost: 32, confirmed: true, payer: "Robi", link: "https://www.mezquita-cordoba.com/en/", linkLabel: "🎟️ Prenotazione", mapsQuery: "Mezquita Catedral Cordoba" },
      { time: "16:00", icon: "🌉", name: "Puente Romano + Calleja de las Flores", type: "free", confirmed: true, mapsQuery: "Puente Romano Cordoba" },
      { time: "20:30", icon: "🍽️", name: "Cena Cordoba", type: "cibo", estimatedCost: 15 },
    ],
    hotel: { name: "Booking Cordoba", payer: "Robi", totalCost: 92, link: "https://secure.booking.com/confirmation.it.html?auth_key=mJDB13XReGPFzEZg", linkLabel: "🏨 Prenotazione", confirmed: true, note: "23€/persona" }
  },
  {
    day: 10, date: "2026-05-04", label: "Lunedì 4 Maggio", route: "Cordoba → Valencia",
    activities: [
      { time: "09:00", icon: "🚗", name: "Cordoba → Valencia (A-4 + A-3)", type: "trasporto", segmentIdx: 11 },
      { time: "14:00", icon: "🚶", name: "Ciudad de las Artes y Ciencias (esterno)", type: "free", confirmed: true, note: "Architettura Calatrava – gratis all'esterno", mapsQuery: "Ciudad de las Artes y Ciencias Valencia" },
      { time: "16:00", icon: "🚶", name: "Barrio del Carmen", type: "free", mapsQuery: "Barrio del Carmen Valencia" },
      { time: "20:30", icon: "🍽️", name: "Cena Valencia – PAELLA autentica!", type: "cibo", estimatedCost: 20, note: "Momento clou del rientro!" },
    ],
    hotel: { name: "Alloggio Valencia", payer: null, costPerPerson: 30, note: "Ultima notte – da prenotare" }
  },
  {
    day: 11, date: "2026-05-05", label: "Martedì 5 Maggio", route: "Valencia – Rientro",
    activities: [
      { time: "–", icon: "✈️", name: "Manu & Robi: volo Valencia → Casa", type: "trasporto" },
      { time: "15:02", icon: "🚂", name: "Federico & Giulia: Treno Valencia → Barcellona", type: "trasporto", segmentIdx: null, note: "Arrivo Barcellona 18:19" },
    ],
    hotel: null
  },
];

const DEFAULT_EXPENSES = [
  { id: "e1",  desc: "Auto noleggio (DoYouSpain, Station Wagon)", amount: 234.64, paidBy: "Federico", participants: PEOPLE, category: "trasporto", date: "2026-04-25", preloaded: true },
  { id: "e2",  desc: "Alloggio Benidorm (Airbnb)", amount: 76,     paidBy: "Federico", participants: PEOPLE, category: "alloggio", date: "2026-04-25", preloaded: true },
  { id: "e3",  desc: "Alloggio Granada – 2 notti (Airbnb)", amount: 168, paidBy: "Federico", participants: PEOPLE, category: "alloggio", date: "2026-04-26", preloaded: true },
  { id: "e4",  desc: "Biglietti Alhambra x4 (GetYourGuide)", amount: 216, paidBy: "Federico", participants: PEOPLE, category: "ingresso", date: "2026-04-27", preloaded: true },
  { id: "e5",  desc: "Biglietti Caminito del Rey x4", amount: 80, paidBy: "Manu", participants: PEOPLE, category: "ingresso", date: "2026-04-29", preloaded: true },
  { id: "e6",  desc: "Alloggio Malaga (Booking)", amount: 72, paidBy: "Federico", participants: PEOPLE, category: "alloggio", date: "2026-04-28", preloaded: true },
  { id: "e7",  desc: "Alloggio Ronda (Airbnb)", amount: 64.47, paidBy: "Federico", participants: PEOPLE, category: "alloggio", date: "2026-04-29", preloaded: true },
  { id: "e8",  desc: "Biglietti Real Alcázar Siviglia x4", amount: 78, paidBy: "Manu", participants: PEOPLE, category: "ingresso", date: "2026-05-01", preloaded: true },
  { id: "e9",  desc: "Alloggio Siviglia – 3 notti (Booking)", amount: 384, paidBy: "Robi", participants: PEOPLE, category: "alloggio", date: "2026-04-30", preloaded: true },
  { id: "e10", desc: "Mezquita-Catedral Cordoba x4", amount: 128, paidBy: "Robi", participants: PEOPLE, category: "ingresso", date: "2026-05-03", preloaded: true },
  { id: "e11", desc: "Alloggio Cordoba (Booking)", amount: 92, paidBy: "Robi", participants: PEOPLE, category: "alloggio", date: "2026-05-03", preloaded: true },
  { id: "e12", desc: "Treno Barcellona→Valencia andata (Federico+Giulia)", amount: 78.60, paidBy: "Federico", participants: ["Federico","Giulia"], category: "trasporto", date: "2026-04-25", preloaded: true, linkedSegmentIdx: 0 },
  { id: "e13", desc: "Treno Valencia→Barcellona ritorno (Federico+Giulia)", amount: 67.20, paidBy: "Federico", participants: ["Federico","Giulia"], category: "trasporto", date: "2026-05-05", preloaded: true },
];

const SUPABASE_URL = "https://hoozewskouyfzrwekntn.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvb3pld3Nrb3V5Znpyd2VrbnRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NDkzOTAsImV4cCI6MjA5MjQyNTM5MH0.-PAj-o14s3jx_E2zjQmS4tqP5dc-giqIKruhB3uFceQ";
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const CAT_ICONS  = { alloggio: "🏨", trasporto: "🚗", cibo: "🍽️", ingresso: "🎟️", altro: "📦" };
const TYPE_BADGE = {
  free:      { cls: "badge-green",  label: "Gratis" },
  ingresso:  { cls: "badge-orange", label: "Ingresso" },
  cibo:      { cls: "badge-blue",   label: "Cibo" },
  trasporto: { cls: "badge-gray",   label: "Trasporto" },
};
const METHOD_ICONS = { car: "🚗", train: "🚂", bus: "🚌", walk: "🚶", ferry: "⛴️" };
const METHOD_LABELS = { car: "Auto", train: "Treno", bus: "Bus", walk: "A piedi", ferry: "Traghetto" };

/* ═══════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════ */
let expenses = [];
let editState = { segments: {}, hotels: {} };
let mapInstance = null;
let routeLayers = {};
let hotelMarkers = {};
let mapInitialized = false;

function initDefaultSegments() {
  for (let i = 0; i < SEGMENT_LABELS.length; i++) {
    if (!editState.segments[i]) {
      editState.segments[i] = { method: "car", departureTime: "", arrivalTime: "", cost: 0, paidBy: "Federico", participants: [...PEOPLE] };
    }
  }
  // Segment 0: Barcelona→Valencia train (Federico+Giulia) — only set if not already customized
  if (editState.segments[0] && editState.segments[0].method === "car" && !editState.segments[0]._customized) {
    editState.segments[0] = { method: "train", departureTime: "08:15", arrivalTime: "11:20", cost: 78.60, paidBy: "Federico", participants: ["Federico","Giulia"] };
  }
}

function rowToExpense(row) {
  return {
    id: row.id, desc: row.description, amount: parseFloat(row.amount),
    paidBy: row.paid_by, participants: row.participants,
    category: row.category, date: row.date,
    linkedSegmentIdx: row.linked_segment_idx, preloaded: false,
  };
}

function expenseToRow(exp) {
  return {
    id: exp.id, description: exp.desc, amount: exp.amount,
    paid_by: exp.paidBy, participants: exp.participants,
    category: exp.category, date: exp.date,
    linked_segment_idx: exp.linkedSegmentIdx ?? null,
  };
}

function mergeExpenses(userRows) {
  const coveredSegs = new Set(userRows.map(e => e.linkedSegmentIdx).filter(x => x != null));
  const activeDefaults = DEFAULT_EXPENSES.filter(e => e.linkedSegmentIdx == null || !coveredSegs.has(e.linkedSegmentIdx));
  return [...activeDefaults, ...userRows];
}

async function loadFromDB() {
  try {
    const [segsRes, hotelsRes, expRes] = await Promise.all([
      db.from("segments").select("*"),
      db.from("hotels").select("*"),
      db.from("expenses").select("*"),
    ]);

    initDefaultSegments();

    (segsRes.data || []).forEach(row => {
      editState.segments[row.segment_idx] = {
        method: row.method, departureTime: row.departure_time,
        arrivalTime: row.arrival_time, cost: parseFloat(row.cost),
        paidBy: row.paid_by, participants: row.participants, _customized: row.customized,
      };
    });

    (hotelsRes.data || []).forEach(row => {
      editState.hotels[`day_${row.day}`] = { address: row.address, lat: row.lat, lng: row.lng };
    });

    expenses = mergeExpenses((expRes.data || []).map(rowToExpense));
  } catch (err) {
    console.error("DB load error:", err);
    initDefaultSegments();
    expenses = [...DEFAULT_EXPENSES];
  }
}

async function upsertExpenseToDB(exp) {
  await db.from("expenses").upsert(expenseToRow(exp));
}

async function deleteExpenseFromDB(id) {
  await db.from("expenses").delete().eq("id", id);
}

async function saveSegmentToDB(segIdx) {
  const seg = editState.segments[segIdx];
  await db.from("segments").upsert({
    segment_idx: segIdx, method: seg.method,
    departure_time: seg.departureTime || "", arrival_time: seg.arrivalTime || "",
    cost: seg.cost || 0, paid_by: seg.paidBy || "Federico",
    participants: seg.participants || PEOPLE, customized: seg._customized || false,
    updated_at: new Date().toISOString(),
  });
}

async function saveHotelToDB(day, data) {
  await db.from("hotels").upsert({
    day, address: data.address, lat: data.lat, lng: data.lng,
    updated_at: new Date().toISOString(),
  });
}

function subscribeRealtime() {
  db.channel("travel-sync")
    .on("postgres_changes", { event: "*", schema: "public", table: "expenses" }, async () => {
      const { data } = await db.from("expenses").select("*");
      expenses = mergeExpenses((data || []).map(rowToExpense));
      renderExpenses();
    })
    .on("postgres_changes", { event: "*", schema: "public", table: "segments" }, (payload) => {
      const row = payload.new;
      if (!row) return;
      editState.segments[row.segment_idx] = {
        method: row.method, departureTime: row.departure_time, arrivalTime: row.arrival_time,
        cost: parseFloat(row.cost), paidBy: row.paid_by, participants: row.participants, _customized: row.customized,
      };
      renderItinerary();
      if (mapInstance) drawSegment(mapInstance, row.segment_idx);
    })
    .on("postgres_changes", { event: "*", schema: "public", table: "hotels" }, (payload) => {
      const row = payload.new;
      if (!row) return;
      editState.hotels[`day_${row.day}`] = { address: row.address, lat: row.lat, lng: row.lng };
      renderItinerary();
      if (mapInstance) {
        const dayData = DAYS.find(d => d.day === row.day);
        if (dayData) refreshHotelMarker(mapInstance, dayData);
      }
    })
    .subscribe();
}

/* ═══════════════════════════════════════════════════
   TAB NAVIGATION
═══════════════════════════════════════════════════ */
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-" + tab).classList.add("active");
    if (tab === "map" && !mapInitialized) { initMap(); mapInitialized = true; }
  });
});

/* ═══════════════════════════════════════════════════
   MAP
═══════════════════════════════════════════════════ */
async function fetchOSRMRoute(from, to) {
  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=geojson`;
    const r = await fetch(url);
    const d = await r.json();
    if (d.routes && d.routes[0]) {
      return d.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    }
  } catch {}
  return [[from.lat, from.lng], [to.lat, to.lng]]; // fallback
}

function bezierCurvePoints(from, to, n = 30) {
  // Quadratic bezier with perpendicular midpoint offset for train routes
  const mid = {
    lat: (from.lat + to.lat) / 2 - (to.lng - from.lng) * 0.08,
    lng: (from.lng + to.lng) / 2 + (to.lat - from.lat) * 0.08,
  };
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    pts.push([
      (1-t)*(1-t)*from.lat + 2*(1-t)*t*mid.lat + t*t*to.lat,
      (1-t)*(1-t)*from.lng + 2*(1-t)*t*mid.lng + t*t*to.lng,
    ]);
  }
  return pts;
}

function segmentStyle(method) {
  switch (method) {
    case "train":  return { color: "#1A6DA8", weight: 4, opacity: .9, dashArray: null };
    case "bus":    return { color: "#2E7D52", weight: 3.5, opacity: .85, dashArray: "8 4" };
    case "walk":   return { color: "#7A5C4A", weight: 3, opacity: .75, dashArray: "3 5" };
    case "ferry":  return { color: "#00838F", weight: 3.5, opacity: .85, dashArray: "6 3" };
    default:       return { color: "#C8581A", weight: 4, opacity: .85, dashArray: "8 5" }; // car
  }
}

async function drawSegment(map, segIdx) {
  // Remove existing layer
  if (routeLayers[segIdx]) { map.removeLayer(routeLayers[segIdx]); delete routeLayers[segIdx]; }

  const seg = editState.segments[segIdx] || { method: "car" };
  const from = STOPS[segIdx];
  const to   = STOPS[segIdx + 1];
  const style = segmentStyle(seg.method);

  let points;
  if (seg.method === "car" || seg.method === "bus") {
    points = await fetchOSRMRoute(from, to);
  } else if (seg.method === "train" || seg.method === "ferry") {
    points = bezierCurvePoints(from, to);
  } else {
    points = [[from.lat, from.lng], [to.lat, to.lng]];
  }

  routeLayers[segIdx] = L.polyline(points, style).addTo(map);
}

async function initMap() {
  const map = L.map("map", { zoomControl: true }).setView([38.5, -3.5], 6);
  mapInstance = map;
  window._map = map; // expose for debugging

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors", maxZoom: 18,
  }).addTo(map);

  // Draw all segments (in parallel)
  await Promise.all(SEGMENT_LABELS.map((_, i) => drawSegment(map, i)));

  // Fit map to show all stops
  const allLatLngs = STOPS.map(s => [s.lat, s.lng]);
  map.fitBounds(L.latLngBounds(allLatLngs), { paddingTopLeft: [60, 60], paddingBottomRight: [100, 60] });

  // Stop markers
  STOPS.forEach((stop, i) => {
    const day = DAYS.find(d => d.day === stop.day);
    const acts = day ? day.activities.filter(a => a.type !== "trasporto").slice(0, 3) : [];
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(stop.name + " Spain")}`;

    const icon = L.divIcon({
      className: "",
      html: `<div style="background:#C8581A;color:#fff;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.3);">${i + 1}</div>`,
      iconSize: [30, 30], iconAnchor: [15, 15],
    });

    L.marker([stop.lat, stop.lng], { icon }).addTo(map).bindPopup(`
      <div class="popup-title">${stop.name}</div>
      <div class="popup-day">Giorno ${stop.day} · ${day ? day.label : ""}</div>
      ${acts.length ? `<ul class="popup-acts">${acts.map(a => `<li>${a.icon} ${a.name}</li>`).join("")}</ul>` : ""}
      <a href="${mapsUrl}" target="_blank" class="popup-link">📍 Apri in Google Maps</a>
    `, { maxWidth: 220 });
  });

  // Hotel markers (from saved addresses)
  DAYS.forEach(day => { if (day.hotel) refreshHotelMarker(map, day); });
}

function refreshHotelMarker(map, day) {
  const key = `day_${day.day}`;
  if (hotelMarkers[key]) { map.removeLayer(hotelMarkers[key]); delete hotelMarkers[key]; }

  const hotelData = editState.hotels[key];
  if (!hotelData || !hotelData.lat) return;

  const icon = L.divIcon({
    className: "",
    html: `<div style="font-size:1.4rem;line-height:1;filter:drop-shadow(0 1px 3px rgba(0,0,0,.4));">🏠</div>`,
    iconSize: [24, 28], iconAnchor: [12, 28],
  });

  const h = day.hotel;
  hotelMarkers[key] = L.marker([hotelData.lat, hotelData.lng], { icon }).addTo(map)
    .bindPopup(`
      <div class="popup-title">${h.name}</div>
      ${hotelData.address ? `<div class="popup-day">📍 ${hotelData.address}</div>` : ""}
      ${h.link ? `<a href="${h.link}" target="_blank" class="popup-link">🔗 Prenotazione</a>` : ""}
    `, { maxWidth: 200 });
}

async function geocodeAddress(address) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1&accept-language=it`;
    const r = await fetch(url, { headers: { "User-Agent": "TravelApp-Andalusia/1.0" } });
    const d = await r.json();
    if (d.length > 0) return { lat: parseFloat(d[0].lat), lng: parseFloat(d[0].lon) };
  } catch {}
  return null;
}

/* ═══════════════════════════════════════════════════
   WEATHER
═══════════════════════════════════════════════════ */
const weatherCache = {};

function getDayLocation(dayNum) {
  const stops = STOPS.filter(s => s.day <= dayNum);
  return stops.length > 0 ? stops[stops.length - 1] : STOPS[0];
}

function wmoIcon(code) {
  if (code === 0)  return "☀️";
  if (code <= 2)   return "🌤️";
  if (code === 3)  return "☁️";
  if (code <= 48)  return "🌫️";
  if (code <= 57)  return "🌦️";
  if (code <= 67)  return "🌧️";
  if (code <= 77)  return "❄️";
  if (code <= 82)  return "🌦️";
  return "⛈️";
}

async function fetchWeather(dayNum) {
  if (weatherCache[dayNum] !== undefined) return weatherCache[dayNum];
  const loc = getDayLocation(dayNum);
  const day = DAYS.find(d => d.day === dayNum);
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lng}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&hourly=temperature_2m&timezone=Europe/Madrid&start_date=${day.date}&end_date=${day.date}`;
    const r = await fetch(url);
    const data = await r.json();
    if (data.daily?.weathercode?.length) {
      weatherCache[dayNum] = {
        max: data.daily.temperature_2m_max[0],
        min: data.daily.temperature_2m_min[0],
        precip: data.daily.precipitation_sum[0],
        code: data.daily.weathercode[0],
        hourly: data.hourly?.temperature_2m || [],
      };
    } else {
      weatherCache[dayNum] = null;
    }
  } catch { weatherCache[dayNum] = null; }
  return weatherCache[dayNum];
}

function buildTempChart(dayNum, hourlyTemps) {
  const n = hourlyTemps.length; // 24
  if (n < 2) return "";
  const W = 300, H = 76;
  const pL = 6, pR = 6, pT = 16, pB = 18;
  const iW = W - pL - pR, iH = H - pT - pB;
  const minT = Math.floor(Math.min(...hourlyTemps));
  const maxT = Math.ceil(Math.max(...hourlyTemps));
  const range = maxT - minT || 1;
  const px = i => pL + (i / (n - 1)) * iW;
  const py = t => pT + (1 - (t - minT) / range) * iH;
  const pathD = hourlyTemps.map((t, i) => `${i === 0 ? "M" : "L"}${px(i).toFixed(1)},${py(t).toFixed(1)}`).join(" ");
  const areaD = `${pathD} L${px(n-1).toFixed(1)},${pT + iH} L${px(0).toFixed(1)},${pT + iH} Z`;
  const gid = `tg${dayNum}`;
  const labels = [6, 12, 18];
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:76px;display:block">
    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#C8581A" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="#C8581A" stop-opacity="0.02"/>
      </linearGradient>
    </defs>
    <path d="${areaD}" fill="url(#${gid})"/>
    <path d="${pathD}" fill="none" stroke="#C8581A" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    ${labels.map(h => `
      <line x1="${px(h).toFixed(1)}" y1="${pT}" x2="${px(h).toFixed(1)}" y2="${pT+iH}" stroke="rgba(0,0,0,.08)" stroke-width="1" stroke-dasharray="3 2"/>
      <circle cx="${px(h).toFixed(1)}" cy="${py(hourlyTemps[h]).toFixed(1)}" r="2.5" fill="#C8581A"/>
      <text x="${px(h).toFixed(1)}" y="${py(hourlyTemps[h]) - 5}" text-anchor="middle" font-size="9.5" font-weight="700" fill="#C8581A">${Math.round(hourlyTemps[h])}°</text>
      <text x="${px(h).toFixed(1)}" y="${H - 4}" text-anchor="middle" font-size="8" fill="#9B7B6B">${h}:00</text>
    `).join("")}
    <text x="${px(0).toFixed(1)}" y="${H - 4}" text-anchor="start" font-size="8" fill="#9B7B6B">0:00</text>
    <text x="${px(n-1).toFixed(1)}" y="${H - 4}" text-anchor="end" font-size="8" fill="#9B7B6B">23:00</text>
  </svg>`;
}

async function loadAllWeather() {
  await Promise.all(DAYS.map(async day => {
    const w = await fetchWeather(day.day);
    const chip = document.getElementById(`weather-${day.day}`);
    const chart = document.getElementById(`chart-${day.day}`);
    if (!w) {
      if (chip) chip.textContent = "";
      return;
    }
    if (chip) {
      const precip = w.precip > 0.2 ? ` 💧${Math.round(w.precip)}mm` : "";
      chip.innerHTML = `${wmoIcon(w.code)} <b>${Math.round(w.max)}°</b>/${Math.round(w.min)}°${precip}`;
    }
    if (chart && w.hourly?.length) {
      chart.innerHTML = buildTempChart(day.day, w.hourly);
    }
  }));
}

/* ═══════════════════════════════════════════════════
   DAILY COST TOTAL
═══════════════════════════════════════════════════ */
function getDayTotal(day) {
  let total = 0;

  // Activity costs (non-transport)
  day.activities.forEach(act => {
    if (act.type !== "trasporto" && act.estimatedCost) total += act.estimatedCost;
  });

  // Transport costs from editState
  day.activities.forEach(act => {
    if (act.type === "trasporto" && act.segmentIdx !== undefined) {
      const seg = editState.segments[act.segmentIdx];
      if (seg && seg.cost > 0 && seg.participants.length > 0) {
        total += seg.cost / seg.participants.length;
      }
    }
  });

  // Hotel cost per person
  if (day.hotel) {
    const h = day.hotel;
    if (h.totalCost)              total += h.totalCost / 4;
    else if (h.costPerPersonPerNight) total += h.costPerPersonPerNight;
    else if (h.costPerPerson)     total += h.costPerPerson;
  }

  return total;
}

/* ═══════════════════════════════════════════════════
   ITINERARY RENDERING
═══════════════════════════════════════════════════ */
function renderItinerary() {
  const today = new Date().toISOString().slice(0, 10);
  const container = document.getElementById("itinerary-list");
  container.innerHTML = "";

  DAYS.forEach(day => {
    const isToday = day.date === today;
    const card = document.createElement("div");
    card.className = "day-card" + (isToday ? " open" : "");
    card.dataset.day = day.day;

    const total = getDayTotal(day);
    const totalStr = total > 0 ? `<span class="day-total">~${Math.round(total)}€/p</span>` : "";

    const header = document.createElement("div");
    header.className = "day-header";
    header.innerHTML = `
      <div class="day-number${isToday ? " today" : ""}">${day.day}</div>
      <div class="day-info">
        <div class="day-date">${day.label}</div>
        <div class="day-route">${day.route}</div>
      </div>
      <div class="weather-chip" id="weather-${day.day}">⏳</div>
      ${totalStr}
      <div class="day-toggle">▼</div>
    `;
    header.addEventListener("click", () => card.classList.toggle("open"));

    const body = document.createElement("div");
    body.className = "day-body";

    const list = document.createElement("ul");
    list.className = "activity-list";

    day.activities.forEach((act, aIdx) => {
      const li = buildActivityEl(day, act, aIdx);
      list.appendChild(li);
    });

    body.appendChild(list);

    // Hotel row
    if (day.hotel) {
      body.appendChild(buildHotelRow(day));
    }

    // Temperature chart
    const chartDiv = document.createElement("div");
    chartDiv.id = `chart-${day.day}`;
    chartDiv.className = "temp-chart-wrap";
    const cached = weatherCache[day.day];
    if (cached?.hourly?.length) {
      chartDiv.innerHTML = buildTempChart(day.day, cached.hourly);
    }
    body.appendChild(chartDiv);

    card.appendChild(header);
    card.appendChild(body);
    container.appendChild(card);
  });

  loadAllWeather();
}

function buildActivityEl(day, act, aIdx) {
  const isTransport = act.type === "trasporto";
  const typeBadge = TYPE_BADGE[act.type] || TYPE_BADGE.trasporto;
  const li = document.createElement("li");
  li.className = "activity-item";

  // Transport: show current segment method
  let methodBadge = "";
  let transportInfo = "";
  if (isTransport && act.segmentIdx !== undefined) {
    const seg = editState.segments[act.segmentIdx];
    if (seg) {
      const m = seg.method || "car";
      methodBadge = `<span class="badge badge-method-${m}">${METHOD_ICONS[m]} ${METHOD_LABELS[m]}</span>`;
      if (seg.departureTime || seg.arrivalTime) {
        transportInfo = `<span class="badge badge-gray">⏱ ${seg.departureTime || "–"} → ${seg.arrivalTime || "–"}</span>`;
      }
      if (seg.cost > 0) {
        const perP = (seg.cost / (seg.participants.length || 4)).toFixed(2);
        transportInfo += `<span class="badge badge-orange">💶 ${perP}€/p</span>`;
      }
    }
  }

  let metaHtml = isTransport
    ? `${methodBadge}${transportInfo}`
    : `<span class="badge ${typeBadge.cls}">${typeBadge.label}</span>`;

  if (!isTransport) {
    if (act.estimatedCost !== undefined && act.estimatedCost > 0) metaHtml += `<span class="badge badge-orange">~${act.estimatedCost}€/p</span>`;
    if (act.realCost !== undefined) metaHtml += `<span class="badge badge-green">${act.realCost}€ reale</span>`;
    if (act.confirmed) metaHtml += `<span class="badge badge-green">✅ Confermato</span>`;
    if (act.payer)    metaHtml += `<span class="badge badge-gray">💳 ${act.payer}</span>`;
  }

  let linksHtml = "";
  if (act.link) linksHtml += `<a href="${act.link}" target="_blank" class="act-link">${act.linkLabel || "🔗 Link"}</a>`;
  if (act.mapsQuery) linksHtml += `<a href="https://www.google.com/maps/search/${encodeURIComponent(act.mapsQuery)}" target="_blank" class="act-link">📍 Maps</a>`;

  // Edit button for transport segments
  let editBtn = "";
  if (isTransport && act.segmentIdx !== undefined) {
    editBtn = `<button class="btn-edit-transport" data-seg="${act.segmentIdx}" data-day="${day.day}" title="Modifica trasporto">✏️ Modifica</button>`;
  }

  li.innerHTML = `
    <div class="act-time">${act.time || "–"}</div>
    <div class="act-icon">${act.icon}</div>
    <div class="act-body">
      <div class="act-name">${act.name}</div>
      <div class="act-meta">${metaHtml}${linksHtml}${editBtn}</div>
      ${act.note ? `<div class="act-note">${act.note}</div>` : ""}
    </div>
  `;

  // Attach edit form listener
  const btn = li.querySelector(".btn-edit-transport");
  if (btn) {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      toggleTransportForm(li, act.segmentIdx, day.day);
    });
  }

  return li;
}

function toggleTransportForm(li, segIdx, dayNum) {
  let existing = li.querySelector(".transport-form");
  if (existing) { existing.remove(); return; }

  const seg = editState.segments[segIdx] || {};
  const label = SEGMENT_LABELS[segIdx];

  const form = document.createElement("div");
  form.className = "transport-form";
  form.innerHTML = `
    <div class="tf-title">✏️ Modifica trasporto: ${label}</div>
    <div class="tf-row">
      <div class="tf-group">
        <label>Metodo</label>
        <select class="tf-method">
          ${Object.entries(METHOD_ICONS).map(([k,v]) =>
            `<option value="${k}" ${(seg.method||"car")===k?"selected":""}>${v} ${METHOD_LABELS[k]}</option>`
          ).join("")}
        </select>
      </div>
      <div class="tf-group">
        <label>Partenza</label>
        <input type="time" class="tf-dep" value="${seg.departureTime||""}" />
      </div>
      <div class="tf-group">
        <label>Arrivo</label>
        <input type="time" class="tf-arr" value="${seg.arrivalTime||""}" />
      </div>
    </div>
    <div class="tf-row">
      <div class="tf-group">
        <label>Costo totale (€)</label>
        <input type="number" class="tf-cost" step="0.01" min="0" value="${seg.cost||0}" />
      </div>
      <div class="tf-group">
        <label>Pagato da</label>
        <select class="tf-payer">
          ${PEOPLE.map(p => `<option value="${p}" ${(seg.paidBy||"Federico")===p?"selected":""}>${p}</option>`).join("")}
        </select>
      </div>
    </div>
    <div class="tf-group">
      <label>Dividi tra</label>
      <div class="tf-participants">
        ${PEOPLE.map(p => `<label class="check-label"><input type="checkbox" class="tf-part" value="${p}" ${(seg.participants||PEOPLE).includes(p)?"checked":""}> ${p}</label>`).join("")}
      </div>
    </div>
    <div class="tf-actions">
      <button class="btn-tf-save">💾 Salva</button>
      <button class="btn-tf-cancel">Annulla</button>
    </div>
  `;

  li.appendChild(form);

  form.querySelector(".btn-tf-cancel").addEventListener("click", () => form.remove());
  form.querySelector(".btn-tf-save").addEventListener("click", async () => {
    const participants = [...form.querySelectorAll(".tf-part:checked")].map(c => c.value);
    if (!participants.length) { alert("Seleziona almeno una persona!"); return; }

    editState.segments[segIdx] = {
      method:        form.querySelector(".tf-method").value,
      departureTime: form.querySelector(".tf-dep").value,
      arrivalTime:   form.querySelector(".tf-arr").value,
      cost:          parseFloat(form.querySelector(".tf-cost").value) || 0,
      paidBy:        form.querySelector(".tf-payer").value,
      participants,
      _customized:   true,
    };
    await saveSegmentToDB(segIdx);

    // Update expense: remove old entries for this segment, upsert new one if cost > 0
    const cost = editState.segments[segIdx].cost;
    const expId = `seg_${segIdx}`;
    await db.from("expenses").delete().or(`id.eq.${expId},linked_segment_idx.eq.${segIdx}`);
    expenses = expenses.filter(e => e.id !== expId && e.linkedSegmentIdx !== segIdx);
    if (cost > 0) {
      const newExp = {
        id: expId, linkedSegmentIdx: segIdx,
        desc: `Trasporto: ${SEGMENT_LABELS[segIdx]}`, amount: cost,
        paidBy: editState.segments[segIdx].paidBy, participants,
        category: "trasporto",
        date: DAYS.find(d => d.day === SEGMENT_DAY[segIdx])?.date || "2026-04-25",
        preloaded: false,
      };
      await upsertExpenseToDB(newExp);
      expenses.push(newExp);
    }

    // Redraw map segment if map is open
    if (mapInstance) drawSegment(mapInstance, segIdx);

    form.remove();
    renderItinerary();
    renderExpenses();
  });
}

function buildHotelRow(day) {
  const h = day.hotel;
  const key = `day_${day.day}`;
  const saved = editState.hotels[key] || {};

  const priceStr = h.totalCost
    ? `${(h.totalCost / 4).toFixed(2)}€/p`
    : h.costPerPersonPerNight
      ? `${h.costPerPersonPerNight}€/p/notte`
      : h.costPerPerson
        ? `${h.costPerPerson}€/p`
        : "";

  const div = document.createElement("div");
  div.className = "hotel-row";
  div.innerHTML = `
    <span style="font-size:1.1rem">🏠</span>
    <span class="hotel-label">Alloggio</span>
    <div class="hotel-info">
      <span class="hotel-name">${h.name}${h.note ? ` <span style="font-size:.7rem;color:#7A5C4A;font-weight:400">(${h.note})</span>` : ""}</span>
      ${saved.address ? `<span class="hotel-address">📍 ${saved.address}</span>` : ""}
    </div>
    ${priceStr ? `<span class="hotel-price">${priceStr}</span>` : ""}
    ${h.payer ? `<span class="badge badge-gray" style="font-size:.65rem">💳 ${h.payer}</span>` : ""}
    ${h.confirmed ? `<span class="badge badge-green" style="font-size:.65rem">✅</span>` : ""}
    ${h.link ? `<a href="${h.link}" target="_blank" class="act-link">${h.linkLabel || "🔗 Link"}</a>` : ""}
    <button class="btn-edit-hotel" data-day="${day.day}" title="Modifica indirizzo">📍 Indirizzo</button>
  `;

  div.querySelector(".btn-edit-hotel").addEventListener("click", e => {
    e.stopPropagation();
    toggleHotelForm(div, day);
  });

  return div;
}

function toggleHotelForm(container, day) {
  let existing = container.querySelector(".hotel-form");
  if (existing) { existing.remove(); return; }

  const key = `day_${day.day}`;
  const saved = editState.hotels[key] || {};

  const form = document.createElement("div");
  form.className = "hotel-form";
  form.style.cssText = "width:100%;margin-top:8px;";
  form.innerHTML = `
    <div class="tf-row">
      <div class="tf-group" style="flex:1">
        <label>Indirizzo alloggio</label>
        <input type="text" class="hf-address" placeholder="es. Calle Recogidas 12, Granada" value="${saved.address||""}" />
      </div>
    </div>
    <div class="tf-actions">
      <button class="btn-hf-save">📍 Geocodifica e salva</button>
      <button class="btn-hf-cancel">Annulla</button>
    </div>
    <div class="hf-status" style="font-size:.75rem;color:#7A5C4A;margin-top:4px;"></div>
  `;

  container.appendChild(form);

  form.querySelector(".btn-hf-cancel").addEventListener("click", () => form.remove());
  form.querySelector(".btn-hf-save").addEventListener("click", async () => {
    const address = form.querySelector(".hf-address").value.trim();
    if (!address) { form.remove(); return; }

    const status = form.querySelector(".hf-status");
    status.textContent = "⏳ Ricerca coordinate in corso…";

    const coords = await geocodeAddress(address);
    if (!coords) {
      status.textContent = "❌ Indirizzo non trovato. Prova con un indirizzo più generico.";
      return;
    }

    editState.hotels[key] = { address, lat: coords.lat, lng: coords.lng };
    await saveHotelToDB(day.day, { address, lat: coords.lat, lng: coords.lng });

    // Refresh hotel marker on map
    if (mapInstance) refreshHotelMarker(mapInstance, day);

    form.remove();
    renderItinerary(); // refresh to show address
  });
}

/* ═══════════════════════════════════════════════════
   EXPENSES
═══════════════════════════════════════════════════ */
function calcBalances() {
  const paid = {}, net = {};
  PEOPLE.forEach(p => { paid[p] = 0; net[p] = 0; });

  expenses.forEach(exp => {
    const share = exp.amount / exp.participants.length;
    paid[exp.paidBy] = (paid[exp.paidBy] || 0) + exp.amount;
    exp.participants.forEach(p => { net[p] = (net[p] || 0) - share; });
    net[exp.paidBy] = (net[exp.paidBy] || 0) + exp.amount;
  });
  return { paid, net };
}

function calcSettlement(net) {
  const cred = [], debt = [];
  PEOPLE.forEach(p => {
    const v = net[p];
    if (v > 0.01)  cred.push({ name: p, amount:  v });
    if (v < -0.01) debt.push({ name: p, amount: -v });
  });
  const txns = [];
  let ci = 0, di = 0;
  while (ci < cred.length && di < debt.length) {
    const c = cred[ci], d = debt[di];
    const amt = Math.min(c.amount, d.amount);
    txns.push({ from: d.name, to: c.name, amount: amt });
    c.amount -= amt; d.amount -= amt;
    if (c.amount < 0.01) ci++;
    if (d.amount < 0.01) di++;
  }
  return txns;
}

function renderExpenses() {
  const { paid, net } = calcBalances();

  document.getElementById("balance-cards").innerHTML = PEOPLE.map(p => {
    const n = net[p] || 0;
    const cls = n > 0.01 ? "balance-positive" : n < -0.01 ? "balance-negative" : "balance-zero";
    return `<div class="balance-card ${cls}">
      <div class="person-name">${p}</div>
      <div class="balance-amount">${n > 0.01 ? "+" : ""}${n.toFixed(2)}€</div>
      <div class="balance-paid">pagato: ${(paid[p]||0).toFixed(2)}€</div>
    </div>`;
  }).join("");

  const settlements = calcSettlement(net);
  document.getElementById("settlement-list").innerHTML = settlements.length
    ? settlements.map(t => `<div class="settlement-item"><span class="settle-from">${t.from}</span><span class="settle-arrow">→ paga →</span><span class="settle-to">${t.to}</span><span class="settle-amt">${t.amount.toFixed(2)}€</span></div>`).join("")
    : `<div style="color:#2E7D52;font-weight:600;font-size:.9rem">✅ Tutti in pari!</div>`;

  const sorted = [...expenses].sort((a, b) => a.date.localeCompare(b.date));
  document.getElementById("expenses-list").innerHTML = sorted.map(exp => {
    const perP = (exp.amount / exp.participants.length).toFixed(2);
    const dt   = new Date(exp.date).toLocaleDateString("it-IT", { day: "numeric", month: "short" });
    return `<div class="exp-item">
      <span class="exp-cat-icon">${CAT_ICONS[exp.category]||"📦"}</span>
      <div class="exp-body">
        <div class="exp-desc">${exp.desc}</div>
        <div class="exp-meta">${dt} · ${exp.paidBy} · ${perP}€/p · ${exp.participants.length} persone</div>
      </div>
      <div class="exp-amount">${exp.amount.toFixed(2)}€</div>
      ${exp.preloaded ? "" : `<button class="exp-delete" data-id="${exp.id}" title="Elimina">✕</button>`}
    </div>`;
  }).join("") || `<div style="color:#7A5C4A;font-size:.88rem">Nessuna spesa.</div>`;

  document.querySelectorAll(".exp-delete").forEach(btn => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.id;
      expenses = expenses.filter(e => e.id !== id);
      renderExpenses();
      await deleteExpenseFromDB(id);
    });
  });
}

document.getElementById("expense-form").addEventListener("submit", async e => {
  e.preventDefault();
  const participants = [...document.querySelectorAll(".part-check:checked")].map(c => c.value);
  if (!participants.length) { alert("Seleziona almeno una persona!"); return; }
  const amount = parseFloat(document.getElementById("exp-amount").value);
  if (!amount || amount <= 0) return;

  const newExp = {
    id: "u" + Date.now(),
    desc: document.getElementById("exp-desc").value.trim(),
    amount, paidBy: document.getElementById("exp-payer").value,
    participants, category: document.getElementById("exp-category").value,
    date: document.getElementById("exp-date").value, preloaded: false,
  };
  expenses.push(newExp);
  renderExpenses();
  await upsertExpenseToDB(newExp);
  document.getElementById("exp-desc").value = "";
  document.getElementById("exp-amount").value = "";
  document.querySelectorAll(".part-check").forEach(c => c.checked = true);
});

/* ═══════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════ */
async function init() {
  await loadFromDB();
  renderItinerary();
  renderExpenses();
  initMap();
  mapInitialized = true;
  subscribeRealtime();
}
init();
