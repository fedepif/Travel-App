/* ═══════════════════════════════════════════════════
   TRIP DATA
═══════════════════════════════════════════════════ */
const PEOPLE = ["Federico", "Manu", "Robi", "Giulia"];

const STOPS = [
  { name: "Barcellona",           lat: 41.3851,  lng:  2.1734,  day: 1  },
  { name: "Benidorm",             lat: 38.5409,  lng: -0.1319,  day: 1  },
  { name: "Granada",              lat: 37.1773,  lng: -3.5986,  day: 2  },
  { name: "Frigiliana",           lat: 36.7917,  lng: -3.9003,  day: 4  },
  { name: "Nerja",                lat: 36.7464,  lng: -3.8769,  day: 4  },
  { name: "Malaga",               lat: 36.7213,  lng: -4.4214,  day: 4  },
  { name: "Caminito del Rey",     lat: 36.9122,  lng: -4.8389,  day: 5  },
  { name: "Setenil de las Bodegas", lat: 36.8614, lng: -5.1785, day: 5  },
  { name: "Ronda",                lat: 36.7469,  lng: -5.1633,  day: 5  },
  { name: "Siviglia",             lat: 37.3891,  lng: -5.9845,  day: 6  },
  { name: "Cordoba",              lat: 37.8882,  lng: -4.7794,  day: 9  },
  { name: "Valencia",             lat: 39.4699,  lng: -0.3763,  day: 10 },
];

