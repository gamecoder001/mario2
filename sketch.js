let ground;
let lander;
var lander_img;
var bg_img;
var player;
var playerimg
var rcs_left;
var rcs_right;


var vx = 0;
var vy = 0;
var g = 0.05;
var fuel = 100;

function preload()
{
 
  bg_img = loadImage("mario.jpg","bg1.jpg","mario.jpg");
  playerimg = loadAnimation("mario1.png","mario2.png","mario3.png");
  /*crash= loadAnimation("crash1.png","crash2.png","crash3.png");
  land = loadAnimation("landing1.png" ,"landing2.png","landing_3.png");
  rcs_left = loadAnimation("left_thruster_1.png","left_thruster_2.png");
  normal = loadAnimation("normal.png");
  rcs_right = loadAnimation("right_thruster_1.png","right_thruster_2.png");*/


  /*thrust.playing= true;
  thrust.looping= false;
  rcs_left.looping = false;
  rcs_right.looping = false;*/
}

function setup() {
  createCanvas(1200,700);
  frameRate(80);
  timer = 1500;

  ground = createSprite(1200,350);
  ground.addImage(bg_img)
  player = createSprite(200,520,30,30);
  player.addAnimation("running",playerimg);
  player.scale = 1;
  player.frameDelay=20
  //lander.addAnimation('thrust',"b_thrust_1.png","b_thrust_2.png","b_thrust_3.png" );
  //lander.addAnimation('thrusting',thrust);
  //lander.addAnimation('left',rcs_left);
  //lander.addAnimation('normal',normal);
  //lander.addAnimation('right',rcs_right);

  ground.velocityX=-5
  ground.scale=1
  
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
 // image(bg_img,0,0);
 ground.velocityX=-3
 if(ground.X<0){
  ground.x=width/2
 }
  push()
  fill(255);
  text("Horizontal Velocity: " +round(vx,2),800,50);
  text("Fuel: "+fuel,800,25);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
 // vy +=g;
  //player.position.y+=vy;
  //player.position.x +=vx;


  drawSprites();
}

function keyPressed()
{
  /*if(keyCode==UP_ARROW && fuel>0)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
  if(keyCode==RIGHT_ARROW && fuel>0)
  {
    lander.changeAnimation('left');
    right_thrust();
  }

  if(keyCode==LEFT_ARROW && fuel>0)
  {
    lander.changeAnimation('right');
    left_thrust();
  }*/
}

/*function upward_thrust()
{
  vy = -1;
  fuel-=1;
}

function right_thrust()
{ 
  vx += 0.2;
  fuel -=1;
}

function left_thrust()
{
  vx -= 0.2;
  fuel-=1;
}*/
