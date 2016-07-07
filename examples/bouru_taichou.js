"use strict";

var bubble = {
  x: 683,
  y: 300,
  display: function () {
    stroke(255),
    strokeWeight(4),
    noFill(),
    ellipse(this.x, this.y, 24, 24)
  },
  move: function() {
    this.x += random(-2,2)
    this.y += random(-2,2)
  }
};

/* Functions
 *
 * Functions for moving things around
 */

function bounce() {
  if (bubble.x > width  || bubble.x < 0) {
    bubble.xspeed *= -1
  }

  if (bubble.y > height || bubble.y < 0) {
    bubble.yspeed *= -1
  }
}

/* Main
 *
 * Main p5.js loop
 */

function setup() {
  createCanvas(1366, 600)
}

function draw() {
  background(0)

  bubble.display()
  
  bounce()

  bubble.move()
}
