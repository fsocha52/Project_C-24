
var bottombox, leftbox, rightbox;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;

function preload() {
    
    
    
}

function setup() {
    
    createCanvas(800, 700);
    
    
    
    engine = Engine.create();
    world = engine.world;
    
    
   paperObject = new Paper(100,100,50);   // reduced the radius
   // paperObject variable to be declared as global.

   var options={
     isStatic :true
   }
    
    bottombox = Bodies.rectangle(400,640,200,20,options);
    World.add(world, bottombox);
    
    leftbox = Bodies.rectangle(300,620,20,100,options);
    World.add(world, leftbox);
    
    rightbox = Bodies.rectangle(500,620,20,100,options);
    World.add(world, rightbox);
    
   
    // ground is an object. Removed the sprite that was created for the ground. 
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);

   /* var round = Bodies.rectangle(width/2, 650, width, 10 );
    World.add(world, ground);*/
    
    
    Engine.run(engine);
    
}


function draw() {
    
    rectMode(CENTER);
    background(0);
    paperObject.display();// called the display function of the paper class

    keyPressed();
   // drawSprites();
    
    fill("White");

    // y positions changed accordingly to display properly.
    rect(bottombox.position.x + 250, bottombox.position.y, 200, 20);
    rect(leftbox.position.x + 250, leftbox.position.y-20, 20, 100);
    rect(rightbox.position.x + 250, rightbox.position.y-20, 20, 100);

    //rect command to display the ground object
    fill("yellow")
    rect(ground.position.x, ground.position.y, width, 10);

    //ellipse command removed.
   
    
}

function keyPressed() {
  
  if (keyCode === UP_ARROW) {
    
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0.5, y:-5.5});
    
  }
  
}
