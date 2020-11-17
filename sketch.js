var zenia, tourus, cyclap, wall1, wall2, wall3, speed, weight;
function setup() {
  createCanvas(1000,600);
  zenia = createSprite(100, 100, 20, 20);
  wall1 = createSprite(900, 100, 10, 60);
  tourus = createSprite(100, 300, 20, 20);
  wall2 = createSprite(900, 300, 10, 60)
  cyclap = createSprite(100, 500, 20, 20);
  wall3 = createSprite(900, 500, 10, 60);

speed = random(55, 90);
weight = random(400, 1500);
}

function draw() {
  background("black");  
zenia.velocityX = speed;
tourus.velocityX = speed;
cyclap.velocityX = speed;
var deformation = 0.5 * weight * speed * speed/22509
if(wall1.x-zenia.x < (zenia.width+wall1.width)/2){
  zenia.velocityX = 0;
  deformation = 0.5 * weight * speed * speed/22509

  if(deformation<100){
    zenia.shapeColor = "green"
  }

  if(deformation>100 && deformation<180 ){
    zenia.shapeColor = "yellow"
  }

  if(deformation>180){
    zenia.shapeColor = "red"
  }

}
  if(wall2.x-tourus.x < (tourus.width+wall2.width)/2){
    tourus.velocityX = 0;
    deformation = 0.5 * weight * speed * speed/22509
  
    if(deformation<100){
      tourus.shapeColor = "green"
    }
  
    if(deformation>100 && deformation<180 ){
      tourus.shapeColor = "yellow"
    }
  
    if(deformation>180){
      tourus.shapeColor = "red"
    }

  }
    if(wall3.x-cyclap.x < (cyclap.width+wall3.width)/2){
      cyclap.velocityX = 0;
      deformation = 0.5 * weight * speed * speed/22509
    
      if(deformation<100){
        cyclap.shapeColor = "green"
      }
    
      if(deformation>100 && deformation<180 ){
        cyclap.shapeColor = "yellow"
      }
    
      if(deformation>180){
        cyclap.shapeColor = "red"
      }
}
  drawSprites();
}