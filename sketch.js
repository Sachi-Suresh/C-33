function preload(){
  bg= loadImage("snow2.jpg");
  boy= loadImage("snow3.jpg");
  snowflake1= loadImage("snow4.webp");
  snowflake2= loadImage("snow5.webp");
}
function setup() {
  createCanvas(1000,600);
  snow= createSprite(300, 200, 50, 50);
  snow.addImage(snowflake1);
  snow.scale= 0.2;
  snow.velocityY= 1;
  snow2= createSprite(600, 200, 50, 50);
  snow2.addImage(snowflake2);
  snow2.scale= 0.1;
  snow2.velocityY= 1;

}



function draw() {
  background(bg);  
  drawSprites();
}