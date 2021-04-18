var hr, mn, sc;
var scAngle,hrAngle,mnAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90)  

  hr=hour();
  mn=minute();
  sc=second();
  
  scAngle=map(sc,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);
  mnAngle=map(mn,0,60,0,360);

  push();
  stroke("red");
  strokeWeight(4);
  rotate(scAngle);
  line(0,0,90,0);
  pop();

  push();
  stroke("blue");
  strokeWeight(9);
  rotate(hrAngle);
  line(0,0,70,0);
  pop();

  push();
  stroke("green");
  strokeWeight(7);
  rotate(mnAngle);
  line(0,0,100,0);
  pop();

  strokeWeight(5);
  noFill();

  stroke("red");
  arc(0,0,300,300,0,scAngle);
  stroke("green");
  arc(0,0,280,280,0,mnAngle);
  stroke("blue");
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}















