// ==========================================
// 1. ΡΥΘΜΙΣΕΙΣ & ΠΡΟΓΡΑΜΜΑ
// ==========================================

// ΟΤΑΝ ΘΑ ΒΑΛΕΙΣ ΤΙΣ ΕΦΗΜΕΡΙΕΣ, ΑΛΛΑΞΕ ΤΟ ΠΑΡΑΚΑΤΩ ΣΕ: false
const SHOW_ALL_MODE = true; 

// Πρόγραμμα Εφημεριών (Ημερομηνία: [Λίστα ID φαρμακείων])
// Παράδειγμα: "2025-12-25": [1, 15, 30]
const schedule = {
    "2025-12-09": [], // Βάλε εδώ τα ID για σήμερα
    "2025-12-10": []  // Βάλε εδώ τα ID για αύριο
};


// ==========================================
// 2. ΔΕΔΟΜΕΝΑ ΦΑΡΜΑΚΕΙΩΝ (ΠΛΗΡΗΣ ΛΙΣΤΑ)
// ==========================================
const pharmacies = [
    // --- ΕΔΕΣΣΑ ---
    { id: 1, name: "ΑΓΓΕΛΟΥ ΜΑΡΙΑ - ΖΩΗ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΕΓΝΑΤΙΑΣ 9", phone: "2381023410" },
    { id: 2, name: "ΑΓΓΕΛΟΥ ΑΓΓΕΛΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΕΓΝΑΤΙΑΣ 9", phone: "2381023410" },
    { id: 15, name: "ΒΑΣΙΛΕΙΑΔΗΣ ΑΝΑΣΤΑΣΙΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΦΙΛΙΠΠΟΥ-Π. ΜΕΛΑ 18", phone: "2381022236" },
    { id: 18, name: "ΓΙΑΝΝΙΟΣ ΠΟΛΥΖΩΗΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΔΗΜΟΚΡΑΤΙΑΣ 17", phone: "2381023513" },
    { id: 23, name: "ΓΚΙΚΑΣ ΔΗΜΗΤΡΙΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΘΕΟΤΟΚΟΠΟΥΛΟΥ 5", phone: "2381023770" },
    { id: 25, name: "ΓΟΥΛΙΟΣ ΠΑΝΤΕΛΗΣ", area: "Έδεσσα", subArea: "Ν. Αγ. Αθανάσιος", address: "Ν. ΑΓ. ΑΘΑΝΑΣΙΟΣ", phone: "2381031330" },
    { id: 28, name: "ΓΟΥΛΙΕΛΜΟΥ ΓΕΘΣΗΜΑΝΗ", area: "Έδεσσα", subArea: "Φλαμουριά", address: "ΦΛΑΜΟΥΡΙΑ", phone: "2381099005" },
    { id: 29, name: "ΓΡΟΠΑΛΗ ΙΟΡΔΑΝΑ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "Ρ. ΦΕΡΑΙΟΥ 2", phone: "2381022623" },
    { id: 35, name: "ΔΙΤΣΟΣ ΛΑΖΑΡΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΑΓ. ΔΗΜΗΤΡΙΟΥ 28", phone: "2381027741" },
    { id: 47, name: "ΙΩΑΝΝΙΔΟΥ ΧΡΙΣΤΙΝΑ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΦΛΩΡΙΝΗΣ 7", phone: "2381028673" },
    { id: 55, name: "ΚΑΤΣΙΜΗΡΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΜΟΝΑΣΤΗΡΙΟΥ 31", phone: "2381025510" },
    { id: 56, name: "ΚΑΤΣΙΜΗΡΗΣ ΙΩΑΚΕΙΜ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΜΟΝΑΣΤΗΡΙΟΥ 31", phone: "2381025510" },
    { id: 60, name: "ΚΙΤΚΑΣ ΙΩΑΝΝΗΣ", area: "Έδεσσα", subArea: "Άγρας", address: "ΑΓΡΑΣ", phone: "2381092855" },
    { id: 63, name: "ΚΟΥΚΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "Ρ.ΦΕΡΑΙΟΥ 2", phone: "2381022623" },
    { id: 66, name: "ΚΥΡΙΑΖΟΠΟΥΛΟΣ ΔΗΜΗΤΡΙΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "18ης ΟΚΤΩΒΡΙΟΥ 10", phone: "2381028200" },
    { id: 72, name: "ΛΟΥΣΙΩΤΗΣ ΠΕΤΡΟΣ-ΚΑΡΟΛΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΑΡΧ. ΠΑΝΤΕΛΕΗΜΟΝΟΣ 26", phone: "2381028554" },
    { id: 73, name: "ΛΥΣΙΤΣΚΑ ΧΡΙΣΤΙΝΑ", area: "Έδεσσα", subArea: "Παναγίτσα", address: "ΠΑΝΑΓΙΤΣΑ", phone: "2381034191" },
    { id: 85, name: "ΜΙΣΑΗΛΙΔΗΣ ΦΩΤΙΟΣ", area: "Έδεσσα", subArea: "Άρνισσα", address: "ΑΡΝΙΣΣΑ", phone: "2381031656" },
    { id: 86, name: "ΜΟΝΑ ΚΑΛΛΙΟΠΗ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΑΘ. ΣΤΟΓΙΟΥ 22", phone: "2381024131" },
    { id: 88, name: "ΜΟΡΗΣ ΟΥΜΠΕΡΤΟ", area: "Έδεσσα", subArea: "Μεσημέρι", address: "ΜΕΣΗΜΕΡΙ", phone: "2381021200" },
    { id: 89, name: "ΜΟΥΧΑΛΕΜΠΗΣ ΝΙΚΟΛΑΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΔΗΜΟΚΡΑΤΙΑΣ 25", phone: "2381023324" },
    { id: 90, name: "ΜΠΑΧΤΣΕΒΑΝΙΔΟΥ ΜΕΡΟΠΗ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "25ης ΜΑΡΤΙΟΥ 12", phone: "2381023080" },
    { id: 95, name: "ΝΟΥΣΗΚΥΡΟΥ ΙΩΑΝΝΗΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "18Ης ΟΚΤΩΒΡΙΟΥ 5", phone: "2381022553" },
    { id: 107, name: "ΠΑΣΧΑΛΙΔΗΣ ΟΝΟΥΦΡΙΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "Π. ΜΕΛΑ 11", phone: "2381025007" },
    { id: 108, name: "ΠΑΣΧΑΛΟΓΛΟΥ ΧΡΙΣΤΙΝΑ", area: "Έδεσσα", subArea: "Δροσερό", address: "ΔΡΟΣΕΡΟ", phone: "2381096196" },
    { id: 110, name: "ΠΕΤΡΙΔΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "Γ. ΠΕΤΣΟΥ 2-4", phone: "2381026158" },
    { id: 121, name: "ΣΙΓΑΛΑΣ ΜΑΡΙΝΟΣ", area: "Έδεσσα", subArea: "Πλατάνη", address: "ΠΛΑΤΑΝΗ", phone: "2381099114" },
    { id: 132, name: "ΣΤΟΥΓΙΑΝΝΙΔΟΥ ΝΕΚΤΑΡΙΑ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΜΟΝΑΣΤΗΡΙΟΥ 30", phone: "2381022444" },
    { id: 139, name: "ΤΡΥΨΙΑΝΗ ΕΙΡΗΝΗ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΑΛΜΩΠΙΑΣ 1", phone: "2381024191" },
    { id: 142, name: "ΤΣΙΤΛΑΚΙΔΟΥ ΜΑΡΙΑ", area: "Έδεσσα", subArea: "Ριζάρι", address: "ΡΙΖΑΡΙ", phone: "2381091116" },
    { id: 152, name: "ΧΡΗΣΤΟΥ ΒΑΡΒΑΡΑ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΘΕΟΤΟΚΟΠΟΥΛΟΥ 5", phone: "2381023770" },
    { id: 154, name: "ΧΡΙΣΤΟΦΗ ΣΩΤΗΡΟΥΛΑ", area: "Έδεσσα", subArea: "Άρνισσα", address: "ΑΡΝΙΣΣΑ", phone: "2381031656" },
    { id: 158, name: "ΨΥΧΟΓΙΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΕΓΝΑΤΙΑΣ 36", phone: "2381022232" },
    { id: 159, name: "ΨΥΧΟΓΙΟΥ ΣΟΦΙΑ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΕΓΝΑΤΙΑΣ 36", phone: "2381022232" },

    // --- ΑΡΙΔΑΙΑ ---
    { id: 3, name: "ΑΓΟΡΑΣΤΟΥ ΧΡΙΣΤΙΝΑ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΑΘ. ΔΙΑΚΟΥ 18", phone: "2384022300" },
    { id: 6, name: "ΑΘΑΝΑΣΙΑΔΗΣ ΕΥΣΤΡΑΤΙΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΚΥΠΡΟΥ 41", phone: "2384021272" },
    { id: 9, name: "ΑΛΤΙΝΙΔΗΣ ΙΩΑΝΝΗΣ", area: "Αριδαία", subArea: "Γαρέφι", address: "ΓΑΡΕΦΙ", phone: "2384075083" },
    { id: 11, name: "ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΑΓ. ΝΙΚΑΝΔΡΟΥ 8", phone: "2384021001" },
    { id: 34, name: "ΔΗΜΟΥ ΙΩΑΝΝΗΣ", area: "Αριδαία", subArea: "Αρχάγγελος", address: "ΑΡΧΑΓΓΕΛΟΣ", phone: "2384073618" },
    { id: 43, name: "ΖΙΑΚΑΣ ΓΕΩΡΓΙΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΚΥΠΡΟΥ 33", phone: "2384023066" },
    { id: 46, name: "ΘΩΜΑΪΔΗΣ ΣΩΤΗΡΙΟΣ", area: "Αριδαία", subArea: "Όρμα", address: "ΟΡΜΑ", phone: "2384094437" },
    { id: 49, name: "ΚΑΛΤΣΑ ΜΑΡΙΑ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΔΗΜΟΚΡΑΤΙΑΣ 2", phone: "2384022235" },
    { id: 51, name: "ΚΑΡΑΤΖΙΔΗΣ ΒΑΣΙΛΕΙΟΣ", area: "Αριδαία", subArea: "Εξαπλάτανος", address: "ΕΞΑΠΛΑΤΑΝΟΣ", phone: "2384042170" },
    { id: 52, name: "ΚΑΡΑΔΗΜΟΥ ΚΩΝΣΤΑΝΤΙΝΑ", area: "Αριδαία", subArea: "Εξαπλάτανος", address: "ΕΞΑΠΛΑΤΑΝΟΣ", phone: "2384041701" },
    { id: 57, name: "ΚΙΛΙΚΛΗΣ ΑΝΤΩΝΙΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "4Ης ΝΟΕΜΒΡΙΟΥ 7", phone: "2384309184" },
    { id: 58, name: "ΚΙΟΣΗΣ ΙΩΑΝΝΗΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΠΛ. ΑΓ.ΓΑΤΣΟΥ 1", phone: "2384025424" },
    { id: 62, name: "ΚΟΤΙΔΟΥ ΕΥΑ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΜΙΑΟΥΛΗ 21", phone: "2384022908" },
    { id: 68, name: "ΚΥΡΙΑΚΙΔΟΥ ΜΑΡΙΑ", area: "Αριδαία", subArea: "Ριζοχώρι", address: "ΡΙΖΟΧΩΡΙ", phone: "2384042010" },
    { id: 78, name: "ΜΑΡΚΟΥ ΜΑΡΙΑ", area: "Αριδαία", subArea: "Σωσάνδρα", address: "ΣΩΣΑΝΔΡΑ", phone: "2384028060" },
    { id: 79, name: "ΜΑΥΡΟΠΟΥΛΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΠΟΛΥΤΕΧΝΕΙΟΥ 1", phone: "2384024074" },
    { id: 80, name: "ΜΕΤΑΞΑ ΕΛΙΣΑΒΕΤ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΑΓ. ΝΙΚΑΝΔΡΟΥ - ΣΚΡΑ 21", phone: "2384024073" },
    { id: 81, name: "ΜΕΤΑΞΑΣ ΘΕΟΔΩΡΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΑΓ. ΝΙΚΑΝΔΡΟΥ - ΣΚΡΑ 21", phone: "2384024073" },
    { id: 87, name: "ΜΟΥΛΑ ΕΛΕΥΘΕΡΙΑ", area: "Αριδαία", subArea: "Κωνσταντία", address: "ΚΩΝΣΤΑΝΤΙΑ", phone: "2384051111" },
    { id: 98, name: "ΠΑΛΙΚΟΓΛΟΥ ΕΥΔΟΚΙΑ", area: "Αριδαία", subArea: "Ίδα", address: "ΙΔΑ", phone: "2384022555" },
    { id: 100, name: "ΠΑΠΑΔΟΠΟΥΛΟΣ ΑΓΓΕΛΟΣ", area: "Αριδαία", subArea: "Ξιφιανή", address: "ΞΙΦΙΑΝΗ", phone: "2384092353" },
    { id: 101, name: "ΠΑΠΑΔΟΠΟΥΛΟΥ ΠΩΛΙΝΑ", area: "Αριδαία", subArea: "Πρόμαχοι", address: "ΠΡΟΜΑΧΟΙ", phone: "2384075673" },
    { id: 109, name: "ΠΑΣΧΟΥΛΑΡΗ ΠΑΥΛΙΝΑ", area: "Αριδαία", subArea: "Λουτράκι", address: "ΛΟΥΤΡΑΚΙ", phone: "2384091122" },
    { id: 111, name: "ΠΛΑΤΗΣ ΒΑΣΙΛΕΙΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΜΙΑΟΥΛΗ 21", phone: "2384022908" },
    { id: 115, name: "ΣΑΠΑΚΟΛΗ ΕΥΑΓΓΕΛΙΑ", area: "Αριδαία", subArea: "Βορεινό", address: "ΒΟΡΕΙΝΟ", phone: "2384071151" },
    { id: 116, name: "ΣΑΠΟΥΝΤΖΗΣ ΝΙΚΟΛΑΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "Π. ΜΕΛΑ 28", phone: "2384023325" },
    { id: 118, name: "ΣΑΡΗΓΚΙΟΛΗΣ ΟΡΕΣΤΗΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΛΟΧ. ΠΑΣΣΙΑ 26", phone: "2384024298" },
    { id: 122, name: "ΣΙΓΚΕΡΗ ΖΩΗ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΔΗΜΟΚΡΑΤΙΑΣ 2", phone: "2384022235" },
    { id: 125, name: "ΣΙΣΚΟΥ ΜΑΡΙΑ", area: "Αριδαία", subArea: "Πολυκάρπη", address: "ΠΟΛΥΚΑΡΠΗ", phone: "2384031101" },
    { id: 133, name: "ΣΦΥΡΙΔΟΥ ΜΑΡΙΑ", area: "Αριδαία", subArea: "Τσάκωνες", address: "ΤΣΑΚΩΝΕΣ", phone: "2384022555" },
    { id: 136, name: "ΤΟΥΜΑΝΙΔΗΣ ΑΛΕΞΑΝΔΡΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΧΡ. ΣΜΥΡΝΗΣ 8", phone: "2384022430" },
    { id: 137, name: "ΤΟΥΜΑΝΙΔΟΥ ΚΛΑΡΑ", area: "Αριδαία", subArea: "Άψαλος", address: "ΑΨΑΛΟΣ", phone: "2384065459" },
    { id: 140, name: "ΤΣΑΚΩΝΑ ΑΙΚΑΤΕΡΙΝΗ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΧΡ. ΣΜΥΡΝΗΣ 8", phone: "2384022430" },
    { id: 146, name: "ΤΣΟΥΛΦΑ ΑΝΑΣΤΑΣΙΑ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΛΟΧ. ΠΑΣΣΙΑ 2", phone: "2384021700" },
    { id: 153, name: "ΧΡΗΣΤΟΥ ΠΕΛΑΓΙΑ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΛΟΧ. ΠΑΣΣΙΑ 26", phone: "2384024298" },

    // --- ΓΙΑΝΝΙΤΣΑ ---
    { id: 7, name: "ΑΘΑΝΑΣΙΑΔΗΣ ΠΑΝΑΓΙΩΤΗΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΠΛΑΣΤΗΡΑ 29", phone: "2382029108" },
    { id: 10, name: "ΑΜΒΡΟΣΙΔΟΥ ΛΙΑΝΑ", area: "Γιαννιτσά", subArea: "Τριφύλλι", address: "ΤΡΙΦΥΛΛΙ", phone: "2382094300" },
    { id: 12, name: "ΒΑΡΕΛΑΣ ΜΙΧΑΗΛ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "Π. ΜΕΛΑ 5", phone: "2382024555" },
    { id: 14, name: "ΒΑΚΙΡΤΖΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ", area: "Γιαννιτσά", subArea: "Παλαίφυτο", address: "ΠΑΛΑΙΦΥΤΟ", phone: "2382041322" },
    { id: 17, name: "ΓΑΝΑ ΒΑΣΙΛΙΚΗ", area: "Γιαννιτσά", subArea: "Πενταπλάτανος", address: "ΠΕΝΤΑΠΛΑΤΑΝΟΣ", phone: "2382082077" },
    { id: 19, name: "ΓΙΟΥΤΙΚΑ ΕΛΕΥΘΕΡΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΤΣΑΚΜΑΚΗ 68", phone: "2382022694" },
    { id: 20, name: "ΓΚΑΪΤΑΤΖΗΣ ΑΓΓΕΛΟΣ", area: "Γιαννιτσά", subArea: "Αραβησσός", address: "ΑΡΑΒΗΣΣΟΣ", phone: "2382099191" },
    { id: 21, name: "ΓΚΙΚΑΣ ΑΛΕΞΑΝΔΡΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "Δ. ΣΕΜΕΡΤΖΙΔΗ", phone: "2382024813" },
    { id: 22, name: "ΓΚΙΚΑ ΑΝΑΣΤΑΣΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "Δ. ΣΕΜΕΡΤΖΙΔΗ", phone: "2382024813" },
    { id: 24, name: "ΓΚΟΥΤΣΙΔΟΥ ΒΑΣΙΛΙΚΗ", area: "Γιαννιτσά", subArea: "Αμπελιές", address: "ΑΜΠΕΛΙΕΣ", phone: "2382094540" },
    { id: 26, name: "ΓΟΡΟΖΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΑΓ. ΓΕΩΡΓΙΟΥ 11 Α", phone: "2382024060" },
    { id: 27, name: "ΓΟΤΟΥΧΙΔΗΣ ΧΑΡΑΛΑΜΠΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΝΙΖΕΛΟΥ 49", phone: "2382029030" },
    { id: 31, name: "ΔΑΝΤΣΑΚΗ ΡΟΔΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΜΠΑΦΡΑΣ 5", phone: "2382025500" },
    { id: 32, name: "ΔΕΜΕΡΤΖΙΔΟΥ ΧΡΙΣΤΙΝΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΧΑΤΖΗΔΗΜΗΤΡΙΟΥ 17", phone: "2382022888" },
    { id: 37, name: "ΔΟΥΛΚΕΡΙΔΗΣ ΚΟΣΜΑΣ", area: "Γιαννιτσά", subArea: "Καρυώτισσα", address: "ΚΑΡΥΩΤΙΣΣΑ", phone: "2382042630" },
    { id: 41, name: "ΖΑΧΑΡΙΑΔΟΥ ΓΕΩΡΓΙΑ", area: "Γιαννιτσά", subArea: "Ν. Μυλότοπος", address: "Ν. ΜΥΛΟΤΟΠΟΣ", phone: "2382051791" },
    { id: 42, name: "ΖΕΡΒΟΥ ΦΩΤΕΙΝΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΧΑΤΖΗΔΗΜΗΤΡΙΟΥ 70", phone: "2382022264" },
    { id: 44, name: "ΖΟΥΜΠΟΥΡΙΔΟΥ ΕΥΔΟΞΙΑ", area: "Γιαννιτσά", subArea: "Ν. Μυλότοπος", address: "Ν. ΜΥΛΟΤΟΠΟΣ", phone: "2382052210" },
    { id: 45, name: "ΘΕΜΕΛΗ ΜΗΝΑΔΩΡΑ", area: "Γιαννιτσά", subArea: "Αξός", address: "ΑΞΟΣ", phone: "2382051512" },
    { id: 50, name: "ΚΑΡΑΓΙΑΝΝΗ ΑΝΝΑ", area: "Γιαννιτσά", subArea: "Π. Πέλλα", address: "Π. ΠΕΛΛΑ", phone: "2382031447" },
    { id: 54, name: "ΚΑΡΑΠΟΥΡΤΖΙΔΗΣ ΑΝΑΣΤΑΣΙΟΣ", area: "Γιαννιτσά", subArea: "Αγ. Λουκάς", address: "ΑΓ.ΛΟΥΚΑΣ", phone: "2382063620" },
    { id: 61, name: "ΚΟΡΥΦΙΔΟΥ ΑΝΤΩΝΙΑ", area: "Γιαννιτσά", subArea: "Καρυώτισσα", address: "ΚΑΡΥΩΤΙΣΣΑ", phone: "2382041545" },
    { id: 64, name: "ΚΟΥΠΑΡΑΝΙΔΟΥ ΚΑΛΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΤΑΓ. ΓΕΩΡΓΟΥΛΗ 23", phone: "2382024825" },
    { id: 65, name: "ΚΟΥΤΣΟΚΩΣΤΑ ΙΩΑΝΝΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΑΦΩΝ ΠΑΠΑΙΩΑΝΝΟΥ", phone: "2382024141" },
    { id: 67, name: "ΚΥΡΙΑΚΙΔΗΣ ΕΥΑΓΓΕΛΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΜΠΑΦΡΑΣ 18", phone: "2382083233" },
    { id: 69, name: "ΛΙΑΒΑΣ ΑΘΑΝΑΣΙΟΣ", area: "Γιαννιτσά", subArea: "Αχλαδοχώρι", address: "ΑΧΛΑΔΟΧΩΡΙ", phone: "2382181100" },
    { id: 71, name: "ΛΑΠΙΧΟΥ ΚΑΛΛΙΟΠΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΠΛ. ΓΚ. ΓΙΩΤΑ 2", phone: "2382028229" },
    { id: 74, name: "ΜΑΜΑΓΚΙΝΙΔΟΥ ΕΜΜΑΝΟΥΕΛΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΜΠΑΦΡΑΣ 18", phone: "2382083233" },
    { id: 75, name: "ΜΑΝΔΑΛΤΣΗ ΑΙΚΑΤΕΡΙΝΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΚΟΛΟΚΟΤΡΩΝΗ 15", phone: "2382022735" },
    { id: 76, name: "ΜΑΝΘΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΚΥΠΡΟΥ & ΚΟΛΟΚΟΤΡΩΝΗ 11", phone: "2382026979" },
    { id: 82, name: "ΜΗΝΟΒΓΙΟΥΔΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Γιαννιτσά", subArea: "Ραχώνα", address: "ΡΑΧΩΝΑ", phone: "2391054431" },
    { id: 97, name: "ΠΑΚΟΥ ΑΝΑΣΤΑΣΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "Δ. ΣΤΑΜΚΟΥ 21", phone: "2382020039" },
    { id: 102, name: "ΠΑΠΑΖΟΓΛΟΥ ΕΛΕΝΗ", area: "Γιαννιτσά", subArea: "Π. Μυλότοπος", address: "Π. ΜΥΛΟΤΟΠΟΣ", phone: "2382051200" },
    { id: 104, name: "ΠΑΠΑΝΤΩΝΗ ΧΑΡΙΚΛΕΙΑ", area: "Γιαννιτσά", subArea: "Π. Πέλλα", address: "Π. ΠΕΛΛΑ", phone: "2382031447" },
    { id: 105, name: "ΠΑΠΑΣΤΑΥΡΟΥ ΣΟΦΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΤΑΓ. ΓΕΩΡΓΟΥΛΗ 7", phone: "2382025444" },
    { id: 112, name: "ΠΛΟΥΓΑΡΛΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΕΘ. ΑΝΤΙΣΤΑΣΕΩΣ 4", phone: "2382028806" },
    { id: 113, name: "ΠΟΛΥΧΡΟΝΙΑΔΟΥ ΜΑΡΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "Δ. ΣΕΜΕΡΤΖΙΔΗ", phone: "2382022620" },
    { id: 117, name: "ΣΑΡΑΜΑΝΤΟΥ ΣΟΥΛΤΑΝΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "Χ. ΔΗΜΗΤΡΙΟΥ 1", phone: "2382024134" },
    { id: 123, name: "ΣΙΓΚΟΥΔΗ ΑΙΚΤΕΡΙΝΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΖΑΜΙΔΗ 4", phone: "2382023881" },
    { id: 127, name: "ΣΚΡΕΚΑ ΘΕΟΓΝΩΣΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΤΣΑΚΜΑΚΗ 72", phone: "2382024753" },
    { id: 128, name: "ΣΟΥΜΠΑΣΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΝΙΖΕΛΟΥ 180", phone: "2382081100" },
    { id: 129, name: "ΣΟΥΜΠΑΣΗΣ ΝΙΚΟΛΑΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΝΙΖΕΛΟΥ - ΑΡΒΑΝΙΤΗ 2", phone: "2382024904" },
    { id: 130, name: "ΣΤΑΥΡΑΚΗΣ ΧΡΗΣΤΟΣ", area: "Γιαννιτσά", subArea: "Νέα Πέλλα", address: "ΝΕΑ ΠΕΛΛΑ", phone: "2382031471" },
    { id: 131, name: "ΣΤΑΥΡΟΠΟΥΛΟΣ ΣΤΑΥΡΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 140", phone: "2382028400" },
    { id: 134, name: "ΤΕΡΖΟΥΔΗ ΜΑΡΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΝΙΖΕΛΟΥ 96", phone: "2382027651" },
    { id: 143, name: "ΤΣΙΤΣΙΓΙΑ ΣΟΦΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΝΙΖΕΛΟΥ 127", phone: "2382027545" },
    { id: 144, name: "ΤΣΙΤΣΙΓΙΑ ΘΕΟΔΩΡΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΝΙΖΕΛΟΥ 127", phone: "2382026044" },
    { id: 145, name: "ΤΣΟΝΟΓΛΟΥ ΔΕΣΠΟΙΝΑ", area: "Γιαννιτσά", subArea: "Δυτικό", address: "ΔΥΤΙΚΟ", phone: "2382093040" },
    { id: 148, name: "ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ", area: "Γιαννιτσά", subArea: "Άθυρα", address: "ΑΘΥΡΑ", phone: "2391091551" },
    { id: 149, name: "ΦΟΥΝΤΟΥΚΙΔΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΛ. ΡΩΜΑ 12", phone: "2382082190" },
    { id: 151, name: "ΧΑΤΖΗΔΗΜΗΤΡΙΟΥ ΙΟΥΛΙΑ", area: "Γιαννιτσά", subArea: "Μελίσσι", address: "ΜΕΛΙΣΣΙ", phone: "2382042444" },
    { id: 156, name: "ΧΡΥΣΟΣΤΟΜΙΔΗΣ ΑΝΤΩΝΙΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 178", phone: "2382025735" },

    // --- ΣΚΥΔΡΑ ---
    { id: 8, name: "ΑΛΜΠΑΝΙΔΟΥ ΒΑΣΙΛΙΚΗ", area: "Σκύδρα", subArea: "Αρσένι", address: "ΑΡΣΕΝΙ", phone: "2381071194" },
    { id: 13, name: "ΒΑΡΣΑΚΟΠΟΥΛΟΥ ΒΑΣΙΛΙΚΗ", area: "Σκύδρα", subArea: "Ριζό", address: "ΡΙΖΟ", phone: "2381071604" },
    { id: 16, name: "ΒΕΧΤΣΑΛΗΣ ΣΩΤΗΡΙΟΣ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "Μ.ΑΛΕΞΑΝΔΡΟΥ 29", phone: "2381082057" },
    { id: 30, name: "ΓΩΝΙΑΔΗ ΛΙΑΝΑ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "24ης ΙΟΥΛΙΟΥ 8", phone: "2381089588" },
    { id: 33, name: "ΔΗΜΗΤΡΙΑΔΟΥ ΑΛΕΞΑΝΔΡΑ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "ΣΑΦΡΑΠΟΛΕΩΣ 17", phone: "2381089199" },
    { id: 36, name: "ΔΟΥΛΚΕΡΙΔΗΣ ΧΑΡΑΛΑΜΠΟΣ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "ΕΘΝ. ΑΝΤΙΣΤΑΣΕΩΣ 24", phone: "2381088845" },
    { id: 38, name: "ΕΜΜΑΝΟΥΗΛΙΔΗΣ ΓΕΩΡΓΙΟΣ", area: "Σκύδρα", subArea: "Καλύβια", address: "ΚΑΛΥΒΙΑ", phone: "2381061195" },
    { id: 40, name: "ΧΕΛΗ ΑΝΑΣΤΑΣΙΑ", area: "Σκύδρα", subArea: "Μάνδαλο", address: "ΜΑΝΔΑΛΟ", phone: "2381097677" },
    { id: 48, name: "ΚΑΛΑΦΑΤΗΣ ΣΤΑΥΡΟΣ", area: "Σκύδρα", subArea: "Πρ. Ηλίας", address: "ΠΡ. ΗΛΙΑΣ", phone: "2381041959" },
    { id: 77, name: "ΜΑΝΘΟΥ ΧΡΗΣΤΟΣ", area: "Σκύδρα", subArea: "Λιποχώρι", address: "ΛΙΠΟΧΩΡΙ", phone: "2381400770" },
    { id: 83, name: "ΜΗΝΤΙΛΑΚΗ ΔΕΣΠΟΙΝΑ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "ΕΘΝ. ΑΝΤΙΣΤΑΣΗΣ 8", phone: "2381088875" },
    { id: 91, name: "ΜΠΟΥΝΤΩΝΑΣ ΕΜΜΑΝΟΥΗΛ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "Μ.ΑΛΕΞΑΝΔΡΟΥ 30", phone: "2381089333" },
    { id: 92, name: "ΝΑΤΣΚΟΥ ΦΩΤΕΙΝΗ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "Μ. ΑΛΕΞΑΝΔΡΟΥ 33", phone: "2381089221" },
    { id: 94, name: "ΝΟΥΣΗΚΥΡΟΥ ΓΕΩΡΓΙΟΣ", area: "Σκύδρα", subArea: "Σεβαστειανά", address: "ΣΕΒΑΣΤΕΙΑΝΑ", phone: "2381089565" },
    { id: 96, name: "ΝΟΥΣΗΚΥΡΟΥ ΣΟΦΙΑ", area: "Σκύδρα", subArea: "Λουτροχώρι", address: "ΛΟΥΤΡΟΧΩΡΙ", phone: "2381052810" },
    { id: 99, name: "ΠΑΠΑΓΕΩΡΓΙΟΥ ΜΑΡΙΑ", area: "Σκύδρα", subArea: "Καλή", address: "ΚΑΛΗ", phone: "2381041884" },
    { id: 103, name: "ΠΑΠΑΪΩΑΝΝΟΥ ΜΑΡΙΑ", area: "Σκύδρα", subArea: "Πετριά", address: "ΠΕΤΡΙΑ", phone: "2381071056" },
    { id: 114, name: "ΣΑΒΒΙΔΗΣ ΠΑΝΑΓΙΩΤΗΣ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "Μ. ΑΛΕΞΑΝΔΡΟΥ 40", phone: "2381088173" },
    { id: 119, name: "ΣΔΡΑΥΚΑΚΗΣ ΒΑΣΙΛΕΙΟΣ", area: "Σκύδρα", subArea: "Δάφνη", address: "ΔΑΦΝΗ", phone: "2381061290" },
    { id: 124, name: "ΣΙΔΗΡΟΠΟΥΛΟΥ ΜΑΡΙΚΑ", area: "Σκύδρα", subArea: "Μαυροβούνι", address: "ΜΑΥΡΟΒΟΥΝΙ", phone: "2381088532" },
    { id: 126, name: "ΣΚΕΝΔΕΡΙΔΗΣ ΠΑΥΛΟΣ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "ΕΘ.ΑΝΤΙΣΤΑΣΕΩΣ 24", phone: "2381088845" },
    { id: 135, name: "ΤΖΑΙΚΟΥ ΧΡΙΣΤΙΝΑ", area: "Σκύδρα", subArea: "Άσπρο", address: "ΑΣΠΡΟ", phone: "2381061040" },
    { id: 138, name: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ ΛΑΖΑΡΟΣ", area: "Σκύδρα", subArea: "Καλή", address: "ΚΑΛΗ", phone: "2381041464" },
    { id: 141, name: "ΤΣΕΛΕΠΗ ΜΑΡΙΑ", area: "Σκύδρα", subArea: "Λιπαρό", address: "ΛΙΠΑΡΟ", phone: "2381061851" },
    { id: 147, name: "ΦΑΝΤΙΔΟΥ ΕΙΡΗΝΗ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "ΑΡΓΥΡΟΥΠΟΛΕΩΣ 23", phone: "2381089980" },
    { id: 150, name: "ΧΑΤΖΗΔΗΜΟΥ ΓΡΗΓΟΡΙΟΣ", area: "Σκύδρα", subArea: "Καλλίπολη", address: "ΚΑΛΛΙΠΟΛΗ", phone: "2381094000" },

    // --- ΚΡΥΑ ΒΡΥΣΗ ---
    { id: 4, name: "ΑΔΑΜΙΔΗΣ ΘΕΟΔΟΣΙΟΣ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "Β. ΠΑΥΛΟΥ 77", phone: "2382062100" },
    { id: 5, name: "ΑΔΑΜΙΔΟΥ ΜΑΡΘΑ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "Β. ΠΑΥΛΟΥ 77", phone: "2382062100" },
    { id: 39, name: "ΕΜΜΑΝΟΥΗΛΙΔΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "ΚΡΥΑ ΒΡΥΣΗ", phone: "2382061028" },
    { id: 53, name: "ΚΑΡΑΟΥΛΑΝΗ ΕΥΑΓΓΕΛΙΑ", area: "Κρύα Βρύση", subArea: "Γαλατάδες", address: "ΓΑΛΑΤΑΔΕΣ", phone: "2382042299" },
    { id: 59, name: "ΚΙΤΚΑ ΑΝΑΣΤΑΣΙΑ", area: "Κρύα Βρύση", subArea: "Ακρολίμνη", address: "ΑΚΡΟΛΙΜΝΗ", phone: "2382063656" },
    { id: 70, name: "ΛΑΠΠΑ ΑΓΓΕΛΑ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "Μ. ΑΛΕΞΑΝΔΡΟΥ 8", phone: "2382061786" },
    { id: 84, name: "ΜΙΧΑΚΗ ΑΘΗΝΑ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "ΒΕΝΙΖΕΛΟΥ 71", phone: "2382061124" },
    { id: 93, name: "ΝΑΥΡΟΖΙΔΗΣ ΑΝΑΣΤΑΣΙΟΣ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "Β. ΠΑΥΛΟΥ 32", phone: "2382062120" },
    { id: 106, name: "ΠΑΡΔΑΛΗ ΓΕΩΡΓΙΑ", area: "Κρύα Βρύση", subArea: "Εσώβαλτα", address: "ΕΣΩΒΑΛΤΑ", phone: "2382071001" },
    { id: 120, name: "ΣΙΑΜΑΝΤΑ ΠΕΤΡΙΝΑ", area: "Κρύα Βρύση", subArea: "Γαλατάδες", address: "ΓΑΛΑΤΑΔΕΣ", phone: "2382042002" },
    { id: 155, name: "ΧΡΥΣΑΓΗΣ ΧΑΡΑΛΑΜΠΟΣ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "ΒΑΣ. ΠΑΥΛΟΥ 91", phone: "2382061028" },
    { id: 157, name: "ΧΥΤΑ ΕΛΕΝΗ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "ΑΙΣΧΥΛΟΥ 19", phone: "2382062010" }
];


// ==========================================
// 3. ΛΟΓΙΚΗ ΕΦΑΡΜΟΓΗΣ (Functions)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.getElementById('tabs-container');
    const gridContainer = document.getElementById('pharmacy-grid');
    const dateDisplay = document.getElementById('current-date');

    // --- Α. Εμφάνιση Ημερομηνίας ---
    const today = new Date().toISOString().split('T')[0];
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = new Date().toLocaleDateString('el-GR', options);

    // --- Β. Εύρεση Ενεργών Φαρμακείων ---
    let activePharmacies = [];
    if (SHOW_ALL_MODE) {
        // Αν είναι σε Test Mode, δείξε ΟΛΑ σαν να εφημερεύουν
        activePharmacies = pharmacies;
        dateDisplay.innerHTML += " <br><span style='font-size:0.8em; color:#ffd700;'>(Test Mode: Εμφάνιση Όλων)</span>";
    } else {
        // Κανονική Λειτουργία: Διάβασε το schedule
        const todayIds = schedule[today] || [];
        activePharmacies = pharmacies.filter(p => todayIds.includes(p.id));
    }

    // --- Γ. Tabs (Καρτέλες Περιοχών) ---
    const mainAreas = ["Έδεσσα", "Γιαννιτσά", "Αριδαία", "Σκύδρα", "Κρύα Βρύση"];
    let currentArea = "Έδεσσα"; // Προεπιλογή

    function renderTabs() {
        tabsContainer.innerHTML = '';
        mainAreas.forEach(area => {
            const btn = document.createElement('button');
            btn.className = `tab-btn ${area === currentArea ? 'active' : ''}`;
            btn.textContent = area;
            btn.onclick = () => {
                currentArea = area;
                renderTabs(); // Ενημέρωσε εμφάνιση κουμπιών
                renderGrid(); // Ενημέρωσε λίστα
            };
            tabsContainer.appendChild(btn);
        });
    }

    // --- Δ. Grid (Λίστα Χωριών) ---
    function renderGrid() {
        gridContainer.innerHTML = '';

        // 1. Βρες όλα τα φαρμακεία της τρέχουσας περιοχής (ανεξαρτήτως εφημερίας)
        // για να φτιάξουμε τη λίστα των χωριών.
        const areaPharmacies = pharmacies.filter(p => p.area === currentArea);
        
        // 2. Εξαγωγή μοναδικών χωριών (SubAreas) και αλφαβητική ταξινόμηση
        const uniqueSubAreas = [...new Set(areaPharmacies.map(p => p.subArea))].sort();

        if (uniqueSubAreas.length === 0) {
            gridContainer.innerHTML = '<p style="text-align:center">Δεν βρέθηκαν τοποθεσίες.</p>';
            return;
        }

        // 3. Δημιουργία γραμμής για κάθε χωριό
        uniqueSubAreas.forEach(sub => {
            // Βρες αν υπάρχει ΕΝΕΡΓΟ φαρμακείο σε αυτό το χωριό σήμερα
            const activePharmaInSub = activePharmacies.find(p => p.subArea === sub);

            const row = document.createElement('div');
            // Αν υπάρχει εφημερεύον, πρόσθεσε την κλάση για το πράσινο border
            row.className = `location-row ${activePharmaInSub ? 'has-pharmacy' : ''}`;

            // --- Header: Όνομα Χωριού & Φαρμακείου ---
            let headerHTML = `
                <div class="location-header">
                    <div class="location-info">
                        <span class="village-name">${sub}</span>
                        ${activePharmaInSub 
                            ? `<span class="pharmacy-preview"><i class="fas fa-check-circle"></i> ${activePharmaInSub.name}</span>` 
                            : `<span style="font-size:0.8rem; color:#999;">-</span>`}
                    </div>
                    <i class="fas fa-chevron-down icon"></i>
                </div>
            `;

            // --- Details: Λεπτομέρειες (Κρυφό) ---
            let detailsHTML = '';
            
            if (activePharmaInSub) {
                // Δημιουργία Link Google Maps αυτόματα
                const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activePharmaInSub.name + " " + activePharmaInSub.address + " " + activePharmaInSub.area)}`;
                
                detailsHTML = `
                    <div class="location-details">
                        <div class="details-content">
                            <div class="detail-item"><i class="fas fa-user-md"></i> <strong>${activePharmaInSub.name}</strong></div>
                            <div class="detail-item"><i class="fas fa-map-marker-alt"></i> ${activePharmaInSub.address}</div>
                            <div class="detail-item"><i class="fas fa-phone"></i> <a href="tel:${activePharmaInSub.phone}" style="color:inherit;text-decoration:none;">${activePharmaInSub.phone}</a></div>
                            <div class="actions">
                                <a href="tel:${activePharmaInSub.phone}" class="btn btn-call"><i class="fas fa-phone"></i> Κλήση</a>
                                <a href="${mapLink}" target="_blank" class="btn btn-map"><i class="fas fa-directions"></i> Χάρτης</a>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                // Μήνυμα αν δεν υπάρχει εφημερία
                detailsHTML = `
                    <div class="location-details">
                        <div class="details-content">
                            <p style="margin:0; color:#666; font-size:0.9rem;">Κανένα φαρμακείο δεν εφημερεύει εδώ σήμερα.</p>
                        </div>
                    </div>
                `;
            }

            row.innerHTML = headerHTML + detailsHTML;

            // Click Event για άνοιγμα/κλείσιμο
            row.querySelector('.location-header').addEventListener('click', () => {
                const details = row.querySelector('.location-details');
                row.classList.toggle('open');
                
                if (row.classList.contains('open')) {
                    details.style.maxHeight = details.scrollHeight + "px";
                } else {
                    details.style.maxHeight = null;
                }
            });

            gridContainer.appendChild(row);
        });
    }

    // Αρχική Εκτέλεση
    renderTabs();
    renderGrid();
});
