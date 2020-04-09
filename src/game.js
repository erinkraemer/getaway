// import GameView from './game_view.js';
// import Car from './car.js';
// import { request } from 'http';
import Road from './road.js';
import Life from './life.js';
import Util from './util.js';
import Obstacle from './obstacle.js';
import Physics from './physics.js';
import Cash from './cash.js';
import Car from './car.js';
import assets from './assets.js';

var ctr = 0;
class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.gameOver = false;
    this.rocks = [];
    this.life = [];
    this.cash = [];
    this.assets = assets();
    this.animate = null;    
  }

  // hit detection for objects
  static checkCollision(car, object, array, assets) {
    if (object instanceof Obstacle) {
      if (Util.collide(car, object)) {
        car.hitObstacle();
        car.makeRed();
        array.splice(array.indexOf(object), 1);
      }
    }
    if (object instanceof Life) {
      if (Util.collide(car, object)) {
        car.getLife();
        car.makeGreen();
        array.splice(array.indexOf(object), 1);
      }
    }
    if (object instanceof Cash) {
      if (Util.collide(car, object)) {
        assets.road.score += 100;
        assets.road.makeGreen();
        array.splice(array.indexOf(object), 1);
      }
    }
  }

  // checks if item passed canvas height to delete
  static checkCanvas(object, array) {
    if (object instanceof Life) {
      if (object.physics.y > canvas.height) {
        array.splice(array.indexOf(object), 1);
      }
    }
    if (object instanceof Obstacle) {
      if (object.physics.y > canvas.height) {
        array.splice(array.indexOf(object), 1);
      }
    }
    if (object instanceof Cash) {
      if (object.physics.y > canvas.height) {
        array.splice(array.indexOf(object), 1);
      }
    }
  }

  drawAsset(asset) {
    const { physics, sprite, box, marked } = asset;

    // redraw road
    if (asset instanceof Road && asset.physics.y >= 0) {
      if (sprite.height > canvas.height) {
        if (asset.physics.y > (canvas.height)) {
          asset.physics.y = canvas.height - sprite.height;
        }

        this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height, asset.physics.x, asset.physics.y - sprite.height + 1, sprite.width, sprite.height);
      }
    }

    // draw more rocks
    if (asset instanceof Obstacle && asset.physics.y >= 0) { 
      if (asset.physics.y > canvas.height) {
        this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height, asset.physics.x, asset.physics.y - 900, sprite.width, sprite.height);
        if(marked){
          this.ctx.drawImage(box.img, 0, 0, box.width, box.height, asset.physics.x, asset.physics.y - 900, box.width, box.height);
        }
      }
    }

    if (asset instanceof Car) {
      // this.ctx.drawImage(sprite.img, 
      //   0, 0, sprite.width, sprite.height,
      //   physics.x, physics.y, sprite.width, sprite.height);
      asset.draw(this.ctx);
    } else {
      // draw everything else
      this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height,
        physics.x, physics.y, sprite.width, sprite.height);
        if(marked){
          this.ctx.drawImage(box.img, 0, 0, box.width, box.height, physics.x, physics.y, box.width, box.height);
        }
    }


    
    // update position of all objects
    if (this.assets.car.life != 0) {
      if (asset instanceof Car) {
        physics.boundedUpdate();
      } else {
        physics.updatePosition();
      }
    }
  }

  draw() {
    if (!this.gameOver) {
      const animate = () => {
        const assets = Object.values(this.assets);
        this.animate = requestAnimationFrame(animate);
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        for (let i = 0; i < assets.length; i++) {
          this.drawAsset(assets[i]);
        }
        
        // check collision for rocks
        this.rocks.forEach(el => {
          Game.checkCollision(this.assets.car, el, this.rocks);
          Game.checkCanvas(el, this.rocks);
        })
  
        // check collision for life

        this.life.forEach(el => {
          Game.checkCollision(this.assets.car, el, this.life);
          Game.checkCanvas(el, this.life);
        })
  
        // check collision for life
        this.cash.forEach(el => {
          Game.checkCollision(this.assets.car, el, this.cash, this.assets);
          Game.checkCanvas(el, this.cash);
        })
        
        this.life.forEach(el => {
          this.drawAsset(el);
          el.move();
        });     
  
        this.rocks.forEach(el => {
          this.drawAsset(el);
          el.move();
        })
  
        this.cash.forEach(el => {
          this.drawAsset(el);
          el.move();
        })
  
        // render score and lives
        this.assets.road.addScore();
        document.getElementById("score").innerHTML = `${this.assets.road.score}`;
        document.getElementById("lives").innerHTML = `${this.assets.car.life}`;
        this.end();
      }
  
      animate();
    }
  }

  end() {
    if (this.assets.car.life <= 0) {
      this.gameOver = true;
      this.assets.road.stop();
      this.draw();
      document.getElementById("slow").innerHTML = `Too Slow!`;
      document.getElementById("how").style.visibility = "hidden";
      document.getElementById("welcome").style.display = null;
    }
  }

  createRock() {
    this.rocks.push(new Obstacle(new Physics(
      Math.floor(Math.random() * 310) + 80,
      -20)
    ));
  };

  createLife() {
    this.life.push(new Life(new Physics(
      Math.floor(Math.random() * 310) + 80,
      -20)
    ));
  };

  createCash(bool_marked) {
    this.cash.push(new Cash(new Physics(
      Math.floor(Math.random() * 310) + 80,
      -20),bool_marked
    ));
  };

  cleanUp() {
    // clearInterval(this.create);
    window.cancelAnimationFrame(this.animate);
  }

  start() {
    this.gameOver = false;
    document.getElementById("welcome").style.display="none";
    this.assets.car.resetLife();
 
    setInterval(() => {
      if (!this.gameOver) {
        if(ctr%3 == 0)
        {
          this.createRock();
        }
        else if(ctr%3==1){
          this.createCash(ctr%2 == 0);
        }
        else if(ctr%3==2){
          this.createLife();
        }
        ctr++;
      }
    }, 5000);

    this.draw();
    this.assets.road.move();
   
  }
}

export default Game;