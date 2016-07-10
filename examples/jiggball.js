var bubbles = []

function Bubble(x, y) {
  this.x = x
  this.y = y
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
  createCanvas(640, 380)
  /*for(var i = 0; i < 44; i++) {
   bubbles[i] = new Bubble(random(0, width), random(0, height))
  }*/
}

function draw() {
  background(0)
  for(var i = 0; i < bubbles.length; i++) {
    bubbles[i].move()
    bubbles[i].display()
  }
  if(bubbles.length > 44) {
    bubbles.splice(0, 1)
  }
}

function mouseDragged() {
  bubble = new Bubble(mouseX, mouseY)
  bubbles.push(bubble)
}
