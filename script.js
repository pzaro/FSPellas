// --- ΡΥΘΜΙΣΕΙΣ ---
// Αν είναι true, δείχνει ΟΛΑ τα φαρμακεία (για έλεγχο).
// Αν είναι false, δείχνει μόνο όσα εφημερεύουν βάσει ημερομηνίας.
const SHOW_ALL_MODE = true; 

// --- ΔΕΔΟΜΕΝΑ ΦΑΡΜΑΚΕΙΩΝ ---
const pharmacies = [
    { id: 1, name: "ΑΓΓΕΛΟΥ ΜΑΡΙΑ - ΖΩΗ", area: "Έδεσσα", address: "ΕΓΝΑΤΙΑΣ 9", phone: "2381023410", map: "https://www.google.com/maps/search/?api=1&query=ΕΓΝΑΤΙΑΣ+9+ΕΔΕΣΣΑ" },
    { id: 2, name: "ΑΓΓΕΛΟΥ ΑΓΓΕΛΟΣ", area: "Έδεσσα", address: "ΕΓΝΑΤΙΑΣ 9", phone: "2381023410", map: "https://www.google.com/maps/search/?api=1&query=ΕΓΝΑΤΙΑΣ+9+ΕΔΕΣΣΑ" },
    { id: 3, name: "ΑΓΟΡΑΣΤΟΥ ΧΡΙΣΤΙΝΑ", area: "Αριδαία", address: "ΑΘ. ΔΙΑΚΟΥ 18", phone: "2384022300", map: "https://www.google.com/maps/search/?api=1&query=ΑΘ.+ΔΙΑΚΟΥ+18+ΑΡΙΔΑΙΑ" },
    { id: 4, name: "ΑΔΑΜΙΔΗΣ ΘΕΟΔΟΣΙΟΣ", area: "Κρύα Βρύση", address: "Β. ΠΑΥΛΟΥ 77", phone: "2382062100", map: "https://www.google.com/maps/search/?api=1&query=Β.+ΠΑΥΛΟΥ+77+ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 5, name: "ΑΔΑΜΙΔΟΥ ΜΑΡΘΑ", area: "Κρύα Βρύση", address: "Β. ΠΑΥΛΟΥ 77", phone: "2382062100", map: "https://www.google.com/maps/search/?api=1&query=Β.+ΠΑΥΛΟΥ+77+ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 6, name: "ΑΘΑΝΑΣΙΑΔΗΣ ΕΥΣΤΡΑΤΙΟΣ", area: "Αριδαία", address: "ΚΥΠΡΟΥ 41", phone: "2384021272", map: "https://www.google.com/maps/search/?api=1&query=ΚΥΠΡΟΥ+41+ΑΡΙΔΑΙΑ" },
    { id: 7, name: "ΑΘΑΝΑΣΙΑΔΗΣ ΠΑΝΑΓΙΩΤΗΣ", area: "Γιαννιτσά", address: "ΠΛΑΣΤΗΡΑ 29", phone: "2382029108", map: "https://www.google.com/maps/search/?api=1&query=ΠΛΑΣΤΗΡΑ+29+ΓΙΑΝΝΙΤΣΑ" },
    { id: 8, name: "ΑΛΜΠΑΝΙΔΟΥ ΒΑΣΙΛΙΚΗ", area: "Σκύδρα", address: "ΑΡΣΕΝΙ ΣΚΥΔΡΑΣ", phone: "2381071194", map: "https://www.google.com/maps/search/?api=1&query=ΑΡΣΕΝΙ+ΣΚΥΔΡΑΣ" },
    { id: 9, name: "ΑΛΤΙΝΙΔΗΣ ΙΩΑΝΝΗΣ", area: "Αριδαία", address: "ΓΑΡΕΦΙ ΑΡΙΔΑΙΑ", phone: "2384075083", map: "https://www.google.com/maps/search/?api=1&query=ΓΑΡΕΦΙ+ΑΡΙΔΑΙΑ" },
    { id: 10, name: "ΑΜΒΡΟΣΙΔΟΥ ΛΙΑΝΑ", area: "Γιαννιτσά", address: "ΤΡΙΦΥΛΛΙ ΓΙΑΝΝΙΤΣΑ", phone: "2382094300", map: "https://www.google.com/maps/search/?api=1&query=ΤΡΙΦΥΛΛΙ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 11, name: "ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", area: "Αριδαία", address: "ΑΓ. ΝΙΚΑΝΔΡΟΥ 8", phone: "2384021001", map: "https://www.google.com/maps/search/?api=1&query=ΑΓ.+ΝΙΚΑΝΔΡΟΥ+8+ΑΡΙΔΑΙΑ" },
    { id: 12, name: "ΒΑΡΕΛΑΣ ΜΙΧΑΗΛ", area: "Γιαννιτσά", address: "Π. ΜΕΛΑ 5", phone: "2382024555", map: "https://www.google.com/maps/search/?api=1&query=Π.+ΜΕΛΑ+5+ΓΙΑΝΝΙΤΣΑ" },
    { id: 13, name: "ΒΑΡΣΑΚΟΠΟΥΛΟΥ ΒΑΣΙΛΙΚΗ", area: "Σκύδρα", address: "ΡΙΖΟ ΣΚΥΔΡΑΣ", phone: "2381071604", map: "https://www.google.com/maps/search/?api=1&query=ΡΙΖΟ+ΣΚΥΔΡΑΣ" },
    { id: 14, name: "ΒΑΚΙΡΤΖΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ", area: "Γιαννιτσά", address: "ΠΑΛΑΙΦΥΤΟ ΓΙΑΝΝΙΤΣΑ", phone: "2382041322", map: "https://www.google.com/maps/search/?api=1&query=ΠΑΛΑΙΦΥΤΟ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 15, name: "ΒΑΣΙΛΕΙΑΔΗΣ ΑΝΑΣΤΑΣΙΟΣ", area: "Έδεσσα", address: "ΦΙΛΙΠΠΟΥ-Π. ΜΕΛΑ 18", phone: "2381022236", map: "https://www.google.com/maps/search/?api=1&query=ΦΙΛΙΠΠΟΥ-Π.+ΜΕΛΑ+18+ΕΔΕΣΣΑ" },
    { id: 16, name: "ΒΕΧΤΣΑΛΗΣ ΣΩΤΗΡΙΟΣ", area: "Σκύδρα", address: "Μ.ΑΛΕΞΑΝΔΡΟΥ 29", phone: "2381082057", map: "https://www.google.com/maps/search/?api=1&query=Μ.ΑΛΕΞΑΝΔΡΟΥ+29+ΣΚΥΔΡΑ" },
    { id: 17, name: "ΓΑΝΑ ΒΑΣΙΛΙΚΗ", area: "Γιαννιτσά", address: "ΠΕΝΤΑΠΛΑΤΑΝΟΣ", phone: "2382082077", map: "https://www.google.com/maps/search/?api=1&query=ΠΕΝΤΑΠΛΑΤΑΝΟΣ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 18, name: "ΓΙΑΝΝΙΟΣ ΠΟΛΥΖΩΗΣ", area: "Έδεσσα", address: "ΔΗΜΟΚΡΑΤΙΑΣ 17", phone: "2381023513", map: "https://www.google.com/maps/search/?api=1&query=ΔΗΜΟΚΡΑΤΙΑΣ+17+ΕΔΕΣΣΑ" },
    { id: 19, name: "ΓΙΟΥΤΙΚΑ ΕΛΕΥΘΕΡΙΑ- ΜΑΡΙΑ", area: "Γιαννιτσά", address: "ΤΣΑΚΜΑΚΗ 68", phone: "2382022694", map: "https://www.google.com/maps/search/?api=1&query=ΤΣΑΚΜΑΚΗ+68+ΓΙΑΝΝΙΤΣΑ" },
    { id: 20, name: "ΓΚΑΪΤΑΤΖΗΣ ΑΓΓΕΛΟΣ", area: "Γιαννιτσά", address: "ΑΡΑΒΗΣΣΟΣ", phone: "2382099191", map: "https://www.google.com/maps/search/?api=1&query=ΑΡΑΒΗΣΣΟΣ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 21, name: "ΓΚΙΚΑΣ ΑΛΕΞΑΝΔΡΟΣ", area: "Γιαννιτσά", address: "Δ. ΣΕΜΕΡΤΖΙΔΗ", phone: "2382024813", map: "https://www.google.com/maps/search/?api=1&query=Δ.+ΣΕΜΕΡΤΖΙΔΗ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 22, name: "ΓΚΙΚΑ ΑΝΑΣΤΑΣΙΑ", area: "Γιαννιτσά", address: "Δ. ΣΕΜΕΡΤΖΙΔΗ", phone: "2382024813", map: "https://www.google.com/maps/search/?api=1&query=Δ.+ΣΕΜΕΡΤΖΙΔΗ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 23, name: "ΓΚΙΚΑΣ ΔΗΜΗΤΡΙΟΣ", area: "Έδεσσα", address: "ΘΕΟΤΟΚΟΠΟΥΛΟΥ 5", phone: "2381023770", map: "https://www.google.com/maps/search/?api=1&query=ΘΕΟΤΟΚΟΠΟΥΛΟΥ+5+ΕΔΕΣΣΑ" },
    { id: 24, name: "ΓΚΟΥΤΣΙΔΟΥ ΒΑΣΙΛΙΚΗ", area: "Γιαννιτσά", address: "ΑΜΠΕΛΙΕΣ", phone: "2382094540", map: "https://www.google.com/maps/search/?api=1&query=ΑΜΠΕΛΙΕΣ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 25, name: "ΓΟΥΛΙΟΣ ΠΑΝΤΕΛΗΣ", area: "Έδεσσα", address: "Ν. ΑΓ. ΑΘΑΝΑΣΙΟΣ", phone: "2381031330", map: "https://www.google.com/maps/search/?api=1&query=Ν.+ΑΓ.+ΑΘΑΝΑΣΙΟΣ+ΕΔΕΣΣΑ" },
    { id: 26, name: "ΓΟΡΟΖΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Γιαννιτσά", address: "ΑΓ. ΓΕΩΡΓΙΟΥ 11 Α", phone: "2382024060", map: "https://www.google.com/maps/search/?api=1&query=ΑΓ.+ΓΕΩΡΓΙΟΥ+11+Α+ΓΙΑΝΝΙΤΣΑ" },
    { id: 27, name: "ΓΟΤΟΥΧΙΔΗΣ ΧΑΡΑΛΑΜΠΟΣ", area: "Γιαννιτσά", address: "ΒΕΝΙΖΕΛΟΥ 49", phone: "2382029030", map: "https://www.google.com/maps/search/?api=1&query=ΒΕΝΙΖΕΛΟΥ+49+ΓΙΑΝΝΙΤΣΑ" },
    { id: 28, name: "ΓΟΥΛΙΕΛΜΟΥ ΓΕΘΣΗΜΑΝΗ", area: "Έδεσσα", address: "ΦΛΑΜΟΥΡΙΑ", phone: "2381099005", map: "https://www.google.com/maps/search/?api=1&query=ΦΛΑΜΟΥΡΙΑ+ΕΔΕΣΣΑ" },
    { id: 29, name: "ΓΡΟΠΑΛΗ ΙΟΡΔΑΝΑ", area: "Έδεσσα", address: "Ρ. ΦΕΡΑΙΟΥ 2", phone: "2381022623", map: "https://www.google.com/maps/search/?api=1&query=Ρ.+ΦΕΡΑΙΟΥ+2+ΕΔΕΣΣΑ" },
    { id: 30, name: "ΓΩΝΙΑΔΗ ΛΙΑΝΑ", area: "Σκύδρα", address: "24ης ΙΟΥΛΙΟΥ 8", phone: "2381089588", map: "https://www.google.com/maps/search/?api=1&query=24ης+ΙΟΥΛΙΟΥ+8+ΣΚΥΔΡΑ" },
    { id: 31, name: "ΔΑΝΤΣΑΚΗ ΡΟΔΗ", area: "Γιαννιτσά", address: "ΜΠΑΦΡΑΣ 5", phone: "2382025500", map: "https://www.google.com/maps/search/?api=1&query=ΜΠΑΦΡΑΣ+5+ΓΙΑΝΝΙΤΣΑ" },
    { id: 32, name: "ΔΕΜΕΡΤΖΙΔΟΥ ΧΡΙΣΤΙΝΑ", area: "Γιαννιτσά", address: "ΧΑΤΖΗΔΗΜΗΤΡΙΟΥ 17", phone: "2382022888", map: "https://www.google.com/maps/search/?api=1&query=ΧΑΤΖΗΔΗΜΗΤΡΙΟΥ+17+ΓΙΑΝΝΙΤΣΑ" },
    { id: 33, name: "ΔΗΜΗΤΡΙΑΔΟΥ ΑΛΕΞΑΝΔΡΑ", area: "Σκύδρα", address: "ΣΑΦΡΑΠΟΛΕΩΣ 17", phone: "2381089199", map: "https://www.google.com/maps/search/?api=1&query=ΣΑΦΡΑΠΟΛΕΩΣ+17+ΣΚΥΔΡΑ" },
    { id: 34, name: "ΔΗΜΟΥ ΙΩΑΝΝΗΣ", area: "Αριδαία", address: "ΑΡΧΑΓΓΕΛΟΣ", phone: "2384073618", map: "https://www.google.com/maps/search/?api=1&query=ΑΡΧΑΓΓΕΛΟΣ+ΑΡΙΔΑΙΑ" },
    { id: 35, name: "ΔΙΤΣΟΣ ΛΑΖΑΡΟΣ", area: "Έδεσσα", address: "ΑΓ. ΔΗΜΗΤΡΙΟΥ 28", phone: "2381027741", map: "https://www.google.com/maps/search/?api=1&query=ΑΓ.+ΔΗΜΗΤΡΙΟΥ+28+ΕΔΕΣΣΑ" },
    { id: 36, name: "ΚΛΗΡ. ΔΟΥΛΚΕΡΙΔΗΣ ΧΑΡΑΛΑΜΠΟΣ", area: "Σκύδρα", address: "ΕΘΝ. ΑΝΤΙΣΤΑΣΕΩΣ 24", phone: "2381088845", map: "https://www.google.com/maps/search/?api=1&query=ΕΘΝ.+ΑΝΤΙΣΤΑΣΕΩΣ+24+ΣΚΥΔΡΑ" },
    { id: 37, name: "ΔΟΥΛΚΕΡΙΔΗΣ ΚΟΣΜΑΣ", area: "Γιαννιτσά", address: "ΚΑΡΥΩΤΙΣΣΑ", phone: "2382042630", map: "https://www.google.com/maps/search/?api=1&query=ΚΑΡΥΩΤΙΣΣΑ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 38, name: "ΕΜΜΑΝΟΥΗΛΙΔΗΣ ΓΕΩΡΓΙΟΣ", area: "Σκύδρα", address: "ΚΑΛΥΒΙΑ", phone: "2381061195", map: "https://www.google.com/maps/search/?api=1&query=ΚΑΛΥΒΙΑ+ΣΚΥΔΡΑΣ" },
    { id: 39, name: "ΕΜΜΑΝΟΥΗΛΙΔΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ", area: "Κρύα Βρύση", address: "ΚΡΥΑ ΒΡΥΣΗ", phone: "2382061028", map: "https://www.google.com/maps/search/?api=1&query=ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 40, name: "ΖΑΡΟΓΟΥΛΙΔΗΣ ΠΑΝΑΓΙΩΤΗΣ", area: "Σκύδρα", address: "ΜΑΝΔΑΛΟ", phone: "2381097677", map: "https://www.google.com/maps/search/?api=1&query=ΜΑΝΔΑΛΟ+ΣΚΥΔΡΑΣ" },
    { id: 41, name: "ΖΑΧΑΡΙΑΔΟΥ ΓΕΩΡΓΙΑ", area: "Γιαννιτσά", address: "Ν. ΜΥΛΟΤΟΠΟΣ", phone: "2382051791", map: "https://www.google.com/maps/search/?api=1&query=Ν.+ΜΥΛΟΤΟΠΟΣ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 42, name: "ΖΕΡΒΟΥ ΦΩΤΕΙΝΗ", area: "Γιαννιτσά", address: "ΧΑΤΖΗΔΗΜΗΤΡΙΟΥ 70", phone: "2382022264", map: "https://www.google.com/maps/search/?api=1&query=ΧΑΤΖΗΔΗΜΗΤΡΙΟΥ+70+ΓΙΑΝΝΙΤΣΑ" },
    { id: 43, name: "ΖΙΑΚΑΣ ΓΕΩΡΓΙΟΣ", area: "Αριδαία", address: "ΚΥΠΡΟΥ 33", phone: "2384023066", map: "https://www.google.com/maps/search/?api=1&query=ΚΥΠΡΟΥ+33+ΑΡΙΔΑΙΑ" },
    { id: 44, name: "ΖΟΥΜΠΟΥΡΙΔΟΥ ΕΥΔΟΞΙΑ", area: "Γιαννιτσά", address: "Ν. ΜΥΛΟΤΟΠΟΣ", phone: "2382052210", map: "https://www.google.com/maps/search/?api=1&query=Ν.+ΜΥΛΟΤΟΠΟΣ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 45, name: "ΘΕΜΕΛΗ ΜΗΝΑΔΩΡΑ", area: "Γιαννιτσά", address: "ΑΞΟΣ", phone: "2382051512", map: "https://www.google.com/maps/search/?api=1&query=ΑΞΟΣ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 46, name: "ΘΩΜΑΪΔΗΣ ΣΩΤΗΡΙΟΣ", area: "Αριδαία", address: "ΟΡΜΑ", phone: "2384094437", map: "https://www.google.com/maps/search/?api=1&query=ΟΡΜΑ+ΑΡΙΔΑΙΑ" },
    { id: 47, name: "ΙΩΑΝΝΙΔΟΥ ΧΡΙΣΤΙΝΑ", area: "Έδεσσα", address: "ΦΛΩΡΙΝΗΣ 7", phone: "2381028673", map: "https://www.google.com/maps/search/?api=1&query=ΦΛΩΡΙΝΗΣ+7+ΕΔΕΣΣΑ" },
    { id: 48, name: "ΚΑΛΑΦΑΤΗΣ-ΠΑΠΑΔΗΜΗΤΡΙΟΥ ΣΤΑΥΡΟΣ", area: "Σκύδρα", address: "ΠΡ. ΗΛΙΑΣ", phone: "2381041959", map: "https://www.google.com/maps/search/?api=1&query=ΠΡ.+ΗΛΙΑΣ+ΣΚΥΔΡΑ" },
    { id: 49, name: "ΚΑΛΤΣΑ ΜΑΡΙΑ", area: "Αριδαία", address: "ΔΗΜΟΚΡΑΤΙΑΣ 2", phone: "2384022235", map: "https://www.google.com/maps/search/?api=1&query=ΔΗΜΟΚΡΑΤΙΑΣ+2+ΑΡΙΔΑΙΑ" },
    { id: 50, name: "ΚΑΡΑΓΙΑΝΝΗ ΑΝΝΑ", area: "Γιαννιτσά", address: "Π. ΠΕΛΛΑ", phone: "2382031447", map: "https://www.google.com/maps/search/?api=1&query=Π.+ΠΕΛΛΑ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 51, name: "ΚΑΡΑΤΖΙΔΗΣ ΒΑΣΙΛΕΙΟΣ", area: "Αριδαία", address: "ΕΞΑΠΛΑΤΑΝΟΣ", phone: "2384042170", map: "https://www.google.com/maps/search/?api=1&query=ΕΞΑΠΛΑΤΑΝΟΣ+ΑΡΙΔΑΙΑ" },
    { id: 52, name: "ΚΑΡΑΔΗΜΟΥ ΚΩΝΣΤΑΝΤΙΝΑ", area: "Αριδαία", address: "ΕΞΑΠΛΑΤΑΝΟΣ", phone: "2384041701", map: "https://www.google.com/maps/search/?api=1&query=ΕΞΑΠΛΑΤΑΝΟΣ+ΑΡΙΔΑΙΑ" },
    { id: 53, name: "ΚΑΡΑΟΥΛΑΝΗ ΕΥΑΓΓΕΛΙΑ", area: "Κρύα Βρύση", address: "ΓΑΛΑΤΑΔΕΣ", phone: "2382042299", map: "https://www.google.com/maps/search/?api=1&query=ΓΑΛΑΤΑΔΕΣ+ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 54, name: "ΚΑΡΑΠΟΥΡΤΖΙΔΗΣ ΑΝΑΣΤΑΣΙΟΣ", area: "Γιαννιτσά", address: "ΑΓ.ΛΟΥΚΑΣ", phone: "2382063620", map: "https://www.google.com/maps/search/?api=1&query=ΑΓ.ΛΟΥΚΑΣ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 55, name: "ΚΑΤΣΙΜΗΡΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Έδεσσα", address: "ΜΟΝΑΣΤΗΡΙΟΥ 31", phone: "2381025510", map: "https://www.google.com/maps/search/?api=1&query=ΜΟΝΑΣΤΗΡΙΟΥ+31+ΕΔΕΣΣΑ" },
    { id: 56, name: "ΚΑΤΣΙΜΗΡΗΣ ΙΩΑΚΕΙΜ", area: "Έδεσσα", address: "ΜΟΝΑΣΤΗΡΙΟΥ 31", phone: "2381025510", map: "https://www.google.com/maps/search/?api=1&query=ΜΟΝΑΣΤΗΡΙΟΥ+31+ΕΔΕΣΣΑ" },
    { id: 57, name: "ΚΙΛΙΚΛΗΣ ΑΝΤΩΝΙΟΣ", area: "Αριδαία", address: "4Ης ΝΟΕΜΒΡΙΟΥ 7", phone: "2384309184", map: "https://www.google.com/maps/search/?api=1&query=4Ης+ΝΟΕΜΒΡΙΟΥ+7+ΑΡΙΔΑΙΑ" },
    { id: 58, name: "ΚΙΟΣΗΣ ΙΩΑΝΝΗΣ", area: "Αριδαία", address: "ΠΛ. ΑΓ.ΓΑΤΣΟΥ 1", phone: "2384025424", map: "https://www.google.com/maps/search/?api=1&query=ΠΛ.+ΑΓ.ΓΑΤΣΟΥ+1+ΑΡΙΔΑΙΑ" },
    { id: 59, name: "ΚΙΤΚΑ ΑΝΑΣΤΑΣΙΑ", area: "Κρύα Βρύση", address: "ΑΚΡΟΛΙΜΝΗ", phone: "2382063656", map: "https://www.google.com/maps/search/?api=1&query=ΑΚΡΟΛΙΜΝΗ+ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 60, name: "ΚΙΤΚΑΣ ΙΩΑΝΝΗΣ", area: "Έδεσσα", address: "ΑΓΡΑΣ", phone: "2381092855", map: "https://www.google.com/maps/search/?api=1&query=ΑΓΡΑΣ+ΕΔΕΣΣΑ" },
    { id: 61, name: "ΚΟΡΥΦΙΔΟΥ ΑΝΤΩΝΙΑ", area: "Γιαννιτσά", address: "ΚΑΡΥΩΤΙΣΣΑ", phone: "2382041545", map: "https://www.google.com/maps/search/?api=1&query=ΚΑΡΥΩΤΙΣΣΑ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 62, name: "ΚΟΤΙΔΟΥ ΕΥΑ", area: "Αριδαία", address: "ΜΙΑΟΥΛΗ 21", phone: "2384022908", map: "https://www.google.com/maps/search/?api=1&query=ΜΙΑΟΥΛΗ+21+ΑΡΙΔΑΙΑ" },
    { id: 63, name: "ΚΟΥΚΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Έδεσσα", address: "Ρ.ΦΕΡΑΙΟΥ 2", phone: "2381022623", map: "https://www.google.com/maps/search/?api=1&query=Ρ.ΦΕΡΑΙΟΥ+2+ΕΔΕΣΣΑ" },
    { id: 64, name: "ΚΟΥΠΑΡΑΝΙΔΟΥ ΚΑΛΗ", area: "Γιαννιτσά", address: "ΤΑΓ. ΓΕΩΡΓΟΥΛΗ 23", phone: "2382024825", map: "https://www.google.com/maps/search/?api=1&query=ΤΑΓ.+ΓΕΩΡΓΟΥΛΗ+23+ΓΙΑΝΝΙΤΣΑ" },
    { id: 65, name: "ΚΟΥΤΣΟΚΩΣΤΑ ΙΩΑΝΝΑ", area: "Γιαννιτσά", address: "ΑΦΩΝ ΠΑΠΑΙΩΑΝΝΟΥ", phone: "2382024141", map: "https://www.google.com/maps/search/?api=1&query=ΑΦΩΝ+ΠΑΠΑΙΩΑΝΝΟΥ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 66, name: "ΚΥΡΙΑΖΟΠΟΥΛΟΣ ΔΗΜΗΤΡΙΟΣ", area: "Έδεσσα", address: "18ης ΟΚΤΩΒΡΙΟΥ 10", phone: "2381028200", map: "https://www.google.com/maps/search/?api=1&query=18ης+ΟΚΤΩΒΡΙΟΥ+10+ΕΔΕΣΣΑ" },
    { id: 67, name: "ΚΥΡΙΑΚΙΔΗΣ ΕΥΑΓΓΕΛΟΣ", area: "Γιαννιτσά", address: "ΜΠΑΦΡΑΣ 18", phone: "2382083233", map: "https://www.google.com/maps/search/?api=1&query=ΜΠΑΦΡΑΣ+18+ΓΙΑΝΝΙΤΣΑ" },
    { id: 68, name: "ΚΥΡΙΑΚΙΔΟΥ ΜΑΡΙΑ", area: "Αριδαία", address: "ΡΙΖΟΧΩΡΙ", phone: "2384042010", map: "https://www.google.com/maps/search/?api=1&query=ΡΙΖΟΧΩΡΙ+ΑΡΙΔΑΙΑ" },
    { id: 69, name: "ΛΙΑΒΑΣ ΑΘΑΝΑΣΙΟΣ-ΡΑΦΑΗΛ", area: "Γιαννιτσά", address: "ΑΧΛΑΔΟΧΩΡΙ", phone: "2382181100", map: "https://www.google.com/maps/search/?api=1&query=ΑΧΛΑΔΟΧΩΡΙ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 70, name: "ΛΑΠΠΑ ΑΓΓΕΛΑ", area: "Κρύα Βρύση", address: "Μ. ΑΛΕΞΑΝΔΡΟΥ 8", phone: "2382061786", map: "https://www.google.com/maps/search/?api=1&query=Μ.+ΑΛΕΞΑΝΔΡΟΥ+8+ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 71, name: "ΛΑΠΙΧΟΥ ΚΑΛΛΙΟΠΗ", area: "Γιαννιτσά", address: "ΠΛ. ΓΚ. ΓΙΩΤΑ 2", phone: "2382028229", map: "https://www.google.com/maps/search/?api=1&query=ΠΛ.+ΓΚ.+ΓΙΩΤΑ+2+ΓΙΑΝΝΙΤΣΑ" },
    { id: 72, name: "ΛΟΥΣΙΩΤΗΣ ΠΕΤΡΟΣ-ΚΑΡΟΛΟΣ", area: "Έδεσσα", address: "ΑΡΧ. ΠΑΝΤΕΛΕΗΜΟΝΟΣ 26", phone: "2381028554", map: "https://www.google.com/maps/search/?api=1&query=ΑΡΧ.+ΠΑΝΤΕΛΕΗΜΟΝΟΣ+26+ΕΔΕΣΣΑ" },
    { id: 73, name: "ΛΥΣΙΤΣΚΑ ΧΡΙΣΤΙΝΑ", area: "Έδεσσα", address: "ΠΑΝΑΓΙΤΣΑ", phone: "2381034191", map: "https://www.google.com/maps/search/?api=1&query=ΠΑΝΑΓΙΤΣΑ+ΕΔΕΣΣΑ" },
    { id: 74, name: "ΜΑΜΑΓΚΙΝΙΔΟΥ ΕΜΜΑΝΟΥΕΛΑ", area: "Γιαννιτσά", address: "ΜΠΑΦΡΑΣ 18", phone: "2382083233", map: "https://www.google.com/maps/search/?api=1&query=ΜΠΑΦΡΑΣ+18+ΓΙΑΝΝΙΤΣΑ" },
    { id: 75, name: "ΜΑΝΔΑΛΤΣΗ ΑΙΚΑΤΕΡΙΝΗ", area: "Γιαννιτσά", address: "ΚΟΛΟΚΟΤΡΩΝΗ 15", phone: "2382022735", map: "https://www.google.com/maps/search/?api=1&query=ΚΟΛΟΚΟΤΡΩΝΗ+15+ΓΙΑΝΝΙΤΣΑ" },
    { id: 76, name: "ΜΑΝΘΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Γιαννιτσά", address: "ΚΥΠΡΟΥ & ΚΟΛΟΚΟΤΡΩΝΗ 11", phone: "2382026979", map: "https://www.google.com/maps/search/?api=1&query=ΚΥΠΡΟΥ+&+ΚΟΛΟΚΟΤΡΩΝΗ+11+ΓΙΑΝΝΙΤΣΑ" },
    { id: 77, name: "ΜΑΝΘΟΥ ΧΡΗΣΤΟΣ", area: "Σκύδρα", address: "ΛΙΠΟΧΩΡΙ", phone: "2381400770", map: "https://www.google.com/maps/search/?api=1&query=ΛΙΠΟΧΩΡΙ+ΣΚΥΔΡΑΣ" },
    { id: 78, name: "ΜΑΡΚΟΥ ΜΑΡΙΑ", area: "Αριδαία", address: "ΣΩΣΑΝΔΡΑ", phone: "2384028060", map: "https://www.google.com/maps/search/?api=1&query=ΣΩΣΑΝΔΡΑ+ΑΡΙΔΑΙΑ" },
    { id: 79, name: "ΜΑΥΡΟΠΟΥΛΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Αριδαία", address: "ΠΟΛΥΤΕΧΝΕΙΟΥ 1", phone: "2384024074", map: "https://www.google.com/maps/search/?api=1&query=ΠΟΛΥΤΕΧΝΕΙΟΥ+1+ΑΡΙΔΑΙΑ" },
    { id: 80, name: "ΜΕΤΑΞΑ ΕΛΙΣΑΒΕΤ", area: "Αριδαία", address: "ΑΓ. ΝΙΚΑΝΔΡΟΥ - ΣΚΡΑ 21", phone: "2384024073", map: "https://www.google.com/maps/search/?api=1&query=ΑΓ.+ΝΙΚΑΝΔΡΟΥ+-+ΣΚΡΑ+21+ΑΡΙΔΑΙΑ" },
    { id: 81, name: "ΜΕΤΑΞΑΣ ΘΕΟΔΩΡΟΣ", area: "Αριδαία", address: "ΑΓ. ΝΙΚΑΝΔΡΟΥ - ΣΚΡΑ 21", phone: "2384024073", map: "https://www.google.com/maps/search/?api=1&query=ΑΓ.+ΝΙΚΑΝΔΡΟΥ+-+ΣΚΡΑ+21+ΑΡΙΔΑΙΑ" },
    { id: 82, name: "ΜΗΝΟΒΓΙΟΥΔΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Γιαννιτσά", address: "ΡΑΧΩΝΑ ΠΕΛΛΑΣ", phone: "2391054431", map: "https://www.google.com/maps/search/?api=1&query=ΡΑΧΩΝΑ+ΠΕΛΛΑΣ" },
    { id: 83, name: "ΜΗΝΤΙΛΑΚΗ ΔΕΣΠΟΙΝΑ", area: "Σκύδρα", address: "ΕΘΝ. ΑΝΤΙΣΤΑΣΗΣ 8", phone: "2381088875", map: "https://www.google.com/maps/search/?api=1&query=ΕΘΝ.+ΑΝΤΙΣΤΑΣΗΣ+8+ΣΚΥΔΡΑ" },
    { id: 84, name: "ΜΙΧΑΚΗ ΑΘΗΝΑ", area: "Κρύα Βρύση", address: "ΒΕΝΙΖΕΛΟΥ 71", phone: "2382061124", map: "https://www.google.com/maps/search/?api=1&query=ΒΕΝΙΖΕΛΟΥ+71+ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 85, name: "ΜΙΣΑΗΛΙΔΗΣ ΦΩΤΙΟΣ", area: "Άλλη", address: "ΑΡΝΙΣΣΑ", phone: "2381031656", map: "https://www.google.com/maps/search/?api=1&query=ΑΡΝΙΣΣΑ" },
    { id: 86, name: "ΜΟΝΑ ΚΑΛΛΙΟΠΗ", area: "Έδεσσα", address: "ΑΘ. ΣΤΟΓΙΟΥ 22", phone: "2381024131", map: "https://www.google.com/maps/search/?api=1&query=ΑΘ.+ΣΤΟΓΙΟΥ+22+ΕΔΕΣΣΑ" },
    { id: 87, name: "ΜΟΥΛΑ ΕΛΕΥΘΕΡΙΑ", area: "Αριδαία", address: "ΚΩΝΣΤΑΝΤΙΑ", phone: "2384051111", map: "https://www.google.com/maps/search/?api=1&query=ΚΩΝΣΤΑΝΤΙΑ+ΑΡΙΔΑΙΑ" },
    { id: 88, name: "ΜΟΡΗΣ ΟΥΜΠΕΡΤΟ-ΔΗΜΗΤΡΙΟΣ", area: "Έδεσσα", address: "ΜΕΣΗΜΕΡΙ", phone: "2381021200", map: "https://www.google.com/maps/search/?api=1&query=ΜΕΣΗΜΕΡΙ+ΕΔΕΣΣΑ" },
    { id: 89, name: "ΜΟΥΧΑΛΕΜΠΗΣ ΝΙΚΟΛΑΟΣ", area: "Έδεσσα", address: "ΔΗΜΟΚΡΑΤΙΑΣ 25", phone: "2381023324", map: "https://www.google.com/maps/search/?api=1&query=ΔΗΜΟΚΡΑΤΙΑΣ+25+ΕΔΕΣΣΑ" },
    { id: 90, name: "ΜΠΑΧΤΣΕΒΑΝΙΔΟΥ ΜΕΡΟΠΗ", area: "Έδεσσα", address: "25ης ΜΑΡΤΙΟΥ 12", phone: "2381023080", map: "https://www.google.com/maps/search/?api=1&query=25ης+ΜΑΡΤΙΟΥ+12+ΕΔΕΣΣΑ" },
    { id: 91, name: "ΜΠΟΥΝΤΩΝΑΣ ΕΜΜΑΝΟΥΗΛ", area: "Σκύδρα", address: "Μ.ΑΛΕΞΑΝΔΡΟΥ 30", phone: "2381089333", map: "https://www.google.com/maps/search/?api=1&query=Μ.ΑΛΕΞΑΝΔΡΟΥ+30+ΣΚΥΔΡΑ" },
    { id: 92, name: "ΝΑΤΣΚΟΥ ΦΩΤΕΙΝΗ", area: "Σκύδρα", address: "Μ. ΑΛΕΞΑΝΔΡΟΥ 33", phone: "2381089221", map: "https://www.google.com/maps/search/?api=1&query=Μ.+ΑΛΕΞΑΝΔΡΟΥ+33+ΣΚΥΔΡΑ" },
    { id: 93, name: "ΝΑΥΡΟΖΙΔΗΣ ΑΝΑΣΤΑΣΙΟΣ", area: "Κρύα Βρύση", address: "Β. ΠΑΥΛΟΥ 32", phone: "2382062120", map: "https://www.google.com/maps/search/?api=1&query=Β.+ΠΑΥΛΟΥ+32+ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 94, name: "ΝΟΥΣΗΚΥΡΟΥ ΓΕΩΡΓΙΟΣ", area: "Σκύδρα", address: "ΣΕΒΑΣΤΕΙΑΝΑ", phone: "2381089565", map: "https://www.google.com/maps/search/?api=1&query=ΣΕΒΑΣΤΕΙΑΝΑ+ΣΚΥΔΡΑΣ" },
    { id: 95, name: "ΝΟΥΣΗΚΥΡΟΥ ΙΩΑΝΝΗΣ-ΙΑΣΩΝ", area: "Έδεσσα", address: "18Ης ΟΚΤΩΒΡΙΟΥ 5", phone: "2381022553", map: "https://www.google.com/maps/search/?api=1&query=18Ης+ΟΚΤΩΒΡΙΟΥ+5+ΕΔΕΣΣΑ" },
    { id: 96, name: "ΝΟΥΣΗΚΥΡΟΥ ΣΟΦΙΑ", area: "Σκύδρα", address: "ΛΟΥΤΡΟΧΩΡΙ", phone: "2381052810", map: "https://www.google.com/maps/search/?api=1&query=ΛΟΥΤΡΟΧΩΡΙ+ΣΚΥΔΡΑΣ" },
    { id: 97, name: "ΠΑΚΟΥ ΑΝΑΣΤΑΣΙΑ", area: "Γιαννιτσά", address: "Δ. ΣΤΑΜΚΟΥ 21 & Β. ΡΩΜΑ", phone: "2382020039", map: "https://www.google.com/maps/search/?api=1&query=Δ.+ΣΤΑΜΚΟΥ+21+&+Β.+ΡΩΜΑ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 98, name: "ΠΑΛΙΚΟΓΛΟΥ ΕΥΔΟΚΙΑ", area: "Αριδαία", address: "ΙΔΑ", phone: "2384022555", map: "https://www.google.com/maps/search/?api=1&query=ΙΔΑ+ΑΡΙΔΑΙΑ" },
    { id: 99, name: "ΠΑΠΑΓΕΩΡΓΙΟΥ ΜΑΡΙΑ", area: "Σκύδρα", address: "ΚΑΛΗ", phone: "2381041884", map: "https://www.google.com/maps/search/?api=1&query=ΚΑΛΗ+ΣΚΥΔΡΑ" },
    { id: 100, name: "ΠΑΠΑΔΟΠΟΥΛΟΣ ΑΓΓΕΛΟΣ", area: "Αριδαία", address: "ΞΙΦΙΑΝΗ", phone: "2384092353", map: "https://www.google.com/maps/search/?api=1&query=ΞΙΦΙΑΝΗ+ΑΡΙΔΑΙΑ" },
    { id: 101, name: "ΠΑΠΑΔΟΠΟΥΛΟΥ ΠΩΛΙΝΑ", area: "Αριδαία", address: "ΠΡΟΜΑΧΟΙ", phone: "2384075673", map: "https://www.google.com/maps/search/?api=1&query=ΠΡΟΜΑΧΟΙ+ΑΡΙΔΑΙΑ" },
    { id: 102, name: "ΠΑΠΑΖΟΓΛΟΥ ΕΛΕΝΗ", area: "Γιαννιτσά", address: "Π. ΜΥΛΟΤΟΠΟΣ", phone: "2382051200", map: "https://www.google.com/maps/search/?api=1&query=Π.+ΜΥΛΟΤΟΠΟΣ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 103, name: "ΠΑΠΑΪΩΑΝΝΟΥ ΜΑΡΙΑ", area: "Σκύδρα", address: "ΠΕΤΡΙΑ", phone: "2381071056", map: "https://www.google.com/maps/search/?api=1&query=ΠΕΤΡΙΑ+ΣΚΥΔΡΑΣ" },
    { id: 104, name: "ΠΑΠΑΝΤΩΝΗ ΧΑΡΙΚΛΕΙΑ", area: "Γιαννιτσά", address: "Π. ΠΕΛΛΑ", phone: "2382031447", map: "https://www.google.com/maps/search/?api=1&query=Π.+ΠΕΛΛΑ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 105, name: "ΠΑΠΑΣΤΑΥΡΟΥ ΣΟΦΙΑ", area: "Γιαννιτσά", address: "ΤΑΓ. ΓΕΩΡΓΟΥΛΗ 7", phone: "2382025444", map: "https://www.google.com/maps/search/?api=1&query=ΤΑΓ.+ΓΕΩΡΓΟΥΛΗ+7+ΓΙΑΝΝΙΤΣΑ" },
    { id: 106, name: "ΠΑΡΔΑΛΗ ΓΕΩΡΓΙΑ", area: "Κρύα Βρύση", address: "ΕΣΩΒΑΛΤΑ", phone: "2382071001", map: "https://www.google.com/maps/search/?api=1&query=ΕΣΩΒΑΛΤΑ+ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 107, name: "ΠΑΣΧΑΛΙΔΗΣ ΟΝΟΥΦΡΙΟΣ", area: "Έδεσσα", address: "Π. ΜΕΛΑ 11", phone: "2381025007", map: "https://www.google.com/maps/search/?api=1&query=Π.+ΜΕΛΑ+11+ΕΔΕΣΣΑ" },
    { id: 108, name: "ΠΑΣΧΑΛΟΓΛΟΥ ΧΡΙΣΤΙΝΑ", area: "Άλλη", address: "ΔΡΟΣΕΡΟ", phone: "2381096196", map: "https://www.google.com/maps/search/?api=1&query=ΔΡΟΣΕΡΟ" },
    { id: 109, name: "ΠΑΣΧΟΥΛΑΡΗ ΠΑΥΛΙΝΑ", area: "Αριδαία", address: "ΛΟΥΤΡΑΚΙ", phone: "2384091122", map: "https://www.google.com/maps/search/?api=1&query=ΛΟΥΤΡΑΚΙ+ΑΡΙΔΑΙΑ" },
    { id: 110, name: "ΠΕΤΡΙΔΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Έδεσσα", address: "Γ. ΠΕΤΣΟΥ 2-4", phone: "2381026158", map: "https://www.google.com/maps/search/?api=1&query=Γ.+ΠΕΤΣΟΥ+2-4+ΕΔΕΣΣΑ" },
    { id: 111, name: "ΠΛΑΤΗΣ ΒΑΣΙΛΕΙΟΣ", area: "Αριδαία", address: "ΜΙΑΟΥΛΗ 21", phone: "2384022908", map: "https://www.google.com/maps/search/?api=1&query=ΜΙΑΟΥΛΗ+21+ΑΡΙΔΑΙΑ" },
    { id: 112, name: "ΠΛΟΥΓΑΡΛΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Γιαννιτσά", address: "ΕΘ. ΑΝΤΙΣΤΑΣΕΩΣ 4", phone: "2382028806", map: "https://www.google.com/maps/search/?api=1&query=ΕΘ.+ΑΝΤΙΣΤΑΣΕΩΣ+4+ΓΙΑΝΝΙΤΣΑ" },
    { id: 113, name: "ΠΟΛΥΧΡΟΝΙΑΔΟΥ ΜΑΡΙΑ", area: "Γιαννιτσά", address: "Δ. ΣΕΜΕΡΤΖΙΔΗ", phone: "2382022620", map: "https://www.google.com/maps/search/?api=1&query=Δ.+ΣΕΜΕΡΤΖΙΔΗ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 114, name: "ΣΑΒΒΙΔΗΣ ΠΑΝΑΓΙΩΤΗΣ", area: "Σκύδρα", address: "Μ. ΑΛΕΞΑΝΔΡΟΥ 40", phone: "2381088173", map: "https://www.google.com/maps/search/?api=1&query=Μ.+ΑΛΕΞΑΝΔΡΟΥ+40+ΣΚΥΔΡΑ" },
    { id: 115, name: "ΣΑΠΑΚΟΛΗ ΕΥΑΓΓΕΛΙΑ", area: "Αριδαία", address: "ΒΟΡΕΙΝΟ", phone: "2384071151", map: "https://www.google.com/maps/search/?api=1&query=ΒΟΡΕΙΝΟ+ΑΡΙΔΑΙΑ" },
    { id: 116, name: "ΣΑΠΟΥΝΤΖΗΣ ΝΙΚΟΛΑΟΣ", area: "Αριδαία", address: "Π. ΜΕΛΑ 28", phone: "2384023325", map: "https://www.google.com/maps/search/?api=1&query=Π.+ΜΕΛΑ+28+ΑΡΙΔΑΙΑ" },
    { id: 117, name: "ΣΑΡΑΜΑΝΤΟΥ ΣΟΥΛΤΑΝΑ", area: "Γιαννιτσά", address: "Χ. ΔΗΜΗΤΡΙΟΥ 1", phone: "2382024134", map: "https://www.google.com/maps/search/?api=1&query=Χ.+ΔΗΜΗΤΡΙΟΥ+1+ΓΙΑΝΝΙΤΣΑ" },
    { id: 118, name: "ΣΑΡΗΓΚΙΟΛΗΣ ΟΡΕΣΤΗΣ", area: "Αριδαία", address: "ΛΟΧ. ΠΑΣΣΙΑ 26 & ΑΘ.ΔΙΑΚΟΥ", phone: "2384024298", map: "https://www.google.com/maps/search/?api=1&query=ΛΟΧ.+ΠΑΣΣΙΑ+26+&+ΑΘ.ΔΙΑΚΟΥ+ΑΡΙΔΑΙΑ" },
    { id: 119, name: "ΣΔΡΑΥΚΑΚΗΣ ΒΑΣΙΛΕΙΟΣ", area: "Σκύδρα", address: "ΔΑΦΝΗ", phone: "2381061290", map: "https://www.google.com/maps/search/?api=1&query=ΔΑΦΝΗ+ΣΚΥΔΡΑΣ" },
    { id: 120, name: "ΣΙΑΜΑΝΤΑ ΠΕΤΡΙΝΑ", area: "Κρύα Βρύση", address: "ΓΑΛΑΤΑΔΕΣ", phone: "2382042002", map: "https://www.google.com/maps/search/?api=1&query=ΓΑΛΑΤΑΔΕΣ+ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 121, name: "ΣΙΓΑΛΑΣ ΜΑΡΙΝΟΣ", area: "Έδεσσα", address: "ΠΛΑΤΑΝΗ", phone: "2381099114", map: "https://www.google.com/maps/search/?api=1&query=ΠΛΑΤΑΝΗ+ΕΔΕΣΣΑ" },
    { id: 122, name: "ΣΙΓΚΕΡΗ ΖΩΗ", area: "Αριδαία", address: "ΔΗΜΟΚΡΑΤΙΑΣ 2", phone: "2384022235", map: "https://www.google.com/maps/search/?api=1&query=ΔΗΜΟΚΡΑΤΙΑΣ+2+ΑΡΙΔΑΙΑ" },
    { id: 123, name: "ΣΙΓΚΟΥΔΗ ΑΙΚΤΕΡΙΝΗ", area: "Γιαννιτσά", address: "ΖΑΜΙΔΗ 4", phone: "2382023881", map: "https://www.google.com/maps/search/?api=1&query=ΖΑΜΙΔΗ+4+ΓΙΑΝΝΙΤΣΑ" },
    { id: 124, name: "ΣΙΔΗΡΟΠΟΥΛΟΥ ΜΑΡΙΚΑ", area: "Σκύδρα", address: "ΜΑΥΡΟΒΟΥΝΙ", phone: "2381088532", map: "https://www.google.com/maps/search/?api=1&query=ΜΑΥΡΟΒΟΥΝΙ+ΣΚΥΔΡΑΣ" },
    { id: 125, name: "ΣΙΣΚΟΥ ΜΑΡΙΑ", area: "Αριδαία", address: "ΠΟΛΥΚΑΡΠΗ", phone: "2384031101", map: "https://www.google.com/maps/search/?api=1&query=ΠΟΛΥΚΑΡΠΗ+ΑΡΙΔΑΙΑ" },
    { id: 126, name: "ΣΚΕΝΔΕΡΙΔΗΣ ΠΑΥΛΟΣ", area: "Σκύδρα", address: "ΕΘ.ΑΝΤΙΣΤΑΣΕΩΣ 24", phone: "2381088845", map: "https://www.google.com/maps/search/?api=1&query=ΕΘ.ΑΝΤΙΣΤΑΣΕΩΣ+24+ΣΚΥΔΡΑ" },
    { id: 127, name: "ΣΚΡΕΚΑ ΘΕΟΓΝΩΣΙΑ", area: "Γιαννιτσά", address: "ΤΣΑΚΜΑΚΗ 72", phone: "2382024753", map: "https://www.google.com/maps/search/?api=1&query=ΤΣΑΚΜΑΚΗ+72+ΓΙΑΝΝΙΤΣΑ" },
    { id: 128, name: "ΣΟΥΜΠΑΣΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Γιαννιτσά", address: "ΒΕΝΙΖΕΛΟΥ 180", phone: "2382081100", map: "https://www.google.com/maps/search/?api=1&query=ΒΕΝΙΖΕΛΟΥ+180+ΓΙΑΝΝΙΤΣΑ" },
    { id: 129, name: "ΣΟΥΜΠΑΣΗΣ ΝΙΚΟΛΑΟΣ", area: "Γιαννιτσά", address: "ΒΕΝΙΖΕΛΟΥ - ΑΡΒΑΝΙΤΗ 2", phone: "2382024904", map: "https://www.google.com/maps/search/?api=1&query=ΒΕΝΙΖΕΛΟΥ+-+ΑΡΒΑΝΙΤΗ+2+ΓΙΑΝΝΙΤΣΑ" },
    { id: 130, name: "ΣΤΑΥΡΑΚΗΣ ΧΡΗΣΤΟΣ", area: "Γιαννιτσά", address: "ΝΕΑ ΠΕΛΛΑ", phone: "2382031471", map: "https://www.google.com/maps/search/?api=1&query=ΝΕΑ+ΠΕΛΛΑ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 131, name: "ΣΤΑΥΡΟΠΟΥΛΟΣ ΣΤΑΥΡΟΣ", area: "Γιαννιτσά", address: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 140", phone: "2382028400", map: "https://www.google.com/maps/search/?api=1&query=ΕΛ.+ΒΕΝΙΖΕΛΟΥ+140+ΓΙΑΝΝΙΤΣΑ" },
    { id: 132, name: "ΣΤΟΥΓΙΑΝΝΙΔΟΥ ΝΕΚΤΑΡΙΑ", area: "Έδεσσα", address: "ΜΟΝΑΣΤΗΡΙΟΥ 30", phone: "2381022444", map: "https://www.google.com/maps/search/?api=1&query=ΜΟΝΑΣΤΗΡΙΟΥ+30+ΕΔΕΣΣΑ" },
    { id: 133, name: "ΣΦΥΡΙΔΟΥ ΜΑΡΙΑ", area: "Αριδαία", address: "ΤΣΑΚΩΝΕΣ", phone: "2384022555", map: "https://www.google.com/maps/search/?api=1&query=ΤΣΑΚΩΝΕΣ+ΑΡΙΔΑΙΑ" },
    { id: 134, name: "ΤΕΡΖΟΥΔΗ ΜΑΡΙΑ", area: "Γιαννιτσά", address: "ΒΕΝΙΖΕΛΟΥ 96", phone: "2382027651", map: "https://www.google.com/maps/search/?api=1&query=ΒΕΝΙΖΕΛΟΥ+96+ΓΙΑΝΝΙΤΣΑ" },
    { id: 135, name: "ΤΖΑΙΚΟΥ ΧΡΙΣΤΙΝΑ", area: "Σκύδρα", address: "ΑΣΠΡΟ", phone: "2381061040", map: "https://www.google.com/maps/search/?api=1&query=ΑΣΠΡΟ+ΣΚΥΔΡΑΣ" },
    { id: 136, name: "ΤΟΥΜΑΝΙΔΗΣ ΑΛΕΞΑΝΔΡΟΣ", area: "Αριδαία", address: "ΧΡ. ΣΜΥΡΝΗΣ 8", phone: "2384022430", map: "https://www.google.com/maps/search/?api=1&query=ΧΡ.+ΣΜΥΡΝΗΣ+8+ΑΡΙΔΑΙΑ" },
    { id: 137, name: "ΤΟΥΜΑΝΙΔΟΥ ΚΛΑΡΑ", area: "Αριδαία", address: "ΑΨΑΛΟΣ", phone: "2384065459", map: "https://www.google.com/maps/search/?api=1&query=ΑΨΑΛΟΣ+ΑΡΙΔΑΙΑ" },
    { id: 138, name: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ ΛΑΖΑΡΟΣ", area: "Σκύδρα", address: "ΚΑΛΗ", phone: "2381041464", map: "https://www.google.com/maps/search/?api=1&query=ΚΑΛΗ+ΣΚΥΔΡΑΣ" },
    { id: 139, name: "ΤΡΥΨΙΑΝΗ ΕΙΡΗΝΗ", area: "Έδεσσα", address: "ΑΛΜΩΠΙΑΣ 1", phone: "2381024191", map: "https://www.google.com/maps/search/?api=1&query=ΑΛΜΩΠΙΑΣ+1+ΕΔΕΣΣΑ" },
    { id: 140, name: "ΤΣΑΚΩΝΑ ΑΙΚΑΤΕΡΙΝΗ", area: "Αριδαία", address: "ΧΡ. ΣΜΥΡΝΗΣ 8", phone: "2384022430", map: "https://www.google.com/maps/search/?api=1&query=ΧΡ.+ΣΜΥΡΝΗΣ+8+ΑΡΙΔΑΙΑ" },
    { id: 141, name: "ΤΣΕΛΕΠΗ ΜΑΡΙΑ", area: "Σκύδρα", address: "ΛΙΠΑΡΟ", phone: "2381061851", map: "https://www.google.com/maps/search/?api=1&query=ΛΙΠΑΡΟ+ΣΚΥΔΡΑΣ" },
    { id: 142, name: "ΤΣΙΤΛΑΚΙΔΟΥ ΜΑΡΙΑ", area: "Έδεσσα", address: "ΡΙΖΑΡΙ", phone: "2381091116", map: "https://www.google.com/maps/search/?api=1&query=ΡΙΖΑΡΙ+ΕΔΕΣΣΑ" },
    { id: 143, name: "ΤΣΙΤΣΙΓΙΑ ΣΟΦΙΑ", area: "Γιαννιτσά", address: "ΒΕΝΙΖΕΛΟΥ 127", phone: "2382027545", map: "https://www.google.com/maps/search/?api=1&query=ΒΕΝΙΖΕΛΟΥ+127+ΓΙΑΝΝΙΤΣΑ" },
    { id: 144, name: "ΤΣΙΤΣΙΓΙΑ ΘΕΟΔΩΡΑ", area: "Γιαννιτσά", address: "ΒΕΝΙΖΕΛΟΥ 127", phone: "2382026044", map: "https://www.google.com/maps/search/?api=1&query=ΒΕΝΙΖΕΛΟΥ+127+ΓΙΑΝΝΙΤΣΑ" },
    { id: 145, name: "ΤΣΟΝΟΓΛΟΥ ΔΕΣΠΟΙΝΑ", area: "Γιαννιτσά", address: "ΔΥΤΙΚΟ", phone: "2382093040", map: "https://www.google.com/maps/search/?api=1&query=ΔΥΤΙΚΟ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 146, name: "ΤΣΟΥΛΦΑ ΑΝΑΣΤΑΣΙΑ", area: "Αριδαία", address: "ΛΟΧ. ΠΑΣΣΙΑ 2", phone: "2384021700", map: "https://www.google.com/maps/search/?api=1&query=ΛΟΧ.+ΠΑΣΣΙΑ+2+ΑΡΙΔΑΙΑ" },
    { id: 147, name: "ΦΑΝΤΙΔΟΥ ΕΙΡΗΝΗ", area: "Άλλη", address: "ΑΡΓΥΡΟΥΠΟΛΕΩΣ 23", phone: "2381089980", map: "https://www.google.com/maps/search/?api=1&query=ΑΡΓΥΡΟΥΠΟΛΕΩΣ+23" },
    { id: 148, name: "ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ", area: "Γιαννιτσά", address: "ΑΘΥΡΑ", phone: "2391091551", map: "https://www.google.com/maps/search/?api=1&query=ΑΘΥΡΑ+ΓΙΑΝΝΙΤΣΩΝ" },
    { id: 149, name: "ΦΟΥΝΤΟΥΚΙΔΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ", area: "Γιαννιτσά", address: "ΒΕΛ. ΡΩΜΑ 12", phone: "2382082190", map: "https://www.google.com/maps/search/?api=1&query=ΒΕΛ.+ΡΩΜΑ+12+ΓΙΑΝΝΙΤΣΑ" },
    { id: 150, name: "ΧΑΤΖΗΔΗΜΟΥ ΓΡΗΓΟΡΙΟΣ", area: "Σκύδρα", address: "ΚΑΛΛΙΠΟΛΗ", phone: "2381094000", map: "https://www.google.com/maps/search/?api=1&query=ΚΑΛΛΙΠΟΛΗ+ΣΚΥΔΡΑΣ" },
    { id: 151, name: "ΧΑΤΖΗΔΗΜΗΤΡΙΟΥ ΙΟΥΛΙΑ", area: "Γιαννιτσά", address: "ΜΕΛΙΣΣΙ", phone: "2382042444", map: "https://www.google.com/maps/search/?api=1&query=ΜΕΛΙΣΣΙ+ΓΙΑΝΝΙΤΣΑ" },
    { id: 152, name: "ΧΡΗΣΤΟΥ ΒΑΡΒΑΡΑ", area: "Έδεσσα", address: "ΘΕΟΤΟΚΟΠΟΥΛΟΥ 5", phone: "2381023770", map: "https://www.google.com/maps/search/?api=1&query=ΘΕΟΤΟΚΟΠΟΥΛΟΥ+5+ΕΔΕΣΣΑ" },
    { id: 153, name: "ΧΡΗΣΤΟΥ ΠΕΛΑΓΙΑ", area: "Αριδαία", address: "ΛΟΧ. ΠΑΣΣΙΑ 26 & ΑΘ.ΔΙΑΚΟΥ", phone: "2384024298", map: "https://www.google.com/maps/search/?api=1&query=ΛΟΧ.+ΠΑΣΣΙΑ+26+&+ΑΘ.ΔΙΑΚΟΥ+ΑΡΙΔΑΙΑ" },
    { id: 154, name: "ΧΡΙΣΤΟΦΗ ΣΩΤΗΡΟΥΛΑ", area: "Άλλη", address: "ΑΡΝΙΣΣΑ", phone: "2381031656", map: "https://www.google.com/maps/search/?api=1&query=ΑΡΝΙΣΣΑ" },
    { id: 155, name: "ΧΡΥΣΑΓΗΣ ΧΑΡΑΛΑΜΠΟΣ", area: "Κρύα Βρύση", address: "ΒΑΣ. ΠΑΥΛΟΥ 91", phone: "2382061028", map: "https://www.google.com/maps/search/?api=1&query=ΒΑΣ.+ΠΑΥΛΟΥ+91+ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 156, name: "ΧΡΥΣΟΣΤΟΜΙΔΗΣ ΑΝΤΩΝΙΟΣ", area: "Γιαννιτσά", address: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 178", phone: "2382025735", map: "https://www.google.com/maps/search/?api=1&query=ΕΛ.+ΒΕΝΙΖΕΛΟΥ+178+ΓΙΑΝΝΙΤΣΑ" },
    { id: 157, name: "ΧΥΤΑ ΕΛΕΝΗ", area: "Κρύα Βρύση", address: "ΑΙΣΧΥΛΟΥ 19", phone: "2382062010", map: "https://www.google.com/maps/search/?api=1&query=ΑΙΣΧΥΛΟΥ+19+ΚΡΥΑ+ΒΡΥΣΗ" },
    { id: 158, name: "ΨΥΧΟΓΙΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Έδεσσα", address: "ΕΓΝΑΤΙΑΣ 36", phone: "2381022232", map: "https://www.google.com/maps/search/?api=1&query=ΕΓΝΑΤΙΑΣ+36+ΕΔΕΣΣΑ" },
    { id: 159, name: "ΨΥΧΟΓΙΟΥ ΣΟΦΙΑ - ΧΡΙΣΤΙΝΑ", area: "Έδεσσα", address: "ΕΓΝΑΤΙΑΣ 36", phone: "2381022232", map: "https://www.google.com/maps/search/?api=1&query=ΕΓΝΑΤΙΑΣ+36+ΕΔΕΣΣΑ" }
];

// --- ΠΡΟΓΡΑΜΜΑ ΕΦΗΜΕΡΙΩΝ ---
// ΕΔΩ πρέπει να βάλεις τις ημερομηνίες και τα ID των φαρμακείων που εφημερεύουν.
// Παράδειγμα: "2025-12-10": [1, 5, 20] (σημαίνει ότι στις 10 Δεκ εφημερεύουν τα φαρμακεία με ID 1, 5 και 20)
const schedule = {
    "2025-12-09": [1, 7, 39], // Παράδειγμα
    "2025-12-10": [2, 12, 40] // Παράδειγμα
};

// --- ΛΟΓΙΚΗ ΕΦΑΡΜΟΓΗΣ ---
document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('pharmacy-list');
    const dateDisplay = document.getElementById('current-date');
    const areaSelect = document.getElementById('area-select');

    // Βρες τη σημερινή ημερομηνία σε μορφή YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];
    
    // Εμφάνιση ημερομηνίας
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = new Date().toLocaleDateString('el-GR', options);

    // Επιλογή: Όλα τα φαρμακεία ή μόνο οι εφημερίες;
    let visiblePharmacies = [];

    if (SHOW_ALL_MODE) {
        // Δείξε όλη τη λίστα
        visiblePharmacies = pharmacies;
        dateDisplay.innerHTML += " <br><span style='font-size:0.8em; color:yellow;'>(Λειτουργία Ελέγχου: Εμφάνιση Όλων)</span>";
    } else {
        // Δείξε μόνο όσα εφημερεύουν σήμερα
        const todayIds = schedule[today] || [];
        visiblePharmacies = pharmacies.filter(p => todayIds.includes(p.id));
    }

    function renderList(filterArea) {
        listContainer.innerHTML = '';

        if (visiblePharmacies.length === 0) {
            listContainer.innerHTML = '<p style="text-align:center; padding:20px;">Δεν βρέθηκαν εφημερίες για σήμερα.</p>';
            return;
        }

        const filtered = filterArea === 'all' 
            ? visiblePharmacies 
            : visiblePharmacies.filter(p => p.area === filterArea);

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

    // Αλλαγή φίλτρου
    areaSelect.addEventListener('change', (e) => {
        renderList(e.target.value);
    });
});
