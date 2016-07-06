var canvas = {
  w: 0,
  h: 0
};

function setup() {
  canvas.w = 730;
  canvas.h = 697;

  createCanvas(canvas.w, canvas.h);
  background(0);

  var color   = {
    r: 0,
    g: 0,
    b: 0
  };
}

function draw() {
  var rWidth  = random(0, canvas.w);
  var rHeight = random(0, canvas.h);
  color.r = random(80, 180);
  color.g = random(0, 10);
  color.b = random(100, 200);
  var d   = random(6, 16);

  noStroke();
  fill(color.r, color.g, color.b, 100)
  ellipse(rWidth, rHeight, d, d);
}
