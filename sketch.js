const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg;
var tower, towerImg;
var cannon;


function preload() {

  backgroundImg = loadImage("./assets/background.gif");
  towerImg = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var ground_options ={
    isStatic: true
  }

  ground = Bodies.rectangle(0, height-1, width * 2, 1, ground_options );
  World.add(world, ground);
  
  tower=Bodies.rectangle(120,350,150,300, ground_options);
  World.add(world,tower);
  
  var angle = 20;
  cannon = new Cannon(150, 110, 130, 100, angle);
}

function draw() {
  image(backgroundImg, 0, 0, 1200, 600);
 
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width * 2, 1);
  push();
  imageMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 150, 300);
  pop();

  cannon.display();
  
   
}
