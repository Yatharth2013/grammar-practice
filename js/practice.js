
/* ==================================================
   GRAMMARHUB - COMPLETE PRACTICE SYSTEM
   Developed by AirOne Developer
   Created by Yatharth Ukey
================================================== */

const questionBank = {

"Parts of Speech": [
{q:"Identify the adverb: She quickly completed her work.",o:["She","Quickly","Completed","Work"],a:1,d:"Easy",e:"Quickly describes how she completed the work."},
{q:"Identify the conjunction: I was tired, but I continued studying.",o:["Tired","Continued","But","Studying"],a:2,d:"Medium",e:"But joins two contrasting ideas."},
{q:"Which word is an interjection?",o:["Alas!","Beautiful","Run","Under"],a:0,d:"Hard",e:"Alas expresses a sudden feeling of sorrow."},
{q:"In 'The extremely tall building collapsed', what is 'extremely'?",o:["Adjective","Adverb","Noun","Preposition"],a:1,d:"Exam-type",e:"Extremely modifies the adjective tall."}
],

"Nouns": [
{q:"Which is an abstract noun?",o:["Chair","Honesty","Garden","Teacher"],a:1,d:"Easy",e:"Honesty is a quality that cannot be touched."},
{q:"What is the plural of criterion?",o:["Criterions","Criteria","Criterias","Criterionies"],a:1,d:"Hard",e:"The plural form of criterion is criteria."},
{q:"Identify the collective noun: A flock of birds flew away.",o:["Birds","Flew","Flock","Away"],a:2,d:"Medium",e:"Flock is the collective noun for a group of birds."},
{q:"Which noun is uncountable?",o:["Apple","Bottle","Furniture","Student"],a:2,d:"Exam-type",e:"Furniture is generally treated as an uncountable noun."}
],

"Pronouns": [
{q:"This book belongs to Riya. It is ____.",o:["Her","Hers","She","Herself"],a:1,d:"Easy",e:"Hers is a possessive pronoun."},
{q:"Identify the relative pronoun: The boy who won is my friend.",o:["Boy","Won","Who","Friend"],a:2,d:"Medium",e:"Who introduces the relative clause."},
{q:"Each of the girls brought ____ notebook.",o:["Their","Her","Them","They"],a:1,d:"Hard",e:"In traditional formal grammar, each is singular and takes her here."},
{q:"Choose the correct reflexive pronoun: He blamed ____.",o:["Him","His","Himself","He"],a:2,d:"Exam-type",e:"Himself refers back to the subject he."}
],

"Adjectives": [
{q:"Identify the adjective: The clever student solved the problem.",o:["Student","Solved","Clever","Problem"],a:2,d:"Easy",e:"Clever describes the noun student."},
{q:"Choose the comparative form of little when referring to quantity.",o:["Littler","Less","Least","More little"],a:1,d:"Hard",e:"The comparative form of little for quantity is less."},
{q:"Which adjective is demonstrative?",o:["Beautiful","Those","Quickly","Several"],a:1,d:"Medium",e:"Those points out particular people or things."},
{q:"Choose the correct sentence.",o:["She is more taller than me.","She is tallest than me.","She is taller than me.","She is most taller than me."],a:2,d:"Exam-type",e:"Taller is the correct comparative form of tall."}
],

"Determiners": [
{q:"There isn't ____ milk left.",o:["Many","Much","Few","Several"],a:1,d:"Easy",e:"Much is used with uncountable nouns."},
{q:"____ of the two answers is correct.",o:["Either","Every","Many","Several"],a:0,d:"Medium",e:"Either refers to one or the other of two."},
{q:"There are ____ students in the classroom.",o:["Much","Little","Several","Any"],a:2,d:"Hard",e:"Several is used with plural countable nouns."},
{q:"I have read ____ books you gave me.",o:["All the","Much","Every of","Any of"],a:0,d:"Exam-type",e:"All the is correct before a plural countable noun."}
],

"Clauses": [
{q:"Identify the subordinate clause: I know that she is honest.",o:["I know","That she is honest","She is","Is honest"],a:1,d:"Medium",e:"That she is honest is a subordinate noun clause."},
{q:"Which clause describes a noun?",o:["Adverb clause","Noun clause","Adjective clause","Main clause"],a:2,d:"Easy",e:"An adjective clause describes a noun or pronoun."},
{q:"Identify the adverb clause: We stayed inside because it was raining.",o:["We stayed inside","Because it was raining","It was raining","Stayed inside"],a:1,d:"Hard",e:"The clause gives the reason for staying inside."},
{q:"In 'I believe that he is right', the clause 'that he is right' functions as a:",o:["Adjective clause","Adverb clause","Noun clause","Independent clause"],a:2,d:"Exam-type",e:"It acts as the object of the verb believe."}
],

"Simple Tenses": [
{q:"She ____ to school every day.",o:["Go","Going","Goes","Gone"],a:2,d:"Easy",e:"A singular third-person subject takes goes in the simple present."},
{q:"They ____ the match yesterday.",o:["Win","Won","Winning","Wins"],a:1,d:"Medium",e:"Yesterday indicates the simple past. The past form is won."},
{q:"The sun ____ in the east.",o:["Rose","Rises","Rising","Rise"],a:1,d:"Hard",e:"Universal truths are expressed in the simple present."},
{q:"By next year, she ____ sixteen.",o:["Is","Was","Will be","Has been"],a:2,d:"Exam-type",e:"Will be expresses a future state."}
],

"Continuous Tenses": [
{q:"I ____ a book right now.",o:["Read","Am reading","Have read","Reads"],a:1,d:"Easy",e:"Right now indicates the present continuous."},
{q:"At 8 p.m. yesterday, we ____ dinner.",o:["Had","Were having","Have","Are having"],a:1,d:"Medium",e:"Past continuous describes an action in progress at a past time."},
{q:"Look! The children ____ in the garden.",o:["Play","Played","Are playing","Have played"],a:2,d:"Easy",e:"Look indicates an action happening now."},
{q:"This time tomorrow, I ____ to Delhi.",o:["Travel","Will be travelling","Travelled","Have travelled"],a:1,d:"Exam-type",e:"Future continuous describes an action in progress at a future time."}
],

"Perfect and Perfect Continuous Tenses": [
{q:"She ____ her homework already.",o:["Has completed","Have completed","Completing","Complete"],a:0,d:"Easy",e:"Has completed is present perfect."},
{q:"They ____ for two hours when the bus arrived.",o:["Wait","Have waited","Had been waiting","Are waiting"],a:2,d:"Hard",e:"Past perfect continuous describes an ongoing action before another past event."},
{q:"I ____ this book twice.",o:["Have read","Am reading","Read tomorrow","Reads"],a:0,d:"Medium",e:"Have read expresses a completed experience with present relevance."},
{q:"By June, he ____ here for five years.",o:["Works","Will have been working","Worked","Is working"],a:1,d:"Exam-type",e:"Future perfect continuous describes duration up to a future point."}
],

"Sequence of Tenses": [
{q:"Choose the correct sentence.",o:["He said that he is ill yesterday.","He said that he was ill.","He says that he was ill tomorrow.","He said that he will ill."],a:1,d:"Easy",e:"A past reporting verb commonly causes a backshift to was."},
{q:"She said that she ____ busy.",o:["Is","Was","Will","Be"],a:1,d:"Medium",e:"With said in the past, was is the usual sequence of tense."},
{q:"He told me that the Earth ____ round the Sun.",o:["Moved","Moves","Move","Moving"],a:1,d:"Hard",e:"Universal truths generally remain in the simple present."},
{q:"Choose the correct option: The teacher said that water ____ at 100°C at sea level.",o:["Boiled","Boils","Boiling","Will boil"],a:1,d:"Exam-type",e:"Scientific facts remain in the present tense."}
],

"Modals": [
{q:"You ____ obey traffic rules.",o:["May","Must","Might","Could"],a:1,d:"Easy",e:"Must expresses strong obligation."},
{q:"____ I borrow your pencil?",o:["May","Must","Should","Need"],a:0,d:"Medium",e:"May is commonly used to ask permission politely."},
{q:"You ____ consult a doctor if you feel unwell.",o:["Should","Can","Might","Would"],a:0,d:"Hard",e:"Should expresses advice."},
{q:"He ____ swim when he was five.",o:["Can","Could","Must","May"],a:1,d:"Exam-type",e:"Could expresses past ability."}
],

"Non-finite Verbs": [
{q:"Identify the infinitive: I want to learn English.",o:["Want","To learn","English","I"],a:1,d:"Easy",e:"To learn is an infinitive."},
{q:"Identify the gerund: Swimming is good exercise.",o:["Good","Exercise","Swimming","Is"],a:2,d:"Medium",e:"Swimming is an -ing form functioning as a noun."},
{q:"Identify the participle: The broken window was repaired.",o:["Window","Broken","Repaired","Was"],a:1,d:"Hard",e:"Broken is a past participle describing the window."},
{q:"Which sentence contains an infinitive of purpose?",o:["I enjoy reading.","She went to buy milk.","Swimming is fun.","The crying baby slept."],a:1,d:"Exam-type",e:"To buy explains the purpose of going."}
],

"Phrasal Verbs": [
{q:"What does 'give up' mean?",o:["Continue","Quit","Collect","Return"],a:1,d:"Easy",e:"Give up means to stop doing something."},
{q:"Please ____ the lights before leaving.",o:["Turn off","Turn into","Turn over","Turn up"],a:0,d:"Medium",e:"Turn off means to switch something off."},
{q:"What does 'look after' mean?",o:["Search for","Take care of","Look behind","Ignore"],a:1,d:"Hard",e:"Look after means to take care of someone or something."},
{q:"The meeting was ____ because of heavy rain.",o:["Put off","Put on","Put out","Put up"],a:0,d:"Exam-type",e:"Put off means postpone."}
],

"Active and Passive Voice": [
{q:"Change into passive: The boy kicked the ball.",o:["The ball kicked the boy.","The ball was kicked by the boy.","The ball is kicked by the boy.","The boy was kicked."],a:1,d:"Easy",e:"Simple past active changes to was/were + past participle."},
{q:"Choose the passive form: She writes a letter.",o:["A letter is written by her.","A letter was written by her.","A letter has written by her.","A letter wrote her."],a:0,d:"Medium",e:"Simple present passive uses is/am/are + past participle."},
{q:"The work has been completed. Identify the voice.",o:["Active","Passive","Imperative","Interrogative"],a:1,d:"Hard",e:"Has been completed is a passive construction."},
{q:"Change into passive: They will announce the results tomorrow.",o:["The results are announced tomorrow.","The results will be announced tomorrow.","The results were announced tomorrow.","The results have announced tomorrow."],a:1,d:"Exam-type",e:"Future passive uses will be + past participle."}
],

"Adverbs": [
{q:"Identify the adverb: He speaks softly.",o:["He","Speaks","Softly","None"],a:2,d:"Easy",e:"Softly describes how he speaks."},
{q:"Which is an adverb of frequency?",o:["Outside","Yesterday","Often","Carefully"],a:2,d:"Medium",e:"Often tells how frequently an action happens."},
{q:"Choose the correct form: She sings ____.",o:["Beautiful","Beautifully","Beauty","Beautify"],a:1,d:"Hard",e:"Beautifully is the adverb modifying sings."},
{q:"Identify the adverb clause: I will call you when I arrive.",o:["I will call you","When I arrive","Call you","I arrive"],a:1,d:"Exam-type",e:"When I arrive tells when the action will happen."}
],

"Prepositions": [
{q:"The book is ____ the table.",o:["On","At","Into","By"],a:0,d:"Easy",e:"On indicates a position on a surface."},
{q:"She has lived here ____ 2020.",o:["For","Since","From","By"],a:1,d:"Medium",e:"Since is used with a starting point in time."},
{q:"He is good ____ mathematics.",o:["In","On","At","With"],a:2,d:"Hard",e:"The correct expression is good at."},
{q:"The train arrived ____ time.",o:["At","On","In","By"],a:1,d:"Exam-type",e:"On time means punctual."}
],

"Conjunctions": [
{q:"I was hungry, ____ I ate a sandwich.",o:["But","So","Although","Unless"],a:1,d:"Easy",e:"So connects a cause with its result."},
{q:"____ he was tired, he completed his work.",o:["Because","Although","Unless","Or"],a:1,d:"Medium",e:"Although introduces a contrast."},
{q:"Neither Rohan ____ Mohan was present.",o:["Or","And","Nor","But"],a:2,d:"Hard",e:"Neither is paired with nor."},
{q:"Choose the correct pair: ____ you hurry, you will miss the bus.",o:["If","Unless","Because","Though"],a:1,d:"Exam-type",e:"Unless means if not."}
],

"Structure of Sentences": [
{q:"Identify the subject: The little girl sang beautifully.",o:["Sang","Beautifully","The little girl","Girl sang"],a:2,d:"Easy",e:"The little girl is the person performing the action."},
{q:"Which is a simple sentence?",o:["I ran and he walked.","When I arrived, she left.","The baby smiled.","I stayed because it rained."],a:2,d:"Medium",e:"The baby smiled contains one independent clause."},
{q:"Identify the compound sentence.",o:["Although it rained, we played.","I called him, but he did not answer.","She smiled.","When he came, I left."],a:1,d:"Hard",e:"Two independent clauses are joined by but."},
{q:"A sentence with one independent clause and at least one dependent clause is:",o:["Simple","Compound","Complex","Fragment"],a:2,d:"Exam-type",e:"That is the definition of a complex sentence."}
],

"Types of Sentences": [
{q:"What type of sentence is: Please close the door.",o:["Assertive","Interrogative","Imperative","Exclamatory"],a:2,d:"Easy",e:"It gives a command or request."},
{q:"What type of sentence is: What a beautiful painting!",o:["Assertive","Exclamatory","Imperative","Interrogative"],a:1,d:"Medium",e:"It expresses strong feeling or admiration."},
{q:"Identify the sentence type: Have you completed your work?",o:["Interrogative","Imperative","Assertive","Exclamatory"],a:0,d:"Easy",e:"It asks a question."},
{q:"Which sentence is assertive?",o:["Where are you going?","What a surprise!","The Earth revolves around the Sun.","Please sit down."],a:2,d:"Exam-type",e:"An assertive sentence makes a statement."}
],

"Combining of Sentences": [
{q:"Combine using 'and': He is honest. He is kind.",o:["He is honest but kind.","He is honest and kind.","He is honest because kind.","He is honest or kind."],a:1,d:"Easy",e:"And joins two related qualities."},
{q:"Combine using 'although': It was raining. We went out.",o:["Although it was raining, we went out.","It was raining because we went out.","It was raining or we went out.","We went out unless raining."],a:0,d:"Medium",e:"Although expresses contrast."},
{q:"Choose the correct combination: He was ill. He attended school.",o:["He was ill because he attended school.","Although he was ill, he attended school.","He was ill unless he attended school.","He was ill or attended school."],a:1,d:"Hard",e:"Although correctly connects the contrasting ideas."},
{q:"Combine using 'who': I met a girl. She won the prize.",o:["I met a girl who won the prize.","I met a girl which won the prize.","I met who a girl won the prize.","I met a girl whom won the prize."],a:0,d:"Exam-type",e:"Who introduces a relative clause referring to a person."}
],

"Direct and Indirect Speech": [
{q:"Change into indirect speech: He said, 'I am happy.'",o:["He said that I am happy.","He said that he was happy.","He says he was happy.","He said he is happy yesterday."],a:1,d:"Easy",e:"I changes to he and am changes to was after a past reporting verb."},
{q:"She said, 'I will help you.'",o:["She said that she would help me.","She said that I will help her.","She says she would help me.","She said she helps me."],a:0,d:"Medium",e:"Will usually changes to would in reported speech."},
{q:"He said to me, 'Where do you live?'",o:["He asked me where I lived.","He asked me where do I live.","He said where I live.","He asked where did I live."],a:0,d:"Hard",e:"Reported questions use statement word order and the appropriate tense change."},
{q:"The teacher said, 'Do not make noise.'",o:["The teacher said do not make noise.","The teacher ordered us not to make noise.","The teacher asked that do not noise.","The teacher told not make noise."],a:1,d:"Exam-type",e:"Negative commands commonly change to told/ordered + object + not to."}
],

"Question Tags": [
{q:"You are a student, ____?",o:["Are you","Aren't you","Do you","Isn't it"],a:1,d:"Easy",e:"A positive statement takes a negative tag."},
{q:"She doesn't like tea, ____?",o:["Does she","Doesn't she","Is she","Did she"],a:0,d:"Medium",e:"A negative statement takes a positive tag."},
{q:"Let's go for a walk, ____?",o:["Will we","Shall we","Do we","Can we"],a:1,d:"Hard",e:"Let's commonly takes the tag shall we."},
{q:"I am late, ____?",o:["Am I","Amn't I","Aren't I","Isn't I"],a:2,d:"Exam-type",e:"The conventional question tag for I am is aren't I."}
],

"Punctuation": [
{q:"Choose the correctly punctuated sentence.",o:["Where are you going.","Where are you going?","Where are you going!","Where are you going,"],a:1,d:"Easy",e:"A direct question ends with a question mark."},
{q:"Which punctuation mark shows possession?",o:["Comma","Colon","Apostrophe","Semicolon"],a:2,d:"Medium",e:"An apostrophe can show possession, as in Riya's book."},
{q:"Choose the correctly punctuated sentence.",o:["Its a beautiful day.","It's a beautiful day.","Its' a beautiful day.","Its, a beautiful day."],a:1,d:"Hard",e:"It's is the contraction of it is."},
{q:"Choose the correctly punctuated direct speech.",o:["Riya said I am ready.","Riya said, \"I am ready.\"","Riya said \"I am ready\"","Riya, said I am ready."],a:1,d:"Exam-type",e:"A comma introduces the quoted words, which are enclosed in quotation marks."}
]

};

