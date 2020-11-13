var fixedRect, movingRect;
var r3
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  r3=createSprite(300,200,80,30);
  r3.shapeColor="green";
  r3.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,r3)){
   movingRect.shapeColor="blue";
   r3.shapeColor="blue";
 }
 else{
   movingRect.shapeColor="green";
   r3.shapeColor="green";
 }
  drawSprites();
}
