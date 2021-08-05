"use strict"
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const question = document.getElementById("showQuestion");
const doorNumberDisplay = document.getElementById("doorNumberDisplay");
var rightWrong = true;
var doorNumber = false;
var distanceCounter = 0;
var doorNumberCounter = 1;
var numberBank = [];
let minutes = 0;
let seconds = 0;


const $ = selector => document.querySelector(selector);
const padSingleDigit = num => num.toString().padStart(2, "0");

function welcome(){

    document.getElementById('playAgain').style.display = "none"; 
    document.getElementById('next_question').style.display = "none"; 
    answer1.style.display = "none"; 
    answer2.style.display = "none"; 
    answer3.style.display = "none"; 
    answer4.style.display = "none"; 
    displayZombieDistance()
	$("#start_game").addEventListener("click", startGame);
}

function playAgain(){
    distanceCounter = 0;
    doorNumberCounter = 1;
    console.log("play again test")
    $("#playAgain").addEventListener("click", startGame)
}
function displayQuestion(){
    if (rightWrong == false){
        distanceCounter += 1;
        displayZombieDistance()
    }
    if(doorNumber == true){
        doorNumberCounter += 1;
        changeDoorNumber()
    }
    document.getElementById('showAnswer').style.display = "none"; 
    document.getElementById('next_question').style.display = "none";
    question.style.display = "";
    answer1.style.display = "";
    answer2.style.display = ""; 
    answer3.style.display = ""; 
    answer4.style.display = "";
    
    let qNUm = Math.floor(Math.random() * numberBank.length)
    let questionNumber = numberBank[qNUm]
    numberBank.splice(qNUm, 1)
    console.log(numberBank)
    console.log(qNUm)
    question.innerHTML = triviaQuestions[questionNumber][0];
    answer1.value = triviaQuestions[questionNumber][1];
    answer2.value = triviaQuestions[questionNumber][2];
    answer3.value = triviaQuestions[questionNumber][3];
    answer4.value = triviaQuestions[questionNumber][4]; 


    $(triviaQuestions[questionNumber][5]).addEventListener("click", correctAnswer)
    $(triviaQuestions[questionNumber][6]).addEventListener("click", wrongAnswer)
    $(triviaQuestions[questionNumber][7]).addEventListener("click", wrongAnswer)
    $(triviaQuestions[questionNumber][8]).addEventListener("click", wrongAnswer)
}

function wrongAnswer(){
    rightWrong = false;
    doorNumber = false;
    hideAnswers()
    document.getElementById('showAnswer').style.display = ""; 
    document.getElementById("showAnswer").innerHTML ="You got it wrong. The door does not open.";
    $("#next_question").addEventListener("click", displayQuestion);
    document.getElementById('next_question').style.display = "";   
}

function correctAnswer(){

    rightWrong = true;
    doorNumber = true;
    hideAnswers()
    document.getElementById('showAnswer').style.display = ""; 
    document.getElementById("showAnswer").innerHTML ="You got it correct. The door opens.";
    document.getElementById('next_question').style.display = "";  
    $("#next_question").addEventListener("click", displayQuestion);   
}

function makeNumberBank(){
    for (let i = 0; i<triviaQuestions.length; i++){
        numberBank[i] = i;
    }
}

function startGame(){
    document.getElementById('playAgain').style.display = "none"
    document.getElementById('start_game').style.display = "none"; 
    document.getElementById('next_question').style.display = "";  
    makeNumberBank();
    changeDoorNumber();
    displayQuestion();
    distanceCounter = 1;
    doorNumberCounter = 1
    displayZombieDistance();
    setInterval(countDown, 1000)
}

function changeDoorNumber(){
    doorNumberDisplay.innerHTML = "Door Number " + doorNumberCounter;
    if(doorNumberCounter == 10){
        doorNumberDisplay.innerHTML = "Exit.";
    }else if(doorNumberCounter == 11){
        document.getElementById("text_area").value ="You were able to answer all the questions and escape to safety. I just hope you don't turn in to one later."
        hideAnswers()
        document.getElementById('next_question').style.display = "none";
        document.getElementById('playAgain').style.display = "";
        playAgain()
    }
}

function displayZombieDistance (){
    if (distanceCounter == 0){
        document.getElementById("text_area").value = "Someone in the research laboratory you are working in spilt a vial of chemicals. People have "+
        "started to turn into zombies and the laboratory was placed in lockdown. There are ten doors between you and the outside. You must enter the " +
        "correct password for each door to escape. You must enter them correctly or the zombies will catch you. You have two minutes to escape.";
        document.getElementById('health').src = "images/Health 1.jpg";  
    }else if(distanceCounter == 1){
	    document.getElementById("text_area").value = "The only noise you hear is the alarms. You must move quickly before the zombies find you."
        document.getElementById('health').src = "images/Health 2.jpg";  
    }else if(distanceCounter == 2){
	    document.getElementById("text_area").value = "It is too late, you start to hear noise in the distance. Something is approaching."
        document.getElementById('health').src = "images/Health 3.jpg"; 
    }else if(distanceCounter == 3){
	    document.getElementById("text_area").value = "You see a large group of zombies starting to come down the hallway towards you."
        document.getElementById('health').src = "images/Health 4.jpg";  
    }else if(distanceCounter == 4){
        document.getElementById('health').src = "images/Health 5.jpg"; 
        document.getElementById("text_area").value ="You could not get out in time. A group of zombies have surrounded you and you are bitten. You slowly turn into a zombie."
        hideAnswers()
        document.getElementById('next_question').style.display = "none";
        document.getElementById('playAgain').style.display = "";
        playAgain()  
    }
};

