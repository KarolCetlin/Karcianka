const typing = document.querySelector('.typing');
const txt = 'Konkretne preferencje możesz określić zaznaczając odpowiednie pole wyboru, zawężająć wybór do kart okręślonej kategori';
let indexText = 0;

class Typing {
    constructor(typingText, time) {
        this.typingText = typingText;
        this.time = time;
    }

    Typing.prototype.interval = () => {
        setInterval(addLetter, time)
    }

    addLetter = () => {
        typingText.textContent += txt[indexText];
        indexText++;
        if (indexText === txt.length) {
            clearInterval(typingText);
        }


    }


}

const NEW_SLIDER = new Typing(typing, 500);


// const indexTyping = setInterval(addLetter, time);



// PARAMETR

// const time = 40;

// METOD



// const cursorAnimation = () => {
//     spnCursor.textContent += cursor;
//     cursor.classList.toggle('active');
// }


// setInterval(cursorAnimation, 400);