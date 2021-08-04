// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score
///////////////////My variables//////////////////////////////////////////////////////////////
var score = 0;
//buttons
const startBtn = document.querySelector("#start-button");
const playAgainButton =document.querySelector("#play-again")

const submitButton = document.getElementById("submit-score")
const scoreButton = document.getElementById("high-scores")
//containers
const questionContainer = document.querySelector("#question-container");
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const welcomeMessage = document.getElementById('welcome-message');

const hudContainer = document.getElementById('hud-message');
const scoreCard = document.getElementById('game-over');

var timeLeft;
var timerDisplay = document.querySelector("#timer");

let shuffledQuestions;
let currentQuestionIndex;
///////////////////////////////////////////////////////////////////////////////////////////////
welcomeMessage.innerText = ("Welcome to my Javascript Code Quiz" + "\n" + "You will have 30 seconds to answer Questions" + "\n" + "Incorrect Answers will result in a -3 second penalty and -5 to your score")

startBtn.addEventListener("click", function() {
    startGame();
});

function countdown(){
  timeLeft = 30;
  var timeInverval = setInterval(function(){
    if (timeLeft <1){
      gameOver()
    } else {
      timerDisplay.textContent = "Seconds left: " +timeLeft;
             timeLeft--;
    }
  }, 1000)
}




///Start the game by clicking a button
    // when startButton is clicked, hide start button, unhide question
function startGame(){
  //logs to test
    welcomeMessage.setAttribute("class","hide");
    countdown();
    // console.log('Started');
    //question container is visible
    questionContainer.setAttribute("class","show");
    //hide the start button
    startBtn.setAttribute("class","hide");
    currentQuestionIndex = 0

    //timer starts

    //choose a question
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    setNextQuestion();
}

//assigns the user a question
function setNextQuestion(){

resetState();
document.body.classList.remove('correct')
//game over condition, if exceeds question count
if(currentQuestionIndex>5){
  resetState();
  gameOver();
}
showQuestion(shuffledQuestions[currentQuestionIndex])
}

//reset answers
function resetState(){
  hudContainer.innerText ="";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showQuestion(question){
//creates question header
questionElement.innerText = question.question;
//creates buttons out of the possible answers
question.answers.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text;
  button.classList.add('btn')

//check if answer is correct
  if (answer.correct){
    button.dataset.correct = answer.correct;
  }

  button.addEventListener('click',selectAnswer)
  answerButtons.appendChild(button);
} )
}

function selectAnswer(event){
  const selectedButton = event.target;
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
      setStatusClass(button,button.dataset.correct)
      })
      if(correct){
        document.body.classList.add('correct')
        userScore= userScore+10;
        console.log(userScore);
    alert("Correct!")
    currentQuestionIndex++;
    setNextQuestion();
      } else {
      userScore=userScore - 5;
      console.log(userScore)
      timeLeft = timeLeft - 3;
      hudContainer.innerText = "INCORRECT, -3 seconds";
}}

function setStatusClass(element, correct){
  clearStatusClass(element);
  if(correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
element.classList.remove('correct')
element.classList.remove('wrong');
}

gameOverBlade  = document.getElementById("game-over");
function gameOver() {
  resetState();
timerDisplay.classList.add("hide");
questionElement.innerText = "GAME OVER --Your Score is: "+userScore;
scoreCard.classList.remove("hide");
submitButton.classList.remove("hide");
scoreButton.classList.remove("hide");
playAgainButton.classList.remove("hide");
}

var initials;
var userScore=0;

submitButton.addEventListener("click", function() {
   intials = prompt("Please submit your initials")
   localStorage.setItem("initials",intials);
   localStorage.setItem("score", userScore);
});

const scoreInitials= localStorage.getItem("initials")
const scoreScore= localStorage.getItem("score");

scoreButton.addEventListener("click", function() {
alert("Initials: " + scoreInitials + "     Score: " + scoreScore)
});

playAgainButton.addEventListener("click", function() {
window.location.reload();
});

/////MY QUESTIONS
const questions = [
  {
    question: 'When is localStorage data cleared?',
    answers: [
        { text: 'No expiration time', correct: true },
        { text: 'On page reload', correct: false },
        { text: 'After your computer restarts', correct: false },
        { text: 'Closing and opening your browser', correct: false },
    ]
  },
  {
    question: 'What method would you use to add an element at the begining of an array and one at the end?',
    answers: [
      { text: 'Unshift, Concat', correct: false },
      { text: 'Unshift, Push', correct: false },
      { text: 'Push, Unshift', correct: true },
      { text: 'Concat, Push', correct: false },
    ]
  },
  {
    question: 'Javascript is used for:_______',
    answers: [
      { text: 'interactivity within Java', correct: false },
      { text: 'manipulating the DOM elements of a webpage', correct: true },
      { text: 'building frameworks of a webpage', correct: false },
      { text: 'library and database indexing', correct: false },
    ]
  },
  {
    question: 'Who invented JavaScript?',
    answers: [
      { text: 'Bill Gates', correct: false },
      { text: 'Brendan Eich', correct: true },
      { text: 'James Gosling', correct: false },
      { text: 'Guido van Rossum', correct: false },
    ]
  },
    {
    question: 'Can you modify element attributes with Javascript?',
    answers: [
      { text: 'Never', correct: false },
      { text: 'Only string elements can have their attributes modified', correct: false },
      { text: 'Yes, only with a CSS reset', correct: false },
      { text: 'Yes', correct: true },
    ]
},
    {
    question: 'What does JSON.parse do',
    answers: [
      { text: 'Displays objects with equal space inbetween them', correct: false },
      { text: 'JSON refers to an object and parse searches the index', correct: false},
      { text: 'Contructs a JavaScript value or object described by the string', correct: true },
      { text: 'Runs through the entire linked secondary script', correct: false },
    ]
  },
]



