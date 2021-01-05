//declaring variables
var bullet;
var wall;
var speed;
var weight;
var thickness;

//creating sprites and assigning random values to the variables
function setup() {
createCanvas(1600,400);
thickness= random(22,83);
wall=createSprite(1200,200,thickness,height/2);
bullet= createSprite(50, 200, 24, 12);
wall.shapeColor=color(80,80,80);
speed=random(223,321);
weight=random(30,52);
bullet.velocityX=speed;
}

function draw() {
  //putting the background color
  background(255,255,255);  

   //Detect the extent of damage and assigning the color to the wall based on the damage

   if (hasCollided(bullet,wall))
   {
     bullet.velocityX=0;
     var damage= 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage>10)
    {
     wall.shapeColor=color(255,0,0);
    }
    if (damage<10) 
    {
     wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
  }
  //function to check if the bullet's Right Edge is touching the Wall's Left Edge
  function hasCollided (lbullet,lwall)
  {
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
   {
     return true;
   }
     return false;
  }