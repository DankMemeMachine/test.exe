function setup()
{
  createCanvas(windowWidth,windowHeight);
}
var x=300
var y=300

function draw()
{
    rotate(45)
  background(28, 44, 68);
  fill(227, 228, 229);
  rect(x,y,100,200);
  fill(163, 238, 255);
  ellipse(x+50,y+100,50,50);
  x=x+2;
  y=y-7;
}
