/****************
* Index.js      *
****************/

import Game from "./game.js";
// import assets from './assets.js';
import setupControlListeners from './car_controls.js';
//import BumbleBee from "./bumblebee.js";

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

var mycondition = condition;  // these two variables are passed by the psiturk server process
var mycounterbalance = counterbalance;  // they tell you which condition you have been assigned to
// they are not used in the stroop code but may be useful to you

// All pages to be loaded
var pages = [
  //"instructions/instruct-ready.html",
  "stage.html",
  "postquestionnaire.html",
  "continueToBonusQuestionnaire.html",
  "bonusQuestionnaire.html",
  "thanks-mturksubmit.html",
  "closepopup.html"
];

psiTurk.preloadPages(pages);

var instructionPages = [ // add as a list as many pages as you like
  "instructions/instruct-ready.html"
];

/****************
* Start the game*
****************/
var startGame = function() {
  // Load the stage.html snippet into the body of the page
  psiTurk.showPage('stage.html');
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  canvas.height = 700;
  canvas.width = 500;
  const condition = Math.floor(Math.random()*100)%2;
  let game = new Game(canvas, ctx, condition);
  document.getElementById("how").innerHTML = `Identify objects by using the Q, W, and E keys. Collect as much points and lives as you can while avoiding the rocks!`;
  
  document.getElementById("play-btn").addEventListener("click", () => {
    setupControlListeners(game);
    game.start(psiTurk);
  });
  
  document.getElementById("exitExperiment").addEventListener("click", () => {
    psiTurk.recordTrialData(game.dataLog);
    psiTurk.taskdata.set('bonus', game.bonus)
    psiTurk.saveData()
    currentview = new Questionnaire();
  });
};

window.onYouTubeIframeAPIReady = function() {}

/****************
* Questionnaire *
****************/
var Questionnaire = function() {
  psiTurk.showPage('postquestionnaire.html');
  // load your iframe with a url specific to your participant
  $('#questionnaire').attr('src',('https://berkeley.qualtrics.com/jfe/form/SV_7W2jYeop6Bo0kYZ?UID=' + uniqueId));
  
  //document.getElementById("exitQuestionnaire").style.visibility = "visible";//remove before deploy
  // add the all-important message event listener
  window.addEventListener('message', function(event){
    
    if (event.data) {
      if (typeof event.data === 'string') {
        var q_message_array = event.data.split('|');
        if (q_message_array[0] == 'QualtricsEOS') {
          psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'back_from_qualtrics'});
          psiTurk.recordUnstructuredData('qualtrics_session_id', q_message_array[2]);
          psiTurk.saveData()
          document.getElementById("exitQuestionnaire").style.visibility = "visible";
        }
      }
    }
  });
  document.getElementById("exitQuestionnaire").addEventListener("click", () => {
    currentview = new continueToBonusQuestionnnaire();
  });
};


/*******************************
* continueToBonusQuestionnaire *
********************************/
var continueToBonusQuestionnnaire = function() {
  psiTurk.showPage('continueToBonusQuestionnaire.html');
  document.getElementById("goToExit").addEventListener("click", () => {
    currentview = new mthanks();
  });
  document.getElementById("goToBonusQuestionnaire").addEventListener("click", () => {
    currentview = new BonusQuestionnaire();
  });
};


/**********************
* Bonus Questionnaire *
***********************/
var BonusQuestionnaire = function() {
  psiTurk.showPage('bonusQuestionnaire.html');
  // load your iframe with a url specific to your participant
  $('#bonusquestionnaire').attr('src',('https://berkeley.qualtrics.com/jfe/form/SV_8c3Klzuagw3jdhb?UID=' + uniqueId));
  
  //document.getElementById("continueToFinish").style.visibility = "visible"; // Remove before deploy
  // add the all-important message event listener
  window.addEventListener('message', function(event){
    if (event.data) {
      if (typeof event.data === 'string') {
        var q_message_array = event.data.split('|');
        if (q_message_array[0] == 'QualtricsEOS') {
          psiTurk.recordTrialData({'phase':'bonusquestionnaire', 'status':'back_from_qualtrics'});
          psiTurk.recordUnstructuredData('qualtrics_session_id', q_message_array[2]);
          psiTurk.saveData();
          document.getElementById("continueToFinish").style.visibility = "visible";
        }
      }
    }
  });
  document.getElementById("continueToFinish").addEventListener("click", () => {
    var currentBonus = psiTurk.taskdata.get('bonus')
    var updatedBonus = currentBonus + 1.5
    psiTurk.taskdata.set('bonus', updatedBonus)
    psiTurk.saveData();
    currentview = new mthanks();
  });
}

/****************
* Thanks        *
****************/
var mthanks = function() {
  psiTurk.computeBonus('compute_bonus');
  psiTurk.saveData();
  psiTurk.completeHIT();
  //psiTurk.saveData();
  //psiTurk.showPage('closepopup.html');
  //document.getElementById("completeHitButton").addEventListener("click", () => {
    
    //currentview = new Closepage();
    //boo
  // });
};

// /**********************
// * Debug Close popup   *
// ***********************/
// var Complete = function() {
//   psiTurk.showPage('complete.html');
//   document.getElementById("next").addEventListener("click", () => {
//     psiTurk.completeHIT();
//     currentview = new Closepage();
//   });
// };

// /********************************
// * Sandbox or Live Close popup   *
// *********************************/
// var Closepage = function() {
//   psiTurk.showPage('closepopup.html');
// };



// Task object to keep track of the current phase
var currentview;


/*******************
* Run Task
******************/
$(window).load( function(){	  
  psiTurk.doInstructions(
    instructionPages,
    function() { 
      psiTurk.saveData();
      currentview = new startGame(); 
    }
    ) // a list of pages you want to display in sequence
  } // what you want to do when you are done with instructions
); 