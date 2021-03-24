var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(100, 200, 80, 10);
  bullet.shapeColor="white";
  bullet.velocityX=speed=Math.round(random(223,321));

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);

  weight=Math.round(random(30,52))
  thickness=Math.round(random(22,83))

}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall)){
    
    bullet.velocityX=0;
   

    var damage =0.5 * weight * speed * speed/(thickness*thickness*thickness);
    
    if(damage<10){
      wall.shapeColor="green";
    }
   if(damage>10){
     wall.shapeColor="red";
     thickness=Math.round(random(22,35))
   }

  }
  
 drawSprites();
}