// Connect JS with HTML elements

const buttonDrawCard = document.querySelector('#BUTTON_FOR_DRAWING');
const SHOW_CARDS_ON_WEBSITE = document.querySelector('#SPACE_FOR_CARD');
const SEARCH_CARDS = document.querySelector('#CARD_SEED');


const CARD_SEED = (e) => {
    console.log(e.target.value.toLowerCase())
}

// MAIN RANDOM CARDS MECHANICS

class CardsCollection {
    constructor(cardsCollection, filter) {

        switch (filter) {
            case FILTER_GUN:
                cardsCollection = cardsCollection.filter(index => index.category == FILTER_GUN);
                break

            case FILTER_SWORD:
                cardsCollection = cardsCollection.filter(index => index.category == FILTER_SWORD);
                break
        }
        this.cardsCollection = cardsCollection;
        let _currentCard = this.cardsCollection[this.getCardNumber()];
        this.getDrawCard = () => _currentCard;
    }

    // THIS FUNCTION RETURN RANDOM CARDS FROM ALL COLLECTIONS.

    getCard() {
        let cards = [];
        const index = Math.floor(Math.random() * this.cardsCollection.length)
        const card = this.cardsCollection[index]
        cards.push(card);
        return cards
    }

    // THIS FUNCTION RETURN NUMBER FOR CARD. 

    getCardNumber() {
        return Math.floor(Math.random() * this.cardsCollection.length)
    }

    INPUT_CARDS_TO_WEBSITE() {

        SHOW_CARDS_ON_WEBSITE.innerHTML = `<div class="title-style"> Tytuł karty ${CARDS_COLLECTION_1().title}</div></br>, Opis zdarzenia: ${CARDS_COLLECTION_1().description}, Efekt ${CARDS_COLLECTION_1().effect}`;


    }




}

// MAIN CARDS COLLECTION IN ALL GAMES


const CARDS_COLLECTION_1 = [{
        title: "Lekki Atak",
        description: "Czujesz się zmęczony",
        effect: "-1 do ataku",
        seed: 'A324E',
        category: "sword"
    },

    {
        title: "Przypływ siły",
        description: "Przeciwnik niesamowicie Cię zdenerwował. Adrenalina i\n\
chęć mordu ogarnęła całe twoje ciało. Uderzasz z całych sił bronią\n\
którą trzymasz w dłoni. Uderzenie wydaje się nader przerażające",
        effect: "Atak +2 do obrażeń",
        seed: 'A324F',
        category: "sword"
    },

    {
        title: "Furia",
        description: "Przeciwnik niesamowicie Cię zdenerwował. Adrenalina i\n\
chęć mordu ogarnęła całe twoje ciało. Uderzasz z całych sił bronią\n\
którą trzymasz w dłoni. Uderzenie wydaje się nader przerażające",
        effect: "Atak +4 do obrażeń",
        seed: 'A324A',
        category: "sword"
    },

    {
        title: "Starzał ostatniej szansy",
        description: "Bierzesz szeroki zamach",
        effect: "+1 do obrażeń",
        seed: 'A324X',
        category: "gun"
    },

    {
        title: "Celny strzał",
        description: "Bierzesz szeroki zamach",
        effect: "+2 do obrażeń",
        seed: 'A324EY',
        category: "gun"
    }
];

class Search {
    constructor() {

    }
}


// FILTER BY CARDS CATEGORY

const FILTER_GUN = 'gun';
const FILTER_SWORD = 'sword';

// CARDS DECK BY CATEGORY

const RANDOM_CARD = new CardsCollection(CARDS_COLLECTION_1, FILTER_GUN);
console.log(RANDOM_CARD.getDrawCard());

const RANDOM_CARD2 = new CardsCollection(CARDS_COLLECTION_1, FILTER_SWORD);
console.log(RANDOM_CARD2.getDrawCard());

const RANDOM_ALL_CARDS = new CardsCollection(CARDS_COLLECTION_1);
console.log(RANDOM_CARD2.getDrawCard());





SEARCH_CARDS.addEventListener('input', CARD_SEED);
buttonDrawCard.addEventListener('click', SHOW_CARDS_ON_WEBSITE);