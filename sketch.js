const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
  backgroundIMG = loadImage("images/back.png");
}

function setup() {
  createCanvas(900,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300, 400, 600, 5);
  superhero = new Superhero(80, 320, 100, 150);
  monster = new Monster(530, 348, 100, 100);
  flier = new Fly(superhero.body, {x:100, y:465});

  block1 = new Block(260, 377, 30, 40);
  block2 = new Block(320, 377, 30, 40);
  block3 = new Block(380, 377, 30, 40);
  block4 = new Block(440, 377, 30, 40);
  block5 = new Block(260, 337, 30, 40);
  block6 = new Block(320, 337, 30, 40);
  block7 = new Block(380, 337, 30, 40);
  block8 = new Block(440, 337, 30, 40);
  block9 = new Block(320, 297, 30, 40);
  block10 = new Block(380, 297, 30, 40);
  block11 = new Block(440, 297, 30, 40);
  block12 = new Block(320, 257, 30, 40);
  block13 = new Block(380, 257, 30, 40);
  block14 = new Block(320, 217, 30, 40);
  block15 = new Block(380, 217, 30, 40);
  block16 = new Block(380, 177, 30, 40);
  block17 = new Block(380, 137, 30, 40);
  block18 = new Block(380, 97, 30, 40);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER)
  background(backgroundIMG);

  ground.display();
  superhero.display();

  stroke(10);
  fill("orange")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x: mouseX, y: mouseY});
}

function mouseRealeased(){
  attach.fly();
}
