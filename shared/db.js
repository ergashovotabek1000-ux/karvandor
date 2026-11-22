/**
 * Karvandor — Shared Database (LocalStorage)
 * Barcha 3 bot shu modulni ishlatadi
 * Production da: Supabase / PocketBase bilan almashtiriladi
 */

const DB_KEY = 'karvandor_v1';

// ─── Default ma'lumotlar ───────────────────────────────────────────────────
const DEFAULT_DB = {
  company: {
    id: 'comp_001',
    name: 'Navoiy Trans LLC',
    logoDataUrl: '',
    primaryColor: '#111111',
    plan: 'pro',
    active: true,
  },

  drivers: [
    {
      id: 'drv_001', name: 'Azizbek Raximov', phone: '+998901234567',
      carType: 'fura', vehicleId: 'veh_001',
      rating: 4.8, status: 'on-trip',
      currentTrip: { orderId: 'ord_001', from: 'Buxoro', to: 'Samarqand', startedAt: Date.now() - 14400000, estimatedHours: 5 },
      smartMatchAlert: false, smartMatchDismissed: false,
      docs: { passport: { dataUrl: '', expiry: '2028-05-12', verified: true }, license: { dataUrl: '', expiry: '2027-03-01', category: 'CE', verified: true }, medCert: { dataUrl: '', expiry: '2025-12-01', verified: false } }
    },
    {
      id: 'drv_002', name: 'Bahrom Toshmatov', phone: '+998901234568',
      carType: 'yuk', vehicleId: 'veh_002',
      rating: 4.6, status: 'free',
      currentTrip: null,
      smartMatchAlert: false, smartMatchDismissed: false,
      docs: { passport: { dataUrl: '', expiry: '2029-01-20', verified: true }, license: { dataUrl: '', expiry: '2026-11-15', category: 'C', verified: true }, medCert: { dataUrl: '', expiry: '2026-06-30', verified: true } }
    },
    {
      id: 'drv_003', name: 'Sardor Karimov', phone: '+998901234569',
      carType: 'termo', vehicleId: 'veh_003',
      rating: 4.9, status: 'on-trip',
      currentTrip: { orderId: 'ord_002', from: 'Navoiy', to: 'Toshkent', startedAt: Date.now() - 10800000, estimatedHours: 6 },
      smartMatchAlert: false, smartMatchDismissed: false,
      docs: { passport: { dataUrl: '', expiry: '2027-08-10', verified: true }, license: { dataUrl: '', expiry: '2028-02-28', category: 'CE', verified: true }, medCert: { dataUrl: '', expiry: '2026-09-15', verified: true } }
    },
    {
      id: 'drv_004', name: 'Dilshod Mirzayev', phone: '+998901234570',
      carType: 'fura', vehicleId: 'veh_004',
      rating: 4.3, status: 'free',
      currentTrip: null,
      smartMatchAlert: false, smartMatchDismissed: false,
      docs: { passport: { dataUrl: '', expiry: '2026-03-05', verified: false }, license: { dataUrl: '', expiry: '2025-11-01', category: 'C', verified: false }, medCert: { dataUrl: '', expiry: '2025-10-15', verified: false } }
    },
  ],

  vehicles: [
    { id: 'veh_001', plateNumber: '01A123AB', type: 'fura', driverId: 'drv_001', docs: { techPassport: { dataUrl: '', expiry: '2027-04-01', verified: true }, insurance: { dataUrl: '', expiry: '2026-08-15', verified: true }, tirPermit: { dataUrl: '', expiry: '2027-01-01', verified: true }, adrPermit: { dataUrl: '', expiry: '', verified: false } } },
    { id: 'veh_002', plateNumber: '01B456CD', type: 'yuk', driverId: 'drv_002', docs: { techPassport: { dataUrl: '', expiry: '2026-12-01', verified: true }, insurance: { dataUrl: '', expiry: '2026-07-20', verified: true }, tirPermit: { dataUrl: '', expiry: '', verified: false }, adrPermit: { dataUrl: '', expiry: '', verified: false } } },
    { id: 'veh_003', plateNumber: '01C789EF', type: 'termo', driverId: 'drv_003', docs: { techPassport: { dataUrl: '', expiry: '2027-09-15', verified: true }, insurance: { dataUrl: '', expiry: '2027-02-28', verified: true }, tirPermit: { dataUrl: '', expiry: '2027-06-01', verified: true }, adrPermit: { dataUrl: '', expiry: '', verified: false } } },
    { id: 'veh_004', plateNumber: '01D012GH', type: 'fura', driverId: 'drv_004', docs: { techPassport: { dataUrl: '', expiry: '2025-11-30', verified: false }, insurance: { dataUrl: '', expiry: '2025-10-01', verified: false }, tirPermit: { dataUrl: '', expiry: '', verified: false }, adrPermit: { dataUrl: '', expiry: '', verified: false } } },
  ],

  orders: [
    { id: 'ord_001', from: 'Buxoro', to: 'Samarqand', cargo: 'Qurilish materiallari', weight: 18, carType: 'fura', status: 'on-road', driverId: 'drv_001', dispatcherId: 'disp_001', customer: { name: 'Rahmat Yusupov', phone: '+998901111111', companyId: null }, price: 2800000, createdAt: Date.now() - 15000000, deliveredAt: null, contactLog: [{ by: 'Azizbek R.', role: 'dispatcher', text: 'Yuk olindi, yo\'lga chiqildi', ts: Date.now() - 14400000, done: true }], images: [], attachedDocs: [], borderCrossings: [] },
    { id: 'ord_002', from: 'Navoiy', to: 'Toshkent', cargo: 'Meva-sabzavot', weight: 12, carType: 'termo', status: 'on-road', driverId: 'drv_003', dispatcherId: 'disp_001', customer: { name: 'Kamola Nazarova', phone: '+998902222222', companyId: null }, price: 4100000, createdAt: Date.now() - 11000000, deliveredAt: null, contactLog: [], images: [], attachedDocs: [], borderCrossings: [] },
    { id: 'ord_003', from: 'Samarqand', to: 'Buxoro', cargo: 'Elektronika', weight: 5, carType: 'yuk', status: 'pending', driverId: null, dispatcherId: 'disp_001', customer: { name: 'Bobur Xolmatov', phone: '+998903333333', companyId: null }, price: 1500000, createdAt: Date.now() - 3600000, deliveredAt: null, contactLog: [], images: [], attachedDocs: [], borderCrossings: [] },
  ],

  freightListings: [
    { id: 'lst_001', from: 'Samarqand', to: 'Buxoro', cargo: 'Paxta', weight: 15, price: 2500000, contactPhone: '+998905555555', status: 'open', matchedDriverId: null, createdAt: Date.now() - 1800000, customerCompanyId: null, customerCompanyName: 'Samarqand Paxta MChJ' },
    { id: 'lst_002', from: 'Toshkent', to: 'Navoiy', cargo: 'Jihozlar', weight: 8, price: 3200000, contactPhone: '+998906666666', status: 'open', matchedDriverId: null, createdAt: Date.now() - 900000, customerCompanyId: null, customerCompanyName: null },
    { id: 'lst_003', from: 'Samarqand', to: 'Navoiy', cargo: 'Oziq-ovqat', weight: 10, price: 1800000, contactPhone: '+998907777777', status: 'open', matchedDriverId: null, createdAt: Date.now() - 600000, customerCompanyId: null, customerCompanyName: 'Fresh Market' },
  ],

  smartTimers: [],
  notifications: [],
};

