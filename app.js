/* ==========================================================================
   FloraFind Application Logic - Villa Buri Park, Verona
   ========================================================================== */

// --- 1. Plant Database ---
// 45.420424, 11.042593
const PLANTS_DATABASE = [
  {
    id: "22",
    name: "Sequoia Comune",
    scientificName: "Sequoia sempervirens",
    family: "Cupressaceae",
    category: "trees",
    rarity: "common",
    coordinates: [45.420424, 11.042593],
    sunlight: "Sole Diretto",
    water: "Moderata",
    height: "30m",
    nativeTo: "Europa e Asia Occidentale",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=600",
    funFact:
      "A fronte di altezze che superano i 110 metri e volumi del tronco immensi, le sequoie non hanno una radice fittonante profonda.",
    description:
      "Specie naturalizzata. Appartiene alla famiglia delle Cupressaceae. Le foglie simili ai denti di un pettine sono disposte in rametti piatti. I piccoli coni si presentano arrotondati o allungati. La corteccia è molto spessa, fibrosa e molto morbida, adatta a contrastare gli incendi tipici della zona d'origine, Californa e Oregon.",
  },
  {
    id: "ginkgo",
    name: "Ginkgo Dorato",
    scientificName: "Ginkgo biloba",
    family: "Ginkgoaceae",
    category: "trees",
    rarity: "rare",
    coordinates: [45.4201, 11.0412],
    sunlight: "Sole o Mezz'ombra",
    water: "Moderata",
    height: "25m",
    nativeTo: "Cina",
    image:
      "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?auto=format&fit=crop&q=80&w=600",
    funFact:
      "Il Ginkgo biloba è un 'fossile vivente', rimasto praticamente immutato da oltre 200 milioni di anni. Non ha parenti stretti sopravvissuti.",
    description:
      "Situato vicino al sentiero del giardino della villa, questo Ginkgo è famoso per le sue foglie a ventaglio che in tardo autunno assumono un colore giallo dorato uniforme e spettacolare. È una pianta molto resistente e celebrata in tutto il mondo per le sue proprietà officinali e la sua longevità.",
  },
  {
    id: "white-waterlily",
    name: "Ninfea Bianca Comune",
    scientificName: "Nymphaea alba",
    family: "Nymphaeaceae",
    category: "flowers",
    rarity: "common",
    coordinates: [45.4189, 11.0425],
    sunlight: "Sole Diretto",
    water: "Alta (Acquatica)",
    height: "Galleggiante",
    nativeTo: "Europa e Nord Africa",
    image:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=600",
    funFact:
      "I fiori si aprono solo durante le ore di sole e si chiudono ermeticamente di notte o quando il cielo è molto coperto.",
    description:
      "Fluttuando elegantemente sulla superficie dello storico laghetto della villa, queste ninfee presentano grandi foglie verdi circolari e grandi fiori bianchi dai petali multipli con un centro giallo brillante. Forniscono ombra e riparo alla vita acquatica del laghetto.",
  },
  {
    id: "japanese-maple",
    name: "Acero Giapponese Rosso",
    scientificName: "Acer palmatum",
    family: "Sapindaceae",
    category: "trees",
    rarity: "rare",
    coordinates: [45.4196, 11.0418],
    sunlight: "Luce Filtrata",
    water: "Da Moderata ad Alta",
    height: "8m",
    nativeTo: "Giappone e Corea",
    image:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=600",
    funFact:
      "Il termine giapponese 'Momiji' significa 'mani di neonato', in riferimento ai lobi delicati delle sue foglie.",
    description:
      "Un capolavoro ornamentale piantato nei giardini della villa, questo acero giapponese crea un contrasto sorprendente grazie al suo fogliame delicato e finemente intagliato che si accende di rosso cremisi in primavera e in autunno.",
  },
  {
    id: "wild-lavender",
    name: "Lavanda Officinale",
    scientificName: "Lavandula angustifolia",
    family: "Lamiaceae",
    category: "herbs",
    rarity: "common",
    coordinates: [45.4203, 11.0428],
    sunlight: "Sole Diretto",
    water: "Bassa",
    height: "1m",
    nativeTo: "Regione Mediterranea",
    image:
      "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80&w=600",
    funFact:
      "L'olio essenziale di lavanda è noto per le sei proprietà calmanti ed è ampiamente utilizzato in aromaterapia per ridurre ansia e stress.",
    description:
      "Forma profumate siepi di confine nei giardini delle erbe di Villa Buri. Questa lavanda attira sciami di api e farfalle grazie alle sue dense spighe di fiori viola dal profumo dolcissimo e alle sue foglie grigio-verdi lineari.",
  },
  {
    id: "common-box",
    name: "Bosso Comune Sempreverde",
    scientificName: "Buxus sempervirens",
    family: "Buxaceae",
    category: "trees",
    rarity: "common",
    coordinates: [45.4194, 11.0402],
    sunlight: "Sole o Mezz'ombra",
    water: "Moderata",
    height: "4m",
    nativeTo: "Europa Meridionale e Africa",
    image:
      "https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&q=80&w=600",
    funFact:
      "Il legno di bosso è estremamente denso e pesante, tanto da affondare nell'acqua. Storicamente veniva usato per intagliare strumenti musicali di pregio.",
    description:
      "Utilizzato per creare le geometrie forali e le sfere topiaria nello storico giardino all'italiana della villa. È un arbusto sempreverde a crescita lenta con piccole foglie ovali lucide.",
  },
  {
    id: "sacred-lotus",
    name: "Loto Sacro Imperiale",
    scientificName: "Nelumbo nucifera",
    family: "Nelumbonaceae",
    category: "flowers",
    rarity: "exotic",
    coordinates: [45.4186, 11.0421],
    sunlight: "Sole Diretto",
    water: "Alta (Palustre)",
    height: "1.5m",
    nativeTo: "Asia Tropicale",
    image:
      "https://images.unsplash.com/photo-1444492417251-a58397a66735?auto=format&fit=crop&q=80&w=600",
    funFact:
      "Le foglie di loto presentano l'effetto loto: una superidrofobicità per cui le gocce d'acqua scivolano via trascinando con sé lo sporco.",
    description:
      "Un gioiello raro situato nel laghetto più riparato di Villa Buri. A differenza delle ninfee, il Loto svetta maestoso sopra la superficie dell'acqua, fiorendo in grandi e profumati petali rosa e bianchi che simboleggiano la purezza.",
  },
  {
    id: "rhododendron",
    name: "Rododendro Arboreo Rosso",
    scientificName: "Rhododendron arboreum",
    family: "Ericaceae",
    category: "flowers",
    rarity: "rare",
    coordinates: [45.4204, 11.0419],
    sunlight: "Ombra Dappolata",
    water: "Moderata",
    height: "6m",
    nativeTo: "Himalaya",
    image:
      "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&q=80&w=600",
    funFact:
      "Il Rhododendron arboreum è il fiore nazionale del Nepal, dove i suoi fiori freschi vengono usati per preparare bevande acidule tradizionali.",
    description:
      "Piantato all'ombra di pini secolari, questo grande arbusto sempreverde esplode in primavera in densi mazzi globosi di fiori rosso scarlatto, regalando uno spettacolo di colore indimenticabile.",
  },
  {
    id: "sweet-violet",
    name: "Viola Mammola Profumata",
    scientificName: "Viola odorata",
    family: "Violaceae",
    category: "herbs",
    rarity: "common",
    coordinates: [45.4191, 11.0415],
    sunlight: "Mezz'ombra",
    water: "Moderata",
    height: "0.15m",
    nativeTo: "Europa e Mediterraneo",
    image:
      "https://images.unsplash.com/photo-1572917734563-718a221f7b88?auto=format&fit=crop&q=80&w=600",
    funFact:
      "I fiori della viola contengono ionone, una sostanza che anestetizza temporaneamente i recettori olfattivi. Puoi annusarli solo una volta prima che il profumo sembri svanire!",
    description:
      "Punteggia i prati ombrosi e il sottobosco di Bosco Buri. Questa piccola pianta erbacea perenne fiorisce a fine inverno con fiori viola intensamente profumati e graziose foglie a forma di cuore.",
  },
  {
    id: "rosemary",
    name: "Rosmarino Comune",
    scientificName: "Salvia rosmarinus",
    family: "Lamiaceae",
    category: "herbs",
    rarity: "common",
    coordinates: [45.4199, 11.0432],
    sunlight: "Sole Diretto",
    water: "Molto Bassa",
    height: "1.5m",
    nativeTo: "Bacino del Mediterraneo",
    image:
      "https://images.unsplash.com/photo-1594056291689-d4c5520e03e4?auto=format&fit=crop&q=80&w=600",
    funFact:
      "Nell'antica Grecia, gli studenti indossavano ghirlande di rosmarino per stimolare la memoria e la concentrazione durante gli esami.",
    description:
      "Prospera a ridosso dei muretti soleggiati lungo i confini del parco. Questo arbusto aromatico sempreverde produce foglie aghiformi ricche di oli essenziali e delicati fiori azzurri, caposaldo della cucina italiana.",
  },
  {
    id: "magnolia",
    name: "Magnolia Grandiflora",
    scientificName: "Magnolia grandiflora",
    family: "Magnoliaceae",
    category: "trees",
    rarity: "common",
    coordinates: [45.4231, 11.044115],
    sunlight: "Sole o Mezz'ombra",
    water: "Moderata",
    height: "20m",
    nativeTo: "Stati Uniti Sud-orientali",
    image:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=600",
    funFact:
      "Le magnolie si sono evolute prima della comparsa delle api! I loro petali sono spessi e coriacei per resistere all'impollinazione da parte dei coleotteri.",
    description:
      "Domina il grande prato di fronte all'ingresso principale di Villa Buri. Questo splendido albero presenta foglie coriacee verde scuro lucido con pagina inferiore color ruggine e produce enormi fiori bianchi profumati in estate.",
  },
  {
    id: "bald-cypress",
    name: "Cipresso delle Paludi",
    scientificName: "Taxodium distichum",
    family: "Cupressaceae",
    category: "trees",
    rarity: "exotic",
    coordinates: [45.4206, 11.0434],
    sunlight: "Sole Diretto",
    water: "Alta (Saturata)",
    height: "30m",
    nativeTo: "Zone umide del Nord America",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=600",
    funFact:
      "Il cipresso delle paludi sviluppa radici aeree legnose chiamate 'pneumatofori' (o ginocchi) che emergono dall'acqua per far respirare la pianta.",
    description:
      "Cresce rigoglioso lungo le sponde umide del fiume Adige che lambisce Bosco Buri. Questo maestoso albero è una conifera insolita in quanto decidua: perde le sue foglie aghiformi e soffici in inverno, che in autunno si tingono di un rosso ruggine spettacolare.",
  },
];

