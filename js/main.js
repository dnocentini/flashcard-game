/*----- constants -----*/
const questions = {}

/*----- app's state (variables) -----*/
var qKey;
var aKeys = [];
var score = 0;
var operator = '';


/*----- cached element references -----*/
buttonEl = document.getElementById('button');
menuEl = document.getElementById('menu');
gameBoardEl = document.getElementById('game-board');
messageEl = document.getElementById('message');
pScoreEl = document.getElementById('score');
qCardEl = document.getElementById('q1');

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

a1El = document.getElementById('a1');
a2El = document.getElementById('a2');
a3El = document.getElementById('a3');
a4El = document.getElementById('a4');
a5El = document.getElementById('a5');
a6El = document.getElementById('a6');

// // /*----- event listeners -----*/
buttonEl.addEventListener('click', returnMenu);

additionEl.addEventListener('click', pickSubject);
subtractionEl.addEventListener('click', pickSubject);
multiplicationEl.addEventListener('click', pickSubject);
divisionEl.addEventListener('click', pickSubject);

aCard1El.addEventListener('click', clickCard);
aCard2El.addEventListener('click', clickCard);
aCard3El.addEventListener('click', clickCard);
aCard4El.addEventListener('click', clickCard);
aCard5El.addEventListener('click', clickCard);
aCard6El.addEventListener('click', clickCard);

/*----- functions -----*/
function init() {
    menuEl.style.display = '';
    gameBoardEl.style.display = 'none';
    aKeys = [];
}

function generateCards() {
    messageEl.innerText = '';

    var usedResults = [];
    var qKeyPre = getRandomNum(2, 9);
    var qKeyPost = getRandomNum(1, 10);
    qKey = qKeyPre.toString() + operator + qKeyPost.toString();
    aKeys.push(qKey);
    usedResults.push(questions[qKey]);

    qCardEl.innerText = qKey;

    for (i = 0; i < 5; i++) {
        var aKeyPre = getRandomNum(2, 9);
        var aKeyPost = getRandomNum(1, 10);
        var aKey = aKeyPre.toString() + operator + aKeyPost.toString();

        while (usedResults.includes(questions[aKey])) {
            aKeyPre = getRandomNum(2, 9);
            aKeyPost = getRandomNum(1, 10);
            aKey = aKeyPre.toString() + operator + aKeyPost.toString();
        }

        aKeys.push(aKey);
        usedResults.push(questions[aKey]);
    }

    shuffle(aKeys);

    a1El.innerText = questions[aKeys[0]];
    a2El.innerText = questions[aKeys[1]];
    a3El.innerText = questions[aKeys[2]];
    a4El.innerText = questions[aKeys[3]];
    a5El.innerText = questions[aKeys[4]];
    a6El.innerText = questions[aKeys[5]];
}

function generateQuestions() {
    for (term1 = 2; term1 <= 9; term1++) {
        for (term2 = 1; term2 <= 10; term2++) {
            var result = 0;
            if (operator === '+') {
                result = term1 + term2;
            } else if (operator === '-') {
                result = term1 - term2;
            } else if (operator === '*') {
                result = term1 * term2;
            } else {
                result = (term1 / term2).toFixed(1);
            }

            questions[term1.toString() + operator + term2.toString()] = result.toString();
        }  
    }
}

function pickSubject(evt) {
    if (evt.currentTarget.id === 'add') {
        operator = '+';
    } else if (evt.currentTarget.id === 'sub') {
        operator = '-';
    } else if (evt.currentTarget.id === 'mult') {
        operator = '*';
    } else {
        operator = '/';
    }

    menuEl.style.display = 'none';
    gameBoardEl.style.display = '';
    generateQuestions();
    generateCards();
}

function clickCard(evt) {
    if (evt.currentTarget.querySelector('div').innerText === questions[qCardEl.innerText]) {
        messageEl.innerText = 'Yay! You got this.';
        score++;
        pScoreEl.textContent = `Score: ${score}`;
        setTimeout(function(){
            aKeys = [];
            generateCards();
        }, 1000);
    } else {
        messageEl.innerText = 'Oops! Try again.';
        evt.currentTarget.querySelector('div').innerText = 'WRONG';
    }
}

function returnMenu(evt){
    init();
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}


init();