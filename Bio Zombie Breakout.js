"use strict"
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const question = document.getElementById("showQuestion");
const doorNumberDisplay = document.getElementById("doorNumberDisplay");
var rightWrong = true;
var doorNumber = false;
var distanceCounter = 1;
var doorNumberCounter = 1;
var numberBank = [];
let minutes2 =2;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let rightGuesses = 0;
let wrongGuesses = 0;
let myVar = null;


const $ = selector => document.querySelector(selector);
const padSingleDigit = num => num.toString().padStart(2, "0");



function gameFinished(){
    restGame();
    hideAnswers();
    clearInterval(myVar);
    $('#playAgain').style.display = "";
    $("#playAgain").addEventListener("click", startGame);
    document.getElementById('next_question').style.display = "none";
}

function timesUp(){
    gameFinished();
    document.getElementById("textArea").value = "You ran out of time!!!! The laboratory has exploded, destroying all the zombies. Along with yourself. Bad day. "+ "\n"+ 
    "You guessed " + rightGuesses + " right and " + wrongGuesses + " wrong.";  
    document.getElementById('timer').style.display = "none";
    document.getElementById('health').src = "images/Health 5.jpg"; 
    console.log("times up");
        
}

function youWin(){
    gameFinished();
    console.log("you win");
    document.getElementById("textArea").value ="You were able to answer all the questions and escape to safety. I just hope you don't turn in to a zombie later." + "\n"+ 
    "You managed to get through all ten doors in time!!!! You answered " + wrongGuesses + " wrong."; 
}

function youLoose(){
    gameFinished();
    document.getElementById('health').src = "images/Health 5.jpg"; 
    document.getElementById("textArea").value ="You could not get out in time. A group of zombies have surrounded you and you are bitten. Too bad " + 
    "you weren't smarter, you only answered " + rightGuesses + " right. Now you quickly turn into a zombie. Have fun with your new friends. At least tell the bomb goes off";
}