/* =========================================
   PAGE ELEMENTS
========================================= */

const params = new URLSearchParams(window.location.search);
let selectedTopic = params.get("topic") || "Parts of Speech";

if (!questionBank[selectedTopic]) {
    selectedTopic = "Parts of Speech";
}

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

/* =========================================
   QUIZ VARIABLES
========================================= */

let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answerChecked = false;
let difficulty = "All";

/* =========================================
   TOPIC INFORMATION
========================================= */

const descriptions = {
    "Parts of Speech": "Learn how words function in sentences.",
    "Nouns": "Practise naming words and their different types.",
    "Pronouns": "Understand words used in place of nouns.",
    "Adjectives": "Practise describing words and their degrees.",
    "Determiners": "Learn how determiners identify nouns.",
    "Clauses": "Understand independent and dependent clauses.",
    "Simple Tenses": "Practise simple present, past and future.",
    "Continuous Tenses": "Learn actions happening over time.",
    "Perfect and Perfect Continuous Tenses": "Master perfect and perfect continuous forms.",
    "Sequence of Tenses": "Understand correct tense relationships.",
    "Modals": "Practise modal verbs and their meanings.",
    "Non-finite Verbs": "Learn infinitives, gerunds and participles.",
    "Phrasal Verbs": "Understand common phrasal verbs.",
    "Active and Passive Voice": "Practise changing sentence voice.",
    "Adverbs": "Learn how adverbs modify words.",
    "Prepositions": "Practise relationships of time, place and direction.",
    "Conjunctions": "Learn how words and clauses are connected.",
    "Structure of Sentences": "Understand sentence construction.",
    "Types of Sentences": "Identify different sentence types.",
    "Combining of Sentences": "Practise joining sentences correctly.",
    "Direct and Indirect Speech": "Learn reported speech transformations.",
    "Question Tags": "Practise forming correct question tags.",
    "Punctuation": "Improve sentence punctuation."
};

