var car1
var highway
var car1Image
var highwayImage 


function preload(){
  highwayImage= loadImage("highway.jpg") 
  car1Image= loadImage("red playing car.png")
}
function setup() {
  createCanvas(1200,800);
 highway= createSprite(300, 300, 800, 1800);
highway.addImage(highwayImage)
highway.velocityY= 2
highway.scale= 1.5
  car1= createSprite(100,100,20,20)
  car1.scale= 0.1
  car1.addImage(car1Image)

  
  
  
}

function draw() {
  background(255);  
  drawSprites();
  
  if(highway.y == 400 ){

    highway.y=200
    highway.height/2
  }
 
}