function countDown(){
    seconds += 1;
    if (seconds == 60){
        seconds = 0;
        minutes += 1;
    }
    if (minutes == 2){
        if(seconds == 0){
            document.getElementById("text_area").value = "You ran out of time!!"
            hideAnswers()
            document.getElementById('next_question').style.display = "none";
            document.getElementById('playAgain').style.display = "";
            document.getElementById('timer').style.display = "none";
            document.getElementById('health').src = "images/Health 5.jpg"; 
            console.log("times up")
            playAgain()
        }
    }
    updateCountDown(minutes, seconds)
}

const  updateCountDown = (minutes, seconds) => {
    document.getElementById("minutes").textContent = padSingleDigit(minutes);
    document.getElementById("seconds").textContent = padSingleDigit(seconds);
}

function hideAnswers(){
    question.style.display = "none";
    answer1.style.display = "none"; 
    answer2.style.display = "none"; 
    answer3.style.display = "none"; 
    answer4.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById('playAgain').style.display = "none"; 
    document.getElementById('next_question').style.display = "none"; 
    hideAnswers()
    displayZombieDistance()
	$("#start_game").addEventListener("click", startGame);
});

const triviaQuestions = [
    ["All of the following are parts of the immune system except", "spleen", "lymph nodes", "pancreas", "leucocytes", "#answer3", "#answer4", "#answer1", "#answer2" ],
    ["The substance that causes watery eyes and a runny nose", 'anti-histamine', 'histamine', 'antigen', 'heparin', "#answer2", "#answer3", "#answer4", "#answer1"],
    ["Which of the following is a correct list of the body’s first line of defence?", "tears, skin, neutrophils, mucous", "hairs, macrophages, skin, saliva", "urine, neutrophils, macrophages, stomach acid", "stomach acid, skin, mucous, tears", '#answer4', "#answer3", "#answer2", "#answer1"],
    ["At the site of infection, dead macrophages and bacteria oozing from a site are visible as", 'swelling', 'redness', 'pus', 'hotness', "#answer3", "#answer4", "#answer1", "#answer2"],
    ["Fever is caused by", 'a particular number of pathogens leaving the body', 'antibodies stimulating the nervous system', 'the body lowering its thermostat', 'macrophages, secreting chemicals after engulfing pathogens', "#answer4", "#answer3", "#answer2", "#answer1"],
    ["Swellings, found at particular places in the body, where white blood cells gather pathogens to destroy them are called", 'nodes.','sacs.',  'antibodies.', 'valves.', "#answer1", "#answer2", "#answer3", "#answer4"],
    ["Which of the following is passive immunity?", 'antibodies passed from mother to child during pregnancy', 'receiving a vaccine for covid 19', 'catching a cold from a friend Toys', 'all of the above', "#answer1", "#answer2", "#answer3", "#answer4"],
    ["An immune response that occurs when an antigen enters the body for the second time is termed", 'primary.', 'secondary.', 'inflammatory.', 'nonspecific.', "#answer2", "#answer3", "#answer4", "#answer1"],
    ["Some bacterial infections can be treated with", "a vaccine", 'antibiotics', 'anticoagulants', 'aspirin', "#answer2", "#answer3", "#answer4", "#answer1"],
    ["A person is suspected of having a pathogenic bacterial infection.  Which of the following would be most helpful in verifying the diagnosis?", 'white blood cell count', 'blood volume', 'heart rate', 'red blood cell count', "#answer1", "#answer2", "#answer3", "#answer4"],
    ["The assault on a pathogen that involves the creation of a specific coordinated response for that particular threat is called", 'the 2nd line of defense.', 'the Non-Specific Response.', 'the 3rd line of defense', 'the 1st line of defense', "#answer3", "#answer4", "#answer1", "#answer2"],
    ["When T-cells or antibodies mistakenly attack the body’s own tissues as if they were foreign pathogens, the disease is termed", "allergic", "infectious", "cancerous", "autoimmune", "#answer4", "#answer3", "#answer2", "#answer1"],
    ["You can spread AIDS by all of the following ways except from",  'unprotected sex ', 'sharing a glass of juice.', 'mother to child during childbirth', 'using a contaminated needle', "#answer2", "#answer3", "#answer4", "#answer1"],
    ["AIDS victims often die of", "influenza.", "rare cancers.", "the HIV virus", "both A and B.", "#answer4", "#answer3", "#answer2", "#answer1"],
    ["It is difficult to make a vaccine for the HIV because", "the virus never mutates",  "there is only one strain of the virus.",  "they can move from cell to cell without entering the tissue fluid.", "it isn’t infectious", "#answer4", "#answer3", "#answer2", "#answer1"],
    ["Which of the following is a treatment to prevent the contracting of HIV in high-risk folks?",  "antihistamine",  "drug cocktails", "antibiotics", "PrEP", "#answer4", "#answer3", "#answer2", "#answer1"],
    ["Which of the following is a correct list of the body’s first line of defence?", 'tears, skin, neutrophils, mucous', 'hairs, macrophages, skin, saliva', 'urine, neutrophils, macrophages, stomach acid', 'stomach acid, skin, mucous, tears', "#answer4", "#answer3", "#answer2", "#answer1"],
    ["Ms. Courtney's brother has an allergic reaction after taking a bite of stuffed chicken breast.  Turns out the pesto contains walnuts.  What should they do next?", "Tell him to walk it off, he'll be ok",  "Give him a tissue, as he'll probably have watery eyes as an allergic response", 'Tell him to go to the next room, away from the pesto', 'Get the guy an epi-pen, he has an anaphylactic allergy to nuts', "#answer4", "#answer3", "#answer2", "#answer1"],
    ["Which of the following has required an 'iron lung' as a form of treatment in the past?", "Measles", "HPV", "Polio", "Whooping Cough", "#answer3", "#answer4", "#answer1", "#answer2"]
];