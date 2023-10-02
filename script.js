const questions = [
    {
        question: "What is another name for the Mid-Autumn Festival?",
        answer: [
            { text: "A) Dragon Boat Festival", correct: false },
            { text: "B) Lantern Festival", correct: false },
            { text: "C) Mooncake Festival", correct: true },
            { text: "D) Harvest Festival", correct: false }
        ]
    },
    {
        question: "Which celestial body is associated with the Mid-Autumn Festival?",
        answer: [
            { text: "A) Sun", correct: false },
            { text: "B) Moon", correct: true },
            { text: "C) Mars", correct: false },
            { text: "D) Venus", correct: false }
        ]
    },
    {
        question: "What is the significance of lanterns during the Mid-Autumn Festival?",
        answer: [
            { text: "A) Symbol of luck", correct: false },
            { text: "B) Guide spirits", correct: false },
            { text: "C) Represent the moon", correct: false },
            { text: "D) All of the above", correct: true }
        ]
    },
    {
        question: "Which traditional Chinese pastry is commonly eaten during the Mid-Autumn Festival?",
        answer: [
            { text: "A) Tangyuan", correct: false },
            { text: "B) Zongzi", correct: false },
            { text: "C) Mooncake", correct: true },
            { text: "D) Red bean bun", correct: false }
        ]
    },
    {
        question: "What do people believe can happen if you make a wish while looking at the full moon during the Mid-Autumn Festival?",
        answer: [
            { text: "A) It will rain the next day", correct: false },
            { text: "B) The wish will come true", correct: false },
            { text: "C) Good fortune will come your way", correct: true },
            { text: "D) The moon will turn red", correct: false }
        ]
    },
    {
        question: "What is the traditional filling of a mooncake?",
        answer: [
            { text: "A) Chocolate", correct: false },
            { text: "B) Lotus seed paste", correct: true },
            { text: "C) Peanut butter", correct: false },
            { text: "D) Custard", correct: false }
        ]
    },
    {
        question: "What activity is commonly associated with the Mid-Autumn Festival in which people carry brightly lit lanterns on the streets?",
        answer: [
            { text: "A) Dragon boat racing", correct: false },
            { text: "B) Lantern parade", correct: true },
            { text: "C) Fireworks display", correct: false },
            { text: "D) Mooncake baking", correct: false }
        ]
    },
    {
        question: "What does the Jade Rabbit, according to Chinese mythology, do on the moon?",
        answer: [
            { text: "A) Makes mooncakes", correct: false },
            { text: "B) Brews tea", correct: false },
            { text: "C) Grinds herbs for an elixir", correct: true },
            { text: "D) Paints the lunar landscape", correct: false }
        ]
    },
    {
        question: "What is the purpose of burning incense during the Mid-Autumn Festival?",
        answer: [
            { text: "A) Attract good luck", correct: false },
            { text: "B) Ward off evil spirits", correct: false },
            { text: "C) Enhance moon-watching experience", correct: false },
            { text: "D) All of the above", correct: true }
        ]
    },
    {
        question: "What do mooncakes and smartphones have in common during the Mid-Autumn Festival?",
        answer: [
            { text: "A) Mooncakes can make calls", correct: false },
            { text: "B) They both have a 'Do Not Disturb' mode", correct: true },
            { text: "C) Smartphones taste better with tea", correct: false },
            { text: "D) Mooncakes have touchscreens", correct: false }
        ]
    }
]

const questionElement = document.querySelector('.question');
const answerButton = document.querySelector('.answer-block');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
let score = 0;
let incorrectAtempt = false;
let correctStatus = false;

function starQuiz() {
    currentIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    // remove the previous question and answers
    resetState();
    // get the current question
    let currentQuestion = questions[currentIndex];
    // create counting question number of questions
    let questionNum = currentIndex + 1
    questionElement.innerHTML = `${questionNum}. ${currentQuestion.question}`

    // inject anssers for each question
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true
    });
    nextBtn.style.display = "block"
}

function showScore() {
    resetState();
    questionElement.innerHTML = `your score is ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again?"
    nextBtn.style.display = "block"
}

function handleNextButton() {
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < questions.length) {
        handleNextButton()
    } else {
        starQuiz()
    }
});

starQuiz()
// console.log(answerButtons)