// ─── DB funksiyalar ───────────────────────────────────────────────────────
function loadDB() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (!raw) return structuredClone(DEFAULT_DB);
    const saved = JSON.parse(raw);
    // Deep merge — yangi maydonlarni qo'shish
    return deepMerge(structuredClone(DEFAULT_DB), saved);
  } catch {
    return structuredClone(DEFAULT_DB);
  }
}

function saveDB(db) {
  try { localStorage.setItem(DB_KEY, JSON.stringify(db)); } catch (e) { console.warn('DB save failed:', e); }
  try { broadcastUpdate(); } catch {}
}

function resetDB() {
  localStorage.removeItem(DB_KEY);
  return structuredClone(DEFAULT_DB);
}

function deepMerge(target, source) {
  if (!source || typeof source !== 'object') return target;
  for (const key of Object.keys(source)) {
    if (Array.isArray(source[key])) {
      target[key] = source[key];
    } else if (source[key] && typeof source[key] === 'object') {
      target[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// ─── BroadcastChannel (tab-aro sinxronizatsiya) ───────────────────────────
let _bc;
function getBroadcastChannel() {
  if (!_bc) {
    try { _bc = new BroadcastChannel('karvandor'); } catch {}
  }
  return _bc;
}
function broadcastUpdate() {
  getBroadcastChannel()?.postMessage({ type: 'db_update', ts: Date.now() });
}
function onBroadcastMessage(callback) {
  getBroadcastChannel()?.addEventListener('message', callback);
}

// ─── Bildirishnomalar ──────────────────────────────────────────────────────
function pushNotif(text, roles, db) {
  const _db = db || loadDB();
  _db.notifications.unshift({ id: 'n_' + Date.now(), roles, text, ts: Date.now(), read: false });
  if (_db.notifications.length > 100) _db.notifications = _db.notifications.slice(0, 100);
  if (!db) saveDB(_db);
  return _db;
}

// ─── Narx hisoblash ───────────────────────────────────────────────────────
const DISTANCES = {
  'Navoiy-Toshkent': 460, 'Navoiy-Buxoro': 130, 'Navoiy-Samarqand': 230,
  'Toshkent-Samarqand': 350, 'Toshkent-Buxoro': 580, 'Samarqand-Buxoro': 250,
  'Buxoro-Termiz': 420, 'Toshkent-Namangan': 320, 'Toshkent-Andijan': 370,
  'Navoiy-Termiz': 540, 'Samarqand-Termiz': 310, 'Toshkent-Urganch': 1000,
};
const CAR_RATE = { fura: 1200, yuk: 800, termo: 1500, tir: 2000, van: 600 };

function calcPrice(from, to, weight, carType) {
  const dist = DISTANCES[`${from}-${to}`] || DISTANCES[`${to}-${from}`] || 400;
  return Math.round(dist * (CAR_RATE[carType] || 1000) * Math.max(1, weight / 10));
}

function calcTripHours(from, to) {
  const dist = DISTANCES[`${from}-${to}`] || DISTANCES[`${to}-${from}`] || 400;
  return Math.round((dist / 80) * 10) / 10; // 80 km/soat o'rtacha
}

// ─── Smart Match ──────────────────────────────────────────────────────────
function initSmartMatchTimers(onAlert) {
  const db = loadDB();
  db.smartTimers.forEach(t => {
    if (t.alertFired || t.dismissed) return;
    const remaining = t.alertAfter - (Date.now() - t.startedAt);
    if (remaining <= 0) {
      onAlert(t.driverId);
    } else {
      setTimeout(() => onAlert(t.driverId), remaining);
    }
  });
}

function startTrip(driverId, from, to, estimatedHours) {
  const db = loadDB();
  const driver = db.drivers.find(d => d.id === driverId);
  if (!driver) return;
  driver.status = 'on-trip';
  driver.currentTrip = { from, to, startedAt: Date.now(), estimatedHours };
  driver.smartMatchAlert = false;
  driver.smartMatchDismissed = false;
  // Eski timerni o'chirish
  db.smartTimers = db.smartTimers.filter(t => t.driverId !== driverId);
  const alertAfterMs = estimatedHours * 0.9 * 3_600_000;
  db.smartTimers.push({ driverId, startedAt: Date.now(), alertAfter: alertAfterMs, alertFired: false, dismissed: false });
  saveDB(db);
  return alertAfterMs;
}

function findReturnMatches(driver, db) {
  if (!driver?.currentTrip) return [];
  return db.freightListings.filter(l =>
    l.from === driver.currentTrip.to &&
    l.to === driver.currentTrip.from &&
    l.status === 'open'
  );
}

function assignReturnLoad(driverId, listingId) {
  const db = loadDB();
  const timer = db.smartTimers.find(t => t.driverId === driverId);
  if (timer) { timer.dismissed = true; timer.alertFired = true; }
  const driver = db.drivers.find(d => d.id === driverId);
  if (driver) { driver.smartMatchAlert = false; driver.smartMatchDismissed = true; }
  const listing = db.freightListings.find(l => l.id === listingId);
  if (listing) { listing.status = 'matched'; listing.matchedDriverId = driverId; }
  saveDB(db);
  return db;
}

function dismissSmartMatch(driverId) {
  const db = loadDB();
  const timer = db.smartTimers.find(t => t.driverId === driverId);
  if (timer) { timer.dismissed = true; }
  const driver = db.drivers.find(d => d.id === driverId);
  if (driver) { driver.smartMatchAlert = false; driver.smartMatchDismissed = true; }
  saveDB(db);
  return db;
}

// ─── Hujjat muddat tekshirish ─────────────────────────────────────────────
function docStatus(expiry) {
  if (!expiry) return 'missing'; // yuklanmagan
  const days = Math.ceil((new Date(expiry) - new Date()) / 86400000);
  if (days < 0) return 'expired';
  if (days <= 30) return 'warning';
  return 'ok';
}

function docStatusColor(expiry) {
  const s = docStatus(expiry);
  return { ok: '#059669', warning: '#D97706', expired: '#DC2626', missing: '#9CA3AF' }[s];
}

function docStatusIcon(expiry) {
  const s = docStatus(expiry);
  return { ok: '✅', warning: '⚠️', expired: '🔴', missing: '⬜' }[s];
}

// ─── Vaqt formatlash ──────────────────────────────────────────────────────
function timeAgo(ts) {
  const diff = Date.now() - ts;
  if (diff < 60000) return 'Hozir';
  if (diff < 3600000) return `${Math.floor(diff / 60000)} daq oldin`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} soat oldin`;
  return new Date(ts).toLocaleDateString('uz-UZ');
}

function formatTime(ts) {
  return new Date(ts).toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });
}

function formatDate(ts) {
  return new Date(ts).toLocaleDateString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatMoney(amount) {
  return new Intl.NumberFormat('uz-UZ').format(amount) + ' so\'m';
}

// ─── Rasm siqish ──────────────────────────────────────────────────────────
function compressImage(file, maxSide = 800, quality = 0.65) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/webp', quality));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ─── ID generator ─────────────────────────────────────────────────────────
function genId(prefix = 'id') {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
}
