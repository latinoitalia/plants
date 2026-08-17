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
    diameter: "large",
    coordinates: [45.420424, 11.042593],
    sunlight: "Sole Diretto",
    water: "Moderata",
    height: "30m",
    nativeTo: "Europa e Asia Occidentale",
    image: "sequoiaai.png",
    funFact:
      "A fronte di altezze che superano i 110 metri e volumi del tronco immensi, le sequoie non hanno una radice fittonante profonda.",
    description:
      "Specie naturalizzata. Appartiene alla famiglia delle Cupressaceae. Le foglie simili ai denti di un pettine sono disposte in rametti piatti. I piccoli coni si presentano arrotondati o allungati. La corteccia è molto spessa, fibrosa e molto morbida, adatta a contrastare gli incendi tipici della zona d'origine, Californa e Oregon.",
  },
  {
    id: "01",
    name: "Canna D'India",
    scientificName: "Canna indica",
    family: "Cannaceae",
    category: "flowers",
    rarity: "common",
    diameter: "medium",
    coordinates: [45.419603, 11.040126],
    sunlight: "Sole Diretto",
    water: "Moderata",
    height: "1.5m",
    nativeTo: "America Tropicale",
    image: "cannaindica.png",
    funFact:
      "i fiori della Canna sono ermafroditi e attraggono farfalle e colibrì per l'impollinazione. Le foglie possono essere utilizzate per avvolgere cibi in alcune culture.",
    description:
      "Questa pianta tropicale è nota per i suoi grandi fiori colorati e le foglie decorative. Fiorisce in estate e autunno, aggiungendo un tocco esotico al giardino di Villa Buri. Le sue radici tuberose possono essere utilizzate come alimento in alcune culture.",
  },
  {
    id: "magnolia",
    name: "Magnolia Grandiflora",
    scientificName: "Magnolia grandiflora",
    family: "Magnoliaceae",
    category: "trees",
    rarity: "common",
    diameter: "large",
    coordinates: [45.4231, 11.044115],
    sunlight: "Sole o Mezz'ombra",
    water: "Moderata",
    height: "20m",
    nativeTo: "Stati Uniti Sud-orientali",
    image: "magnolia.png",
    funFact:
      "Le magnolie si sono evolute prima della comparsa delle api! I loro petali sono spessi e coriacei per resistere all'impollinazione da parte dei coleotteri.",
    description:
      "Domina il grande prato di fronte all'ingresso principale di Villa Buri. Questo splendido albero presenta foglie coriacee verde scuro lucido con pagina inferiore color ruggine e produce enormi fiori bianchi profumati in estate.",
  },
  {
    id: "38",
    name: "Cedro",
    scientificName: "Cedrus deodara",
    family: "Pinaceae",
    category: "trees",
    rarity: "common",
    diameter: "large",
    coordinates: [45.420402, 11.042141],
    sunlight: "Sole o Mezz'ombra",
    water: "Moderata",
    height: "30m",
    nativeTo: "Stati Uniti Sud-orientali",
    image: "cedro.png",
    funFact:
      "I cedri sono spesso utilizzati come alberi ornamentali nei parchi e nei giardini per la loro maestosità e resistenza. La loro legna è nota per il suo profumo aromatico e la sua durabilità.",
    description:
      "Specie ornamentale esotica, originaria del Medio Oriente. Appartiene alla famiglia delle Pinaceae. Utilizzata nei parchi per la sua imponenza e resistenza. Simbolo di longevità.",
  },
  {
    id: "331",
    name: "Cedro dell'Himalaya",
    scientificName: "Cedrus deodara",
    family: "Pinaceae",
    category: "exotics",
    rarity: "rare",
    diameter: "large",
    coordinates: [45.41963, 11.040851],
    sunlight: "Sole Diretto",
    water: "Bassa",
    height: "30m",
    nativeTo: "Asia (Himalaya)",
    image: "cedro.png",
    funFact:
      "Il suo nome 'Deodara' deriva dal sanscrito e significa 'legno degli dei', sottolineando la sua importanza culturale e spirituale nelle regioni d'origine.",
    description:
      "Specie esotica ornamentale originaria dell’Asia. Appartiene alla famiglia delle Pinaceae. Questo esemplare ha un tronco con un diametro di 128 cm. Apprezzata per il portamento elegante e la resistenza, è utilizzata in parchi e grandi giardini.",
  },
  {
    id: "330",
    name: "Pino Domestico",
    scientificName: "Pinus pinea",
    family: "Pinaceae",
    category: "trees",
    rarity: "common",
    diameter: "large",
    coordinates: [45.419586, 11.040746],
    sunlight: "Sole Diretto",
    water: "Bassa",
    height: ">30m",
    nativeTo: "Area Mediterranea",
    image: "pino.png",
    funFact:
      "I suoi semi, i pinoli, sono un ingrediente pregiato in molte cucine mediterranee, dal pesto alla pasticceria.",
    description:
      "Specie di entità indigena dell’area mediterranea. Appartiene alla famiglia delle Pinaceae. Questo esemplare ha un tronco con un diametro di 86 cm. Diffuso per la produzione dei pinoli e per l’ombra in ambienti urbani. Caratteristico delle pinete costiere.",
  },
  {
    id: "platano",
    name: "Platano Comune",
    scientificName: "Platanus × acerifolia",
    family: "Platanaceae",
    category: "trees",
    rarity: "common",
    diameter: "large",
    coordinates: [45.420223, 11.036481],
    sunlight: "Sole Diretto",
    water: "Moderata",
    height: ">25m",
    nativeTo: "Ibrido (Europa)",
    image: "platano.png",
    funFact:
      "La sua corteccia si sfalda in placche, creando un caratteristico aspetto 'mimetico'. È uno degli alberi più resistenti all'inquinamento urbano.",
    description:
      "Specie ibrida molto comune nei viali e parchi cittadini per la sua resistenza e l'ampia ombra che offre. Le sue grandi foglie palmate assomigliano a quelle dell'acero, da cui il nome 'acerifolia'.",
  },
  {
    id: "pioppo-nero",
    name: "Pioppo Nero",
    scientificName: "Populus nigra",
    family: "Salicaceae",
    category: "trees",
    rarity: "common",
    diameter: "large",
    coordinates: [45.420385, 11.037437],
    sunlight: "Sole Diretto",
    water: "Alta",
    height: ">30m",
    nativeTo: "Europa e Asia",
    image: "pioppo1.jfif",
    funFact:
      "Il pioppo nero è una delle specie arboree a più rapida crescita in Europa. Il suo legno leggero è stato storicamente utilizzato per produrre zoccoli e fiammiferi.",
    description:
      "Albero imponente 200 anni di vita, tipico delle zone umide e dei corsi d'acqua. Ha una corteccia scura e profondamente fessurata negli esemplari adulti e foglie a forma di diamante. Svolge un ruolo ecologico importante stabilizzando le rive dei fiumi.",
  },
  {
    id: "pioppo-nero-2",
    name: "Pioppo Nero",
    scientificName: "Populus nigra",
    family: "Salicaceae",
    category: "trees",
    rarity: "common",
    diameter: "large",
    coordinates: [45.420462, 11.037612],
    sunlight: "Sole Diretto",
    water: "Alta",
    height: ">30m",
    nativeTo: "Europa e Asia",
    image: "pioppo2.jfif",
    funFact:
      "Il pioppo nero è una delle specie arboree a più rapida crescita in Europa. Il suo legno leggero è stato storicamente utilizzato per produrre zoccoli e fiammiferi.",
    description:
      "Albero imponente tipico delle zone umide e dei corsi d'acqua. Ha una corteccia scura e profondamente fessurata negli esemplari adulti e foglie a forma di diamante. Svolge un ruolo ecologico importante stabilizzando le rive dei fiumi. Purtroppo è stato acceso un fuoco nel suo interno, ma per fortuna è sopravissuto",
  },
  {
    id: "alloro",
    name: "Alloro",
    scientificName: "Laurus nobilis",
    family: "Lauraceae",
    category: "herbs",
    rarity: "common",
    diameter: "small",
    coordinates: [45.421091, 11.041863],
    sunlight: "Sole o Mezz'ombra",
    water: "Bassa",
    height: "<10m",
    nativeTo: "Regione Mediterranea",
    image: "alloro.jfif",
    funFact:
      "Le sue foglie venivano usate nell'antichità per creare corone per poeti e vincitori, simbolo di saggezza e gloria.",
    description:
      "Arbusto sempreverde aromatico, tipico della macchia mediterranea. Le sue foglie lucide e coriacee sono ampiamente utilizzate in cucina per insaporire piatti. Può crescere come un piccolo albero se non potato.",
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
let isFirstLocationUpdate = true;
let visitedPlants = JSON.parse(
  localStorage.getItem("florafind_visited") || "[]",
);
let currentSearch = "";
let currentCategory = "all";

// Audio speech synthesis variables
let speechUtterance = null;
let isSpeaking = false;

// --- 3. DOM Elements ---
const searchInput = document.getElementById("plant-search");
const clearSearchBtn = document.getElementById("clear-search");
const chipsContainer = document.getElementById("filter-chips");
const themeToggle = document.getElementById("theme-toggle");
const locateBtn = document.getElementById("btn-locate");
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
  const centerCoord = [45.4198, 11.0411]; // Center of Villa Buri Park

  // Set bounds to Bosco Buri area
  const southWest = L.latLng(45.415, 11.033);
  const northEast = L.latLng(45.424, 11.047);
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
    // Rimuove il layer corrente dalla mappa, che sia un singolo layer o un gruppo
    map.removeLayer(currentTileLayer);
  }

  let tileUrl, attribution;

  if (isDarkTheme) {
    // Tema scuro: Ibrido Satellitare con etichette scure per un look moderno
    const imageryLayer = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
      },
    );
    const labelsLayer = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        pane: "shadowPane", // Assicura che le etichette stiano sopra l'immagine
      },
    );
    currentTileLayer = L.layerGroup([imageryLayer, labelsLayer]).addTo(map);
  } else {
    // Tema chiaro: OpenTopoMap per evidenziare vegetazione e sentieri
    tileUrl = "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png";
    attribution =
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)';
    currentTileLayer = L.tileLayer(tileUrl, {
      attribution: attribution,
      subdomains: "abc",
      maxNativeZoom: 17, // OpenTopoMap ha tile nativi solo fino a zoom 17
      maxZoom: 21,
    }).addTo(map);
  }

  // Assicura che il pannello delle etichette sia visibile
  map.getPane("shadowPane").style.zIndex = 650;
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
      colorHex = "#4ade80"; // Verde più brillante per un miglior contrasto
      colorRGB = "74, 222, 128";
    } else if (plant.category === "exotics") {
      colorHex = "#a855f7";
      colorRGB = "168, 85, 247";
    }

    // Determine marker size class from diameter
    let sizeClass = "marker-medium"; // Default
    if (plant.diameter === "small") {
      sizeClass = "marker-small";
    } else if (plant.diameter === "large") {
      sizeClass = "marker-large";
    }

    // Set icon size for clickable area
    const iconSizeMap = { small: 28, medium: 36, large: 44 };
    const size = iconSizeMap[plant.diameter] || 36;

    // Custom CSS DivIcon for visual wow factor
    const customIcon = L.divIcon({
      className: `pulsing-marker ${sizeClass} plant-id-${plant.id}`,
      html: `
        <div class="marker-pin" style="background-color: ${colorHex};"></div>
        <div class="marker-ring" style="background-color: ${colorHex}; --marker-color-rgb: ${colorRGB};"></div>
      `,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
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
  drawer.classList.remove("hidden", "peek", "full"); // Pulisce sempre le classi di stato
  if (window.innerWidth > 768) {
    drawer.classList.add("full");
  } else {
    drawer.classList.add("peek");
  }
}

function closeDrawer() {
  drawer.classList.remove("peek", "full");
  drawer.classList.add("hidden");
  stopSpeech();

  // Crucial fix: Also reset the active marker state when closing the drawer.
  // This prevents the map click from immediately re-selecting the same marker.
  if (activeMarkerId) {
    const prevEl = document.querySelector(`.plant-id-${activeMarkerId}`);
    if (prevEl) prevEl.classList.remove("active-marker");
    activeMarkerId = null;
    selectedPlant = null;

    // Rimuove l'hash dall'URL senza attivare l'evento hashchange,
    // per evitare che il drawer si riapra immediatamente.
    // Il terzo parametro (URL) è supportato dai browser moderni.
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search,
    );
  }
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

      if (!isInsideBuri) {
        alert(
          "Sembra che tu sia al di fuori dell'area del parco di Bosco Buri. La localizzazione funzionerà correttamente quando sarai all'interno del parco.",
        );
      } else {
        if (isFirstLocationUpdate) {
          map.setView([lat, lng], 17, { animate: true });
          isFirstLocationUpdate = false;
        }
      }
    },
    (error) => {
      console.warn("GPS tracking error: ", error.message);
      locateBtn.classList.remove("loading-pulse");
      alert("Impossibile accedere alla tua posizione GPS.");
    },
    { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 },
  );
}