// --- 2. State Variables ---
let map = null;
let currentTileLayer = null;
let markersGroup = [];
let selectedPlant = null;
let activeMarkerId = null;
let userMarker = null;
let userAccuracyCircle = null;
let isDarkTheme = false;
let visitedPlants = JSON.parse(
  localStorage.getItem("florafind_visited") || "[]",
);
let currentSearch = "";
let currentCategory = "all";

// Audio speech synthesis variables
let speechUtterance = null;
let isSpeaking = false;

// Geolocation Walk Simulation variables
let isSimulating = false;
let simulationInterval = null;
let simStepIndex = 0;
const SIMULATION_ROUTE = [
  [45.4187, 11.0402], // Gate
  [45.419, 11.0406], // Near Magnolia
  [45.4193, 11.0408], // Oak path
  [45.4196, 11.0415], // Near Japanese Maple
  [45.42, 11.0412], // Near Ginkgo
  [45.4205, 11.041], // Near Maidenhair
  [45.4209, 11.0403], // Near Hart's Tongue
  [45.4214, 11.0415], // Near Plume Poppy
  [45.4207, 11.0432], // Near Cypress
  [45.4199, 11.0431], // Near Rosemary
  [45.4192, 11.0425], // Near Water Lily
  [45.4187, 11.0421], // Near Lotus
];

