bubbles = []

function Bubble(x, y) {
  this.x = x
  this.y = y


  this.display = () => {
    noFill()
    strokeWeight(4)
    stroke(this.r, this.g, this.b, 128)
    ellipse(this.x, this.y, 16, 16)
  }

  this.move = () => {
    if(0 < this.x < width-8 && 0 < this.y < height-8) {
      this.x += random(-2, 2)
      this.y += random(-2, 2)
    }
  }

  this.coloring = () => {
    this.r = random(0, 255)
    this.g = random(0, 255)
    this.b = random(0, 255)
  }

  this.clicked = () => {
    var d = dist(mouseX, mouseY, this.x, this.y)
    if(d < 16) {
      fill(random(0, 255), random(0, 255), random(0, 255))
      this.x = 320
      this.y = 240
    }
  }
}

function mousePressed() {
  for(var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked()
  }
}

function setup() {
  createCanvas(640, 480)
  background(0)
  
  for(var i = 0; i < 128; i++) {
    bubbles.push(new Bubble(random(0, width), random(0, height)))
  }

}

function draw() {
  background(0)
  ellipse(320, 240, 144, 144)
  textSize(32)
  textAlign(CENTER)
  text("Get us in here!", 320, 150)
  
  for(var i = 0; i < bubbles.length; i++) {
    bubbles[i].coloring()
    bubbles[i].display()
    bubbles[i].move()
  }
}
