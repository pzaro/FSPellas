// --- ΡΥΘΜΙΣΕΙΣ ---
const SHOW_ALL_MODE = true; 

// --- ΔΕΔΟΜΕΝΑ ΦΑΡΜΑΚΕΙΩΝ (ΠΡΟΣΟΧΗ: Συμπλήρωσε τα lat/lng όπου μπορείς) ---
// lat = Γεωγραφικό Πλάτος, lng = Γεωγραφικό Μήκος
const pharmacies = [
    // Παράδειγμα: Έχω βάλει τυχαίες συντεταγμένες στο κέντρο της Έδεσσας στα 2 πρώτα
    { id: 1, name: "ΑΓΓΕΛΟΥ ΜΑΡΙΑ - ΖΩΗ", area: "Έδεσσα", address: "ΕΓΝΑΤΙΑΣ 9", phone: "2381023410", lat: 40.803, lng: 22.046, map: "https://www.google.com/maps/search/?api=1&query=ΕΓΝΑΤΙΑΣ+9+ΕΔΕΣΣΑ" },
    { id: 2, name: "ΑΓΓΕΛΟΥ ΑΓΓΕΛΟΣ", area: "Έδεσσα", address: "ΕΓΝΑΤΙΑΣ 9", phone: "2381023410", lat: 40.803, lng: 22.046, map: "https://www.google.com/maps/search/?api=1&query=ΕΓΝΑΤΙΑΣ+9+ΕΔΕΣΣΑ" },
    
    // Τα υπόλοιπα έχουν null (δεν θα φανούν πινέζες μέχρι να βάλεις νούμερα)
    { id: 3, name: "ΑΓΟΡΑΣΤΟΥ ΧΡΙΣΤΙΝΑ", area: "Αριδαία", address: "ΑΘ. ΔΙΑΚΟΥ 18", phone: "2384022300", lat: null, lng: null, map: "https://www.google.com/maps/search/?api=1&query=ΑΘ.+ΔΙΑΚΟΥ+18+ΑΡΙΔΑΙΑ" },
    { id: 4, name: "ΑΔΑΜΙΔΗΣ ΘΕΟΔΟΣΙΟΣ", area: "Κρύα Βρύση", address: "Β. ΠΑΥΛΟΥ 77", phone: "2382062100", lat: null, lng: null, map: "https://www.google.com/maps/search/?api=1&query=Β.+ΠΑΥΛΟΥ+77+ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 5, name: "ΑΔΑΜΙΔΟΥ ΜΑΡΘΑ", area: "Κρύα Βρύση", address: "Β. ΠΑΥΛΟΥ 77", phone: "2382062100", lat: null, lng: null, map: "https://www.google.com/maps/search/?api=1&query=Β.+ΠΑΥΛΟΥ+77+ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 6, name: "ΑΘΑΝΑΣΙΑΔΗΣ ΕΥΣΤΡΑΤΙΟΣ", area: "Αριδαία", address: "ΚΥΠΡΟΥ 41", phone: "2384021272", lat: null, lng: null, map: "https://www.google.com/maps/search/?api=1&query=ΚΥΠΡΟΥ+41+ΑΡΙΔΑΙΑ" },
    { id: 7, name: "ΑΘΑΝΑΣΙΑΔΗΣ ΠΑΝΑΓΙΩΤΗΣ", area: "Γιαννιτσά", address: "ΠΛΑΣΤΗΡΑ 29", phone: "2382029108", lat: null, lng: null, map: "https://www.google.com/maps/search/?api=1&query=ΠΛΑΣΤΗΡΑ+29+ΓΙΑΝΝΙΤΣΑ" },
    { id: 8, name: "ΑΛΜΠΑΝΙΔΟΥ ΒΑΣΙΛΙΚΗ", area: "Σκύδρα", address: "ΑΡΣΕΝΙ ΣΚΥΔΡΑΣ", phone: "2381071194", lat: null, lng: null, map: "https://www.google.com/maps/search/?api=1&query=ΑΡΣΕΝΙ+ΣΚΥΔΡΑΣ" },
    { id: 9, name: "ΑΛΤΙΝΙΔΗΣ ΙΩΑΝΝΗΣ", area: "Αριδαία", address: "ΓΑΡΕΦΙ ΑΡΙΔΑΙΑ", phone: "2384075083", lat: null, lng: null, map: "https://www.google.com/maps/search/?api=1&query=ΓΑΡΕΦΙ+ΑΡΙΔΑΙΑ" },
    { id: 10, name: "ΑΜΒΡΟΣΙΔΟΥ ΛΙΑΝΑ", area: "Γιαννιτσά", address: "ΤΡΙΦΥΛΛΙ ΓΙΑΝΝΙΤΣΑ", phone: "2382094300", lat: null, lng: null, map: "https://www.google.com/maps/search/?api=1&query=ΤΡΙΦΥΛΛΙ+ΓΙΑΝΝΙΤΣΑ" },
    // ... ΠΡΟΣΘΕΣΕ ΤΑ ΥΠΟΛΟΙΠΑ ΦΑΡΜΑΚΕΙΑ ΑΠΟ ΤΗ ΛΙΣΤΑ ΣΟΥ ΕΔΩ ΚΑΙ ΒΑΛΕ null ΣΤΑ lat/lng ΑΝ ΔΕΝ ΤΑ ΞΕΡΕΙΣ ...
    // ΣΗΜΕΙΩΣΗ: Για να δουλέψει ο κώδικας, βάλε εδώ όλα τα δεδομένα όπως στο προηγούμενο αρχείο, απλά πρόσθεσε το lat: null, lng: null
    // Έχω βάλει μόνο τα πρώτα 10 για συντομία εδώ, εσύ βάλε και τα 159.
    { id: 158, name: "ΨΥΧΟΓΙΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Έδεσσα", address: "ΕΓΝΑΤΙΑΣ 36", phone: "2381022232", lat: null, lng: null, map: "https://www.google.com/maps/search/?api=1&query=ΕΓΝΑΤΙΑΣ+36+ΕΔΕΣΣΑ" },
    { id: 159, name: "ΨΥΧΟΓΙΟΥ ΣΟΦΙΑ - ΧΡΙΣΤΙΝΑ", area: "Έδεσσα", address: "ΕΓΝΑΤΙΑΣ 36", phone: "2381022232", lat: null, lng: null, map: "https://www.google.com/maps/search/?api=1&query=ΕΓΝΑΤΙΑΣ+36+ΕΔΕΣΣΑ" }
];

// --- ΠΡΟΓΡΑΜΜΑ ---
const schedule = {
    "2025-12-09": [1, 7, 8],
    "2025-12-10": [2, 10, 4]
};

// --- ΑΡΧΙΚΟΠΟΙΗΣΗ ΧΑΡΤΗ ---
let map;
let markersLayer;

function initMap() {
    // Κέντρο του νομού Πέλλας
    map = L.map('map').setView([40.8000, 22.1500], 10);

    // Προσθήκη χάρτη από OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Group για τις πινέζες (για να τις καθαρίζουμε εύκολα)
    markersLayer = L.layerGroup().addTo(map);
}

// --- ΛΟΓΙΚΗ ΕΦΑΡΜΟΓΗΣ ---
document.addEventListener('DOMContentLoaded', () => {
    initMap(); // Ξεκίνα τον χάρτη
    
    const listContainer = document.getElementById('pharmacy-list');
    const dateDisplay = document.getElementById('current-date');
    const areaSelect = document.getElementById('area-select');

    const today = new Date().toISOString().split('T')[0];
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = new Date().toLocaleDateString('el-GR', options);

    let visiblePharmacies = [];

    if (SHOW_ALL_MODE) {
        visiblePharmacies = pharmacies;
        dateDisplay.innerHTML += " <br><span style='font-size:0.8em; color:yellow;'>(Λειτουργία Ελέγχου)</span>";
    } else {
        const todayIds = schedule[today] || [];
        visiblePharmacies = pharmacies.filter(p => todayIds.includes(p.id));
    }

    function renderApp(filterArea) {
        // 1. Καθάρισε τη λίστα και τις πινέζες
        listContainer.innerHTML = '';
        markersLayer.clearLayers();

        // 2. Φιλτράρισμα
        const filtered = filterArea === 'all' 
            ? visiblePharmacies 
            : visiblePharmacies.filter(p => p.area === filterArea);

        // 3. Έλεγχος αν υπάρχουν αποτελέσματα
        if (filtered.length === 0) {
            listContainer.innerHTML = '<p style="text-align:center; padding:20px;">Δεν βρέθηκαν φαρμακεία.</p>';
            // Κέντραρε τον χάρτη γενικά στον νομό
            map.setView([40.8000, 22.1500], 10);
            return;
        }

        // 4. Εμφάνιση Λίστας & Πινέζων
        let markersBounds = []; // Για να κεντράρουμε τον χάρτη στο τέλος

        filtered.forEach(p => {
            // A. Δημιουργία Κάρτας
            const card = document.createElement('div');
            card.className = 'pharmacy-card';
            card.innerHTML = `
                <h3>${p.name} <span class="area-badge">${p.area}</span></h3>
                <div class="details"><i class="fas fa-map-marker-alt"></i> ${p.address}</div>
                <div class="details"><i class="fas fa-phone"></i> ${p.phone}</div>
                <div class="actions">
                    <a href="tel:${p.phone}" class="btn btn-call">Κλήση</a>
                    <a href="${p.map}" target="_blank" class="btn btn-map">Οδηγίες</a>
                </div>
            `;
            listContainer.appendChild(card);

            // B. Δημιουργία Πινέζας (ΜΟΝΟ αν έχουμε lat και lng)
            if (p.lat && p.lng) {
                const marker = L.marker([p.lat, p.lng])
                    .bindPopup(`<b>${p.name}</b><br>${p.phone}<br><a href="${p.map}" target="_blank">Οδηγίες</a>`);
                
                markersLayer.addLayer(marker);
                markersBounds.push([p.lat, p.lng]);
            }
        });

        // 5. Αυτόματο ζουμ εκεί που είναι οι πινέζες
        if (markersBounds.length > 0) {
            map.fitBounds(markersBounds, { padding: [50, 50] });
        } else {
            // Αν δεν υπάρχουν πινέζες (λείπουν συντεταγμένες), πήγαινε στο κέντρο της περιοχής
            if(filterArea === 'Έδεσσα') map.setView([40.8017, 22.0440], 13);
            else if(filterArea === 'Γιαννιτσά') map.setView([40.7930, 22.4100], 13);
            else if(filterArea === 'Αριδαία') map.setView([40.9750, 22.0600], 13);
            else if(filterArea === 'Σκύδρα') map.setView([40.7650, 22.1500], 13);
            else map.setView([40.8000, 22.1500], 10); // Κέντρο νομού
        }
    }

    // Αρχική εκτέλεση
    renderApp('all');

    // Όταν αλλάζει το φίλτρο
    areaSelect.addEventListener('change', (e) => {
        renderApp(e.target.value);
    });
});
