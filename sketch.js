
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papers;
var ground;
var leftdside,bottomdside,rightdside;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	papers = new Paper(200,200,10,15);
	ground = new Ground(600,290,1200,10);
	leftdside = new Dustbin(896,260,10,50);
	rightdside = new Dustbin(1004,260,10,50);
	bottomdside = new Dustbin(950,279,100,10);

	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();
  papers.display();
 ground.display();
 leftdside.display();
 rightdside.display();
 bottomdside.display();
 keyPressed();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
        Matter.Body.applyForce(papers.body,papers.body.position,{x:15,y:-15})
	}
}