// --- 3. DOM Elements ---
const searchInput = document.getElementById("plant-search");
const clearSearchBtn = document.getElementById("clear-search");
const chipsContainer = document.getElementById("filter-chips");
const themeToggle = document.getElementById("theme-toggle");
const locateBtn = document.getElementById("btn-locate");
const simulateBtn = document.getElementById("btn-simulate");
const questToggle = document.getElementById("quest-toggle");
const questModal = document.getElementById("quest-modal");
const closeQuestBtn = document.getElementById("close-quest");
const questList = document.getElementById("quest-list");
const questProgressText = document.getElementById("quest-progress-text");
const questProgressFill = document.getElementById("quest-progress-fill");
const questBadge = document.querySelector(".quest-progress-badge");

// Drawer elements
const drawer = document.getElementById("detail-drawer");
const drawerHandleBar = document.querySelector(".drawer-handle-bar");
const drawerPlantName = document.getElementById("drawer-plant-name");
const drawerPlantScientific = document.getElementById(
  "drawer-plant-scientific",
);
const drawerPlantRarity = document.getElementById("drawer-plant-rarity");
const drawerPlantDesc = document.getElementById("drawer-plant-desc");
const drawerPlantFunfact = document.getElementById("drawer-plant-funfact");
const plantImageShowcase = document.getElementById("plant-image-placeholder");
const statSun = document.getElementById("stat-sun");
const statWater = document.getElementById("stat-water");
const statHeight = document.getElementById("stat-height");
const statOrigin = document.getElementById("stat-origin");
const audioBtn = document.getElementById("btn-audio-guide");
const audioBtnText = document.getElementById("audio-btn-text");
const checkinBtn = document.getElementById("btn-checkin");

