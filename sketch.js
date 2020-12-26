var bob, rope, roof;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	World.add(bob,roof,rope);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	bob = new bob(200,200,20,20);
	bob2 = new bob(220,200,20,20);
	bob3= new bob(240,200,20,20);
	bob4 = new bob(260,200,20,20);
	bob5 = new bob(280,200,20,20);

	rope = new rope(bob,bob2,bob3,bob4,bob5);


  drawSprites();
 
}



