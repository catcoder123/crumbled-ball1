
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1,paper1,ground1,world;





function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin1=new dustbin(1200,650);
paper1=new paper(200,450,40);
ground1= new ground(800,670,1600,20)

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display()
  ground1.display()
  paper1.display()

  
  drawSprites();
	
}
function keyPressed() {
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}