// --- 4. Map Initialization ---
function initMap() {
  const centerCoord = [45.4198, 11.0413]; // Center of Villa Buri Park

  // Set bounds to Bosco Buri area
  const southWest = L.latLng(45.415, 11.034);
  const northEast = L.latLng(45.424, 11.048);
  const bounds = L.latLngBounds(southWest, northEast);

  map = L.map("map", {
    center: centerCoord,
    zoom: 17,
    minZoom: 15,
    maxZoom: 21,
    maxBounds: bounds,
    maxBoundsViscosity: 0.85,
  });

  updateMapTileLayer();
}

function updateMapTileLayer() {
  if (currentTileLayer) {
    map.removeLayer(currentTileLayer);
  }

  const lightTiles =
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
  const darkTiles =
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png";
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

  const tileUrl = isDarkTheme ? darkTiles : lightTiles;

  currentTileLayer = L.tileLayer(tileUrl, {
    attribution: attribution,
    subdomains: "abcd",
    maxZoom: 21,
  }).addTo(map);
}

// --- 5. Marker Generator ---
function renderMarkers() {
  // Clear existing markers
  markersGroup.forEach((m) => map.removeLayer(m.marker));
  markersGroup = [];

  PLANTS_DATABASE.forEach((plant) => {
    // Determine color based on plant category
    let colorHex = "#10b981"; // Emerald default
    let colorRGB = "16, 185, 129";

    if (plant.category === "flowers") {
      colorHex = "#ec4899";
      colorRGB = "236, 72, 153";
    } else if (plant.category === "ferns") {
      colorHex = "#22c55e";
      colorRGB = "34, 197, 94";
    } else if (plant.category === "herbs") {
      colorHex = "#84cc16";
      colorRGB = "132, 204, 22";
    } else if (plant.category === "exotics") {
      colorHex = "#a855f7";
      colorRGB = "168, 85, 247";
    }

    // Custom CSS DivIcon for visual wow factor
    const customIcon = L.divIcon({
      className: `pulsing-marker plant-id-${plant.id}`,
      html: `
        <div class="marker-pin" style="background-color: ${colorHex};"></div>
        <div class="marker-ring" style="background-color: ${colorHex}; --marker-color-rgb: ${colorRGB};"></div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });

    const marker = L.marker(plant.coordinates, { icon: customIcon }).addTo(map);

    // Click handler for marker
    marker.on("click", () => {
      selectPlant(plant);
    });

    markersGroup.push({
      plant: plant,
      marker: marker,
    });
  });

  applyFilters();
}

function selectPlant(plant) {
  // Reset previously active marker style
  if (activeMarkerId) {
    const prevEl = document.querySelector(`.plant-id-${activeMarkerId}`);
    if (prevEl) prevEl.classList.remove("active-marker");
  }

  selectedPlant = plant;
  activeMarkerId = plant.id;

  // Set current marker element as active
  const el = document.querySelector(`.plant-id-${plant.id}`);
  if (el) el.classList.add("active-marker");

  // Center map slightly offset for visual headroom
  const latOffset = window.innerWidth > 768 ? 0 : 0.0007; // Offset only on mobile to accommodate bottom sheet
  map.setView([plant.coordinates[0] - latOffset, plant.coordinates[1]], 18, {
    animate: true,
    duration: 0.6,
  });

  // Load details into Bottom Sheet / Sidebar
  populateDrawer(plant);
  openDrawer();
}

function populateDrawer(plant) {
  drawerPlantName.innerText = plant.name;
  drawerPlantScientific.innerText = plant.scientificName;

  // Rarity Badge styling
  const rarityTranslations = {
    common: "Comune",
    rare: "Raro",
    exotic: "Esotico",
  };
  drawerPlantRarity.innerText =
    rarityTranslations[plant.rarity] || plant.rarity;
  drawerPlantRarity.className = `rarity-badge ${plant.rarity}`;

  // Stats Grid
  statSun.innerText = plant.sunlight;
  statWater.innerText = plant.water;
  statHeight.innerText = plant.height;
  statOrigin.innerText = plant.nativeTo;

  // Rich Text Description & Fun Fact
  drawerPlantDesc.innerText = plant.description;
  drawerPlantFunfact.innerText = plant.funFact;

  // Media Banner Showcase
  plantImageShowcase.innerHTML = `
    <img src="${plant.image}" alt="${plant.name}">
    <div class="plant-card-overlay">
      <span class="plant-card-family">${plant.family}</span>
    </div>
  `;

  // Update check-in button state
  updateCheckinButtonState();

  // Reset Audio Guide
  stopSpeech();
}

// --- 6. Search & Filter Manager ---
function applyFilters() {
  markersGroup.forEach((item) => {
    const matchesSearch =
      item.plant.name.toLowerCase().includes(currentSearch) ||
      item.plant.scientificName.toLowerCase().includes(currentSearch) ||
      item.plant.family.toLowerCase().includes(currentSearch);

    const matchesCategory =
      currentCategory === "all" || item.plant.category === currentCategory;

    if (matchesSearch && matchesCategory) {
      if (!map.hasLayer(item.marker)) {
        item.marker.addTo(map);
      }
    } else {
      if (map.hasLayer(item.marker)) {
        map.removeLayer(item.marker);
      }
    }
  });
}

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value.toLowerCase().trim();

  if (currentSearch.length > 0) {
    clearSearchBtn.classList.remove("hidden");
  } else {
    clearSearchBtn.classList.add("hidden");
  }

  applyFilters();
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  currentSearch = "";
  clearSearchBtn.classList.add("hidden");
  applyFilters();
});

chipsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("chip")) {
    // Update active class
    document
      .querySelectorAll(".chip")
      .forEach((c) => c.classList.remove("active"));
    e.target.classList.add("active");

    currentCategory = e.target.dataset.category;
    applyFilters();
  }
});

// --- 7. Bottom Drawer Swipe Gestures (Touchscreen Optimized) ---
let startY = 0;
let currentY = 0;
let isDragging = false;
let drawerStartTranslateY = 0;

function openDrawer() {
  drawer.classList.remove("hidden");
  if (window.innerWidth > 768) {
    drawer.className = "drawer glass-drawer full";
  } else {
    drawer.className = "drawer glass-drawer peek";
  }
}

function closeDrawer() {
  drawer.classList.remove("peek", "full");
  drawer.classList.add("hidden");
  stopSpeech();
}

// Mobile-only Touch Gesture Listeners
drawerHandleBar.addEventListener(
  "touchstart",
  (e) => {
    if (window.innerWidth > 768) return; // Disable drag on desktop sidebar
    startY = e.touches[0].clientY;
    isDragging = true;
    drawer.style.transition = "none"; // Disable animations while dragging

    // Calculate current transform offset
    const transform = window.getComputedStyle(drawer).transform;
    if (transform && transform !== "none") {
      const matrix = new DOMMatrixReadOnly(transform);
      drawerStartTranslateY = matrix.m42; // get Y translation
    } else {
      drawerStartTranslateY = 0;
    }
  },
  { passive: true },
);

document.addEventListener(
  "touchmove",
  (e) => {
    if (!isDragging) return;
    currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    // Constrain drag boundaries
    let targetTranslateY = drawerStartTranslateY + deltaY;
    const maxPeekTranslation = window.innerHeight - 100;

    if (targetTranslateY < 0) {
      targetTranslateY = targetTranslateY * 0.2; // Resist pulling past top
    }

    drawer.style.transform = `translateY(${targetTranslateY}px)`;
  },
  { passive: false },
);

document.addEventListener("touchend", (e) => {
  if (!isDragging) return;
  isDragging = false;
  drawer.style.transition = ""; // Restore smooth transitions

  const endTranslateY = drawerStartTranslateY + (currentY - startY);
  const threshold = 80; // drag threshold to switch states

  if (drawer.classList.contains("peek")) {
    if (startY - currentY > threshold) {
      // Dragged up from peek -> Snap to Full
      drawer.style.transform = "";
      drawer.classList.remove("peek");
      drawer.classList.add("full");
    } else if (currentY - startY > threshold) {
      // Dragged down from peek -> Close entirely
      drawer.style.transform = "";
      closeDrawer();
    } else {
      // Reset to peek
      drawer.style.transform = "";
    }
  } else if (drawer.classList.contains("full")) {
    if (currentY - startY > threshold) {
      // Dragged down from full -> Snap to Peek
      drawer.style.transform = "";
      drawer.classList.remove("full");
      drawer.classList.add("peek");
    } else {
      // Reset to full
      drawer.style.transform = "";
    }
  }
});

// --- 8. Geolocation GPS Tracking ---
let gpsWatchId = null;

function locateUser() {
  if (!navigator.geolocation) {
    alert("La geolocalizzazione non è supportata dal tuo browser.");
    return;
  }

  locateBtn.classList.add("loading-pulse");

  // Start watching position
  gpsWatchId = navigator.geolocation.watchPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      updateUserLocationMarker(lat, lng, accuracy);

      locateBtn.classList.remove("loading-pulse");
      locateBtn.classList.add("highlight"); // Keep button highlighted while active

      // Check if user is in Villa Buri bounds (Rough boundary box)
      const isInsideBuri =
        lat >= 45.414 && lat <= 45.425 && lng >= 11.033 && lng <= 11.049;

      if (!isInsideBuri && !isSimulating) {
        // Show simulated dialog
        alert(
          "Ti trovi al di fuori del parco di Bosco Buri (Verona, Italia). Avvio di una passeggiata virtuale simulata per testare le funzionalità dell'app!",
        );
        startWalkSimulation();
      } else if (!isSimulating) {
        // Center on user if they are in the park
        map.setView([lat, lng], 17, { animate: true });
      }
    },
    (error) => {
      console.warn("GPS tracking error: ", error.message);
      locateBtn.classList.remove("loading-pulse");
      if (!isSimulating) {
        alert(
          "Impossibile accedere al GPS. Avvio della passeggiata virtuale simulata!",
        );
        startWalkSimulation();
      }
    },
    { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 },
  );
}

function stopLocatingUser() {
  if (gpsWatchId) {
    navigator.geolocation.clearWatch(gpsWatchId);
    gpsWatchId = null;
  }
  if (userMarker) {
    map.removeLayer(userMarker);
    userMarker = null;
  }
  if (userAccuracyCircle) {
    map.removeLayer(userAccuracyCircle);
    userAccuracyCircle = null;
  }
  locateBtn.classList.remove("highlight", "loading-pulse");
}

function updateUserLocationMarker(lat, lng, accuracy) {
  // Pulsating Blue User Marker
  if (userMarker) {
    userMarker.setLatLng([lat, lng]);
  } else {
    const userIcon = L.divIcon({
      className: "user-location-marker",
      html: '<div class="user-dot"></div><div class="user-pulse"></div>',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });
    userMarker = L.marker([lat, lng], { icon: userIcon }).addTo(map);
  }

  // Accuracy Circle
  if (userAccuracyCircle) {
    userAccuracyCircle.setLatLng([lat, lng]).setRadius(accuracy);
  } else {
    userAccuracyCircle = L.circle([lat, lng], {
      radius: accuracy,
      color: "#3b82f6",
      fillColor: "#3b82f6",
      fillOpacity: 0.15,
      weight: 1,
    }).addTo(map);
  }
}

locateBtn.addEventListener("click", () => {
  if (gpsWatchId) {
    stopLocatingUser();
  } else {
    locateUser();
  }
});

// --- 9. Walk Simulation (For testability) ---
function startWalkSimulation() {
  if (isSimulating) {
    stopWalkSimulation();
    return;
  }

  isSimulating = true;
  simulateBtn.classList.add("active-sim");
  simStepIndex = 0;

  // Set simulator coordinates initially
  const startLoc = SIMULATION_ROUTE[simStepIndex];
  updateUserLocationMarker(startLoc[0], startLoc[1], 15);
  map.setView(startLoc, 17, { animate: true });

  simulationInterval = setInterval(() => {
    simStepIndex = (simStepIndex + 1) % SIMULATION_ROUTE.length;
    const currentPos = SIMULATION_ROUTE[simStepIndex];

    updateUserLocationMarker(currentPos[0], currentPos[1], 10);
    map.setView(currentPos, 17, { animate: true });

    // Check if any plants are nearby (within 35 meters)
    checkNearbyPlants(currentPos[0], currentPos[1]);
  }, 4000);
}

function stopWalkSimulation() {
  isSimulating = false;
  simulateBtn.classList.remove("active-sim");
  if (simulationInterval) {
    clearInterval(simulationInterval);
    simulationInterval = null;
  }
}

simulateBtn.addEventListener("click", () => {
  startWalkSimulation();
});

function calculateDistance(lat1, lon1, lat2, lon2) {
  // Haversine formula to compute distance in meters
  const R = 6371e3; // metres
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) *
      Math.cos(phi2) *
      Math.sin(deltaLambda / 2) *
      Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in metres
}

function checkNearbyPlants(userLat, userLng) {
  PLANTS_DATABASE.forEach((plant) => {
    const dist = calculateDistance(
      userLat,
      userLng,
      plant.coordinates[0],
      plant.coordinates[1],
    );

    // If user is within 30 meters, highlight it
    if (dist < 30) {
      // Auto-trigger plant selection as they "walk past" it
      selectPlant(plant);
    }
  });
}

// --- 10. Text-to-Speech Engine (Audio Guide) ---
function speakText(text) {
  if ("speechSynthesis" in window) {
    stopSpeech(); // Stop any active speech

    speechUtterance = new SpeechSynthesisUtterance(text);
    speechUtterance.lang = "it-IT";

    // Try to get a high-quality Italian or English voice based on browser settings
    const voices = window.speechSynthesis.getVoices();

    // Choose an appropriate slow, clear voice
    speechUtterance.rate = 0.9;
    speechUtterance.pitch = 1.0;

    speechUtterance.onend = () => {
      resetAudioButton();
    };

    speechUtterance.onerror = () => {
      resetAudioButton();
    };

    window.speechSynthesis.speak(speechUtterance);

    // Update button visual
    audioBtn.classList.add("active-audio");
    audioBtnText.innerText = "Ferma Guida Vocale";
    isSpeaking = true;
  } else {
    alert("Text-to-speech audio guide is not supported in this browser.");
  }
}

function stopSpeech() {
  if ("speechSynthesis" in window && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
  resetAudioButton();
}

function resetAudioButton() {
  audioBtn.classList.remove("active-audio");
  audioBtnText.innerText = "Ascolta la Guida";
  isSpeaking = false;
}

audioBtn.addEventListener("click", () => {
  if (!selectedPlant) return;

  if (isSpeaking) {
    stopSpeech();
  } else {
    // Speak common name + family + description + fun fact
    const textToSpeak = `${selectedPlant.name}, della famiglia delle ${selectedPlant.family}. ${selectedPlant.description} Curiosità: ${selectedPlant.funFact}`;
    speakText(textToSpeak);
  }
});

// Need to handle voice list updates asynchronously in Chrome
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

// --- 11. Scavenger Hunt / Quest Tracker ---
function initQuestTracker() {
  renderQuestList();
  updateQuestProgress();
}

function updateQuestProgress() {
  const total = PLANTS_DATABASE.length;
  const count = visitedPlants.length;
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;

  questBadge.innerText = `${pct}%`;
  questProgressText.innerText = `${count} / ${total} Piante Trovate`;
  questProgressFill.style.width = `${pct}%`;

  // Highlight trophy button if completed
  if (pct === 100) {
    questToggle.classList.add("highlight");
  }
}

function renderQuestList() {
  questList.innerHTML = "";

  PLANTS_DATABASE.forEach((plant) => {
    const isVisited = visitedPlants.includes(plant.id);
    const li = document.createElement("li");
    li.className = `quest-item ${isVisited ? "completed" : ""}`;

    li.innerHTML = `
      <div class="quest-item-info">
        <span class="quest-item-name">${plant.name}</span>
        <span class="quest-item-scientific">${plant.scientificName}</span>
      </div>
      <span class="quest-check ${isVisited ? "checked" : "pending"}">
        ${isVisited ? '<i data-lucide="check-circle-2"></i>' : '<i data-lucide="circle"></i>'}
      </span>
    `;

    li.addEventListener("click", () => {
      questModal.classList.add("hidden");
      selectPlant(plant);
    });

    questList.appendChild(li);
  });

  // Refresh Lucide Icons inside dynamic elements
  lucide.createIcons();
}

function updateCheckinButtonState() {
  if (!selectedPlant) return;

  const isVisited = visitedPlants.includes(selectedPlant.id);

  if (isVisited) {
    checkinBtn.disabled = true;
    checkinBtn.className = "action-btn primary-action disabled";
    checkinBtn.innerHTML =
      '<i data-lucide="check-circle-2"></i> <span>Registrata!</span>';
  } else {
    checkinBtn.disabled = false;
    checkinBtn.className = "action-btn primary-action";
    checkinBtn.innerHTML =
      '<i data-lucide="plus-circle"></i> <span>Trovata! Registra</span>';
  }
  lucide.createIcons();
}

checkinBtn.addEventListener("click", () => {
  if (!selectedPlant) return;

  if (!visitedPlants.includes(selectedPlant.id)) {
    visitedPlants.push(selectedPlant.id);
    localStorage.setItem("florafind_visited", JSON.stringify(visitedPlants));

    // Trigger checkin animations and progress
    updateQuestProgress();
    renderQuestList();
    updateCheckinButtonState();

    // Check if fully completed
    if (visitedPlants.length === PLANTS_DATABASE.length) {
      triggerConfettiCelebration();
    }
  }
});

function triggerConfettiCelebration() {
  // Create virtual confetti particles overlaying map
  const celebrateDiv = document.createElement("div");
  celebrateDiv.className = "celebrate-popup active";
  celebrateDiv.innerHTML = `
    <i data-lucide="party-popper" style="width: 48px; height: 48px; color: #d97706;"></i>
    <h3 style="font-family: var(--font-heading); font-size: 24px; color: var(--accent-gold);">Sfida Completata!</h3>
    <p style="font-size: 14px; text-align: center; color: var(--text-secondary);">Congratulazioni! Hai trovato tutte le 15 piante storiche a Bosco Buri!</p>
  `;
  document.body.appendChild(celebrateDiv);
  lucide.createIcons();

  // Custom particle generator
  for (let i = 0; i < 60; i++) {
    createConfettiParticle();
  }

  setTimeout(() => {
    celebrateDiv.remove();
  }, 4000);
}

function createConfettiParticle() {
  const p = document.createElement("div");
  p.style.position = "absolute";
  p.style.width = `${Math.random() * 8 + 5}px`;
  p.style.height = `${Math.random() * 8 + 5}px`;

  const colors = ["#10b981", "#ec4899", "#f59e0b", "#3b82f6", "#a855f7"];
  p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  p.style.left = `${Math.random() * 100}vw`;
  p.style.top = "-20px";
  p.style.borderRadius = "50%";
  p.style.zIndex = "100";
  p.style.pointerEvents = "none";

  document.body.appendChild(p);

  const duration = Math.random() * 3 + 2;
  const xOffset = (Math.random() - 0.5) * 200;

  p.animate(
    [
      { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
      {
        transform: `translate(${xOffset}px, 105vh) rotate(${Math.random() * 360}deg)`,
        opacity: 0,
      },
    ],
    {
      duration: duration * 1000,
      easing: "cubic-bezier(0.1, 0.8, 0.3, 1)",
    },
  );

  setTimeout(() => p.remove(), duration * 1000);
}

questToggle.addEventListener("click", () => {
  renderQuestList();
  questModal.classList.remove("hidden");
});

closeQuestBtn.addEventListener("click", () => {
  questModal.classList.add("hidden");
});

questModal.addEventListener("click", (e) => {
  if (e.target === questModal) {
    questModal.classList.add("hidden");
  }
});

// --- 12. Theme Manager (Dark / Light Mode) ---
themeToggle.addEventListener("click", () => {
  isDarkTheme = !isDarkTheme;
  document.body.classList.toggle("light-mode");

  // Switch theme toggle icon
  const icon = themeToggle.querySelector("i");
  if (isDarkTheme) {
    icon.setAttribute("data-lucide", "sun");
  } else {
    icon.setAttribute("data-lucide", "moon");
  }
  lucide.createIcons();

  // Reload styled map tiles
  updateMapTileLayer();
});

// Close drawer if clicking empty areas of the map
document.addEventListener("DOMContentLoaded", () => {
  initMap();
  renderMarkers();
  initQuestTracker();
  lucide.createIcons();

  map.on("click", (e) => {
    // If user clicks on map (not a marker) close the drawer
    closeDrawer();

    // Reset active marker highlight
    if (activeMarkerId) {
      const prevEl = document.querySelector(`.plant-id-${activeMarkerId}`);
      if (prevEl) prevEl.classList.remove("active-marker");
      activeMarkerId = null;
      selectedPlant = null;
    }
  });
});
