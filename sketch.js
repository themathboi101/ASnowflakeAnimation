var bg;
var boy,girl;
var gameState=0;
var snowIMG;
var x;

function preload(){
  bg=loadImage("snow1.jpg")
 // boyIMG=loadImage("")
}
function setup() {
  createCanvas(800,400);
  boy=createSprite(600, 270, 50, 50);
  girl=createSprite(500,270,50,50);
  girl.shapeColor="green";

  
  
}

function draw() {
  background(bg);
  
  
  if(gameState===0){
    boy.velocityX=-5;
    girl.velocityX=-5;
    bound();
  }
  dropSnowflakes();
  drawSprites();
}
function bound(){
  x=x+1;
  if(girl.x===300){
    boy.velocityX=0;
    girl.velocityX=0;
    gameState=1;
  }
}
function dropSnowflakes(){
  if(x/60===0){
    snow=new Snow((random(1,800)),800,50,50);
    
    snow.display();
  }
  
  
}
