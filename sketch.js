var rect1 , rect2, rect3, rect4

function setup() {
  createCanvas(800,400);
 rect1 = createSprite(400, 200, 50, 50);
 rect1.shapeColor = "red";
 rect2 = createSprite(200,300,50,50);
 rect2.shapeColor = "blue";
 rect3 = createSprite(300,200,50,50);
 rect3.shapeColor = "pink"
 rect4 = createSprite(100,100,50,50);
 rect4.shapeColor = "purple"
 rect1.debug = true
 rect2.debug = true
}

function draw() {
  background(255,255,255);  
  drawSprites();
  rect1.y = mouseY
  rect1.x = mouseX

  if(isTouching(rect1,rect3)){
    rect1.shapeColor = "green";
    rect3.shapeColor = "yellow";
  }
  else{
    rect1.shapeColor = "red"
    rect3.shapeColor = "blue"
  }
  
}
function isTouching(ob1,ob2){
  if(ob1.x-ob2.x < ob1.width/2 + ob2.width/2 && ob2.x-ob1.x < ob1.width/2 + ob2.width/2 && ob1.y-ob2.y < ob1.height/2 + ob2.height/2 && ob2.y-ob1.y < ob1.height/2 + ob2.height/2){
    return true
  }
  else {
    return false
  }
}