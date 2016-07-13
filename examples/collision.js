bubbles = []

function Bubble(x, y) {
  this.x = x
  this.y = y
  this.r = 12
  this.col = color(255)

  this.display = () => {
    fill(this.col)
    stroke(this.col)
    ellipse(this.x, this.y, 24, 24)
  }
  
  this.update = () => {
    if(0 < this.x < width-this.r && 0 < this.y < height-this.r) {
      this.x += random(-1, 1)
      this.y += random(-1, 1)
    } else if (this.x > width-this.r) {
      this.x -= this.r
    } else if (this.y > height-this.r) {
      this.y -= this.y
    } else {
      console.log("update error")
    }
  }

  this.changeColor = () => {
    this.col = color(random(0, 255), random(0, 255), random(0, 255))
  }

  this.intersects = (bubble) => {
    var d = dist(this.x, this.y, bubble.x, bubble.y)
    if (d < this.r + bubble.r) {
      return true
    } else {
      return false
    }
  }
}

function setup() {
  createCanvas(800, 600)
  
  for(var i = 0; i < 44; i++) {
    bubbles.push(new Bubble(random(0, width), random(0, height)))
  }
}

function draw() {
  background(0)
  for(var i = 0; i < bubbles.length; i++) {
    for(var j = 0; j < bubbles.length; j++) { 
      if(i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor()
        bubbles[j].changeColor()
      }  
    }
    bubbles[i].display()
    bubbles[i].update()
  }
}
