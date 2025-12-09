// --- ΤΜΗΜΑ ΔΕΔΟΜΕΝΩΝ (Εδώ θα βάλουμε τα δικά σου) ---

// 1. Κατάλογος Φαρμακείων (ID, Όνομα, Περιοχή, Διεύθυνση, Τηλέφωνο, Link Χάρτη)
const pharmacies = [
    { id: 1, name: "Φαρμακείο Παπαδόπουλος", area: "Έδεσσα", address: "Εγνατίας 25", phone: "2381000000", map: "https://maps.google.com" },
    { id: 2, name: "Φαρμακείο Γεωργίου", area: "Γιαννιτσά", address: "Χατζηδημητρίου 10", phone: "2382000000", map: "https://maps.google.com" },
    { id: 3, name: "Φαρμακείο Αντωνίου", area: "Αριδαία", address: "Κύπρου 5", phone: "2384000000", map: "https://maps.google.com" },
    { id: 4, name: "Φαρμακείο Δημητρίου", area: "Έδεσσα", address: "Δημοκρατίας 12", phone: "2381011111", map: "https://maps.google.com" }
];

// 2. Πρόγραμμα Εφημεριών (Ημερομηνία 'YYYY-MM-DD' -> Λίστα με ID φαρμακείων που εφημερεύουν)
// Σημείωση: Αν δεν υπάρχει εγγραφή για σήμερα, δεν θα δείξει τίποτα.
const schedule = {
    "2025-12-09": [1, 2, 3], // Σήμερα (Παράδειγμα)
    "2025-12-10": [4, 2]     // Αύριο
};

// --- ΤΕΛΟΣ ΔΕΔΟΜΕΝΩΝ ---

// Λογική Εφαρμογής
document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('pharmacy-list');
    const dateDisplay = document.getElementById('current-date');
    const areaSelect = document.getElementById('area-select');

    // Βρες τη σημερινή ημερομηνία σε μορφή YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];
    
    // Εμφάνιση ημερομηνίας στο Header (σε ελληνική μορφή)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = new Date().toLocaleDateString('el-GR', options);

    // Βρες ποια ID εφημερεύουν σήμερα
    const todayIds = schedule[today] || [];
    
    // Φιλτράρισμα φαρμακείων που εφημερεύουν
    const onCallPharmacies = pharmacies.filter(p => todayIds.includes(p.id));

    function renderList(filterArea) {
        listContainer.innerHTML = '';

        if (onCallPharmacies.length === 0) {
            listContainer.innerHTML = '<p style="text-align:center; padding:20px;">Δεν βρέθηκαν δεδομένα εφημεριών για σήμερα.</p>';
            return;
        }

        const filtered = filterArea === 'all' 
            ? onCallPharmacies 
            : onCallPharmacies.filter(p => p.area === filterArea);

        if (filtered.length === 0) {
            listContainer.innerHTML = '<p style="text-align:center; padding:20px;">Κανένα φαρμακείο σε αυτή την περιοχή.</p>';
            return;
        }

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'pharmacy-card';
            card.innerHTML = `
                <h3>${p.name} <span class="area-badge">${p.area}</span></h3>
                <div class="details"><i class="fas fa-map-marker-alt"></i> ${p.address}</div>
                <div class="details"><i class="fas fa-phone"></i> ${p.phone}</div>
                <div class="actions">
                    <a href="tel:${p.phone}" class="btn btn-call">Κλήση</a>
                    <a href="${p.map}" target="_blank" class="btn btn-map">Χάρτης</a>
                </div>
            `;
            listContainer.appendChild(card);
        });
    }

    // Αρχική εμφάνιση
    renderList('all');

    // Αλλαγή φίλτρου περιοχής
    areaSelect.addEventListener('change', (e) => {
        renderList(e.target.value);
    });
});
