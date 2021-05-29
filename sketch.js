const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ball;

function preload()
{
    
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(1600,height,3600,80);
	ball = new Ball(200,150,25,25);

	box1 = new Box(1150,610,20,100);
	box2 = new Box(1250,650,200,20);
	box3 = new Box(1350,610,20,100);
	box4 = createSprite(1150,610,20,100);
	box5 = createSprite(1250,650,200,20);
	box6 = createSprite(1350,610,20,100);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  ground1.display();
  
  
  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-35});

}

}
