
// ==========================================
// GRAMMAR HUB - PRACTICE ENGINE
// ==========================================

// Get topic from URL

const urlParams = new URLSearchParams(window.location.search);

const selectedTopic = urlParams.get("topic") || "Parts of Speech";


// Question database - Initial questions

const questionDatabase = {

    "Parts of Speech": [
        {
            question: "Identify the noun in this sentence: 'The boy is playing.'",
            options: ["The", "Boy", "Is", "Playing"],
            answer: "Boy",
            explanation: "Boy is a noun because it names a person."
        },
        {
            question: "Which part of speech describes a noun?",
            options: ["Verb", "Adverb", "Adjective", "Conjunction"],
            answer: "Adjective",
            explanation: "An adjective describes a noun or pronoun."
        },
        {
            question: "Identify the verb: 'She sings beautifully.'",
            options: ["She", "Sings", "Beautifully", "None"],
            answer: "Sings",
            explanation: "Sings is a verb because it expresses an action."
        },
        {
            question: "Which word is a pronoun?",
            options: ["School", "Quickly", "They", "Beautiful"],
            answer: "They",
            explanation: "They is a pronoun used in place of a noun."
        },
        {
            question: "Identify the adverb: 'He runs quickly.'",
            options: ["He", "Runs", "Quickly", "None"],
            answer: "Quickly",
            explanation: "Quickly describes how he runs, so it is an adverb."
        }
    ],

    "Nouns": [
        {
            question: "Which of these is a proper noun?",
            options: ["City", "Boy", "India", "Country"],
            answer: "India",
            explanation: "India is the specific name of a country."
        },
        {
            question: "What is the plural of 'child'?",
            options: ["Childs", "Children", "Childes", "Childrens"],
            answer: "Children",
            explanation: "Children is the irregular plural of child."
        },
        {
            question: "Identify the collective noun.",
            options: ["Team", "Player", "Ball", "Game"],
            answer: "Team",
            explanation: "Team refers to a collection of players."
        }
    ],

    "Pronouns": [
        {
            question: "Choose the correct pronoun: 'Riya is absent because ___ is ill.'",
            options: ["He", "She", "They", "We"],
            answer: "She",
            explanation: "She is the correct pronoun for Riya."
        },
        {
            question: "Which is a reflexive pronoun?",
            options: ["Myself", "My", "Me", "I"],
            answer: "Myself",
            explanation: "Myself is a reflexive pronoun."
        }
    ],

    "Adjectives": [
        {
            question: "Identify the adjective: 'It is a beautiful flower.'",
            options: ["It", "Is", "Beautiful", "Flower"],
            answer: "Beautiful",
            explanation: "Beautiful describes the noun flower."
        },
        {
            question: "What is the comparative form of 'good'?",
            options: ["Gooder", "Best", "Better", "More good"],
            answer: "Better",
            explanation: "Better is the comparative form of good."
        }
    ],

    "Simple Tenses": [
        {
            question: "Choose the correct verb: 'She ___ to school every day.'",
            options: ["Go", "Goes", "Going", "Gone"],
            answer: "Goes",
            explanation: "In the simple present, we use goes with she."
        },
        {
            question: "Which sentence is in the simple past tense?",
            options: [
                "I play cricket.",
                "I am playing cricket.",
                "I played cricket.",
                "I will play cricket."
            ],
            answer: "I played cricket.",
            explanation: "Played expresses a completed past action."
        }
    ]

};


// Get HTML elements

const topicTitle = document.getElementById("topicTitle");
const topicDescription = document.getElementById("topicDescription");
const questionNumber = document.getElementById("questionNumber");
const scoreDisplay = document.getElementById("scoreDisplay");
const progressFill = document.getElementById("progressFill");
const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const feedback = document.getElementById("feedback");
const checkButton = document.getElementById("checkButton");
const nextButton = document.getElementById("nextButton");
const questionCard = document.getElementById("questionCard");
const resultCard = document.getElementById("resultCard");
const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");


// Practice state

