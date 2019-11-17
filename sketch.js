var floaters = new Array();

var x_pos;
var y_pos;
var spread;
var velocity;
var last_time;
var creation_period_ms;
var lifetime_ms;

function setup() {
  createCanvas(400, 400);
  
  x_pos = width / 2;
  y_pos = height - 10;
  velocity = 50;
  spread = 10;
  creation_period_ms = 100;
  lifetime_s = 3;
  last_time = millis();
}

function draw() {
  background(32, 33, 36);
  
  if (mouseIsPressed)
  {
    if (mouseButton === LEFT)
    {
      if (millis() - last_time > creation_period_ms)
      {
        floaters.push(new Floater(mouseX + random(-spread, spread), mouseY, velocity, lifetime_s));
        last_time = millis();
      }
    }
  }
  
  for (var floater of floaters)
  {
    floater.draw();
  }
}
