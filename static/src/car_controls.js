const KEY_UP_COLOR = "rgba(200,200,200, 0.6)";
const KEY_DOWN_COLOR = "rgba(100,100,100, 0.8)";

const setupControlListeners = (game) => {
  window.addEventListener('keydown', e => {
    const car = game.assets.car;
    // if (e.key === "a" || e.key === "ArrowLeft") {
    //   car.physics.dLeft = 4;
    // }
    // if (e.key === "d" || e.key === "ArrowRight") {
    //   car.physics.dRight = 4;
    // }    
    // if (e.key === "w" || e.key === "ArrowUp") {
    //   car.physics.dUp = 4;
    // }
    // if (e.key === "s" || e.key === "ArrowDown") {
    //   car.physics.dDown = 4;
    // }
    if (e.key === "q" || e.key === "Q") {
      game.checkUserResponse("O");
      document.getElementById("keyQ").style["background-color"] = KEY_DOWN_COLOR;
    }
    if (e.key === "w" || e.key === "W") {
      game.checkUserResponse("C");
      document.getElementById("keyW").style["background-color"] = KEY_DOWN_COLOR;
    }
    if (e.key === "e" || e.key === "E") {
      game.checkUserResponse("L");
      document.getElementById("keyE").style["background-color"] = KEY_DOWN_COLOR;
    }

    if (e.keyCode >= 96 && e.keyCode <= 105){
      var encoding = "numPad"
    }
    else if (e.keyCode >= 48 && e.keyCode <= 57){
      var encoding = "NOTnumPad"
    }
    if (e.key === "1") {
      game.checkDistractorTaskAnswer(1);
      game.checkDistractorTaskAnswer(1, encoding);
    }
    if (e.key === "2") {
      game.checkDistractorTaskAnswer(2);
      game.checkDistractorTaskAnswer(2, encoding);
    }
    if (e.key === "3") {
      game.checkDistractorTaskAnswer(3);
      game.checkDistractorTaskAnswer(3, encoding);
    }
    if (e.key === "4") {
      game.checkDistractorTaskAnswer(4);
      game.checkDistractorTaskAnswer(4, encoding);
    }
    if (e.key === "5") {
      game.checkDistractorTaskAnswer(5);
      game.checkDistractorTaskAnswer(5, encoding);
    }
    if (e.key === "6") {
      game.checkDistractorTaskAnswer(6);
      game.checkDistractorTaskAnswer(6, encoding);
    }
    if (e.key === "7") {
      game.checkDistractorTaskAnswer(7);
      game.checkDistractorTaskAnswer(7, encoding);
    }
    if (e.key === "8") {
      game.checkDistractorTaskAnswer(8);
      game.checkDistractorTaskAnswer(8, encoding);
    }
    if (e.key === "9") {
      game.checkDistractorTaskAnswer(9);
      game.checkDistractorTaskAnswer(9, encoding);
    }
    if (e.key === "0") {
      game.checkDistractorTaskAnswer(0);
      game.checkDistractorTaskAnswer(0, encoding);
    }

  })
  window.addEventListener('keyup', e => {
    const car = game.assets.car;
    
    // if (e.key === "a" || e.key === "ArrowLeft") {
    //   car.physics.dLeft = 0;
    // }
    // if (e.key === "d" || e.key === "ArrowRight") {
    //   car.physics.dRight = 0;
    // }
    // if (e.key === "w" || e.key === "ArrowUp") {
    //   car.physics.dUp = 0;
    // }
    // if (e.key === "s" || e.key === "ArrowDown") {
    //   car.physics.dDown = 0;
    // }

    if (e.key === "q" || e.key === "Q") {
      game.checkUserResponse("O");
      document.getElementById("keyQ").style["background-color"] = KEY_UP_COLOR;
    }
    if (e.key === "w" || e.key === "W") {
      game.checkUserResponse("C");
      document.getElementById("keyW").style["background-color"] = KEY_UP_COLOR;
    }
    if (e.key === "e" || e.key === "E") {
      game.checkUserResponse("L");
      document.getElementById("keyE").style["background-color"] = KEY_UP_COLOR;
    }
  })
  
}

export default setupControlListeners;