// ==============================================
// KONFIGURACJA SLIDESHOW - ŁATWA EDYCJA
// ==============================================
// To jest plik, który możesz edytować, aby zmienić treści na slajdach
// Wystarczy zmienić tekst poniżej i zapisać plik

const CONFIG = {
    // Czas wyświetlania każdego slajdu (w milisekundach)
    slideInterval: 10000, // 10000 = 10 sekund
    
    // Dane dla slajdu powitalnego
    welcome: {
        title: "Witamy w Powiatowym<br>Urzędzie Pracy",
        subtitle: "Sztum",
        logo: "🏢" // Możesz zmienić emoji
    },
    
    // Statystyki
    stats: {
        mainNumber: "5,8%",
        label: "Stopa bezrobocia w powiecie",
        trend: "📈", // 📈 wzrost, 📉 spadek
        trendText: "Dane: Grudzień 2024"
    },
    
    // Oferty pracy (lista)
    jobs: [
        {
            position: "Robotnik Gospodarczy",
            company: "🏭 MHL Serwis Sp. z o.o.",
            location: "📍 Sztumskie Pole",
            salary: "4 666 zł",
            requirements: [
                "Umowa o pracę",
                "Pełny etat",
                "Orzeczenie o niepełnosprawności",
                "Start: natychmiast"
            ],
            contact: "📞 Kontakt: pokój 12 | tel. 55 123-45-67",
            backgroundColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            salaryColor: "#2ecc71"
        },
        {
            position: "Specjalista ds. Zamówień",
            company: "🏛️ Gmina Stary Dzierzgoń",
            location: "📍 Stary Dzierzgoń",
            salary: "4 806 zł",
            requirements: [
                "Umowa o pracę",
                "Pełny etat",
                "Wykształcenie wyższe",
                "Start: 12.01.2026"
            ],
            contact: "📞 Kontakt: pokój 15 | tel. 55 123-45-68",
            backgroundColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            salaryColor: "#3498db"
        }
        // Możesz dodać więcej ofert kopiując powyższy blok
    ],
    
    // Dane demograficzne
    demographic: {
        title: "Kobiety na rynku pracy",
        percentage: "63%",
        message: "Mamy specjalne programy aktywizacyjne dla kobiet!",
        chartData: {
            women: 63,
            men: 37
        }
    },
    
    // Informacja prawna/aktualności
    legalInfo: {
        icon: "⚖️",
        title: "Ważne zmiany prawne",
        text: [
            "Od 1 grudnia 2025 wchodzą w życie nowe przepisy dotyczące zatrudniania cudzoziemców.",
            "Sprawdź szczegóły w pokoju 8 lub na naszej stronie internetowej."
        ],
        highlight: "Obowiązuje od 1 grudnia 2025"
    },
    
    // Dane kontaktowe
    contact: {
        title: "Skontaktuj się z nami",
        items: [
            {
                icon: "📞",
                label: "Telefon",
                value: "55 123-45-67"
            },
            {
                icon: "📧",
                label: "E-mail",
                value: "info@pup-sztum.pl"
            },
            {
                icon: "🌐",
                label: "Strona WWW",
                value: "www.pup-sztum.pl"
            },
            {
                icon: "🕐",
                label: "Godziny otwarcia",
                value: "7:30 - 15:30"
            }
        ],
        qrText: "Zeskanuj kod QR, aby zobaczyć wszystkie oferty"
    }
};

// ==============================================
// INSTRUKCJE EDYCJI:
// ==============================================
// 
// 1. ABY ZMIENIĆ CZAS WYŚWIETLANIA:
//    - Zmień wartość 'slideInterval' (w milisekundach)
//    - 10000 = 10 sekund, 15000 = 15 sekund
//
// 2. ABY ZMIENIĆ STATYSTYKI:
//    - Edytuj sekcję 'stats'
//    - Zmień 'mainNumber' na nową wartość
//
// 3. ABY DODAĆ NOWĄ OFERTĘ PRACY:
//    - Skopiuj cały blok { position: ... } z sekcji 'jobs'
//    - Wklej go na końcu listy (przed zamykającym nawiasem ])
//    - Zmień wartości na nowe dane
//    - Pamiętaj o przecinku między ofertami!
//
// 4. ABY USUNĄĆ OFERTĘ:
//    - Usuń cały blok { position: ... } danej oferty
//
// 5. ABY ZMIENIĆ KOLORY:
//    - Zmień wartości 'backgroundColor' i 'salaryColor'
//    - Możesz użyć: nazw kolorów (red, blue) lub kodów hex (#FF0000)
//
// ==============================================
