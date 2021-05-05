const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    getNextQuestion()
})

function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    getNextQuestion()
}

function getNextQuestion() {
    resetQuiz()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetQuiz() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')  
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Which house at Hogwarts does Harry belong to?',
        answers: [
            {text: 'Ravenclaw', correct: false},
            {text: 'Slytherin', correct: false},
            {text: 'Hufflepuff', correct: false},
            {text: 'Gryffindor', correct: true}
        ]
    },
    {
        question: 'Who is Fluffy?',
        answers: [
            {text: "Hermione's cat", correct: false},
            {text: "Harry's owl", correct: false},
            {text: "A three-headed dog", correct: true},
            {text: "Hagrid's dragon", correct: false}
        ]
    },
    {
        question: 'Who is the Gryffindor house ghost?',
        answers: [
            {text: 'The Bloody Baron', correct: false},
            {text: 'Nearly Headless Nick', correct: true},
            {text: 'The Grey Lady', correct: false},
            {text: 'The Fat Friar', correct: false}
        ]
    },
    {
        question: 'Dumbledore has a scar above his left knee that is a perfect map of what?',
        answers: [
            {text: 'The Forbidden Forest', correct: false},
            {text: 'The Chamber of Secrets', correct: false},
            {text: 'The London Underground', correct: true},
            {text: 'Grimmauld Place', correct: false}
        ]
    },
    {
        question: 'What spell would you cast to get rid of a Dementor?',
        answers: [
            {text: 'Expecto Patronum', correct: true},
            {text: 'Wingardium Leviosa', correct: false},
            {text: 'Petrificus Totalus', correct: false},
            {text: 'Riddikulus', correct: false}
        ]
    },
    {
        question: 'At which store does Harry Potter buy his wand?',
        answers: [
            {text: 'The Three Broomsticks', correct: false},
            {text: "Ollivander's", correct: true},
            {text: 'The Leaky Cauldron', correct: false},
            {text: 'Borgin and Burkes', correct: false}
        ]
    },
    {
        question: 'What animal can Sirius Black transform into?',
        answers: [
            {text: 'Werewolf', correct: false},
            {text: 'Rat', correct: false},
            {text: 'Stag', correct: false},
            {text: 'Dog', correct: true}
        ]
    },
    {
        question: 'What did Ron and Harry crash the flying car into on their way to Hogwarts in their second year?',
        answers: [
            {text: 'The Forbidden Forest', correct: false},
            {text: 'The Great Hall', correct: false},
            {text: 'The Whomping Willow', correct: true},
            {text: 'The Astronomy Tower', correct: false}
        ]
    },
    {
        question: "What type of magical creatures are invisible unless you've seen death?",
        answers: [
            {text: 'Thestral', correct: true},
            {text: 'Blast-Ended Skrewts', correct: false},
            {text: 'Centaurs', correct: false},
            {text: 'Basilisks', correct: false}
        ]
    },
    {
        question: "Which magical device did Hermione use to get to all of her classes in her third year?",
        answers: [
            {text: 'Polyjuice Potion', correct: false},
            {text: 'Time-Turner', correct: true},
            {text: 'Crystal Ball', correct: false},
            {text: 'Portkey', correct: false}
        ]
    }
]