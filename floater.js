function Floater(x, y, velocity, lifetime_s)
{
  this.start_x = x;
  this.start_y = y;
  this.velocity = velocity;
  this.lifetime_s = lifetime_s;
  
  this.square_color = color(255, 255, 255);
  
  this.start_time = millis();
  this.dead = false;
  
  var selector = int(random(0, 3));
  if (selector == 0)
    this.s = "C";
  else if (selector == 1)
    this.s = "T";
  else if (selector == 2)
    this.s = "D";
  
  this.draw = function()
  {
    if (!this.dead)
    {
      var dt = (millis() - this.start_time) / 1000.0;
      var new_x = this.start_x;
      var new_y = this.start_y - velocity * dt;

      var alpha = map(dt, 0, lifetime_s, 255, 0);

      if (alpha <= 0)
      {
        this.dead = true;
      }

      this.square_color.setAlpha(alpha);
      stroke(this.square_color);
      fill(this.square_color);

      push();
      translate(new_x, new_y);
      rectMode(CENTER);
      strokeWeight(1);

      // rect(0, 0, 5, 5);
      textSize(15);
      textAlign(CENTER, CENTER);
      text(this.s, 0, 0);
      
      
      pop();
    }
  }
}