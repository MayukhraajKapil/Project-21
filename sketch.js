const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var b1,b2
function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(width/2,670,width,20);
  leftside=new Ground(1100,600,20,120)
  rightside=new Ground(1350,600,20,120)
  
  var ball_options={
    restitution:0.3,isStatic:false,friction:0,density:1.2
    
  }
  ball=Bodies.circle(260,100,20,ball_options)
  World.add(world,ball)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
Engine.run(engine)
}


function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  leftside.show();
  rightside.show();
}

function keyPressed(){
  if(keyCode==32){
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
  }
}