/* =========================================
   DIFFICULTY SELECTOR
========================================= */

function createDifficultySelector() {
    const wrapper = document.createElement("div");
    wrapper.style.margin = "15px 0";

    const label = document.createElement("label");
    label.textContent = "Choose difficulty: ";
    label.style.fontWeight = "600";
    label.htmlFor = "difficultySelect";

    const select = document.createElement("select");
    select.id = "difficultySelect";
    select.style.padding = "10px";
    select.style.marginLeft = "8px";
    select.style.borderRadius = "8px";
    select.style.border = "1px solid #ccc";

    const levels = [
        ["All", "All Levels"],
        ["Easy", "Easy"],
        ["Medium", "Medium"],
        ["Hard", "Hard"],
        ["Exam-type", "Exam Type"]
    ];

    levels.forEach(([value, text]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        select.appendChild(option);
    });

    select.addEventListener("change", function () {
        difficulty = this.value;
    });

    wrapper.appendChild(label);
    wrapper.appendChild(select);

    if (startPracticeButton && lessonSection) {
        lessonSection.insertBefore(wrapper, startPracticeButton);
    }
}

/* =========================================
   INITIALISE PAGE
========================================= */

function initialisePage() {
    if (topicTitle) topicTitle.textContent = selectedTopic;
    if (topicDescription) {
        topicDescription.textContent = descriptions[selectedTopic] || "";
    }

    if (typeof displayLesson === "function" && lessonContent) {
        lessonContent.innerHTML = displayLesson(selectedTopic);
    }

    createDifficultySelector();

    if (questionCard) questionCard.style.display = "none";
    if (resultCard) resultCard.classList.remove("show");
    if (lessonSection) lessonSection.style.display = "block";

    if (startPracticeButton) {
        startPracticeButton.addEventListener("click", startQuiz);
    }

    if (checkButton) {
        checkButton.addEventListener("click", checkAnswer);
    }

    if (nextButton) {
        nextButton.addEventListener("click", nextQuestion);
        nextButton.style.display = "none";
    }

    console.log("GrammarHub Practice System Ready");
}

