// ==========================================
// GRAMMAR HUB - PRACTICE SYSTEM
// ==========================================

// Get the selected topic from the URL
const urlParams = new URLSearchParams(window.location.search);
const selectedTopic = urlParams.get("topic") || "Parts of Speech";

// Page elements
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

const lessonSection = document.getElementById("lessonSection");
const lessonContent = document.getElementById("lessonContent");
const startPracticeButton = document.getElementById("startPractice");

// ==========================================
// QUESTION BANK
// Format:
// [question, options, correctAnswerIndex, explanation, difficulty]
// ==========================================

const questionBank = {

"Parts of Speech": [
["Identify the part of speech of the underlined word: She sings beautifully.", ["Noun", "Adverb", "Adjective", "Verb"], 1, "Beautifully describes how she sings. It is an adverb.", "Easy"],
["Identify the part of speech of 'although' in: Although it was raining, we played.", ["Preposition", "Conjunction", "Adverb", "Pronoun"], 1, "Although connects two clauses and is a subordinating conjunction.", "Exam-type"]
],

"Nouns": [
["Which of the following is an abstract noun?", ["Table", "Honesty", "Teacher", "Garden"], 1, "Honesty is an abstract noun because it names a quality.", "Easy"],
["Choose the correctly formed plural of 'analysis'.", ["Analysises", "Analysiseses", "Analyses", "Analysis"], 2, "The plural of analysis is analyses.", "Hard"]
],

"Pronouns": [
["Choose the correct pronoun: Riya and ___ went to the library.", ["me", "I", "mine", "myself"], 1, "I is the subject pronoun used as part of the subject.", "Easy"],
["Identify the relative pronoun: The boy who won the race is my friend.", ["The", "Boy", "Who", "My"], 2, "Who introduces the relative clause and refers to the boy.", "Medium"]
],

"Adjectives": [
["Choose the adjective in: The clever student solved the puzzle.", ["Student", "Solved", "Clever", "Puzzle"], 2, "Clever describes the noun student.", "Easy"],
["Choose the correct comparative form of 'good'.", ["Gooder", "More good", "Best", "Better"], 3, "The comparative form of good is better.", "Exam-type"]
],

"Determiners": [
["Choose the correct determiner: I have ___ umbrella.", ["a", "an", "the", "some"], 1, "An is used before a word beginning with a vowel sound.", "Easy"],
["Choose the correct determiner: There isn't ___ milk left.", ["many", "few", "much", "several"], 2, "Much is used with uncountable nouns such as milk.", "Medium"]
],

"Clauses": [
["Identify the subordinate clause: I stayed home because I was ill.", ["I stayed home", "Because I was ill", "I was", "Stayed home"], 1, "Because I was ill cannot stand alone as a complete sentence.", "Medium"],
["Which clause acts as the subject? What he said surprised everyone.", ["Surprised everyone", "Everyone", "What he said", "He said"], 2, "What he said is a noun clause functioning as the subject.", "Hard"]
],

"Simple Tenses": [
["Choose the correct simple present form: She ___ to school every day.", ["go", "goes", "going", "gone"], 1, "With he, she or it, the simple present verb usually takes -s or -es.", "Easy"],
["Choose the correct simple past form: They ___ the match yesterday.", ["win", "wins", "won", "winning"], 2, "Won is the simple past form of win.", "Exam-type"]
],

"Continuous Tenses": [
["Choose the correct form: They ___ football now.", ["play", "played", "are playing", "have played"], 2, "Are playing is the present continuous form.", "Easy"],
["At 8 p.m. yesterday, I ___ my homework.", ["do", "was doing", "am doing", "have done"], 1, "Was doing describes an action in progress at a particular past time.", "Medium"]
],

"Perfect and Perfect Continuous Tenses": [
["She ___ her homework already.", ["has completed", "complete", "is completing", "completed"], 0, "Has completed is the present perfect tense.", "Medium"],
["They ___ for two hours before the bus arrived.", ["wait", "have waited", "had been waiting", "are waiting"], 2, "Had been waiting shows an action continuing before another past event.", "Hard"]
],

"Sequence of Tenses": [
["Choose the correct sentence.", ["He said that he is tired.", "He said that he was tired.", "He said that he tired.", "He said that he has tired."], 1, "In reported speech, a past reporting verb commonly causes the tense to shift back.", "Medium"],
["Choose the correct option: The teacher said that the Earth ___ around the Sun.", ["revolved", "revolves", "revolving", "revolve"], 1, "A universal truth normally remains in the simple present tense.", "Hard"]
],

"Modals": [
["You ___ obey traffic rules.", ["might", "must", "could", "would"], 1, "Must expresses strong obligation.", "Easy"],
["___ I borrow your pen, please?", ["May", "Must", "Should", "Would"], 0, "May is used to ask for permission politely.", "Exam-type"]
],

"Non-finite Verbs": [
["Identify the infinitive: I want to learn French.", ["Want", "Learn", "To learn", "French"], 2, "To learn is an infinitive.", "Medium"],
["Identify the gerund: Swimming is good exercise.", ["Is", "Good", "Exercise", "Swimming"], 3, "Swimming acts as a noun and is therefore a gerund.", "Hard"]
],

"Phrasal Verbs": [
["What does 'give up' mean?", ["Continue", "Surrender or stop trying", "Distribute", "Collect"], 1, "Give up means to stop trying or surrender.", "Easy"],
["Choose the correct phrasal verb: Please ___ the lights before leaving.", ["turn off", "turn into", "turn up", "turn over"], 0, "Turn off means to switch something off.", "Exam-type"]
],

"Active and Passive Voice": [
["Choose the passive form: The chef prepared the meal.", ["The meal prepares the chef.", "The meal was prepared by the chef.", "The chef was prepared by the meal.", "The meal is preparing."], 1, "The simple past passive uses was or were + past participle.", "Medium"],
["Choose the active form: The letter was written by Meera.", ["Meera writes the letter.", "Meera wrote the letter.", "Meera is writing the letter.", "Meera has written the letter."], 1, "The passive sentence is in the simple past, so the active form is wrote.", "Hard"]
],

"Adverbs": [
["Identify the adverb: The tortoise walked slowly.", ["Tortoise", "Walked", "Slowly", "The"], 2, "Slowly describes how the tortoise walked.", "Easy"],
["Which sentence uses an adverb of frequency?", ["She sings sweetly.", "He often visits us.", "They arrived yesterday.", "Come here."], 1, "Often tells how frequently he visits.", "Medium"]
],

"Prepositions": [
["Choose the correct preposition: The cat is hiding ___ the table.", ["under", "at", "for", "with"], 0, "Under shows the position of the cat.", "Easy"],
["Choose the correct option: She has been studying ___ Monday.", ["for", "since", "by", "from"], 1, "Since is used with a specific starting point in time.", "Exam-type"]
],

"Conjunctions": [
["Choose the correct conjunction: I was tired, ___ I finished my work.", ["but", "because", "or", "unless"], 0, "But connects two contrasting ideas.", "Easy"],
["Choose the correct pair: ___ you hurry, you will miss the bus.", ["If", "Unless", "Although", "Because"], 1, "Unless means if not.", "Hard"]
],

"Structure of Sentences": [
["Identify the subject: The little girl opened the window.", ["Opened", "The window", "The little girl", "Girl opened"], 2, "The little girl is the person performing the action.", "Easy"],
["Identify the sentence pattern: Birds fly.", ["Subject + Verb", "Subject + Object", "Subject + Verb + Object", "Subject + Complement"], 0, "Birds is the subject and fly is the verb.", "Medium"]
],

"Types of Sentences": [
["Identify the sentence type: What a beautiful painting!", ["Assertive", "Interrogative", "Exclamatory", "Imperative"], 2, "It expresses a strong feeling and ends with an exclamation mark.", "Easy"],
["Which sentence is imperative?", ["Where are you going?", "Please close the door.", "It is raining.", "What a surprise!"], 1, "An imperative sentence gives a command or makes a request.", "Exam-type"]
],

"Combining of Sentences": [
["Combine using 'because': He was absent. He was ill.", ["He was absent because he was ill.", "He was ill but absent.", "He was absent or ill.", "He was absent although he was ill."], 0, "Because correctly introduces the reason for his absence.", "Medium"],
["Choose the correct compound sentence.", ["Although it rained, we played.", "It rained, but we played.", "Playing in the rain.", "Because it rained."], 1, "A compound sentence joins independent clauses using a coordinating conjunction.", "Hard"]
],

"Direct and Indirect Speech": [
["Choose the indirect speech: He said, 'I am happy.'", ["He said that I am happy.", "He said that he was happy.", "He says he was happy.", "He said that he is happy."], 1, "The pronoun changes to he and am changes to was.", "Medium"],
["Change into indirect speech: She said, 'I have finished my work.'", ["She said that she has finished her work.", "She said that she had finished her work.", "She said that I had finished my work.", "She says she finished her work."], 1, "The present perfect commonly changes to the past perfect after a past reporting verb.", "Hard"]
],

"Question Tags": [
["Choose the correct question tag: She is a doctor, ___?", ["is she", "isn't she", "doesn't she", "wasn't she"], 1, "A positive statement usually takes a negative question tag.", "Easy"],
["Choose the correct tag: Let's go for a walk, ___?", ["will we", "do we", "shall we", "aren't we"], 2, "Let's is followed by the question tag shall we.", "Exam-type"]
],

"Punctuation": [
["Choose the correctly punctuated sentence.", ["where are you going.", "Where are you going?", "Where are you going!", "where are you going?"], 1, "A direct question begins with a capital letter and ends with a question mark.", "Easy"],
["Choose the correctly punctuated sentence.", ["Riya said I am ready.", "Riya said, 'I am ready.'", "Riya said 'I am ready'.", "riya said, I am ready."], 1, "The sentence uses a capital letter, a comma before the quotation and correct quotation marks.", "Hard"]
]

};

