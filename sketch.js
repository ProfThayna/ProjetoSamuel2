const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, pedra, Pedrag;
var backgroundImg;


function preload() {
    backgroundImg = loadImage("sprites/ground.png");
    Pedrag = loadImage("sprites/Pedraf.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    pedra = Bodies.circle(200,100,50);
    World.add(world, this.pedra);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
   
    ground.display();
    image(this.Pedrag, pedra.position.x, pedra.position.y, 50,50);
      
}

