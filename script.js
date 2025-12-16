// ==========================================
// 1. ΡΥΘΜΙΣΕΙΣ & ONLINE ΔΕΔΟΜΕΝΑ
// ==========================================

// Βάλε εδώ το Link από το "Publish to Web -> CSV" του Google Sheet σου
const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTyh1AJApeD-UUcEwJvsEj7IgozJzjGzUXv8OY3wOPGD71_HbhsfuHUJcPb3uFC9-rnpCLE2j2YE7DK/pub?output=csv'; 

const SHOW_ALL_MODE = false; // Πλέον διαβάζουμε από το ίντερνετ

// Mapping Κέντρων
const cityCenters = {
    "Έδεσσα": "Έδεσσα (Κέντρο)",
    "Γιαννιτσά": "Γιαννιτσά (Πόλη)",
    "Αριδαία": "Αριδαία (Πόλη)",
    "Σκύδρα": "Σκύδρα (Πόλη)",
    "Κρύα Βρύση": "Κρύα Βρύση (Κέντρο)"
};

// ==========================================
// 2. ΣΤΑΘΕΡΑ ΔΕΔΟΜΕΝΑ ΦΑΡΜΑΚΕΙΩΝ (Βάση Δεδομένων)
// ==========================================
const pharmacies = [
    // ... (ΕΔΩ ΚΡΑΤΑΣ ΤΗΝ ΜΕΓΑΛΗ ΛΙΣΤΑ ΠΟΥ ΣΟΥ ΕΦΤΙΑΞΑ ΠΡΙΝ) ...
    // Για συντομία βάζω 2-3 παραδείγματα, εσύ βάλε τα όλα.
    { id: 1, name: "ΑΓΓΕΛΟΥ ΜΑΡΙΑ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΕΓΝΑΤΙΑΣ 9", phone: "2381023410" },
    { id: 7, name: "ΑΘΑΝΑΣΙΑΔΗΣ ΠΑΝ.", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΠΛΑΣΤΗΡΑ 29", phone: "2382029108" },
    { id: 148, name: "ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ", area: "Γιαννιτσά", subArea: "Άθυρα", address: "ΑΘΥΡΑ", phone: "2391091551" }
];

// Εδώ θα αποθηκεύουμε το πρόγραμμα που κατεβάζουμε
let globalSchedule = []; 

document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.getElementById('tabs-container');
    const cityContainer = document.getElementById('city-pharmacy-container');
    const cityTitle = document.getElementById('city-title');
    const gridContainer = document.getElementById('pharmacy-grid');
    const dateDisplay = document.getElementById('current-date');
    const loadingMsg = document.getElementById('loading-msg');
    const mainLayout = document.getElementById('main-layout');
    const fileLinkContainer = document.createElement('div'); // Για το PDF/Εικόνα

    // Τοποθέτηση του κουμπιού αρχείου κάτω από τον τίτλο της πόλης
    cityTitle.parentNode.insertBefore(fileLinkContainer, cityTitle.nextSibling);

    // Ημερομηνία
    const todayObj = new Date();
    const todayStr = todayObj.toISOString().split('T')[0];
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = todayObj.toLocaleDateString('el-GR', options);

    // --- ΕΚΚΙΝΗΣΗ ---
    fetchGoogleSheet();

    // Λήψη δεδομένων από Google Sheet (CSV)
    async function fetchGoogleSheet() {
        try {
            const response = await fetch(GOOGLE_SHEET_CSV_URL);
            const data = await response.text();
            
            // Μετατροπή CSV σε Array
            const rows = data.split('\n').slice(1); // Αγνοούμε την 1η γραμμή (headers)
            
            rows.forEach(row => {
                // Διαχωρισμός με κόμμα (προσοχή αν υπάρχουν κόμματα μέσα σε κελιά, το απλό split δεν αρκεί, αλλά για απλά IDs είναι οκ)
                const cols = row.split(','); 
                // Επειδή τα IDs έχουν κόμματα, πρέπει να είμαστε προσεκτικοί. 
                // Καλύτερη δομή CSV: Date, Area, "ID1, ID2", Link
                
                // Πιο ασφαλής τρόπος parsing για CSV που φτιάχνει το Google Sheets:
                // Ας υποθέσουμε απλή δομή: Date(0), Area(1), IDs(2 - μπορεί να έχει " "), Link(3)
                
                if(cols.length < 3) return;

                const date = cols[0].trim();
                const area = cols[1].trim();
                // Τα IDs μπορεί να είναι π.χ. "1|2|3" ή "1-2-3" για να μην μπερδεύεται το CSV, 
                // ή αν είναι σε quotes "1, 2, 3". 
                // Για ευκολία στο Sheet βάλε τα IDs με παύλα π.χ. 1-15-30
                const idsRaw = cols[2].replace(/"/g, '').trim(); 
                const ids = idsRaw.split('-').map(n => parseInt(n)).filter(n => !isNaN(n));
                
                const link = cols[3] ? cols[3].trim() : null;

                globalSchedule.push({ date, area, ids, link });
            });

            loadingMsg.style.display = 'none';
            mainLayout.style.display = 'grid';
            initApp();

        } catch (error) {
            console.error(error);
            loadingMsg.innerHTML = "Αδυναμία φόρτωσης προγράμματος. Ελέγξτε τη σύνδεση.";
        }
    }

    function initApp() {
        const mainAreas = ["Έδεσσα", "Γιαννιτσά", "Αριδαία", "Σκύδρα", "Κρύα Βρύση"];
        let currentArea = "Έδεσσα";

        function renderTabs() {
            tabsContainer.innerHTML = '';
            mainAreas.forEach(area => {
                const btn = document.createElement('button');
                btn.className = `tab-btn ${area === currentArea ? 'active' : ''}`;
                btn.textContent = area;
                btn.onclick = () => {
                    currentArea = area;
                    renderTabs();
                    renderContent();
                };
                tabsContainer.appendChild(btn);
            });
        }

        function renderContent() {
            cityContainer.innerHTML = '';
            gridContainer.innerHTML = '';
            fileLinkContainer.innerHTML = ''; // Καθαρισμός κουμπιού αρχείου
            cityTitle.textContent = `Εφημερεύει: ${currentArea}`;

            // 1. Βρες την εγγραφή στο Sheet για ΣΗΜΕΡΑ και για την ΤΡΕΧΟΥΣΑ ΠΕΡΙΟΧΗ
            const scheduleEntry = globalSchedule.find(s => s.date === todayStr && s.area === currentArea);
            
            const todayIds = scheduleEntry ? scheduleEntry.ids : [];
            const fileLink = scheduleEntry ? scheduleEntry.link : null;

            // --- ΚΟΥΜΠΙ ΑΡΧΕΙΟΥ (PDF/Image) ---
            if (fileLink && fileLink.length > 5) {
                fileLinkContainer.innerHTML = `
                    <a href="${fileLink}" target="_blank" style="
                        display: block; 
                        background: #34495e; 
                        color: white; 
                        text-align: center; 
                        padding: 10px; 
                        margin-bottom: 20px; 
                        border-radius: 8px; 
                        text-decoration: none;
                        font-weight: bold;">
                        <i class="fas fa-file-download"></i> Προβολή Επίσημου Προγράμματος (PDF/Εικόνα)
                    </a>
                `;
            }

            // 2. Φίλτρο Φαρμακείων
            let activePharmacies = [];
            if (SHOW_ALL_MODE) {
                activePharmacies = pharmacies.filter(p => p.area === currentArea);
            } else {
                activePharmacies = pharmacies.filter(p => todayIds.includes(p.id));
            }

            const areaPharmacies = pharmacies.filter(p => p.area === currentArea);
            const centerName = cityCenters[currentArea];

            // --- ΚΕΝΤΡΟ ---
            const activeCenterPharmacies = activePharmacies.filter(p => p.subArea === centerName);

            if (activeCenterPharmacies.length > 0) {
                activeCenterPharmacies.forEach(p => {
                    const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + " " + p.address + " " + p.area)}`;
                    const card = document.createElement('div');
                    card.className = 'featured-card';
                    card.innerHTML = `
                        <div style="font-size:0.9rem; color:#888; text-transform:uppercase; letter-spacing:1px;">ΑΝΟΙΧΤΟ ΤΩΡΑ</div>
                        <h3>${p.name}</h3>
                        <div class="address"><i class="fas fa-map-marker-alt"></i> ${p.address}</div>
                        <a href="tel:${p.phone}" class="big-phone">${p.phone}</a>
                        <div class="featured-actions">
                            <a href="tel:${p.phone}" class="btn-large btn-call-large"><i class="fas fa-phone-alt"></i> Κλήση</a>
                            <a href="${mapLink}" target="_blank" class="btn-large btn-map-large"><i class="fas fa-directions"></i> Χάρτης</a>
                        </div>
                    `;
                    cityContainer.appendChild(card);
                });
            } else {
                cityContainer.innerHTML = `
                    <div class="featured-card" style="background:#f9f9f9; border-top-color:#ccc;">
                        <p style="color:#777;">Δεν βρέθηκε εφημερία στο σύστημα για σήμερα.</p>
                        ${!fileLink ? '<small>Δεν έχει αναρτηθεί αρχείο προγράμματος.</small>' : ''}
                    </div>`;
            }

            // --- ΧΩΡΙΑ ---
            const uniqueSubAreas = [...new Set(areaPharmacies.map(p => p.subArea))]
                .filter(sub => sub !== centerName)
                .sort();

            if (uniqueSubAreas.length === 0) return;

            uniqueSubAreas.forEach(sub => {
                const activePharmaInSub = activePharmacies.find(p => p.subArea === sub);
                const row = document.createElement('div');
                row.className = `location-row ${activePharmaInSub ? 'has-pharmacy' : ''}`;

                let headerHTML = `
                    <div class="location-header">
                        <div class="location-info">
                            <span class="village-name">${sub}</span>
                            ${activePharmaInSub 
                                ? `<span class="pharmacy-preview"><i class="fas fa-check-circle"></i> ${activePharmaInSub.name}</span>` 
                                : `<span style="font-size:0.8rem; color:#bbb;">-</span>`}
                        </div>
                        ${activePharmaInSub ? '<i class="fas fa-chevron-down" style="color:#aaa;"></i>' : ''}
                    </div>
                `;

                let detailsHTML = '';
                if (activePharmaInSub) {
                    const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activePharmaInSub.name + " " + activePharmaInSub.address + " " + activePharmaInSub.area)}`;
                    detailsHTML = `
                        <div class="location-details">
                            <div class="details-content">
                                <p style="margin:0 0 10px; font-weight:bold;">${activePharmaInSub.name}</p>
                                <div style="display:flex; gap:10px;">
                                    <a href="tel:${activePharmaInSub.phone}" class="btn btn-call" style="background:var(--primary-color); color:white; padding:8px 12px; border-radius:5px; text-decoration:none; font-size:0.9rem; flex:1; text-align:center;">Κλήση</a>
                                    <a href="${mapLink}" target="_blank" class="btn btn-map" style="background:white; border:1px solid #ccc; color:#333; padding:8px 12px; border-radius:5px; text-decoration:none; font-size:0.9rem; flex:1; text-align:center;">Χάρτης</a>
                                </div>
                            </div>
                        </div>
                    `;
                }

                row.innerHTML = headerHTML + detailsHTML;

                if(activePharmaInSub) {
                    row.querySelector('.location-header').addEventListener('click', () => {
                        const details = row.querySelector('.location-details');
                        const icon = row.querySelector('.fa-chevron-down');
                        if (details.style.maxHeight) {
                            details.style.maxHeight = null;
                            icon.style.transform = 'rotate(0deg)';
                        } else {
                            details.style.maxHeight = details.scrollHeight + "px";
                            icon.style.transform = 'rotate(180deg)';
                        }
                    });
                }
                gridContainer.appendChild(row);
            });
        }

        renderTabs();
        renderContent();
    }
});
