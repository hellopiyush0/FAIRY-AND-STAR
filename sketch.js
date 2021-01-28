

//I have just commented the sound in line 59 because when i was playing it my computer lacking each time

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var night, nimg;

var f, fimg;

var s, simg;

var star_options;

var snd;

function preload(){

  fimg = loadImage("fairy1.png"); 
  nimg = loadImage("starnight.png"); 
  simg = loadImage("star.png"); 
  snd = loadSound("joyMusic.mp3");
   
}

function setup(){

	createCanvas(800, 600);
  
  engine = Engine.create();
  world = engine.world;

  star_options = {isStatic : true};

  star = Bodies.rectangle(700, 40, 20, 20, star_options);

  World.add(world,star); 
  
  night = createSprite(400, 300);
  night.addImage(nimg);
  night.scale = 0.4;

  f = createSprite(100, 440);
  f.addImage(fimg);
  f.scale = 0.15;

  s = createSprite(700, 40);
  s.addImage(simg);
  s.scale = 0.2;
  
}

function draw(){

  background("black");

  //snd.play();

  Engine.update(engine);
  s.x = star.position.x;
  s.y = star.position.y;

  if(keyDown(LEFT_ARROW)){

    f.x = f.x - 10;

  }

  if(keyDown(RIGHT_ARROW)){

    f.x = f.x + 10;

  }
  //console.log(f.x);

  if(f.x > 590 && f.x < 640 && s.y > 389 && s.y < 410){

    Matter.Body.setStatic(star, true); 

  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === DOWN_ARROW){
    
    Matter.Body.setStatic(star, false); 

  }
  
}
