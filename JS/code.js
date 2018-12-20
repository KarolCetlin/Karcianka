// ALL CARDS COLLECTION FOR USER


const ALL_CARDS_IN_GAME = [{
        title: "Lekki Atak",
        description: "Czujesz się zmęczony",
        effect: "-1 do ataku",
        category: "sword"
    },

    {
        title: "Przypływ siły",
        description: "Przeciwnik niesamowicie Cię zdenerwował. Adrenalina i\n\
          chęć mordu ogarnęła całe twoje ciało. Uderzasz z całych sił bronią\n\
          którą trzymasz w dłoni. Uderzenie wydaje się nader przerażające",
        effect: "Atak +2 do obrażeń",
        category: "sword"
    },

    {
        title: "Furia",
        description: "Przeciwnik niesamowicie Cię zdenerwował. Adrenalina i\n\
          chęć mordu ogarnęła całe twoje ciało. Uderzasz z całych sił bronią\n\
          którą trzymasz w dłoni. Uderzenie wydaje się nader przerażające",
        effect: "Atak +4 do obrażeń",
        category: "sword"
    },

    {
        title: "Starzał ostatniej szansy",
        description: "Bierzesz szeroki zamach",
        effect: "+1 do obrażeń",
        category: "gun"
    },

    {
        title: "Celny strzał",
        description: "Bierzesz szeroki zamach",
        effect: "+2 do obrażeń",
        category: "gun"
    }

]

// Various card collections

const GUNS_CARDS = ALL_CARDS_IN_GAME.filter(index => index.category == 'gun');
const MELEE_WEAPONS = ALL_CARDS_IN_GAME.filter(index => index.category == 'sword');
const RECENTLY_ADDED_CARDS = ALL_CARDS_IN_GAME.slice(ALL_CARDS_IN_GAME.length -2, ALL_CARDS_IN_GAME.length);

// Connect JS with HTML elements

const buttonDrawCard = document.querySelector('#drawCard');
const iNeedNewCards = document.querySelector('.iNeedNewCards');
const iNeedMeleeCards = document.querySelector('#iNeedMeleeCards');
const iNeedGunsCards = document.querySelector('iNeedGunsCards');
const SHOW_CARDS_ON_WEBSITE = document.querySelector('#PLACE_FOR_CARD');
const COUNTER_OF_CARDS = document.querySelector('h1 span');

// Flag for cheackbox

let actuallyMaxNumber = () => {
if (iNeedNewCards.checked){
return GUNS_CARDS.length;
        console.log(GUNS_CARDS.length);
} else {
return ALL_CARDS_IN_GAME.length;
console.log(ALL_CARDS_IN_GAME.length);
}
}

// Random number mechanizm.

function getRandomNumber(min, max) {
    min = 0;
    // max = ALL_CARDS_IN_GAME.length;
    max = actuallyMaxNumber();
    return Math.floor(Math.random() * (max - min)) + min;
}


let ACTUALLY_DECK = () => {
    if(iNeedNewCards.checked){
       return GUNS_CARDS;
         console.log(GUNS_CARDS);
     } else {
       return ALL_CARDS_IN_GAME;
         console.log(ALL_CARDS_IN_GAME);
     }
}

// Actually cards collection to draw a card. 

function getRandomCards() {
    // return ALL_CARDS_IN_GAME[getRandomNumber()];
  return ACTUALLY_DECK()[getRandomNumber()];
}

// Button draw card mechanic

const INPUT_CARDS_TO_WEBSITE = function () {

SHOW_CARDS_ON_WEBSITE.innerHTML = `<div class="title-style"> Tytuł karty ${getRandomCards().title}</div></br>, Opis zdarzenia: ${getRandomCards().description}, Efekt ${getRandomCards().effect}`;
// SHOW_CARDS_ON_WEBSITE.innerHTML = `<div class="title-style"> Tytuł karty ${getRandomCards().title}`;
// console.log( `${ACTUALLY_DECK()[getRandomNumber()]}`)

    // const myDrawCard = ALL_CARDS_IN_GAME[getRandomCards()];
    // resultOfCard.innerHTML = `${<div class="title-style"></div>} + ${ALL_CARDS_IN_GAME.title}`;
  
    
    {/* '<div class="title-style">' + ALL_CARDS_IN_GAME.title + '<hr></div>' +
    '<div class="title-des">' + ALL_CARDS_IN_GAME.description + '</div>' +
    '<div class=""title-effect"><b>Efekt:</b> ' + ALL_CARDS_IN_GAME.effect + '</div>'; */}



}


buttonDrawCard.addEventListener('click', INPUT_CARDS_TO_WEBSITE);
