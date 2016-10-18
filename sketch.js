function setup()
{
  createCanvas(windowWidth,windowHeight);
}
var x=20
var y=550

function draw()
{
  background(28, 44, 68);
  rotate(45)
  fill(227, 228, 229);
  rect(x,y,100,200);
  x=x+5;
  y=y-3;
}
