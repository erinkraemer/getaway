import Game from "./game.js";
// import assets from './assets.js';
import setupControlListeners from './car_controls.js';
import BumbleBee from "./bumblebee.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  canvas.height = 700;
  canvas.width = 500;
  let game = new Game(canvas, ctx);
  document.getElementById("how").innerHTML = `Identify objects by using the Q, W, and E keys. Collect as much points and lives as you can while avoiding the obstacles! And answer some math questions along the way.`;

  document.getElementById("play-btn").addEventListener("click", () => {

    if (game.gameOver === true) {
      game.cleanUp();
      game = new Game(canvas, ctx);
    }
    
    setupControlListeners(game);
    
    game.start();
    
    //let bumblebee = new BumbleBee(game);
    // write custom code here
    //setInterval(bumblebee.randomizesprite, 500);

    
  })
});
