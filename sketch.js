const Engine = Matter.Engine
const World = Matter.World  
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;
var myWorld,myEngine;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15,box16,box17;
var paperball;
var sling;
function setup() {
  createCanvas(800,600);
  myEngine = Engine.create();
  myWorld = myEngine.world

  ground = new Ground(400,590,800,10);
  box1 = new Box(650,555,80,60);
  box2 = new Box(650,495,80,60);
  box3 = new Box(650,435,80,60);
  box4 = new Box(650,375,80,60);
  box5 = new Box(650,315,80,60);
  box6 = new Box(650,255,80,60);
  box7 = new Box(650,195,80,60);
  box8 = new Box(650,135,80,60);
  box9 = new Box(650,75,80,60);

  box10 = new Box(550,560,40,50);
  box11 = new Box(550,510,40,50);
  box12 = new Box(550,460,40,50);
  box13 = new Box(550,410,40,50);
  box14 = new Box(550,360,40,50);
  box15 = new Box(550,310,40,50);
  box16 = new Box(550,260,40,50);
  box17 = new Box(550,210,40,50);

  paperball = new Paper(250,500);

  sling = new Slingshot(paperball.body,{x:250,y:200});
}

function draw() {
  background(0);
  Engine.update(myEngine);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();

  paperball.display();
  
  sling.display();
}
function mouseDragged(){
  Matter.Body.setPosition(paperball.body,{x:mouseX,y:mouseY});

}

