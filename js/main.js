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
const questions = {}


/*----- app's state (variables) -----*/
var qKey;
var aKeys = [];
var score = 0;
var operator = '';

/*----- cached element references -----*/
menuEl = document.getElementById('menu');
gameBoardEl = document.getElementById('game-board');
qCardEl = document.getElementById('q1');
pScore = document.getElementById('score');

additionEl = document.getElementById('add');
subtractionEl = document.getElementById('sub');
multiplicationEl = document.getElementById('mult');
divisionEl = document.getElementById('divi');


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
additionEl.addEventListener("click", pickSubject);
subtractionEl.addEventListener("click", pickSubject);
multiplicationEl.addEventListener("click", pickSubject);
divisionEl.addEventListener("click", pickSubject);


aCard1El.addEventListener("click", flipCard);
aCard2El.addEventListener("click", flipCard);
aCard3El.addEventListener("click", flipCard);
aCard4El.addEventListener("click", flipCard);
aCard5El.addEventListener("click", flipCard);
aCard6El.addEventListener("click", flipCard);



/*----- functions -----*/

init();

function init() {
    menuEl.style.display = "";
    gameBoardEl.style.display = "none";
    aKeys = [];
};

function pickSubject(evt){
    if(evt.currentTarget.id === 'add'){
        operator = '+';
    } else if(evt.currentTarget.id === 'sub'){
        operator = '-';
    }else if(evt.currentTarget.id === 'mult'){
        operator = '*';
    }else {
        operator = '/';
    }

    menuEl.style.display = "none";
    gameBoardEl.style.display = "";
    generateQuestions();
    generateCards();
};

function generateCards(){
    var usedNums = [];
    var qKeyPre = getRandomNum(2, 9);
    var qKeyPost = getRandomNum(1, 10);
    qKey = qKeyPre.toString() + operator + qKeyPost.toString();
    aKeys.push(qKey);
    usedNums.push(qKeyPost);

    qCardEl.innerText = qKey;

    for (i = 0; i < 5; i++) {
        var aKeyPre = getRandomNum(2, 9);
        var aKeyPost = getRandomNum(1, 10);
        while (usedNums.includes(aKeyPost)) {
            aKeyPost = getRandomNum(1, 10);
        }
        var aKey = aKeyPre.toString() + operator + aKeyPost.toString();
        aKeys.push(aKey);
        usedNums.push(aKeyPost);
    }
    shuffle(aKeys);

    aCard1.innerText = questions[aKeys[0]];
    aCard2.innerText = questions[aKeys[1]];
    aCard3.innerText = questions[aKeys[2]];
    aCard4.innerText = questions[aKeys[3]];
    aCard5.innerText = questions[aKeys[4]];
    aCard6.innerText = questions[aKeys[5]];
}

function flipCard(evt){
    if(evt.currentTarget.querySelector('div').innerText === questions[qCardEl.innerText]) {
        message.innerText = "Yay! You got this."
        score++;
        pScore.textContent = `Score: ${score}`;
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

function generateQuestions(){
    for(term1 = 2; term1 <= 9; term1++) {
        for(term2 = 1; term2 <= 10; term2++) {
            var result = 0;
            if(operator === '+'){
                result = term1 + term2
            } else if(operator === '-'){
                result = term1 - term2
            } else if(operator === '*'){
                result = term1 * term2
            } else {
                result = term1 / term2    
            }; 

            questions[term1.toString() + operator + term2.toString()] = result.toString();
        }  
    }
}  


