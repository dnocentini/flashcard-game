// Flashcard Game
// * 'player' will pick a subject with a 'click';
// * 'questionCard' will be random card/question about the subject picked;
// * 'questionCard' will appear on the left;
// * 'answerCards' will be six(6) random cards/answers;
// * 'answerCards' will appear on the right;
// * only one(1) 'answerCards' will be the 'correctCard';
// * when a 'answerCards' is picked, the card will flip with a answer: 'correctAnswer' || 'else';
// * if 'player' 'click' on the 'correctAnswer', a 'message' saying "Yay! This is the correct answer!" will appear; 
// * Return;
// * if 'player' 'click' on 'else' card, a 'message' saying "Tray again!" will appear;


/*----- constants -----*/
const addition = {
    "2+1" : "3",
    "2+2" : "4",
    "2+3" : "5",
    "2+4" : "6",
    "2+5" : "7",
    "2+6" : "8",
    "2+7" : "9",
    "2+8" : "10",
    "2+9" : "11",
    "2+10" : "12",
}


/*----- app's state (variables) -----*/


// var questionCard
// var aCard

/*----- cached element references -----*/
// messageEl = document.getElementById('message');
qCardEl = document.getElementById('q1');
aCard1 = document.getElementById('a1');
aCard2 = document.getElementById('a2');
aCard3 = document.getElementById('a3');
aCard4 = document.getElementById('a4');
aCard5 = document.getElementById('a5');
aCard6 = document.getElementById('a6');



// // /*----- event listeners -----*/
// subjectEl.addEventListener('click', handleClick);
// aCardEl.addEventListener("click", flipCard);
// resetGameBtn.addEventListener('click', init);

/*----- functions -----*/

init();

function init() {
    generateCards();
}

function generateCards(){
    qCardEl.innerText = "2+2";
    aCard1.innerText = addition["2+2"];
    aCard2.innerText = addition["2+3"];
    aCard3.innerText = addition["2+4"];
    aCard4.innerText = addition["2+5"];
    aCard5.innerText = addition["2+6"];
    aCard6.innerText = addition["2+7"];
    
}

// function getRandomNum (min, max) {
//     return Math.floor(Math.random() * (10 - 1) +1)
// }





 