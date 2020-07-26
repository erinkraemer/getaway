import Sprite from './sprite';

const lifeImg = new Image();
//lifeImg.src = "./assets/images/turbo.png";
const scale = 1.5;
const redBox = new Image();
redBox.src = "staticassets/images/redbox.png";
const blueBox = new Image();
blueBox.src = "staticassets/images/bluebox.png";
const greenBox = new Image();
greenBox.src = "staticassets/images/greenbox.png";

class Life {
  constructor(physics, imgSrc, marked, assetid,distance = -1) {
    this.physics = physics;
    
    lifeImg.src = imgSrc;

    this.sprite = new Sprite(lifeImg, 50, 50, 1.0*scale, 1.0*scale);
    this.box = new Sprite(blueBox, 40, 50, 1.0*scale, 1.3*scale)
    this.marked = marked;
    this.assetid = assetid;
    this.recognizedType = this.marked? "U" : assetid[0];  
    this.distance = distance;
    
  }

  updatesprite(imgSrc) {
    lifeImg.src = imgSrc;
    this.sprite = new Sprite(lifeImg, 50, 50, 1.0*scale, 1.0*scale);
  }

  move() {
    this.physics.dDown = this.physics.speed;
  }

  stop() {
    this.physics.dDown = 0;
  }
}

export default Life;