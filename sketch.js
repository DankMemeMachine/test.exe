function setup()
{
  createCanvas(windowWidth,windowHeight);
}
var x=30
var y=250

function draw()
{
    rotate(45)
  background(28, 44, 68);
  fill(227, 228, 229);
  rect(x,y,100,200);
  x=x+2;
  y=y-7;
}
