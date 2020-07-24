import Physics from './physics';
import Sprite from './sprite';

const carImg = new Image();
carImg.src = './assets/images/car.png';

class Car {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(carImg, 150, 70);
    this.life = 3;
    this.box = null;
    this.marked = null;
  }

  hitObstacle() {
    this.life -= 1;
  }

  getLife() {
    this.life += 1;
  }

  resetLife() {
    this.life = 3;
  }

  makeGreen() {
    // const score = document.getElementById("lives");
    // score.classList.toggle("lives-value--green");
    // setTimeout(() => {
    //   score.classList.toggle("lives-value--green");
    // }, 200);
  }

  makeRed() {
    // const score = document.getElementById("lives");
    // score.classList.toggle("lives-value--red");
    // setTimeout(() => {
    //   score.classList.toggle("lives-value--red");
    // }, 200);
  }

  draw(ctx) {
    const {sprite, physics} = this;
    const xOffSet = (sprite.width / -2) + (physics.width / 2);
    const yOffSet = (sprite.height / -2) + (physics.height / 2);
    ctx.drawImage(sprite.img,
      0, 0, sprite.width, sprite.height,
      physics.x + xOffSet, physics.y + yOffSet, sprite.width, sprite.height);
  }
}

export default Car;