
const startButton = document.getElementById('start');
const questionBox = document.getElementById('question-box');
const questionsSection = document.getElementById('question');
const answersAll = document.getElementsByClassName("btn");
const answerA = document.getElementById('btnA');
const answerB = document.getElementById('btnB');
const answerC = document.getElementById('btnC');
const answerD = document.getElementById('btnD');

//Create index to keep track of what last question is//
let finalQuestion = questions.length - 1;
//Set index for current question so can keep track of answer index//
let currentQuestion = 0


//Create function to bring up questions and answers and replace text with info from question array//
function displayQuestion() {
    let i = questions[currentQuestion];
    question.innerHTML = i.question;
    answerA.innerHTML = i.answerA;
    answerB.innerHTML = i.answerB;
    answerC.innerHTML = i.answerC;
    answerD.innerHTML = i.answerD;
}

//Create function to run quiz//

function startQuiz () {
    startButton.style.display = 'none';
    displayQuestion();
    questionBox.style.display = "block";
    quizLoop();
    checkAnswer();
}

startQuiz();

//Loop through questions//
function quizLoop () {
    for(let i = 0; i <= finalQuestion; i++);
}


//check for correct answer//
function checkAnswer(answer){
    if(answer == questions[currentQuestion].correctAnswer) {
        correctColor();
    } else {
        wrongColor();
    }
}


startButton.addEventListener('click,')

let questions = [
    {
        question: 'Which house at Hogwarts does Harry belong to?',
        answerA: 'Ravenclaw',
        answerB: 'Slytherin', 
        answerC: 'Hufflepuff', 
        answerD: 'Gryffindor',
        correctAnswer: 'D'
    },
    {
        question: 'Who is Fluffy?',
        answerA: "Hermione's cat",
        answerB: "Harry's owl", 
        answerC: "A three-headed dog", 
        answerD: "Hagrid's dragon", 
        correctAnswer: "C"
    },
    {
        question: 'Who is the Gryffindor house ghost?',
        answerA: 'The Bloody Baron', 
        answerB: 'Nearly Headless Nick',
        answerC: 'The Grey Lady', 
        answerD: 'The Fat Friar',
        correctAnswer: 'B'
    },
    {
        question: 'Dumbledore has a scar above his left knee that is a perfect map of what?',
        answerA: 'The Forbidden Forest',
        answerB: 'The Chamber of Secrets',
        answerC: 'The London Underground',
        answerD: 'Grimmauld Place',
        correctAnswer: 'C'
    },
    {
        question: 'What spell would you cast to get rid of a Dementor?',
        answerA: 'Expecto Patronum',
        answerB: 'Wingardium Leviosa',
        answerC: 'Petrificus Totalus',
        answerD: 'Riddikulus',
        correctAnswer: 'A'
    },
    {
        question: 'At which store does Harry Potter buy his wand?',
        answerA: 'The Three Broomsticks',
        answerB: "Ollivander's",
        answerC: 'The Leaky Cauldron',
        answerD: 'Borgin and Burkes',
        correctAnswer: 'B'
    },
    {
        question: 'What animal can Sirius Black transform into?',
        answerA: 'Werewolf',
        answerB: 'Rat',
        answerC: 'Stag',
        answerD: 'Dog',
        correctAnswer: 'D'
    },
    {
        question: 'What did Ron and Harry crash the flying car into on their way to Hogwarts in their second year?',
        answerA: 'The Forbidden Forest',
        answerB: 'The Great Hall',
        answerC: 'The Whomping Willow',
        answerD: 'The Astronomy Tower',
        correctAnswer: 'C'
    },
    {
        question: "What type of magical creatures are invisible unless you've seen death?",
        answerA: 'Thestral',
        answerB: 'Blast-Ended Skrewts',
        answerC: 'Centaurs',
        answerD: 'Basilisks',
        correctAnswer: 'A'
    },
    {
        question: "Which magical device did Hermione use to get to all of her classes in her third year?",
        answerA: 'Polyjuice Potion',
        answerB: 'Time-Turner',
        answerC: 'Crystal Ball',
        answerD: 'Portkey',
        correctAnswer: 'B'
    }
]