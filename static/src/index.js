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
  "stage.html",
  "postquestionnaire.html",
  "continueToBonusQuestionnaire.html",
  "bonusQuestionnaire.html",
  "thanks-mturksubmit.html",
  "complete.html",
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
    psiTurk.saveData();
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
  
  document.getElementById("exitQuestionnaire").style.visibility = "visible";//remove before deploy
  // add the all-important message event listener
  window.addEventListener('message', function(event){
    
    if (event.data) {
      if (typeof event.data === 'string') {
        var q_message_array = event.data.split('|');
        if (q_message_array[0] == 'QualtricsEOS') {
          psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'back_from_qualtrics'});
          psiTurk.recordUnstructuredData('qualtrics_session_id', q_message_array[2]);
          //document.getElementById("exitQuestionnaire").style.visibility = "visible";
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
  // button to exit the experiment
  document.getElementById("goToExit").addEventListener("click", () => {
    psiTurk.recordTrialData( ['bonusquestionnaire', 0])
    currentview = new mthanks();
  });
  // button to continue to bonus questionnaire
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
  
  document.getElementById("continueToFinish").style.visibility = "visible"; // Remove before deploy

  // add the all-important message event listener
  window.addEventListener('message', function(event){
    if (event.data) {
      if (typeof event.data === 'string') {
        var q_message_array = event.data.split('|');
        if (q_message_array[0] == 'QualtricsEOS') {
          psiTurk.recordTrialData({'phase':'bonusquestionnaire', 'status':'back_from_qualtrics'});
          psiTurk.recordUnstructuredData('qualtrics_session_id', q_message_array[2]);
          document.getElementById("continueToFinish").style.visibility = "visible";
        }
      }
    }
  });
  document.getElementById("continueToFinish").addEventListener("click", () => {
    psiTurk.recordTrialData( ['bonusquestionnaire', 1.5])
    currentview = new mthanks();
  });
}

/****************
* Thanks and complete     *
****************/
var mthanks = function() {
  prompt_resubmit = function() {
    document.body.innerHTML = error_message;
    $("#resubmit").click(resubmit);
  };
  
  resubmit = function() {
    document.body.innerHTML = "<h1>Trying to resubmit...</h1>";
    reprompt = setTimeout(prompt_resubmit, 10000);
    
    psiTurk.saveData({
      success: function() {
        clearInterval(reprompt); 
        psiTurk.computeBonus('compute_bonus', function(){
          psiTurk.completeHIT(); // when finished saving compute bonus, the quit
        }); 
        
        
      }, 
      error: prompt_resubmit
    });
  };
  
  // Load thank you page
  psiTurk.showPage('thanks-mturksubmit.html');
  
  document.getElementById("completeHitButton").addEventListener("click", () => {
    psiTurk.saveData({ //move
      success: function() {
        clearInterval(reprompt); 
        psiTurk.computeBonus('compute_bonus', function(){
          psiTurk.completeHIT(); // when finished saving compute bonus, the quit
        }); 
      }, 
      error: prompt_resubmit
    });
    currentview = new Closepage();
  });
};

/**********************
* Debug Close popup   *
***********************/
var Complete = function() {
  psiTurk.showPage('complete.html');
  document.getElementById("next").addEventListener("click", () => {
    currentview = new Closepage();
  });
};

/********************************
* Sandbox or Live Close popup   *
*********************************/
var Closepage = function() {
  psiTurk.showPage('closepopup.html');
};



// Task object to keep track of the current phase
var currentview;


/*******************
* Run Task
******************/
$(window).load( function(){
  psiTurk.doInstructions(
    instructionPages, // a list of pages you want to display in sequence
    function() { currentview = new startGame(); } // what you want to do when you are done with instructions
  );
});