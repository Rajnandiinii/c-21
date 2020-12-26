var r1,r2,r3,r4,r5,r6;


//r1=moving rectangle and r2=fixed rectangle
function setup() {
  createCanvas(800,400);
  r1=createSprite(200,200,50,50);
 r2=createSprite(300,200,50,50);
 r3=createSprite(400,200,50,50);
 r4=createSprite(100,200,50,50);
 r5=createSprite(400,300,50,50);
 r6=createSprite(100,300,50,50);
r3.shapeColor="pink";
r4.shapeColor="blue";
r3.velocityX=-3;
r4.velocityX=3;

}

function draw() {
  background(0);  
if(touching(r3,r4)){
 r3.shapeColor="green";
 r4.shapeColor="green"; 
}
else{
 r3.shapeColor="blue";
 r4.shapeColor="pink"; 
}
bounceoff(r3,r4);
console.log(r1.x-r2.x)
console.log(r1.width/2+r2.width/2)
drawSprites();
}