/* =========================================
   START QUIZ
========================================= */

function startQuiz() {
    const availableQuestions = questionBank[selectedTopic] || [];

    questions = availableQuestions.filter(question =>
        difficulty === "All" || question.d === difficulty
    );

    if (questions.length === 0) {
        alert("No questions are available for this difficulty yet. Please choose All Levels.");
        return;
    }

    questions = [...questions].sort(() => Math.random() - 0.5);

    currentQuestion = 0;
    score = 0;

    if (lessonSection) lessonSection.style.display = "none";
    if (questionCard) questionCard.style.display = "block";
    if (resultCard) resultCard.classList.remove("show");

    if (scoreDisplay) scoreDisplay.textContent = "Score: 0";

    displayQuestion();
}

/* =========================================
   DISPLAY QUESTION
========================================= */

function displayQuestion() {
    if (currentQuestion >= questions.length) {
        showResults();
        return;
    }

    const question = questions[currentQuestion];

    selectedAnswer = null;
    answerChecked = false;

    if (questionNumber) {
        questionNumber.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;
    }

    if (questionText) questionText.textContent = question.q;

    if (progressFill) {
        progressFill.style.width =
            `${((currentQuestion + 1) / questions.length) * 100}%`;
    }

    if (feedback) {
        feedback.innerHTML = "";
        feedback.className = "feedback";
    }

    if (checkButton) {
        checkButton.style.display = "inline-block";
        checkButton.disabled = true;
    }

    if (nextButton) nextButton.style.display = "none";

    if (answerOptions) {
        answerOptions.innerHTML = "";

        question.o.forEach((option, index) => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "answer-option";
            button.textContent = option;

            button.addEventListener("click", () => {
                if (answerChecked) return;

                selectedAnswer = index;

                document.querySelectorAll(".answer-option").forEach(item => {
                    item.classList.remove("selected");
                });

                button.classList.add("selected");

                if (checkButton) checkButton.disabled = false;
            });

            answerOptions.appendChild(button);
        });
    }

    const difficultyLabel = document.getElementById("difficultyLabel");

    if (difficultyLabel) {
        difficultyLabel.textContent = question.d;
    }
}

