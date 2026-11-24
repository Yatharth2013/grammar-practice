
// ==========================================
// GRAMMAR HUB - REVISION LESSONS
// ==========================================

const lessons = {

    "Parts of Speech": {
        introduction: "Parts of Speech are the different categories of words according to their functions in a sentence.",
        rules: [
            {
                name: "Noun",
                explanation: "A noun is the name of a person, place, animal or thing.",
                example: "Riya lives in India."
            },
            {
                name: "Pronoun",
                explanation: "A pronoun is a word used instead of a noun.",
                example: "She is my friend."
            },
            {
                name: "Verb",
                explanation: "A verb expresses an action or state of being.",
                example: "The children play football."
            },
            {
                name: "Adjective",
                explanation: "An adjective describes a noun or pronoun.",
                example: "She has a beautiful dress."
            },
            {
                name: "Adverb",
                explanation: "An adverb modifies a verb, adjective or another adverb.",
                example: "He runs quickly."
            },
            {
                name: "Preposition",
                explanation: "A preposition shows the relationship between words.",
                example: "The book is on the table."
            },
            {
                name: "Conjunction",
                explanation: "A conjunction joins words, phrases or clauses.",
                example: "Riya and Priya are friends."
            },
            {
                name: "Interjection",
                explanation: "An interjection expresses a sudden feeling or emotion.",
                example: "Wow! That is amazing."
            }
        ]
    },

    "Nouns": {
        introduction: "A noun is a naming word. It names people, places, animals, things and ideas.",
        rules: [
            {
                name: "Proper Noun",
                explanation: "The specific name of a person, place or thing.",
                example: "India, Rahul, Monday."
            },
            {
                name: "Common Noun",
                explanation: "A general name given to a person, place or thing.",
                example: "Boy, city, school."
            },
            {
                name: "Collective Noun",
                explanation: "A noun that refers to a group.",
                example: "Team, army, bunch."
            },
            {
                name: "Abstract Noun",
                explanation: "A noun that names an idea, quality or feeling.",
                example: "Honesty, kindness, bravery."
            },
            {
                name: "Material Noun",
                explanation: "A noun that names a material or substance.",
                example: "Gold, silver, wood."
            },
            {
                name: "Countable Noun",
                explanation: "A noun that can be counted.",
                example: "One book, three apples."
            },
            {
                name: "Uncountable Noun",
                explanation: "A noun that cannot normally be counted individually.",
                example: "Water, milk, information."
            }
        ]
    },

    "Pronouns": {
        introduction: "Pronouns are words used instead of nouns to avoid unnecessary repetition.",
        rules: [
            {
                name: "Personal Pronouns",
                explanation: "Refer to particular people or things.",
                example: "I, we, you, he, she, it, they."
            },
            {
                name: "Possessive Pronouns",
                explanation: "Show ownership.",
                example: "Mine, ours, yours, his, hers, theirs."
            },
            {
                name: "Reflexive Pronouns",
                explanation: "Refer back to the subject.",
                example: "Myself, yourself, himself, themselves."
            },
            {
                name: "Demonstrative Pronouns",
                explanation: "Point towards particular people or things.",
                example: "This, that, these, those."
            },
            {
                name: "Interrogative Pronouns",
                explanation: "Are used to ask questions.",
                example: "Who, whom, whose, which, what."
            },
            {
                name: "Relative Pronouns",
                explanation: "Introduce relative clauses.",
                example: "Who, whom, whose, which, that."
            },
            {
                name: "Indefinite Pronouns",
                explanation: "Refer to people or things without naming them exactly.",
                example: "Someone, anybody, everyone, nothing."
            }
        ]
    },

    "Adjectives": {
        introduction: "An adjective is a word that describes or gives more information about a noun or pronoun.",
        rules: [
            {
                name: "Adjective of Quality",
                explanation: "Describes the quality of a person or thing.",
                example: "She is an intelligent girl."
            },
            {
                name: "Adjective of Quantity",
                explanation: "Shows how much of something is meant.",
                example: "There is little water."
            },
            {
                name: "Adjective of Number",
                explanation: "Shows how many people or things are meant.",
                example: "Five students are present."
            },
            {
                name: "Demonstrative Adjective",
                explanation: "Points out a particular noun.",
                example: "This book is interesting."
            },
            {
                name: "Possessive Adjective",
                explanation: "Shows ownership before a noun.",
                example: "My school is nearby."
            },
            {
                name: "Degrees of Comparison",
                explanation: "Adjectives can have positive, comparative and superlative degrees.",
                example: "Tall, taller, tallest."
            }
        ]
    },

    "Simple Tenses": {
        introduction: "Simple tenses describe actions happening in the present, past or future.",
        rules: [
            {
                name: "Simple Present",
                explanation: "Used for habits, routines, general truths and regular actions.",
                example: "She goes to school every day."
            },
            {
                name: "Simple Past",
                explanation: "Used for completed actions in the past.",
                example: "She went to school yesterday."
            },
            {
                name: "Simple Future",
                explanation: "Used for actions expected to happen in the future.",
                example: "She will go to school tomorrow."
            }
        ]
    }

};


// ==========================================
// DISPLAY REVISION LESSON
// ==========================================

function displayLesson(topic) {

    const lesson = lessons[topic];

    if (!lesson) {
        return `
            <p>Revision notes for this topic are coming soon.</p>
        `;
    }

    let html = `
        <div class="lesson-content">

            <h2>Topic Revision</h2>

            <p>${lesson.introduction}</p>

            <div class="lesson-rules">
    `;

    lesson.rules.forEach((rule, index) => {

        html += `
            <article class="lesson-rule">

                <h3>${index + 1}. ${rule.name}</h3>

                <p>${rule.explanation}</p>

                <div class="lesson-example">
                    <strong>Example:</strong>
                    ${rule.example}
                </div>

            </article>
        `;

    });

    html += `
            </div>
        </div>
    `;

    return html;

}

console.log("Grammar Hub Revision Lessons Loaded");
