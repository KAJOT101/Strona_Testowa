// 1. Obsługa Menu Mobile
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});

// Ukryj menu po kliknięciu w link (na mobile)
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    });
});

// 2. Animacja paska nawigacji przy przewijaniu
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md', 'py-2');
        navbar.classList.remove('py-4');
    } else {
        navbar.classList.remove('shadow-md', 'py-2');
        navbar.classList.add('py-4');
    }
});

// 3. Animacje wejścia sekcji (Scroll Reveal)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Animuj tylko raz
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// 4. OBSŁUGA MODALA ZESPOŁU

// Baza danych pracowników
const teamData = {
    'bartlomiej': {
        name: 'Bartłomiej Jekiel',
        role: 'Osteopata D.O., Fizjoterapeuta',
        img: 'img/team/Bartłomiej.jpg',
        bio: '<p><strong>Wykształcenie:</strong><br>• Krakowska Szkoła Medyczna <br> im. S. Leszczyńskiej, Beskidzka Wyższa Szkoła Umiejętności, AWF Katowice - studia z zakresu fizjoterapii<br>• Akademia Osteopatii - studia z zakresu medycyny osteopatycznej</p><br><p><strong>Praca Zawodowa:</strong><br>• Szpital Powiatowy w Oświęcimiu - fizjoterapeuta (10.2002 - 11.2004)<br>• Fitness Latino w Chrzanowie - fizjoterapeuta (06.2003 - 12.2004)<br>• Szpital Powiatowy w Chrzanowie - fizjoterapeuta (12.2004 - 05.2016)<br>• Własny Gabinet Fizjoterapii i Osteopatii w Libiążu (06.2004 - obecnie)<br>• Medycyna ortopedyczna wg dr J. Cyriax`a - asystent (2010-2013)<br>• Akademia Zawodowa - wykładowca <br>(10.2018 - obecnie)</p>',
        courses: [
            '04.2001 - Kurs masażu klasycznego - BIO-RELAX',
            '10.2001 - Kurs masażu leczniczego II stopnia -<br> BIO-RELAX',
            '03.2002 - Kurs masażu leczniczego III stopnia - <br> BIO-RELAX',
            '02.2006 - Medical Taping Concept - R.J.E.M. Claassen',
            '03.2006 - Funktionalle Osteopathie und Integration - Hans de Jong, Friedhelm Becker',
            '09.2006 - Gezielte Diagnose und Technik der Chiropraktik - Ackermann College of Chiropractic',
            '02.2007 - I Moduł Medycyny Ortopedycznej<br> wg dr J. Cyriax`a - Reha +',
            '06.2007 - II Moduł Medycyny Ortopedycznej<br> wg dr J. Cyriax`a - Reha +',
            '01.2008 - III Moduł Medycyny Ortopedycznej<br> wg dr J. Cyriax`a - Reha +',
            '09.2008 - IV Moduł Medycyny Ortopedycznej<br> wg dr J. Cyriax`a - Reha +',
            '04.2009 - V Moduł Medycyny Ortopedycznej<br> wg dr J. Cyriax`a - Reha +',
            '10.2009 - VI Moduł Medycyny Ortopedycznej<br> wg dr J. Cyriax`a - Reha +',
            '11.2009 - Czytanie i analiza zdjęć RTG - Reha +',
            '10.2010 - Międzynarodowy Terapeuta OM Cyriax -<br> kurs egzaminacyjny - Reha +',
            '06.2014 - Kurs podstawowy koncepcji PNF - Reha +',
            '02.2020 - Dissection-Basic-Workshop/Extremities Palpation of organs - Plastinarium in Guben',
            '02.2023 - Osteopatia w Pediatrii - Moduł podstawowy - TYSZKOBURY SZKOLENIA',
            '10.2023 - Osteopatia w Pediatrii - Moduł Zaawansowany - TYSZKOBURY SZKOLENIA',
            '12.2023 - Fizjologia ewolucyjna I seminarium -<br> Med Coach',
            '03.2024 Radiologia kręgosłupa - Dr Rżany Academy',
            '03.2024 - Osteopatyczne podejście do zaburzeń psychosomatycznych I - Enedu',
            '04.2024 - Fizjologia ewolucyjna II seminarium -<br> Med Coach',
            '06.2024 - Osteopatyczne podejście do zaburzeń psychosomatycznych II - Enedu',
            ' 07.2024 - Tytuł Certyfikowanego Osteopaty D.O.<br> Tytuł pracy dyplomowej - "Skuteczność osteopatycznego leczenia kolek u niemowląt”',
            '12.2024 - Pediatria - Philippe Druelle D.O. -<br> Honorata Czechowska',
            '12.2024 - Fizjologia ewolucyjna III seminarium -<br> Med Coach',
            '04.2025 - Fizjologia Ewolucyjna IV seminarium -<br> Med Coach',
            '10.2025 - Fizjologia Ewolucyjna V seminarium -<br> Med Coach'

        ],
        prices: [
            { name: "Wizyta osteopatyczna", price: "200 PLN" },
        ]
    },
    'paulina': {
        name: 'Paulina Kowalska-Giermek',
        role: 'Fizjoterapeuta Dziecięcy',
        img: 'img/team/Paulina.jpg',
        bio: 'Dyplomowany Terapeuta koncepcji NDT Bobath dla Dzieci , PNF , SI oraz PIMT <br>• Absolwentka Akademii Górnośląskiej dawniej Górnośląska Wyższa Szkoła Handlowa( Licencjat z Fizjoterapii) rok 2010<br>• Absolwentka Śląskiego Uniwersytetu Medycznego w Katowicach ( Magister Fizjoterapii) rok 2012<br>• Absolwentka Studiów Podyplomowych Akademii Górnośląskiej dawniej Górnośląska Wyższa Szkoła Handlowa - Neurorozwojowa Terapia Dzieci z Dysfunkcjami Układu Nerwowego rok 2014 pod kierunkiem Dr hab. Małgorzata Matyja , Dr Anna Gogola<br>• Uzyskanie tytułu Nauczyciela Kontraktowego - rok 2013',
        courses: [
            'Ćwiczenia oporowe i równoważne z zastosowaniem przyborów Thera-Band rok 2010, prowadzący Mgr Józef Spałek',
            'PNF - Proprioceptywna Nerwowo- Mięśniowa Facilitacja - Tytuł Dyplomowanego Terapeuty PNF rok 2012, prowadzący Mgr Aleksander Lizak',
            'Neurobiologiczne Podstawy Integracji Sensorycznej - I stopień Integracji Sensorycznej , rok 2014, prowadzący Mgr Magdalena Okrzasa, Mgr Małgorzata Kamiennik',
            'Wczesne Wspomaganie Rozwoju - ocena rozwoju dziecka do 2-go roku życia rok 2017 prowadzący Dr Alicja Salwach',
            'Specyfika usprawniania dzieci z różnymi formami hipotonii posturalnej ze szczególnym uwzględnieniem niespastycznych postaci MPD rok 2017 , prowadzący Dr Anna Gogola',
            'Skoliozy - diagnostyka i postępowanie fizjoterapeutyczne rok 2018, prowadzący Dr n.med. Piotr Kwiatkowski',
            'Fizjoterapia Neonatologiczna rok 2020, prowadzący Mgr Justyna Niedźwiecka',
            'Ocena funkcjonalna i prowadzenie dokumentacji medycznej dla pacjentów w wieku rozwojowym rok 2021, prowadzący Dr n.med. Tomasz Łosień ( szkolenie KIF)',
            'Osteopatia w Pediatrii rok 2021, prowadzący Pediatric Osteopathy Sarah Bayley',
            'Terapia Integracji Sensorycznej - II stopień - Tytuł Terapeuty Integracji Sensorycznej - rok 2021 , prowadzący Ewa Romanik, Jolanta Kazanowska',
            'Wybiórczość pokarmowa o podłożu sensoryczno- motorycznym rok 2021, prowadzący Mgr Marta Baj -Lieder',
            'Trójpłaszczyznowa Terapia Manualna Wad Stóp u Dzieci na podstawach neurofizjologicznych - metoda „Zukunft- Huber” rok 2022 , prowadzący Mgr Sylwia Lizak',
            'Metoda Ruchu Rozwijającego wg Weroniki Sherborne',
            'Rozwojowa Dysplazja stawu biodrowego - rok 2022 , prowadzący Dr n.med. Michał Rżany D.O',
            'Rurka Tracheostomijna - wskazania dla terapeutów, rok 2022 , prowadzący Mgr Tatiana Lewicka',
            'Dysfagia czy zaburzenia karmienia rok 2022, prowadzący Dr Ewa Winnicka',
            'Zastosowanie Technik Powięziowych w Pediatrii - cz I - rok 2022 , prowadzący Dr Jarosław Ciechmski cz II - rok 2022 - prowadzący Dr Jarosław Ciechomski D.O',
            'Terapia Neurorozwojowa NDT - Bobath dla dzieci - Tytuł Terapeuty Metody Ndt Bobath dla Dzieci rok 2022, prowadzący Mgr Robert Giezek, Dr Małgorzata Szmurło, Mgr Katarzyna Padula, Foteini Zografou',
            'Strategie Terapeutyczne w rehabilitacji małego dziecka rok 2023, prowadzący Mgr Beata Wasicka',
            'Diagnostyka HINE - badanie neurologiczne niemowląt rok 2023, prowadzący Dr Andrea Guzetta',
            'Diagnostyka Metodą Prechtl - rok 2023, prowadzący Dr Andrea Guzetta',
            'Diagnoza i Terapia Małego Dziecka - jakościowa ocena rozwoju motorycznego, ocena kliniczna procesów SI, terapia i programy domowe, rok 2023, prowadząca Mgr Magdalena Okrzasa, Mgr Sylwia Wiliams',
            'Stopa Dziecka - diagnostyka i terapia - rok 2024 , prowadząca: Mgr Małgorzata Jura',
            'Wczesna Diagnostyka Zaburzeń Sensomotorycznych u Noworodków i Niemowląt - rok 2023, prowadzący Dr Ewa Bartelmus',
            'Terapia Dziecka Urodzonego Przedwcześnie - rok 2024, prowadzący Mgr Beata Wasicka',
            'Współczesna Fizjoterapia Oddechowa - stymulacja oraz oczyszczanie układu oddechowego od pierwszych dni życia - rok 2023 , prowadzący Mgr Mikołaj Kowalski',
            'TMPI- PIMT Pediatric Integrative Manual Therapy<br>PIMT 1 oraz 2 rok 2024, prowadzący Ignacio Pastor<br>PIMT 3 oraz 4 rok 2025 , prowadzący Igancio Pastor<br>PIMT 5 oraz 6 rok 2025, prowadzący Ignacio Pastor'
        ],
        prices: [
            { name: "Pierwsza wizyta", price: "200 PLN" },
            { name: "Kolejna wizyta", price: "130 PLN" }
        ]
    },
    'dagmara': {
        name: 'Dagmara Sojka',
        role: 'Fizjoterapeuta',
        img: 'img/team/Dagmara.jpg',
        bio: 'Cześć, nazywam się Dagmara Sojka. Ukończyłam studia fizjoterapeutyczne na AWF w Krakowie oraz PPWSZ w Nowym Targu. To był dopiero początek mojej edukacji i przygody z fizjoterapią - moja wiedza na temat anatomii i fizjologii człowieka jest cały czas rozwijana podczas licznych kursów, w których uczestniczyłam, m.in.: McKenzie, OM Cyriax`s, Kinezyterapia, PNF podstawowy i rozwijający, PNF w skoliozach, Terapia Manualna wg Briana Mulligana, Neurorozwojowa diagnostyka i terapia dzieci z łagodnymi zaburzeniami sensorycznymi i posturalno-motorycznymi oraz liczne kursy masażu. Podczas tych szkoleń poznałam techniki i metody pracy pozwalające mi podczas wizyty na postawienie prawidłowej diagnozy i dobranie odpowiedniej terapii. W przyszłości zamierzam dalej zdobywać nową wiedzę, aby jak najlepiej pomagać swoim pacjentom. Na co dzień pracuję w Szpitalu Powiatowym w Chrzanowie oraz prowadzę własną działalność fizjoterapeutyczną. Prywatnie jestem żoną i mamą dwójki dzieci. W wolnych chwilach - chociaż mam ich mało - uwielbiam czytać książki i piec ciasta.',
        courses: [
            'Masaż Tkanek Głębokich (Deep Tissue)',
            'Rozluźnianie Mięśniowo-Powięziowe',
            'Masaż Sportowy z elementami odnowy biologicznej',
            'Anatomia Palpacyjna',
            'Pinoterapia'
        ],
        prices: [
            { name: "Wizyta osteopatyczna", price: "200 PLN" },
            { name: "Wizyta fizjoterapeutyczna", price: "150 PLN" }
        ]
    },
    'pawel': {
        name: 'Paweł Lichota',
        role: 'Fizjoterapeuta',
        img: 'img/team/Paweł.jpg',
        bio: 'Cześć! Jestem magistrem fizjoterapii, absolwentem Collegium Medicum Uniwersytetu Jagiellońskiego oraz Śląskiego Uniwersytetu Medycznego w Katowicach. Bazując na wiedzy zdobytej podczas kursów Medycyny Ortopedycznej wg Jamesa Cyriax`a, metod neurofizjologicznych PNF oraz wielu lat praktyki zawodowej, pomagam ludziom powrócić do zdrowia. Podstawą mojej pracy z pacjentem jest dokładny wywiad oraz badanie kliniczne, na podstawie których mogę znaleźć przyczynę dolegliwości i zastosować skuteczne leczenie. Podczas terapii działam nie tylko na uszkodzonej strukturze, ale również na pozostałych rejonach organizmu, które często kompensują chorobę i generują dodatkowe objawy. Uzupełnieniem terapii są indywidualnie dobrane ćwiczenia, które pomagają utrzymać uzyskany efekt i zmniejszyć ryzyko nawrotów dolegliwości. Poprzez edukację w zakresie profilaktyki i ergonomii angażuję pacjenta do aktywnego udziału w procesie leczenia, pokazując realny wpływ, jaki może mieć na swoje zdrowie. Prywatnie pasjonuję się turystyką górską, jazdą na rowerze oraz poszukiwaniem nowych sposobów aktywnego spędzania czasu.',
        courses: [
            'Profesjonalna Obsługa Pacjenta w Placówce Medycznej',
            'Zarządzanie czasem i organizacja pracy',
            'Komunikacja interpersonalna',
            'Pierwsza Pomoc Przedmedyczna'
        ],
        prices: [
            { name: "Wizyta osteopatyczna", price: "200 PLN" },
            { name: "Wizyta fizjoterapeutyczna", price: "150 PLN" }
        ]
    }
};

