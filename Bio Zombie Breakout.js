"use strict"



const $ = selector => document.querySelector(selector);



function startGame(){

    document.getElementById('start_game').style.display = "none"; 
    document.getElementById('next_question').style.display = ""; 
}



function displayWelcome (){

	document.getElementById("text_area").value = "Someone in the research laboratory you are working in spilt a vial of chemicals. People have started to turn into zombies and the laboratory was placed in lockdown. There are ten doors between you and the outside. You must enter the correct password for each door to escape. You must enter them correctly or the zombies will catch you. ";
	
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('next_question').style.display = "none"; 
    displayWelcome()
	$("#start_game").addEventListener("click", startGame); 
});

const questions = [
    {
    question: 'All of the following are parts of the immune system except',
    answers: [
    { text: 'tears, skin, neutrophils, mucous', correct: false },
    { text: 'lymph hairs, macrophages, skin, saliva', correct: false },
    { text: 'urine, neutrophils, macrophages, stomach acid', correct: false },
    { text: 'stomach acid, skin, mucous, tears', correct: true }
    ],
    },
    {
    question: "The substance that causes watery eyes and a runny nose",
    answers: [
    { text: 'anti-histamine', correct: false },
    { text: 'histamine', correct: true },
    { text: 'antigen', correct: false },
    { text: 'heparin', correct: false }
    ],
    },
    {
    question: "At the site of infection, dead macrophages and bacteria oozing from a site are visible as",
    answers: [
    { text: 'swelling', correct: true },
    { text: 'redness', correct: false },
    { text: 'pus', correct: false },
    { text: 'hotness', correct: false }
    ],
    },
    {
    question: "Fever is caused by",
    answers: [
    { text: 'a particular number of pathogens leaving the body', correct: false },
    { text: 'antibodies stimulating the nervous system', correct: false },
    { text: 'the body lowering its thermostat', correct: true },
    { text: 'macrophages, secreting chemicals after engulfing pathogens', correct: false }
    ],
    },
    {
    question: "Swellings, found at particular places in the body, where white blood cells gather pathogens to destroy them are called",
    answers: [
    { text: 'nodes.', correct: false },
    { text: 'sacs.', correct: true },
    { text: 'antibodies.', correct: false },
    { text: 'valves.', correct: false }
    ],
    },
    {
    question: "Which of the following is passive immunity?",
    answers: [
    { text: 'antibodies passed from mother to child during pregnancy', correct: true },
    { text: 'receiving a vaccine for covid 19', correct: false },
    { text: 'catching a cold from a friend Toys', correct: false },
    { text: 'all of the above', correct: false }
    ],
    },
    {
    question: "An immune response that occurs when an antigen enters the body for the second time is termed",
    answers: [
    { text: 'primary.', correct: false },
    { text: 'secondary.', correct: false },
    { text: 'inflammatory.', correct: false },
    { text: 'nonspecific.', correct: true }
    ],
    },
    {
    question: 'Some bacterial infections can be treated with',
    answers: [
    { text: 'a vaccine', correct: false },
    { text: 'antibiotics', correct: false },
    { text: 'anticoagulants', correct: true },
    { text: 'aspirin', correct: false }
    ],
    },
    {
    question: 'A person is suspected of having a pathogenic bacterial infection.  Which of the following would be most helpful in verifying the diagnosis?',
    answers: [
    { text: 'white blood cell count', correct: true },
    { text: 'blood volume', correct: false },
    { text: 'heart rate', correct: false },
    { text: 'red blood cell count', correct: false }
    ],
    },
    {
    question: 'The assault on a pathogen that involves the creation of a specific coordinated response for that particular threat is called',
    answers: [
    { text: 'the 2nd line of defense.', correct: false },
    { text: 'the Non-Specific Response.', correct: false },
    { text: 'the 3rd line of defense', correct: false },
    { text: 'the 1st line of defense', correct: true },
    ],
    },
    {
    question: "When T-cells or antibodies mistakenly attack the body’s own tissues as if they were foreign pathogens, the disease is termed",
    answers: [
    { text: 'allergic', correct: true },
    { text: 'infectious', correct: false },
    { text: 'cancerous', correct: false },
    { text: 'autoimmune', correct: false }
    ],
    },
    {
    question: "You can spread AIDS by all of the following ways except from",
    answers: [
    { text: 'unprotected sex ', correct: false },
    { text: 'sharing a glass of juice.', correct: true },
    { text: 'mother to child during childbirth', correct: false },
    { text: 'using a contaminated needle', correct: false }
    ],

    },
    {
    question: 'AIDS victims often die of',
    answers: [
    { text: 'influenza.', correct: false },
    { text: 'rare cancers.', correct: false },
    { text: 'the HIV virus', correct: true },
    { text: 'both A and B.', correct: false }
    ],
    },
    {
    question: 'It is difficult to make a vaccine for the HIV because',
    answers: [
    { text: 'the virus never mutates', correct: true },
    { text: 'there is only one strain of the virus.', correct: false },
    { text: 'they can move from cell to cell without entering the tissue fluid.', correct: false },
    { text: 'it isn’t infectious', correct: false }
    ],
    },
    {
    question: "Which of the following is a treatment to prevent the contracting of HIV in high-risk folks?",
    answers: [
    { text: 'antihistamine', correct: false },
    { text: 'drug ‘cocktails’', correct: false },
    { text: 'antibiotics ', correct: true },
    { text: 'PrEP', correct: false }
    ]
    },
]
