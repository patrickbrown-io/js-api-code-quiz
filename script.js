
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
//containers
const questionContainer = document.querySelector("#question-container");
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons')

let shuffledQuestions;
let currentQuestionIndex;
///////////////////////////////////////////////////////////////////////////////////////////////
startBtn.addEventListener("click", function() {
    startGame();
});

///Start the game by clicking a button
    // when startButton is clicked, hide start button, unhide question
function startGame(){
  //logs to test
    console.log('Started');
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
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
questionElement.innerText = question.question;
}
    //timer starts

    //question is selected

    //user select an answer
        //let user know if they got it right or wrong
        //if wrong, subtract time


//After answering a question
    //Present an additional question

//user can select between 4 answers: one is right, 3 are wrong

//Setting our next questions



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



