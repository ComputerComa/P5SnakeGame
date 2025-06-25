var s;
var scl = 20;

var gamefood;
var gamesnake;
var snakeHeadImages = new Map();
var snakeBodyImage;
var foodImage;
var chompSound;
var gameFont;
var backImage;
var backColor = "#211E2B"
var SnakeHeadUP;
var SnakeHeadDOWN;
var SnakeHeadLEFT;
var SnakeHeadRIGHT;
var SnakeBodyMain;
var SnakeBodyCorner1;
var SnakeBodyCorner2;
var SnakeBodyCorner3;
var SnakeBodyCorner4;
var GameRunning = false

function setup() {
  frameRate(5)
  createCanvas(600, 600);
  gamesnake = new Snake();
  gamefood = new food();
  //imageMode(CENTER)
  angleMode(DEGREES)

  textSize = 1024
  textAlign(CENTER)
  textFont = gameFont

}

function preload(){
  SnakeHeadUP = loadImage("/assets/Head/up.png")
  SnakeHeadDOWN = loadImage("/assets/Head/down.png")
  SnakeHeadLEFT = loadImage("/assets/Head/left.png")
  SnakeHeadRIGHT = loadImage("/assets/Head/right.png")
  SnakeBodyMain = loadImage("/assets/Body/main.png")
  SnakeBodyCorner1 = loadImage("assets/Body/corner1.png")
  SnakeBodyCorner2 = loadImage("assets/Body/corner2.png")
  SnakeBodyCorner3 = loadImage("assets/Body/corner3.png")
  SnakeBodyCorner4 = loadImage("assets/Body/corner4.png")
  
foodImage = loadImage("/assets/Food.png")
gameFont = loadFont("/assets/DroidSansMono.ttf")

chompSound = loadSound("/assets/chomp.mp3")
chompSound.setVolume = 0.4;
backImage = loadImage("/assets/Empty.png")


}

function fillBackground(){
  for (var ix = 0; ix < width; ix += scl){
    for (var iy = 0; iy < height; iy += scl){
      image(backImage,ix,iy,scl,scl)
    }
  }
}

function draw() {
  background(backColor)
  fillBackground()
  gamesnake.show()
  gamefood.update()
  if (!GameRunning){
    text("PRESS SPACE TO PLAY",width/2,height/2)
  }
  if (GameRunning){
  gamesnake.update()
  gamesnake.show()
  gamefood.update()
  }
}

function keyPressed() {
 
  switch (keyCode){

    case UP_ARROW:
      gamesnake.dir(0);
      break;
    case RIGHT_ARROW:
      gamesnake.dir(1);
      break;
    case DOWN_ARROW:
      gamesnake.dir(2);
      break;
    case LEFT_ARROW:
      gamesnake.dir(3);
      break;
 
    case 32:
      GameRunning = !GameRunning
        //if (!GameRunning){
    //GameRunning = !GameRunning
    //} 
      break;
  
  }
  
}


