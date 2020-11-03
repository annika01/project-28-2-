
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var tree, boy, stone, ground, launcher, m1, m2, m3,m4, world, boy , force= 100 


function preload()
{
boy= loadImage("img/boy.png")	

}

function setup() {
	createCanvas(1300, 600);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone=new Stone (235,420,30)
tree= new Tree (1050,580)

ground= new Ground(width/2, 600, width, 20)
launcher= new Launcher(stone.body, {x:235,y:420})
m1= new Mango(1000,100,30)
m2= new Mango(1170,130,30)
m3= new Mango(1100,250,30)
m4= new Mango(900,230,30)
m5= new Mango(1200,200,30)
m6= new Mango(1120,50,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine)
tree.display();
stone.display();
ground.display();
launcher.display();
m1.display();
m2.display();
m3.display();
m4.display();
m5.display();
m6.display();
image (boy,200,340,200,300)
detectCollision(stone,m1)
detectCollision(stone,m2)
detectCollision(stone,m3)
detectCollision(stone,m4)
detectCollision(stone,m5)
detectCollision(stone,m6)

  drawSprites();
 
}



function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   launcher.fly();
}

function detectCollision (stone, mango){

var mangoPos= mango.body.position
var stonePos= stone.body.position
var distance= dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y)
if(distance<= mango.r+stone.r){
	Matter.Body.setStatic(mango.body, false)
}
}