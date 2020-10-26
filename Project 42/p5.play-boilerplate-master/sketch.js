


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
  
}

function draw() {
  background(0,0,0); 
  
translate(200,200)
rotate(-90);
var hr=hour();
var mn=minute();
var sc=second(); 
  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);
 push(); 
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7);
  stroke("yellow")
  line(0,0,100,0);

 pop(); 
 

  push();
  rotate(mnAngle)
  stroke(255,0,0)
  stroke("blue")
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hrAngle)
  stroke(255,0,0)
  stroke("red")
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  stroke("yellow");
  strokeWeight(7);
  noFill();
  point(0,0);
  arc(0,0,300,300,0,scAngle);
  
  stroke("blue");
  strokeWeight(7);
  noFill();
  point(0,0);
  arc(0,0,280,280,0,mnAngle);
  
  stroke("red");
  strokeWeight(7);
  noFill();
  point(0,0);
  arc(0,0,260,260,0,hrAngle);
  drawSprites();
}