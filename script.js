
const messages = [
    "Napisz komuś bliskiemu wiadomość z podziękowaniem za coś, co zrobił dla Ciebie w tym roku.", 
    "Upiecz coś pysznego (np. ciasteczka) i podziel się z sąsiadem lub przyjacielem.", 
    "Zrób sobie wieczór relaksu: ciepła herbata, ulubiona książka lub film.", 
    "Wyślij komuś kartkę świąteczną – ręcznie napisaną, jeśli możesz.", 
    "Zrób coś dobrego dla natury – posprzątaj kawałek parku, posadź roślinę albo segreguj odpady.",
    "Podaruj komuś drobny prezent - niespodziankę, np. czekoladę lub kawę.", 
    "Zrób listę swoich osiągnięć w tym roku i pochwal sam siebie.", 
    "Znajdź w szafie ubrania, których nie nosisz, i oddaj je potrzebującym.", 
    "Powiedz komuś komplement – szczery i od serca.", 
    "Zrób świąteczny porządek w swoim pokoju.",
    "Wypróbuj nowy przepis na coś świątecznego.", 
    "Przeczytaj coś inspirującego – może to być fragment książki lub ciekawy artykuł.", 
    "Podaruj sobie chwilę spokoju – spacer po lesie lub czas na medytację.", 
    "Włącz ulubione świąteczne piosenki i śpiewaj głośno!", 
    "Zrób komuś drobny uczynek – np. pomóż w pracy lub wyręcz w obowiązkach domowych.",
    "Przygotuj mały prezent dla osoby, którą chcesz zaskoczyć – np. własnoręcznie zrobiony.", 
    "Zadzwoń do dawno niewidzianego znajomego i porozmawiajcie.", 
    "Zapal świeczki i zrób przytulny wieczór przy aromatycznej herbacie.", 
    "Zorganizuj rodzinny wieczór gier planszowych lub filmowy maraton.", 
    "Podziękuj osobie, która codziennie dla Ciebie coś robi, np. w pracy, w domu.",
    "Udekoruj dom na święta – może nawet samodzielnie zrobionymi ozdobami.", 
    "Zaproponuj komuś wspólny spacer lub wyjście na kawę.", 
    "Zrób listę rzeczy, za które jesteś wdzięczny w tym roku.", 
    "Spędź czas z bliskimi – niech to będzie dzień pełen rozmów, ciepła i uśmiechu."
];

function initializeBoxes() {
    const today = new Date();
    const currentDayOfMonth = today.getDate(); 
    const days = document.querySelectorAll('[class^="day"]'); 
    

    days.forEach((day, index) => {
        let dayNumber = index + 1;
        day.classList.add('day-box'); 
        if (dayNumber <= currentDayOfMonth) {
            day.classList.add('clickable');
            day.onclick = function() {
                this.textContent = messages[index]; 
                this.style.fontSize = '15px'; 
            };
        }
    });
}

initializeBoxes();