let questions = questionDatabase[selectedTopic] || [
    {
        question: "Questions for this topic are coming soon. Please choose another topic.",
        options: ["Continue", "Return Home"],
        answer: "Continue",
        explanation: "We are building the question bank for this topic."
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;


// Set page heading

topicTitle.textContent = selectedTopic;

topicDescription.textContent =
    `Practise ${selectedTopic} and improve your grammar skills.`;


// Display question

function displayQuestion() {

    const question = questions[currentQuestion];

    selectedAnswer = null;
    answered = false;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    scoreDisplay.textContent = `Score: ${score}`;

    progressFill.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    questionText.textContent = question.question;

    answerOptions.innerHTML = "";

    feedback.className = "feedback";
    feedback.textContent = "";

    question.options.forEach((option) => {

        const button = document.createElement("button");

        button.className = "answer-option";
        button.textContent = option;

        button.addEventListener("click", () => {

            if (answered) return;

            selectedAnswer = option;

            document.querySelectorAll(".answer-option").forEach((item) => {
                item.classList.remove("selected");
            });

            button.classList.add("selected");

        });

        answerOptions.appendChild(button);

    });

    checkButton.disabled = false;
    nextButton.disabled = true;

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "See Results →"
            : "Next Question →";

}


// Check answer

checkButton.addEventListener("click", () => {

    if (answered) return;

    if (selectedAnswer === null) {
        alert("Please select an answer first!");
        return;
    }

    answered = true;

    const question = questions[currentQuestion];

    const isCorrect = selectedAnswer === question.answer;

    if (isCorrect) {
        score++;
    }

    document.querySelectorAll(".answer-option").forEach((button) => {

        button.disabled = true;

        if (button.textContent === question.answer) {
            button.classList.add("correct");
        }

        if (
            button.textContent === selectedAnswer &&
            !isCorrect
        ) {
            button.classList.add("wrong");
        }

    });

    feedback.className = "feedback show";

    if (isCorrect) {

        feedback.style.background = "#f0fdf4";
        feedback.style.color = "#166534";

        feedback.innerHTML =
            `<strong>Correct!</strong><br>${question.explanation}`;

    } else {

        feedback.style.background = "#fef2f2";
        feedback.style.color = "#991b1b";

        feedback.innerHTML =
            `<strong>Incorrect!</strong><br>
            Correct answer: ${question.answer}<br>
            ${question.explanation}`;

    }

    scoreDisplay.textContent = `Score: ${score}`;

    checkButton.disabled = true;
    nextButton.disabled = false;

});


// Next question

nextButton.addEventListener("click", () => {

    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        displayQuestion();

    } else {

        showResults();

    }

});


// Show final result

function showResults() {

    questionCard.style.display = "none";
    resultCard.classList.add("show");

    progressFill.style.width = "100%";

    finalScore.textContent =
        `${score} / ${questions.length}`;

    const percentage = (score / questions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent =
            "Excellent! You answered every question correctly.";
    } else if (percentage >= 70) {
        resultMessage.textContent =
            "Great work! Keep practising to improve further.";
    } else if (percentage >= 40) {
        resultMessage.textContent =
            "Good attempt! Revise the explanations and try again.";
    } else {
        resultMessage.textContent =
            "Keep learning! Regular practice will help you improve.";
    }

}


// Start practice

// ==========================================
// REVISION + PRACTICE INTEGRATION
// ==========================================

const lessonSection = document.getElementById("lessonSection");
const lessonContent = document.getElementById("lessonContent");
const startPracticeButton = document.getElementById("startPractice");

// Display revision notes

if (typeof displayLesson === "function") {
    lessonContent.innerHTML = displayLesson(selectedTopic);
}

// Hide quiz initially

questionCard.style.display = "none";
resultCard.classList.remove("show");

// Start quiz after revision

startPracticeButton.addEventListener("click", () => {

    lessonSection.style.display = "none";
    questionCard.style.display = "block";

    displayQuestion();

});

// Start with revision

lessonSection.style.display = "block";

console.log("Revision and Practice System Ready");

console.log("Grammar Hub Practice Engine Loaded");