// ==========================================
// QUIZ VARIABLES
// ==========================================

let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answerChecked = false;

// ==========================================
// SHUFFLE QUESTIONS
// ==========================================

function shuffleQuestions(list) {
    const shuffled = [...list];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

// ==========================================
// STARTING THE QUIZ
// ==========================================

function startQuiz() {
    const topicQuestions = questionBank[selectedTopic];

    if (!topicQuestions || topicQuestions.length === 0) {
        questionText.textContent = "Questions for this topic are being prepared.";
        answerOptions.innerHTML = "";
        return;
    }

    questions = shuffleQuestions(topicQuestions);
    currentQuestion = 0;
    score = 0;

    scoreDisplay.textContent = "Score: 0";
    resultCard.classList.remove("show");
    questionCard.style.display = "block";

    displayQuestion();
}

// ==========================================
// DISPLAY QUESTION
// ==========================================

function displayQuestion() {
    if (currentQuestion >= questions.length) {
        showResults();
        return;
    }

    selectedAnswer = null;
    answerChecked = false;

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = question[0];

    answerOptions.innerHTML = "";

    question[1].forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "answer-option";
        button.textContent = option;

        button.addEventListener("click", () => {
            if (answerChecked) return;

            selectedAnswer = index;

            document.querySelectorAll(".answer-option").forEach(btn => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
        });

        answerOptions.appendChild(button);
    });

    feedback.innerHTML = "";
    feedback.style.display = "none";

    checkButton.style.display = "inline-block";
    nextButton.style.display = "none";

    const difficultyLabel = question[4] || "Practice";

    const existingLabel = document.getElementById("difficultyLabel");

    if (existingLabel) {
        existingLabel.textContent = difficultyLabel;
    }

    progressFill.style.width =
        `${(currentQuestion / questions.length) * 100}%`;
}

