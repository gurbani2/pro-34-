const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var monsterImg ,hero, superheroImg , block , superHero;
var bgImg ;
 

function preload() {
//preload the images here
monsterImg = loadImage("image/Monster-01.png");
superheroImg = loadImage("image/Superhero-01.png");
bgImg = loadImage("image/bg.jpg");


}

function setup() {
  createCanvas(500, 500);
  engine = Engine.create();
    world = engine.world;
  // create sprites here
   block = new Block (200,200,20,20);
   superHero = new Hero (200,150,20,20)
}

function draw() {
  background(bgImg);
  block.display();
  superHero.display();

  drawSprites();
  


}
  

 


function mouseDragged(){
Matter.Body.setPosition(hero.body , { x : mouseX , y : mouseY });


}
