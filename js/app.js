
/* =========================================
   GRAMMARHUB - TOPIC SYSTEM
   Developed by AirOne Developer
   Yatharth Ukey
========================================= */

const topics = [
    "Parts of Speech",
    "Nouns",
    "Pronouns",
    "Adjectives",
    "Determiners",
    "Clauses",
    "Simple Tenses",
    "Continuous Tenses",
    "Perfect and Perfect Continuous Tenses",
    "Sequence of Tenses",
    "Modals",
    "Non-finite Verbs",
    "Phrasal Verbs",
    "Active and Passive Voice",
    "Adverbs",
    "Prepositions",
    "Conjunctions",
    "Structure of Sentences",
    "Types of Sentences",
    "Combining of Sentences",
    "Direct and Indirect Speech",
    "Question Tags",
    "Punctuation"
];

const topicDescriptions = {
    "Parts of Speech": "Understand the different categories of words.",
    "Nouns": "Learn types, forms and uses of nouns.",
    "Pronouns": "Practise different types of pronouns.",
    "Adjectives": "Learn describing words and their degrees.",
    "Determiners": "Understand articles, quantifiers and demonstratives.",
    "Clauses": "Explore independent and dependent clauses.",
    "Simple Tenses": "Master simple present, past and future.",
    "Continuous Tenses": "Practise continuous tense forms.",
    "Perfect and Perfect Continuous Tenses": "Understand perfect and perfect continuous forms.",
    "Sequence of Tenses": "Learn how tenses work together.",
    "Modals": "Practise can, could, may, might and more.",
    "Non-finite Verbs": "Explore infinitives, gerunds and participles.",
    "Phrasal Verbs": "Learn common phrasal verbs and meanings.",
    "Active and Passive Voice": "Transform sentences between active and passive voice.",
    "Adverbs": "Understand types and uses of adverbs.",
    "Prepositions": "Practise prepositions of time, place and direction.",
    "Conjunctions": "Connect words, phrases and clauses.",
    "Structure of Sentences": "Understand sentence structures.",
    "Types of Sentences": "Identify different kinds of sentences.",
    "Combining of Sentences": "Learn to combine sentences correctly.",
    "Direct and Indirect Speech": "Practise reported speech.",
    "Question Tags": "Master question tags and their rules.",
    "Punctuation": "Improve punctuation and sentence clarity."
};

const topicGrid = document.getElementById("topicGrid");

function displayTopics() {

    if (!topicGrid) {
        console.error("ERROR: topicGrid element was not found.");
        return;
    }

    topicGrid.innerHTML = "";

    topics.forEach((topic, index) => {

        const card = document.createElement("div");
        card.className = "topic-card";

        const heading = document.createElement("h3");
        heading.textContent = `${String(index + 1).padStart(2, "0")}. ${topic}`;

        const description = document.createElement("p");
        description.textContent = topicDescriptions[topic] || "Revise and practise this grammar topic.";

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = "Revise & Practise →";

        button.addEventListener("click", () => {
            openTopic(topic);
        });

        card.addEventListener("click", (event) => {
            if (event.target !== button) {
                openTopic(topic);
            }
        });

        card.appendChild(heading);
        card.appendChild(description);
        card.appendChild(button);

        topicGrid.appendChild(card);
    });

    console.log("GrammarHub: All 23 topics displayed successfully.");
}

function openTopic(topic) {
    window.location.href =
        `practice.html?topic=${encodeURIComponent(topic)}`;
}

const teacherButton = document.getElementById("teacherButton");

if (teacherButton) {
    teacherButton.addEventListener("click", () => {
        alert("Teacher tools and Word document question-paper uploads are coming soon!");
    });
}

displayTopics();