function stopLocatingUser() {
  if (gpsWatchId) {
    navigator.geolocation.clearWatch(gpsWatchId);
    gpsWatchId = null;
    isFirstLocationUpdate = true; // Reset for the next time
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
function applyTheme() {
  const icon = themeToggle.querySelector("i");
  if (isDarkTheme) {
    document.body.classList.remove("light-mode");
    icon.setAttribute("data-lucide", "sun");
  } else {
    document.body.classList.add("light-mode");
    icon.setAttribute("data-lucide", "moon");
  }
  lucide.createIcons(); // Spostato qui per garantire la sincronizzazione
  updateMapTileLayer();
}

themeToggle.addEventListener("click", () => {
  isDarkTheme = !isDarkTheme;
  applyTheme();
});

// --- 13. Deep Linking ---
function handleDeepLink() {
  const hash = window.location.hash;
  if (hash) {
    // Rimuove il carattere '#' per ottenere l'ID pulito (es. da '#magnolia' a 'magnolia')
    const plantId = hash.substring(1);
    const plant = PLANTS_DATABASE.find((p) => p.id === plantId);

    if (plant) {
      // Seleziona la pianta dopo un breve ritardo per assicurarsi che la mappa sia completamente inizializzata
      setTimeout(() => {
        selectPlant(plant);
      }, 500);
    }
  }
}

// Close drawer if clicking empty areas of the map
document.addEventListener("DOMContentLoaded", () => {
  initMap();
  renderMarkers();
  initQuestTracker();
  handleDeepLink(); // Controlla se c'è un link diretto a una pianta
  applyTheme(); // Applica il tema corretto (chiaro) all'avvio
  lucide.createIcons();

  // Ascolta le modifiche all'hash per aggiornare la selezione della pianta dinamicamente
  window.addEventListener("hashchange", handleDeepLink);

  map.on("click", (e) => {
    // If user clicks on map (not a marker) close the drawer
    closeDrawer(); // This function now handles all cleanup logic
  });
});
