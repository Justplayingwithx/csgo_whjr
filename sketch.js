var car, wall, speed, weight, height = 50;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,190)
  weight = random(400,1500)
  car = createSprite(30,200,50,40);
  car.shapeColor = "black"
  wall = createSprite(1500,200,20,height/2)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.velocityX = speed
  if(car.isTouching(wall)){
    car.velocityX = 0;
    var deformation = 0.5* weight * speed * speed/22509;
    if(deformation <100 ){
      car.shapeColor = "green"
    }
    else if (deformation <180 && deformation >100){
      car.shapeColor = "yellow";
    
    }
    else if (deformation>180){
      car.shapeColor = "red"
    }
  }
}