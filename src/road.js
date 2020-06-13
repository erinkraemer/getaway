import Physics from "./physics";
import Sprite from "./sprite";

const roadImg = new Image();
roadImg.src = "static/assets/images/road.png";

class Road {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(roadImg, 1262, 502);
    this.score = 0;
    this.gameOver = false;
    this.box = null;
    this.marked = null;
  }

  move() {
    this.physics.dDown = this.physics.speed;
  }

  addScore() {
    if (!this.gameOver) {
      this.score += 1;
    } else {
      this.score;
    }
  }

  makeGreen() {
    // const score = document.getElementById("score");
    // score.classList.toggle("score-value--mod");
    // setTimeout(() => {
    //   score.classList.toggle("score-value--mod");
    // }, 300);
  }

  stop() {
    this.physics.dDown = 0;
    this.gameOver = true;
  }

  addSpeed() {
   // this.physics.dDown += 1;
  }
}

export default Road;

