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
        bio: 'Absolwentka Akademii Górnośląskiej oraz Śląskiego Uniwersytetu Medycznego w Katowicach oraz studiów podyplomowych Neurorozwojowa Terapia Dzieci z Dysfunkcjami Układu Nerwowego. Dyplomowany terapeuta koncepcji NDT, Bobath, PNF, SI. Uczestniczka wielu szkoleń, m.in.: Osteopatia w pediatrii, Trójpłaszczyznowa Terapia Manualna Wad Stóp u dzieci, Fizjoterapia Neonatologiczna, Skoliozy - diagnostyka i postępowanie fizjoterapeutyczne, Wczesne Wspomaganie Rozwoju - ocena rozwoju dziecka do 2. roku życia, Specyfika usprawniania dzieci z różnymi formami hipotonii posturalnej ze szczególnym uwzględnieniem niespastycznych postaci MPD, Metoda Ruchu Rozwijającego wg Weroniki Sherborne, Wybiorczość pokarmowa o podłożu sensoryczno-motorycznym, Rozwojowa dysplazja stawu biodrowego, dysfagia czy zaburzenia karmienia, Strategie Terapeutyczne w rehabilitacji małego dziecka.',
        courses: [
            'NDT Bobath dla dzieci',
            'Diagnostyka metodą Prechtla',
            'Trójpłaszczyznowa manualna terapia stóp',
            'Kinesiotaping w pediatrii',
            'Integracja Sensoryczna (SI) - I stopień'
        ],
        prices: [
            { name: "Wizyta osteopatyczna", price: "200 PLN" },
            { name: "Wizyta fizjoterapeutyczna", price: "150 PLN" }
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