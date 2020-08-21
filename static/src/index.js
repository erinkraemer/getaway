import Game from "./game.js";
// import assets from './assets.js';
import setupControlListeners from './car_controls.js';
import BumbleBee from "./bumblebee.js";

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

var mycondition = condition;  // these two variables are passed by the psiturk server process
var mycounterbalance = counterbalance;  // they tell you which condition you have been assigned to
// they are not used in the stroop code but may be useful to you

// All pages to be loaded
var pages = [
  "instructions/instruct-ready.html",
  "stage.html",
  "postquestionnaire.html"
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
    
    game.start();
  });

  document.getElementById("next").addEventListener("click", () => {
    currentview = new Questionnaire();
  });
};

/****************
* Questionnaire *
****************/

var Questionnaire = function() {

  var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

  record_responses = function() {

    psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'submit'});

    $('textarea').each( function(i, val) {
      psiTurk.recordUnstructuredData(this.id, this.value);
    });
    $('select').each( function(i, val) {
      psiTurk.recordUnstructuredData(this.id, this.value);    
    });

  };

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

  // Load the questionnaire snippet 
  psiTurk.showPage('postquestionnaire.html');
  psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'begin'});
  
  $("#next").click(function () {
      record_responses();
      psiTurk.saveData({
            success: function(){
                psiTurk.computeBonus('compute_bonus', function() { 
                  psiTurk.completeHIT(); // when finished saving compute bonus, the quit
                }); 
            }, 
            error: prompt_resubmit});
  });
    
  
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


