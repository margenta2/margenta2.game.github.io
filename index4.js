function generateQuiz(questions, quizContainer, resultsContainer, submitButton ) {

    function showQuestions(questions, quizContainer) {
        let output = [];
        let answers;
        for(let i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+ i +'" value="'+ letter +'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' +questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer){
        let answerContainers = quizContainer.querySelectorAll('.answers');
        let userAnswer = '';
        let numCorrect = 0;
        for(let i=0; i<questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question'+ i +']:checked')||{}).value;
            if(userAnswer===questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
            else {
                answerContainers[i].style.color = 'red';
            }
        }
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions,quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}

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