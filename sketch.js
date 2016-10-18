function setup()
{
  createCanvas(windowWidth,windowHeight);
}
var x=20
var y=550
var w=100
var h=200
function draw()
{
  background(28, 44, 68);
  rotate(45);
  fill(227, 228, 229);
  rect(x,y,w,h);
  x=x+5;
  y=y-3;

}
