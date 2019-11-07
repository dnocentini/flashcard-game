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
var qKey;
var aKeys = [];

/*----- cached element references -----*/
// messageEl = document.getElementById('message');
gameBoardEl = document.getElementById('game-board');
qCardEl = document.getElementById('q1');

aCard1El = document.getElementById('aCard1');
aCard2El = document.getElementById('aCard2');
aCard3El = document.getElementById('aCard3');
aCard4El = document.getElementById('aCard4');
aCard5El = document.getElementById('aCard5');
aCard6El = document.getElementById('aCard6');

aCard1 = document.getElementById('a1');
aCard2 = document.getElementById('a2');
aCard3 = document.getElementById('a3');
aCard4 = document.getElementById('a4');
aCard5 = document.getElementById('a5');
aCard6 = document.getElementById('a6');

message = document.getElementById('message');

// // /*----- event listeners -----*/
// subjectEl.addEventListener('click', handleClick);
aCard1El.addEventListener("click", flipCard);
aCard2El.addEventListener("click", flipCard);
aCard3El.addEventListener("click", flipCard);
aCard4El.addEventListener("click", flipCard);
aCard5El.addEventListener("click", flipCard);
aCard6El.addEventListener("click", flipCard);


/*----- functions -----*/

init();

function init() {
    aKeys = [];
    generateCards();
    
}

function generateCards(){
    var usedNums = [];
    var qKeyPre = '2+'
    var qKeyPost = getRandomNum(1, 10);
    qKey = qKeyPre + parseInt(qKeyPost);
    aKeys.push(qKey);
    usedNums.push(qKeyPost);

    qCardEl.innerText = qKey;

    for (i = 0; i < 5; i++) {
        var aKeyPre = '2+'
        var aKeyPost = getRandomNum(1, 10);
        while (usedNums.includes(aKeyPost)) {
            aKeyPost = getRandomNum(1, 10);
        }
        var aKey = aKeyPre + parseInt(aKeyPost);
        aKeys.push(aKey);
        usedNums.push(aKeyPost);
    }
    shuffle(aKeys);

    aCard1.innerText = addition[aKeys[0]];
    aCard2.innerText = addition[aKeys[1]];
    aCard3.innerText = addition[aKeys[2]];
    aCard4.innerText = addition[aKeys[3]];
    aCard5.innerText = addition[aKeys[4]];
    aCard6.innerText = addition[aKeys[5]];
}

function flipCard(evt){
    if(evt.currentTarget.querySelector('div').innerText === addition[qCardEl.innerText]) {
        message.innerText = "Yay! You got this."
        setTimeout(function(){
            init();
        }, 2000);
    }else{
        message.innerText = "Ops! Try again."
        evt.currentTarget.querySelector('div').innerText = "WRONG"
    }
    
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }



 