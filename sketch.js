var mario,mImage;
var gem,gemImage;
var bg,bgImage;


function preload(){
  mImage=loadAnimation("images/stand1.png","images/left.png","images/stand2.png","images/right.png");
  gemImage=loadImage("images/gem.png");
  bgImage = loadImage("images/bg.jpg");

}
function setup() {
  createCanvas(600,400);

  bg = createSprite(300,200,10,10);
  bg.addImage("for backgroundImage",bgImage);
 bg.scale=0.2

  mario = createSprite(100, 300, 50, 50);
  mario.addAnimation("for mario",mImage);
  mario.scale=0.3;

  gem = createSprite(200,320,10,10);
  gem.addImage("for gem",gemImage);
  gem.scale=0.09;

  bgImage = createSprite
}

function draw() {
  background("yellow");  




  drawSprites();
}