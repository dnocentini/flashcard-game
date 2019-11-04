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
const qCardInPlay
const aCardsInPlay
const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


/*----- app's state (variables) -----*/
const addCorrectAnswer = (n1[1] + n2[1]);
const subCorrectAnswer = (n1[1] - n2[1]);
const multCorrectAnswer = (n1[1] * n2[1]);
const divCorrectAnswer = (n1[1] / n2[1]);  

/*----- cached element references -----*/
messageEl = document.getElementById('message');
resetGameBtn = document.getElementById('resetGame');


// /*----- event listeners -----*/
subjectEl.addEventListener('click', handleClick);
aCardEl.addEventListener("click", flipCard);
resetGameBtn.addEventListener('click', init);

/*----- functions -----*/

// let total = 4;

// document.getElementsById('a1').src='assets/IndexCard' + total + '.png"/>';