const modal = document.getElementById('team-modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalRole = document.getElementById('modal-role');
const modalBio = document.getElementById('modal-bio');
const modalCourses = document.getElementById('modal-courses');
const modalPricesList = document.getElementById('modal-prices-list'); // Pobierz element tabeli

function openModal(memberId) {
    const member = teamData[memberId];
    if (!member) return;

    // Wypełnij dane
    modalImg.src = member.img;
    modalName.textContent = member.name;
    modalRole.textContent = member.role;
    modalBio.innerHTML = member.bio;

    // Wyczyść i wypełnij listę kursów
    modalCourses.innerHTML = '';
    member.courses.forEach(course => {
        const li = document.createElement('li');
        li.innerHTML = course;
        modalCourses.appendChild(li);
    });

    modalPricesList.innerHTML = ''; // Czyścimy starą tabelę
    if (member.prices) {
        member.prices.forEach(item => {
            // Tworzymy wiersz tabeli
            const row = `
                <tr class="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                    <td class="py-2 text-gray-600 text-base font-bold">${item.name}</td>
                    <td class="py-2 font-bold text-accent text-right">${item.price}</td>
                </tr>
            `;
            modalPricesList.innerHTML += row;
        });
    } else {
        // Opcjonalnie: komunikat jeśli brak cen
        modalPricesList.innerHTML = '<tr><td colspan="2" class="py-2 text-gray-400 italic text-center">Ceny ustalane indywidualnie</td></tr>';
    }

    // Pokaż modal
    modal.classList.remove('hidden');
    // Zablokuj przewijanie tła
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    // Odblokuj przewijanie tła
    document.body.style.overflow = 'auto';
}

// Zamknij modal klawiszem ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});