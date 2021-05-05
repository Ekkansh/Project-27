
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  roof, bob1, bob2, bob3, bob4, bob5;
var string1;
function preload()
{
	
}

function setup() {
	createCanvas(1366, 650);


	engine = Engine.create();
	world = engine.world;

	//roof
    roof = new Roof(650, 200, 300, 25);
  //bob objects
    bob1 = new Bob(600, 300, 15);
    bob2 = new Bob(630, 300, 15);
    bob3 = new Bob(660, 300, 15);
    bob4 = new Bob(690, 300, 15);
    bob5 = new Bob(720, 300, 15);
  //strings
    string1 = new Rope(bob1.body,{x:600, y:200});
    string2 = new Rope(bob2.body,{x:630, y:200});
    string3 = new Rope(bob3.body,{x:660, y:200});
    string4 = new Rope(bob4.body,{x:690, y:200});
    string5 = new Rope(bob5.body,{x:720, y:200});

    strokeWeight(3);
    line(bob1.body.position.x,bob1.body.position.y,{x:600, y:200})
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-40,y:-40});
  }
}

