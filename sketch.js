
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var left,right,x;
var dustbin;
function setup() {
    createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
	aper = new Paper(30,650,40,40)
	ground = new Ground(400,680,800,20)
	dustbin=new Dustbin(600,620,100,100)
    g=new Ground(645,630,10,80)
	l=new Ground(557,630,10,80)
    Engine.run(engine); 
}
function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
 
  aper.display();
  ground.display();
  dustbin.display();
  
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(aper.body,aper.body.position,{x:75,y:-85})
	}
}

