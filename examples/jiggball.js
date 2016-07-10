var bubbles = [];

function Bubble() {
  this.x = random(0, width)
  this.y = random(0, height)
  this.display = () => {
    noFill()
    strokeWeight(4)
    stroke(255, 204, 100)
    ellipse(this.x, this.y, 24, 24)
  }
  this.move = () => {
    this.x += random(-3, 3)
    this.y += random(-3, 3)
  }
}

function setup() {
  createCanvas(800, 600)
  for(var i = 0; i < 44; i++) {
   bubbles[i] = new Bubble()
  }
}

function draw() {
  background(0)
  for(var i = 0; i < bubbles.length; i++) {
    bubbles[i].move()
    bubbles[i].display()
  }
}

function mousePressed() {
  bubble = new Bubble()
  bubbles.push(bubble)
}