let questionNumber = -1;
function displayQuestion(){
    document.getElementById('showAnswer').style.display = "none"; 
    document.getElementById('next_question').style.display = "none";
    question.style.display = "";
    answer1.style.display = "";
    answer2.style.display = ""; 
    answer3.style.display = ""; 
    answer4.style.display = "";
    
    if( questionNumber != -1) {
        $(triviaQuestions[questionNumber][5]).removeEventListener("click", correctAnswer)
        $(triviaQuestions[questionNumber][6]).removeEventListener("click", wrongAnswer)
        $(triviaQuestions[questionNumber][7]).removeEventListener("click", wrongAnswer)
        $(triviaQuestions[questionNumber][8]).removeEventListener("click", wrongAnswer)
    }


    let qNUm = Math.floor(Math.random() * numberBank.length)
    questionNumber = numberBank[qNUm]
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

function makeNumberBank(){
    for (let i = 0; i<triviaQuestions.length; i++){
        numberBank[i] = i;
    }
}


function correctAnswer(){
    doorNumberCounter +=1;
    if(doorNumberCounter==11){
        doorNumberDisplay.innerHTML = " ";
        youWin()
    }else{
        showCorrectAnswer()
    }
}

function showCorrectAnswer(){
    rightGuesses +=1;
    changeDoorNumber()
    hideAnswers();
    $('#showAnswer').style.display = ""; 
    $("#showAnswer").innerHTML ="You got it correct. The door opens.";
    $('#next_question').style.display = "";  
    $("#next_question").addEventListener("click", displayQuestion);   
}

function changeDoorNumber(){
    doorNumberDisplay.innerHTML = "Door Number " + doorNumberCounter;
    if(doorNumberCounter == 10){
        doorNumberDisplay.innerHTML = "Exit.";
    }else if(doorNumberCounter==11){
        doorNumberDisplay.innerHTML = " ";
        youWin()
    }
}

function wrongAnswer(){
    distanceCounter += 1;
    if(distanceCounter == 4){
        youLoose()
    }else{
        showWrongAnswer()
    }
}

function showWrongAnswer(){
    wrongGuesses += 1;
    displayZombieDistance();
    hideAnswers();
    $('#showAnswer').style.display = ""; 
    $("#showAnswer").innerHTML ="You got it wrong. The door does not open.";
    $("#next_question").addEventListener("click", displayQuestion);
    $('#next_question').style.display = "";   
}

function displayZombieDistance (){
    if(distanceCounter == 1){
	    $("#textArea").value = "The only noise you hear is the alarms. You must move quickly before the zombies find you. Move quickly but quietly."
        $('#health').src = "images/Health 2.jpg";
    }else if(distanceCounter == 2){
	    $("#textArea").value = "It is too late, something heard you and it starts getting louder. Something is approaching!!!!"
        $('#health').src = "images/Health 3.jpg";
    }else if(distanceCounter == 3){
	    $("#textArea").value = "You see a large group of zombies starting to come down the hallway towards you. You better hurry up and not get another one wrong."
        $('#health').src = "images/Health 4.jpg"; 
    }
};

function countDown(){
    seconds += 1;  
    if (seconds == 60){
        seconds = 0;
        minutes += 1;
    }if (minutes == 2){
        timesUp()
    }
    updateCountDown(minutes, seconds)
}

const  updateCountDown = (minutes, seconds) => {
    $("#minutes").textContent = padSingleDigit(minutes);
    $("#seconds").textContent = padSingleDigit(seconds);
    //document.getElementById("milliseconds").textContent = padSingleDigit(milliseconds);
}

function hideAnswers(){
    question.style.display = "none";
    answer1.style.display = "none"; 
    answer2.style.display = "none"; 
    answer3.style.display = "none"; 
    answer4.style.display = "none";
}

function restGame(){
    seconds = 0;
    minutes = 0;
    distanceCounter = 1;
    doorNumberCounter = 1;
}

function startGame(){
    $('#playAgain').style.display = "none"
    $('#start_game').style.display = "none"; 
    $('#next_question').style.display = "";  
    makeNumberBank();
    changeDoorNumber();
    displayQuestion();
    displayZombieDistance();
    myVar = setInterval(countDown, 1000)
}

function welcome(){
    hideAnswers()
    $('#playAgain').style.display = "none"; 
    $('#next_question').style.display = "none";
    $("#textArea").value = "Someone in the research laboratory you are working in spilled a vial of chemicals and triggered the " +
    "alarm. People have quickly started to turn into zombies and the laboratory was placed in lockdown. You have two minutes to escape  before the laboratory " +
    "explodes, killing all the zombies and you. There are ten doors between you and the outside. You must enter the correct password for each door to "
    + "escape. Enter them correctly or the zombies will catch you. Btw, turn sound.";
    $('#health').src = "images/Health 1.jpg";
    $("#start_game").addEventListener("click", startGame);
}

function playAudio(){
    $("#zombieSounds").play();
}

document.addEventListener("DOMContentLoaded", () => {
    welcome()
});


const answerKeyA = ["#answer1", "#answer2", "#answer3", "#answer4"]
const answerKeyB = ["#answer2", "#answer3", "#answer4", "#answer1"]
const answerKeyC = ["#answer3", "#answer4", "#answer1", "#answer2"]
const answerKeyD = ["#answer4", "#answer3", "#answer2", "#answer1"]


const triviaQuestions = [
    ["All of the following are parts of the immune system except", "spleen", "lymph nodes", "pancreas", "leucocytes", "#answer3", "#answer4", "#answer1", "#answer2" ],
    ["The substance that causes watery eyes and a runny nose", 'anti-histamine', 'histamine', 'antigen', 'heparin', "#answer2", "#answer3", "#answer4", "#answer1"],
    ["Which of the following is a correct list of the body’s first line of defence?", "tears, skin, neutrophils, mucous", "hairs, macrophages, skin, saliva", "urine, neutrophils, macrophages, stomach acid", "stomach acid, skin, mucous, tears", '#answer4', "#answer3", "#answer2", "#answer1"],
    ["At the site of infection, dead macrophages and bacteria oozing from a site are visible as", 'swelling', 'redness', 'pus', 'hotness', "#answer3", "#answer4", "#answer1", "#answer2"],
    ["Fever is caused by", 'a particular number of pathogens leaving the body', 'antibodies stimulating the nervous system', 'the body lowering its thermostat', 'macrophages, secreting chemicals after engulfing pathogens', "#answer4", "#answer3", "#answer2", "#answer1"],
    ["Swellings, found at particular places in the body, where white blood cells gather pathogens to destroy them are called", 'nodes.','sacs.',  'antibodies.', 'valves.', "#answer1", "#answer2", "#answer3", "#answer4"],
    ["Which of the following is passive immunity?", 'antibodies passed from mother to child during pregnancy', 'receiving a vaccine for covid 19', 'catching a cold from a friend', 'all of the above', "#answer1", "#answer2", "#answer3", "#answer4"],
    ["An immune response that occurs when an antigen enters the body for the second time is termed", 'primary.', 'secondary.', 'inflammatory.', 'nonspecific.', "#answer2", "#answer3", "#answer4", "#answer1"],
    ["Some bacterial infections can be treated with", "a vaccine", 'antibiotics', 'anticoagulants', 'aspirin', "#answer2", "#answer3", "#answer4", "#answer1"],
    ["A person is suspected of having a pathogenic bacterial infection.  Which of the following would be most helpful in verifying the diagnosis?", 'white blood cell count', 'blood volume', 'heart rate', 'red blood cell count', "#answer1", "#answer2", "#answer3", "#answer4"],
    ["The assault on a pathogen that involves the creation of a specific coordinated response for that particular threat is called", 'the 2nd line of defense.', 'the Non-Specific Response.', 'the 3rd line of defense', 'the 1st line of defense', "#answer3", "#answer4", "#answer1", "#answer2"],
    ["When T-cells or antibodies mistakenly attack the body’s own tissues as if they were foreign pathogens, the disease is termed", "allergic", "infectious", "cancerous", "autoimmune", "#answer4", "#answer3", "#answer2", "#answer1"],
    ["You can spread AIDS by all of the following ways except from",  'unprotected sex ', 'sharing a glass of juice.', 'mother to child during childbirth', 'using a contaminated needle', "#answer2", "#answer3", "#answer4", "#answer1"],
    ["AIDS victims often die of", "influenza.", "rare cancers.", "the HIV virus", "influenza and rare cancers.", "#answer4", "#answer3", "#answer2", "#answer1"],
    ["It is difficult to make a vaccine for the HIV because", "the virus never mutates",  "there is only one strain of the virus.",  "they can move from cell to cell without entering the tissue fluid.", "it isn’t infectious", "#answer3", "#answer4", "#answer1", "#answer2"],
    ["Which of the following is a treatment to prevent the contracting of HIV in high-risk folks?",  "antihistamine",  "drug cocktails", "antibiotics", "PrEP", "#answer4", "#answer3", "#answer2", "#answer1"],
    ["Which of the following is a correct list of the body’s first line of defence?", 'tears, skin, neutrophils, mucous', 'hairs, macrophages, skin, saliva', 'urine, neutrophils, macrophages, stomach acid', 'stomach acid, skin, mucous, tears', "#answer4", "#answer3", "#answer2", "#answer1"],
    ["Someone has an allergic reaction after taking a bite of stuffed chicken breast.  Turns out the pesto contains walnuts.  What should they do next?", "Tell them to walk it off.",  "Give them a tissue, it's just watery eyes.", 'Go away from the pesto', 'Get the them an epi-pen!!!', "#answer4", "#answer3", "#answer2", "#answer1"],
    ["Which of the following has required an 'iron lung' as a form of treatment in the past?", "Measles", "HPV", "Polio", "Whooping Cough", "#answer3", "#answer4", "#answer1", "#answer2"]
];