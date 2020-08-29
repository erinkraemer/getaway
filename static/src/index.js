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
  "postquestionnaire.html",
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
    
    game.start();
  });

  document.getElementById("next2").addEventListener("click", () => {
    currentview = new Questionnaire();
  });

  document.getElementById("next").addEventListener("click", () => {
    currentview = new Complete();
  });
};

/****************
* Questionnaire *
****************/

var Questionnaire = function() {
  psiTurk.showPage('postquestionnaire.html');
  // load your iframe with a url specific to your participant
  $('#iframe').attr('src','https://berkeley.qualtrics.com/jfe/form/SV_7W2jYeop6Bo0kYZ&UID=' + uniqueId);

  // add the all-important message event listener
  window.addEventListener('message', function(event){
    
    /*if (event.origin !== "https://berkeley.qualtrics.com/jfe/form/SV_7W2jYeop6Bo0kYZ"){
      return;
    }*/
    
    if (event.data) {
        if (typeof event.data === 'string') {
            q_message_array = event.data.split('|');
            if (q_message_array[0] == 'QualtricsEOS') {
                psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'back_from_qualtrics'});
                psiTurk.recordUnstructuredData('qualtrics_session_id', q_message_array[2]);
            }
        }
    }
    // display the 'continue' button, which takes them to the next page
    $('#next').show();
});
};

/****************
* Complete      *
****************/
var Complete = function() {
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
      //only show the play game button once they have finished the video
      /*player.addEventListener("onStateChange", function(state){
        if(state === 0){
            getElementById("next").style.visibility = "visible";
        }
      }),*/
      function() { currentview = new startGame(); } // what you want to do when you are done with instructions
    );
});