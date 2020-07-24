import Physics from "./physics";
import Sprite from "./sprite";

const rockImg = new Image();
const scale = 1.5;
//rockImg.src = "./assets/images/rock.png";
const redBox = new Image(); //DONE: Convert it to a bluebox
redBox.src = "./assets/images/redbox.png";
const blueBox = new Image();
blueBox.src = "./assets/images/bluebox.png";
const greenBox = new Image();
greenBox.src = "./assets/images/greenbox.png"; 
class Obstacle {
  constructor(physics,imgSrc,marked,assetid, distance=-1) {
    this.physics = physics;
    rockImg.src = imgSrc;
    this.sprite = new Sprite(rockImg, 50, 50, 1.0 * scale, 1.0 * scale);
    this.box = new Sprite(blueBox, 40, 50, 1.0 * scale, 1.3 * scale)
    this.marked = marked;
    this.assetid = assetid;
    this.recognizedType = this.marked? "U" : assetid[0];  
    this.distance = distance;
   
  }

  updatesprite(imgSrc) {
    rockImg.src = imgSrc;
    this.sprite = new Sprite(rockImg, 50, 50, 1.0 * scale, 1.0 * scale);
  }
  

  move() {
    this.physics.dDown = this.physics.speed;
  }

  stop() {
    this.physics.dDown = 0;
  }
}

export default Obstacle;