const DAYS = [
  {
    day: 1, date: "2026-04-25",
    label: "Sabato 25 Aprile",
    route: "Barcellona → Benidorm",
    activities: [
      { time: "08:00", icon: "🚗", name: "Ritiro auto noleggio – Barcelona", type: "trasporto", confirmed: true, note: "Station Wagon – prenota ora (Pasqua = prezzi alti)", link: "https://drive.google.com/drive/u/0/folders/1MliR-xmBcYPVw0RnUAVJAO3n9mlgRI-G", linkLabel: "📁 Documenti" },
      { time: "09:00", icon: "🛣️", name: "Barcelona → Benidorm (A-7, 5h)", type: "trasporto", duration: "5h", note: "Carburante ~30€/persona (stima globale viaggio)" },
      { time: "17:00", icon: "🌅", name: "Balcón del Mediterráneo – tramonto", type: "free", confirmed: true, note: "Ottimo punto vista sul lungomare", mapsQuery: "Balcon del Mediterraneo Benidorm" },
      { time: "20:30", icon: "🍽️", name: "Cena Benidorm – Rincon de Loix o centro", type: "cibo", estimatedCost: 20, note: "Tapas + menù del giorno" },
    ],
    hotel: { name: "Airbnb Benidorm", payer: "Federico", totalCost: 76, link: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMYPF9JECE", confirmed: true }
  },
  {
    day: 2, date: "2026-04-26",
    label: "Domenica 26 Aprile",
    route: "Benidorm → Granada",
    activities: [
      { time: "09:00", icon: "🛣️", name: "Benidorm → Granada (A-92, 5h)", type: "trasporto", duration: "5h", note: "Carburante incluso nella stima globale" },
      { time: "15:00", icon: "🚶", name: "Albaicín – quartiere moresco", type: "free", confirmed: true, note: "Camminate, viste sull'Alhambra, Mirador de San Nicolás", mapsQuery: "Albaicin Granada" },
      { time: "20:00", icon: "🍺", name: "Tapas Calle Elvira / Plaza de Toros", type: "cibo", estimatedCost: 10, confirmed: true, note: "Granada unica: con 2-3 giri di caña si cena con ~10€/testa" },
    ],
    hotel: { name: "Airbnb Granada (notte 1)", payer: "Federico", totalCost: 84, link: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMJXSZCA8B", confirmed: true, note: "2 notti, 168€ totale" }
  },
  {
    day: 3, date: "2026-04-27",
    label: "Lunedì 27 Aprile",
    route: "Granada – Alhambra Full Day",
    activities: [
      { time: "13:30", icon: "🏛️", name: "Alhambra – Palacios Nazaríes + Generalife + Alcazaba", type: "ingresso", estimatedCost: 54, confirmed: true, payer: "Federico", note: "Limite giornaliero strettissimo – biglietti sold out in pochi giorni!", link: "https://www.getyourguide.com/booking/F29GYXGQUXKELW9GZGC9WI2QN9U2ZV1H", linkLabel: "🎟️ Prenotazione", mapsQuery: "Alhambra Granada" },
      { time: "14:00", icon: "🍝", name: "Pranzo – zona Calle Pavaneras", type: "cibo", estimatedCost: 10 },
      { time: "16:00", icon: "🚶", name: "Paseo de los Tristes + zona Realejo", type: "free", confirmed: true },
      { time: "20:30", icon: "🍽️", name: "Cena – Calle Navas (tapas classiche)", type: "cibo", estimatedCost: 10 },
    ],
    hotel: { name: "Airbnb Granada (notte 2)", payer: "Federico", totalCost: 84, link: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMJXSZCA8B", confirmed: true }
  },
  {
    day: 4, date: "2026-04-28",
    label: "Martedì 28 Aprile",
    route: "Frigiliana → Nerja → Malaga",
    activities: [
      { time: "09:00", icon: "🛣️", name: "Granada → Frigiliana (1h30m)", type: "trasporto", duration: "1h30m" },
      { time: "10:30", icon: "🚶", name: "Frigiliana – pueblo blanco, viuzze moresche", type: "free", confirmed: true, estimatedCost: 2, note: "Ingresso gratuito – solo eventuale parcheggio", mapsQuery: "Frigiliana pueblo blanco" },
      { time: "12:00", icon: "🛣️", name: "Frigiliana → Nerja (15 min)", type: "trasporto", duration: "15m" },
      { time: "12:15", icon: "🌊", name: "Nerja – Balcón de Europa + Playa de Burriana", type: "free", confirmed: true, mapsQuery: "Balcon de Europa Nerja" },
      { time: "13:00", icon: "🍝", name: "Pranzo Nerja – chiringuito sul mare", type: "cibo", estimatedCost: 12 },
      { time: "14:30", icon: "🛣️", name: "Nerja → Malaga (1h)", type: "trasporto", duration: "1h" },
      { time: "16:00", icon: "🚶", name: "Malaga – Centro Histórico, Mercado Atarazanas, Alcazaba", type: "ingresso", estimatedCost: 3, note: "Alcazaba ~3€", mapsQuery: "Alcazaba Malaga" },
      { time: "20:30", icon: "🍽️", name: "Cena Malaga – El Pimpi o Calle Granada", type: "cibo", estimatedCost: 15 },
    ],
    hotel: { name: "Booking Malaga", payer: "Federico", totalCost: 72, link: "https://secure.booking.com/confirmation.en-gb.html?aid=311984&sid=ec952127612fe9ac0f5a728d88b99ca6&bn=5407792525", linkLabel: "🏨 Prenotazione", confirmed: true }
  },
  {
    day: 5, date: "2026-04-29",
    label: "Mercoledì 29 Aprile",
    route: "Colomares → Caminito del Rey → Setenil → Ronda",
    activities: [
      { time: "08:30", icon: "🏰", name: "Castillo de Colomares – Benalmádena", type: "ingresso", estimatedCost: 3, note: "Monumento più grande del mondo dedicato a Cristoforo Colombo", mapsQuery: "Castillo de Colomares Benalmadena" },
      { time: "10:00", icon: "🛣️", name: "Colomares → Caminito del Rey (1h)", type: "trasporto", duration: "1h" },
      { time: "12:30", icon: "🧗", name: "Caminito del Rey – passerella nella gola", type: "ingresso", estimatedCost: 20, confirmed: true, payer: "Manu", realCost: 20, note: "Fascia ore 10-12 consigliata. Biglietti esauriscono in pochi giorni!", link: "https://www.caminitodelrey.info/en/tickets/my-tickets/pedido_id/727521", linkLabel: "🎟️ Prenotazione", mapsQuery: "Caminito del Rey" },
      { time: "16:00", icon: "🛣️", name: "Caminito → Setenil de las Bodegas (1h)", type: "trasporto", duration: "1h" },
      { time: "17:00", icon: "🚶", name: "Setenil – case scavate nella roccia", type: "free", confirmed: true, note: "Calle Cuevas del Sol + Calle Cuevas de la Sombra", mapsQuery: "Setenil de las Bodegas" },
      { time: "18:00", icon: "🛣️", name: "Setenil → Ronda (30 min)", type: "trasporto", duration: "30m" },
      { time: "20:00", icon: "🌉", name: "Ronda – Puente Nuevo illuminato di notte", type: "free", confirmed: true, note: "Imperdibile!", mapsQuery: "Puente Nuevo Ronda" },
      { time: "21:00", icon: "🍽️", name: "Cena Ronda", type: "cibo", estimatedCost: 15 },
    ],
    hotel: { name: "Airbnb Ronda", payer: "Federico", totalCost: 64.47, link: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HM83NB3JHZ", confirmed: true }
  },
  {
    day: 6, date: "2026-04-30",
    label: "Giovedì 30 Aprile",
    route: "Ronda → Siviglia",
    activities: [
      { time: "09:00", icon: "🌉", name: "Ronda – Puente Nuevo + Tajo di Ronda (mattina)", type: "free", confirmed: true, note: "Luce mattutina ottima per foto", mapsQuery: "Puente Nuevo Ronda" },
      { time: "11:00", icon: "🛣️", name: "Ronda → Siviglia (A-376, 2h30m)", type: "trasporto", duration: "2h30m" },
      { time: "~13:30", icon: "🅿️", name: "Parcheggio Mairena del Aljarafe – Centro Metromar", type: "trasporto", estimatedCost: 0, note: "Spesso gratuito. Metro → Puerta Jerez in 10 min", mapsQuery: "Metromar Mairena del Aljarafe" },
      { time: "16:00", icon: "🚶", name: "Plaza de España + Parque de María Luisa", type: "free", confirmed: true, mapsQuery: "Plaza de Espana Sevilla" },
      { time: "20:30", icon: "🍽️", name: "Cena Siviglia – tapas zona Triana o El Arenal", type: "cibo", estimatedCost: 15 },
    ],
    hotel: { name: "Booking Siviglia (notte 1/3)", payer: "Robi", costPerPersonPerNight: 32, totalNights: 3, link: "https://secure.booking.com/confirmation.it.html?auth_key=nlD8fQCeBPvn5U2W&source=mytrips", linkLabel: "🏨 Prenotazione", confirmed: true, note: "Mairena del Aljarafe – metro per il centro. 32€/pers/notte" }
  },
  {
    day: 7, date: "2026-05-01",
    label: "Venerdì 1 Maggio",
    route: "Siviglia – Giornata Monumenti",
    activities: [
      { time: "09:30", icon: "🏛️", name: "Real Alcázar di Siviglia", type: "ingresso", estimatedCost: 20, realCost: 19.5, confirmed: true, payer: "Manu", note: "1 maggio = festa nazionale → code! Prenotare con fascia oraria almeno 1 mese prima", link: "https://realalcazarsevilla-tickets.org/en/tours/real-alcazar-seville-skip-the-line-tickets/", linkLabel: "🎟️ Prenotazione", mapsQuery: "Real Alcazar Sevilla" },
      { time: "12:30", icon: "🕌", name: "Catedral di Siviglia + La Giralda", type: "ingresso", estimatedCost: 0, note: "Prenotare online – skip the line", mapsQuery: "Catedral de Sevilla" },
      { time: "14:30", icon: "🍝", name: "Pranzo – Mercado de Triana", type: "cibo", estimatedCost: 10, mapsQuery: "Mercado de Triana Sevilla" },
      { time: "16:00", icon: "🚶", name: "Barrio de Santa Cruz – labirinto di viuzze", type: "free", confirmed: true, mapsQuery: "Barrio Santa Cruz Sevilla" },
      { time: "20:30", icon: "🍽️", name: "Cena Siviglia", type: "cibo", estimatedCost: 15 },
    ],
    hotel: { name: "Booking Siviglia (notte 2/3)", payer: "Robi", link: "https://secure.booking.com/confirmation.it.html?auth_key=nlD8fQCeBPvn5U2W&source=mytrips", confirmed: true }
  },
  {
    day: 8, date: "2026-05-02",
    label: "Sabato 2 Maggio",
    route: "Siviglia – Giornata Libera",
    activities: [
      { time: "10:00", icon: "🚶", name: "Alameda de Hércules + street food", type: "free", mapsQuery: "Alameda de Hercules Sevilla" },
      { time: "13:00", icon: "🍝", name: "Pranzo – Bar Eslava o mercato", type: "cibo", estimatedCost: 10 },
      { time: "16:00", icon: "🚶", name: "Torre del Oro + zona puerto", type: "ingresso", estimatedCost: 2, note: "Torre del Oro ~3€", mapsQuery: "Torre del Oro Sevilla" },
      { time: "20:30", icon: "🍽️", name: "Cena Siviglia – ultima sera (un po' più speciale!)", type: "cibo", estimatedCost: 18 },
    ],
    hotel: { name: "Booking Siviglia (notte 3/3)", payer: "Robi", link: "https://secure.booking.com/confirmation.it.html?auth_key=nlD8fQCeBPvn5U2W&source=mytrips", confirmed: true }
  },
  {
    day: 9, date: "2026-05-03",
    label: "Domenica 3 Maggio",
    route: "Siviglia → Cordoba",
    activities: [
      { time: "09:00", icon: "🛣️", name: "Siviglia → Cordoba (A-4, 1h30m)", type: "trasporto", duration: "1h30m" },
      { time: "13:00", icon: "🚶", name: "Judería – quartiere ebraico + Sinagoga", type: "ingresso", estimatedCost: 3, confirmed: true, note: "Sinagoga ~3€", mapsQuery: "Juderia Cordoba" },
      { time: "14:00", icon: "🍝", name: "Pranzo – ristorante tipico cordobés", type: "cibo", estimatedCost: 12, note: "Specialità: salmorejo cordobés, rabo de toro" },
      { time: "15:00", icon: "🕌", name: "Mezquita-Catedral di Cordoba", type: "ingresso", estimatedCost: 39, realCost: 32, confirmed: true, payer: "Robi", note: "Prenotare online 1-2 settimane prima. Codice: GYG2Q9QWNB2K", link: "https://www.mezquita-cordoba.com/en/", linkLabel: "🎟️ Prenotazione", mapsQuery: "Mezquita Catedral Cordoba" },
      { time: "16:00", icon: "🌉", name: "Puente Romano + Calleja de las Flores", type: "free", confirmed: true, mapsQuery: "Puente Romano Cordoba" },
      { time: "20:30", icon: "🍽️", name: "Cena Cordoba", type: "cibo", estimatedCost: 15 },
    ],
    hotel: { name: "Booking Cordoba", payer: "Robi", totalCost: 92, link: "https://secure.booking.com/confirmation.it.html?auth_key=mJDB13XReGPFzEZg", linkLabel: "🏨 Prenotazione", confirmed: true, note: "23€/persona" }
  },
  {
    day: 10, date: "2026-05-04",
    label: "Lunedì 4 Maggio",
    route: "Cordoba → Valencia",
    activities: [
      { time: "09:00", icon: "🛣️", name: "Cordoba → Valencia (A-4 + A-3, 4h)", type: "trasporto", duration: "4h" },
      { time: "14:00", icon: "🚶", name: "Ciudad de las Artes y Ciencias (esterno)", type: "free", confirmed: true, note: "Architettura spettacolare di Calatrava – gratis all'esterno", mapsQuery: "Ciudad de las Artes y Ciencias Valencia" },
      { time: "16:00", icon: "🚶", name: "Barrio del Carmen", type: "free", mapsQuery: "Barrio del Carmen Valencia" },
      { time: "20:30", icon: "🍽️", name: "Cena Valencia – PAELLA autentica (La Pepica o simile)", type: "cibo", estimatedCost: 20, note: "Momento clou del rientro!" },
    ],
    hotel: { name: "Alloggio Valencia", payer: null, costPerPerson: 30, note: "Ultima notte del viaggio – da prenotare" }
  },
  {
    day: 11, date: "2026-05-05",
    label: "Martedì 5 Maggio",
    route: "Valencia – Rientro",
    activities: [
      { time: "–", icon: "✈️", name: "Manu & Robi: volo Valencia → Casa", type: "trasporto" },
      { time: "–", icon: "🚗", name: "Federico & Giulia: Valencia → Barcelona (20€/pers)", type: "trasporto", estimatedCost: 20, note: "Controllare orari restituzione auto" },
    ],
    hotel: null
  },
];

/* Pre-loaded expenses from the Excel */
const DEFAULT_EXPENSES = [
  { id: "e1",  desc: "Auto noleggio (DoYouSpain, 10gg Station Wagon)", amount: 234.64, paidBy: "Federico", participants: ["Federico","Manu","Robi","Giulia"], category: "trasporto", date: "2026-04-25", preloaded: true },
  { id: "e2",  desc: "Alloggio Benidorm (Airbnb)", amount: 76,     paidBy: "Federico", participants: ["Federico","Manu","Robi","Giulia"], category: "alloggio", date: "2026-04-25", preloaded: true },
  { id: "e3",  desc: "Alloggio Granada – 2 notti (Airbnb)", amount: 168,    paidBy: "Federico", participants: ["Federico","Manu","Robi","Giulia"], category: "alloggio", date: "2026-04-26", preloaded: true },
  { id: "e4",  desc: "Biglietti Alhambra x4 (GetYourGuide)", amount: 216,    paidBy: "Federico", participants: ["Federico","Manu","Robi","Giulia"], category: "ingresso", date: "2026-04-27", preloaded: true },
  { id: "e5",  desc: "Biglietti Caminito del Rey x4", amount: 80,     paidBy: "Manu",     participants: ["Federico","Manu","Robi","Giulia"], category: "ingresso", date: "2026-04-29", preloaded: true },
  { id: "e6",  desc: "Alloggio Malaga (Booking)", amount: 72,     paidBy: "Federico", participants: ["Federico","Manu","Robi","Giulia"], category: "alloggio", date: "2026-04-28", preloaded: true },
  { id: "e7",  desc: "Alloggio Ronda (Airbnb)", amount: 64.47,  paidBy: "Federico", participants: ["Federico","Manu","Robi","Giulia"], category: "alloggio", date: "2026-04-29", preloaded: true },
  { id: "e8",  desc: "Biglietti Real Alcázar Siviglia x4 (19.5€/p)", amount: 78,     paidBy: "Manu",     participants: ["Federico","Manu","Robi","Giulia"], category: "ingresso", date: "2026-05-01", preloaded: true },
  { id: "e9",  desc: "Alloggio Siviglia – 3 notti (Booking, 32€/p/n)", amount: 384,    paidBy: "Robi",     participants: ["Federico","Manu","Robi","Giulia"], category: "alloggio", date: "2026-04-30", preloaded: true },
  { id: "e10", desc: "Mezquita-Catedral Cordoba x4 (32€/p)", amount: 128,    paidBy: "Robi",     participants: ["Federico","Manu","Robi","Giulia"], category: "ingresso", date: "2026-05-03", preloaded: true },
  { id: "e11", desc: "Alloggio Cordoba (Booking, 23€/p)", amount: 92,     paidBy: "Robi",     participants: ["Federico","Manu","Robi","Giulia"], category: "alloggio", date: "2026-05-03", preloaded: true },
];

const CAT_ICONS = { alloggio: "🏨", trasporto: "🚗", cibo: "🍽️", ingresso: "🎟️", altro: "📦" };
const CAT_LABELS = { alloggio: "Alloggio", trasporto: "Trasporto", cibo: "Cibo", ingresso: "Ingresso", altro: "Altro" };
const TYPE_BADGE = {
  free:      { cls: "badge-green",  label: "Gratis" },
  ingresso:  { cls: "badge-orange", label: "Ingresso" },
  cibo:      { cls: "badge-blue",   label: "Cibo" },
  trasporto: { cls: "badge-gray",   label: "Trasporto" },
};

/* ═══════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════ */
let expenses = [];

function loadExpenses() {
  try {
    const saved = localStorage.getItem("andalusia2026_expenses");
    expenses = saved ? JSON.parse(saved) : [...DEFAULT_EXPENSES];
  } catch { expenses = [...DEFAULT_EXPENSES]; }
}

function saveExpenses() {
  localStorage.setItem("andalusia2026_expenses", JSON.stringify(expenses));
}

function resetExpenses() {
  expenses = [...DEFAULT_EXPENSES];
  saveExpenses();
  renderExpenses();
}

/* ═══════════════════════════════════════════════════
   TAB NAVIGATION
═══════════════════════════════════════════════════ */
let mapInitialized = false;

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
function initMap() {
  const map = L.map("map", { zoomControl: true }).setView([38.5, -2.5], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 18,
  }).addTo(map);

  // Route polyline
  const routeCoords = STOPS.map(s => [s.lat, s.lng]);
  L.polyline(routeCoords, {
    color: "#C8581A",
    weight: 3,
    opacity: 0.75,
    dashArray: "6 4",
  }).addTo(map);

  // Stop markers
  STOPS.forEach((stop, i) => {
    const day = DAYS.find(d => d.day === stop.day);
    const acts = day ? day.activities.filter(a => a.type !== "trasporto").slice(0, 3) : [];

    const icon = L.divIcon({
      className: "",
      html: `<div style="
        background:#C8581A;color:#fff;border-radius:50%;
        width:30px;height:30px;display:flex;align-items:center;justify-content:center;
        font-weight:700;font-size:12px;border:2px solid #fff;
        box-shadow:0 2px 8px rgba(0,0,0,.3);">${i + 1}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(stop.name + " Spain")}`;
    const popupHtml = `
      <div class="popup-title">${stop.name}</div>
      <div class="popup-day">Giorno ${stop.day} – ${day ? day.label : ""}</div>
      ${acts.length ? `<ul class="popup-acts">${acts.map(a => `<li>${a.icon} ${a.name}</li>`).join("")}</ul>` : ""}
      <a href="${mapsUrl}" target="_blank" class="popup-link">📍 Apri in Google Maps</a>
    `;

    L.marker([stop.lat, stop.lng], { icon })
      .addTo(map)
      .bindPopup(popupHtml, { maxWidth: 220 });
  });

  // POI markers (confirmed activities with mapsQuery)
  DAYS.forEach(day => {
    day.activities.forEach(act => {
      if (!act.mapsQuery || act.type === "trasporto") return;
      const stop = STOPS.find(s => s.day === day.day);
      if (!stop) return;
      // Small offset to avoid exact overlap
    });
  });
}

/* ═══════════════════════════════════════════════════
   ITINERARY
═══════════════════════════════════════════════════ */
function renderItinerary() {
  const today = new Date().toISOString().slice(0, 10);
  const container = document.getElementById("itinerary-list");
  container.innerHTML = "";

  DAYS.forEach(day => {
    const isToday = day.date === today;
    const isPast  = day.date < today;

    const card = document.createElement("div");
    card.className = "day-card" + (isToday ? " open" : "");

    // Header
    const header = document.createElement("div");
    header.className = "day-header";
    header.innerHTML = `
      <div class="day-number${isToday ? " today" : ""}">${day.day}</div>
      <div class="day-info">
        <div class="day-date">${day.label}</div>
        <div class="day-route">${day.route}</div>
      </div>
      <div class="day-toggle">▼</div>
    `;
    header.addEventListener("click", () => card.classList.toggle("open"));

    // Body
    const body = document.createElement("div");
    body.className = "day-body";

    // Activities
    const list = document.createElement("ul");
    list.className = "activity-list";

    day.activities.forEach(act => {
      const typeBadge = TYPE_BADGE[act.type] || TYPE_BADGE.trasporto;
      const li = document.createElement("li");
      li.className = "activity-item";

      let metaHtml = `<span class="badge ${typeBadge.cls}">${typeBadge.label}</span>`;
      if (act.estimatedCost !== undefined && act.estimatedCost > 0) {
        metaHtml += `<span class="badge badge-orange">~${act.estimatedCost}€/p</span>`;
      }
      if (act.realCost !== undefined) {
        metaHtml += `<span class="badge badge-green">${act.realCost}€ reale</span>`;
      }
      if (act.confirmed) {
        metaHtml += `<span class="badge badge-green">✅ Confermato</span>`;
      }
      if (act.payer) {
        metaHtml += `<span class="badge badge-gray">💳 ${act.payer}</span>`;
      }
      if (act.duration) {
        metaHtml += `<span class="badge badge-gray">⏱ ${act.duration}</span>`;
      }

      let linksHtml = "";
      if (act.link) {
        linksHtml += `<a href="${act.link}" target="_blank" class="act-link">${act.linkLabel || "🔗 Link"}</a>`;
      }
      if (act.mapsQuery) {
        const murl = `https://www.google.com/maps/search/${encodeURIComponent(act.mapsQuery)}`;
        linksHtml += `<a href="${murl}" target="_blank" class="act-link">📍 Maps</a>`;
      }

      li.innerHTML = `
        <div class="act-time">${act.time || "–"}</div>
        <div class="act-icon">${act.icon}</div>
        <div class="act-body">
          <div class="act-name">${act.name}</div>
          <div class="act-meta">
            ${metaHtml}
            ${linksHtml}
          </div>
          ${act.note ? `<div class="act-note">${act.note}</div>` : ""}
        </div>
      `;
      list.appendChild(li);
    });

    body.appendChild(list);

    // Hotel row
    if (day.hotel) {
      const h = day.hotel;
      const priceStr = h.totalCost
        ? `${(h.totalCost / 4).toFixed(2)}€/p`
        : h.costPerPersonPerNight
          ? `${h.costPerPersonPerNight}€/p/notte`
          : h.costPerPerson
            ? `${h.costPerPerson}€/p`
            : "";

      const hotelRow = document.createElement("div");
      hotelRow.className = "hotel-row";
      hotelRow.innerHTML = `
        <span style="font-size:1.1rem">🏨</span>
        <span class="hotel-label">Alloggio</span>
        <span class="hotel-name">${h.name}${h.note ? ` <span style="font-size:.7rem;color:#7A5C4A;font-weight:400">(${h.note})</span>` : ""}</span>
        ${priceStr ? `<span class="hotel-price">${priceStr}</span>` : ""}
        ${h.payer ? `<span class="badge badge-gray" style="font-size:.65rem">💳 ${h.payer}</span>` : ""}
        ${h.confirmed ? `<span class="badge badge-green" style="font-size:.65rem">✅</span>` : ""}
        ${h.link ? `<a href="${h.link}" target="_blank" class="act-link">${h.linkLabel || "🔗 Link"}</a>` : ""}
      `;
      body.appendChild(hotelRow);
    }

    card.appendChild(header);
    card.appendChild(body);
    container.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════════
   EXPENSES
═══════════════════════════════════════════════════ */
function calcBalances() {
  const paid   = {};  // how much each person paid total
  const owes   = {};  // net balance (positive = owed money, negative = owes money)
  PEOPLE.forEach(p => { paid[p] = 0; owes[p] = 0; });

  expenses.forEach(exp => {
    const share = exp.amount / exp.participants.length;
    paid[exp.paidBy] = (paid[exp.paidBy] || 0) + exp.amount;
    exp.participants.forEach(p => {
      owes[p] = (owes[p] || 0) - share;   // p owes share
    });
    owes[exp.paidBy] = (owes[exp.paidBy] || 0) + exp.amount;  // paidBy gets credit
  });

  return { paid, net: owes };
}

function calcSettlement(net) {
  const creditors = [];
  const debtors   = [];
  PEOPLE.forEach(p => {
    const v = net[p];
    if (v > 0.01)  creditors.push({ name: p, amount:  v });
    if (v < -0.01) debtors.push(  { name: p, amount: -v });
  });

  const txns = [];
  let ci = 0, di = 0;
  while (ci < creditors.length && di < debtors.length) {
    const c = creditors[ci];
    const d = debtors[di];
    const amt = Math.min(c.amount, d.amount);
    txns.push({ from: d.name, to: c.name, amount: amt });
    c.amount -= amt;
    d.amount -= amt;
    if (c.amount < 0.01) ci++;
    if (d.amount < 0.01) di++;
  }
  return txns;
}

function renderExpenses() {
  const { paid, net } = calcBalances();

  // Balance cards
  const balanceGrid = document.getElementById("balance-cards");
  balanceGrid.innerHTML = PEOPLE.map(p => {
    const n = net[p] || 0;
    const cls = n > 0.01 ? "balance-positive" : n < -0.01 ? "balance-negative" : "balance-zero";
    const sign = n > 0.01 ? "+" : "";
    return `
      <div class="balance-card ${cls}">
        <div class="person-name">${p}</div>
        <div class="balance-amount">${sign}${n.toFixed(2)}€</div>
        <div class="balance-paid">pagato: ${(paid[p] || 0).toFixed(2)}€</div>
      </div>`;
  }).join("");

  // Settlement
  const settlements = calcSettlement(net);
  const settlDiv = document.getElementById("settlement-list");
  if (settlements.length === 0) {
    settlDiv.innerHTML = `<div style="color:#2E7D52;font-size:.9rem;font-weight:600">✅ Tutti in pari!</div>`;
  } else {
    settlDiv.innerHTML = settlements.map(t => `
      <div class="settlement-item">
        <span class="settle-from">${t.from}</span>
        <span class="settle-arrow">→ paga →</span>
        <span class="settle-to">${t.to}</span>
        <span class="settle-amt">${t.amount.toFixed(2)}€</span>
      </div>`).join("");
  }

  // Expenses list
  const expList = document.getElementById("expenses-list");
  const sorted  = [...expenses].sort((a, b) => a.date.localeCompare(b.date));
  expList.innerHTML = sorted.map(exp => {
    const perPerson = (exp.amount / exp.participants.length).toFixed(2);
    const dateLabel = new Date(exp.date).toLocaleDateString("it-IT", { day: "numeric", month: "short" });
    return `
      <div class="exp-item">
        <span class="exp-cat-icon">${CAT_ICONS[exp.category] || "📦"}</span>
        <div class="exp-body">
          <div class="exp-desc">${exp.desc}</div>
          <div class="exp-meta">${dateLabel} · ${exp.paidBy} · ${perPerson}€/p · ${exp.participants.length} persone</div>
        </div>
        <div class="exp-amount">${exp.amount.toFixed(2)}€</div>
        ${exp.preloaded ? "" : `<button class="exp-delete" data-id="${exp.id}" title="Elimina">✕</button>`}
      </div>`;
  }).join("") || `<div style="color:#7A5C4A;font-size:.88rem">Nessuna spesa aggiunta.</div>`;

  // Delete handlers
  expList.querySelectorAll(".exp-delete").forEach(btn => {
    btn.addEventListener("click", () => {
      expenses = expenses.filter(e => e.id !== btn.dataset.id);
      saveExpenses();
      renderExpenses();
    });
  });
}

/* Add expense form */
document.getElementById("expense-form").addEventListener("submit", e => {
  e.preventDefault();
  const participants = [...document.querySelectorAll(".part-check:checked")].map(c => c.value);
  if (participants.length === 0) { alert("Seleziona almeno una persona!"); return; }
  const amount = parseFloat(document.getElementById("exp-amount").value);
  if (isNaN(amount) || amount <= 0) return;

  const newExp = {
    id: "u" + Date.now(),
    desc: document.getElementById("exp-desc").value.trim(),
    amount,
    paidBy: document.getElementById("exp-payer").value,
    participants,
    category: document.getElementById("exp-category").value,
    date: document.getElementById("exp-date").value,
    preloaded: false,
  };

  expenses.push(newExp);
  saveExpenses();
  renderExpenses();

  // Reset form
  document.getElementById("exp-desc").value = "";
  document.getElementById("exp-amount").value = "";
  document.querySelectorAll(".part-check").forEach(c => c.checked = true);
});

/* ═══════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════ */
loadExpenses();
renderItinerary();
renderExpenses();
initMap();  // map is the default tab
mapInitialized = true;
