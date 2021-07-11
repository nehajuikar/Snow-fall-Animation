const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Background
var Snow1
var SnowImg
var Snowman;
var SnowmanImg;

function preload(){
  SnowImg = loadImage("snow5.webp");
  Background=loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  if(frameCount%90 === 0){
    Snow1 = new Snow(random(width/2-10,width/2+10),10,10);
    snow = createSprite(random(100,700),100,50,50)
    snow.addImage(SnowImg)
    snow.scale=0.04;
      }

     
}

  function draw() {
  background(Background); 
  
  Engine.update(engine);

  Snow1.display();
  drawSprites();
}