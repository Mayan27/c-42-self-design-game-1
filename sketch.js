var score;0

var bg, bgImg

function preload(){

  bgImg= loadImage("bgimg.avif");

}

function setup(){
  createCanvas(windowWidth,windowHeight);

  
  bg= createSprite( width/2,height/2, width, height );
  bg.addImage(bgImg)
}

function draw(){
  background(bgImg)
  drawSprites()
}