// ==========================================
// CHECK ANSWER
// ==========================================

checkButton.addEventListener("click", () => {
    if (selectedAnswer === null || answerChecked) {
        if (selectedAnswer === null) {
            feedback.textContent = "Please select an answer first.";
            feedback.style.display = "block";
        }

        return;
    }

    answerChecked = true;

    const question = questions[currentQuestion];
    const correctAnswer = question[2];
    const explanation = question[3];

    const optionButtons = document.querySelectorAll(".answer-option");

    optionButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === correctAnswer) {
            button.classList.add("correct");
        }

        if (index === selectedAnswer && selectedAnswer !== correctAnswer) {
            button.classList.add("wrong");
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++;

        feedback.innerHTML =
            `<strong>Correct!</strong><br>${explanation}`;
    } else {
        feedback.innerHTML =
            `<strong>Not quite!</strong><br>
            Correct answer: <strong>${question[1][correctAnswer]}</strong><br>
            ${explanation}`;
    }

    feedback.style.display = "block";
    scoreDisplay.textContent = `Score: ${score}`;

    checkButton.style.display = "none";
    nextButton.style.display = "inline-block";
});

// ==========================================
// NEXT QUESTION
// ==========================================

nextButton.addEventListener("click", () => {
    currentQuestion++;

    progressFill.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    displayQuestion();
});

// ==========================================
// SHOW FINAL RESULTS
// ==========================================

function showResults() {
    questionCard.style.display = "none";
    resultCard.classList.add("show");

    progressFill.style.width = "100%";

    finalScore.textContent =
        `${score} / ${questions.length}`;

    const percentage = Math.round(
        (score / questions.length) * 100
    );

    if (percentage === 100) {
        resultMessage.textContent =
            "Excellent! You got every question correct!";
    } else if (percentage >= 75) {
        resultMessage.textContent =
            "Great work! You have a strong understanding of this topic.";
    } else if (percentage >= 50) {
        resultMessage.textContent =
            "Good effort! Revise the explanations and try again.";
    } else {
        resultMessage.textContent =
            "Keep practising. Review the lesson and give it another try!";
    }
}

// ==========================================
// RETRY QUIZ
// ==========================================

const retryButton = document.getElementById("retryButton");

if (retryButton) {
    retryButton.addEventListener("click", () => {
        startQuiz();
    });
}

// ==========================================
// PAGE INITIALISATION
// ==========================================

topicTitle.textContent = selectedTopic;

topicDescription.textContent =
    "Revise the concepts and test your understanding.";

if (typeof displayLesson === "function" && lessonContent) {
    lessonContent.innerHTML = displayLesson(selectedTopic);
}

questionCard.style.display = "none";
resultCard.classList.remove("show");

if (lessonSection) {
    lessonSection.style.display = "block";
}

if (startPracticeButton) {
    startPracticeButton.addEventListener("click", () => {
        if (lessonSection) {
            lessonSection.style.display = "none";
        }

        startQuiz();
    });
}

console.log("Grammar Hub Practice System Ready!");