/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer() {
    if (selectedAnswer === null || answerChecked) return;

    answerChecked = true;

    const question = questions[currentQuestion];
    const optionButtons = document.querySelectorAll(".answer-option");

    optionButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.a) {
            button.classList.add("correct");
        }

        if (index === selectedAnswer && selectedAnswer !== question.a) {
            button.classList.add("incorrect");
        }
    });

    if (selectedAnswer === question.a) {
        score++;

        if (feedback) {
            feedback.innerHTML =
                `<strong>Correct!</strong><br>${question.e}`;
            feedback.className = "feedback correct-feedback";
        }
    } else {
        if (feedback) {
            feedback.innerHTML =
                `<strong>Incorrect.</strong><br>
                Correct answer: ${question.o[question.a]}<br>
                ${question.e}`;
            feedback.className = "feedback incorrect-feedback";
        }
    }

    if (scoreDisplay) {
        scoreDisplay.textContent = `Score: ${score}`;
    }

    if (checkButton) checkButton.style.display = "none";
    if (nextButton) {
        nextButton.style.display = "inline-block";
        nextButton.textContent =
            currentQuestion === questions.length - 1
                ? "See Results"
                : "Next Question →";
    }
}

/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {
    currentQuestion++;
    displayQuestion();
}

/* =========================================
   SHOW RESULTS
========================================= */

function showResults() {
    if (questionCard) questionCard.style.display = "none";
    if (resultCard) resultCard.classList.add("show");

    const percentage = Math.round((score / questions.length) * 100);

    if (finalScore) {
        finalScore.textContent =
            `${score} / ${questions.length} (${percentage}%)`;
    }

    let message = "";

    if (percentage >= 90) {
        message = "Outstanding! Excellent grammar knowledge!";
    } else if (percentage >= 75) {
        message = "Great work! You have a strong understanding.";
    } else if (percentage >= 50) {
        message = "Good effort! Keep practising to improve.";
    } else {
        message = "Keep learning! Revise the topic and try again.";
    }

    if (resultMessage) resultMessage.textContent = message;

    if (progressFill) progressFill.style.width = "100%";
}

/* =========================================
   RESTART QUIZ
========================================= */

function restartQuiz() {
    if (resultCard) resultCard.classList.remove("show");
    startQuiz();
}

/* =========================================
   BACK TO REVISION
========================================= */

function backToRevision() {
    if (resultCard) resultCard.classList.remove("show");
    if (questionCard) questionCard.style.display = "none";
    if (lessonSection) lessonSection.style.display = "block";
}

/* =========================================
   START APPLICATION
========================================= */

initialisePage();
