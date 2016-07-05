var canvas =      { w: 0, h: 0};
var col =  { r: 0, g: 0, b: 0 };

function setup() {
  canvas.w = 730;
  canvas.h = 697;

  createCanvas(canvas.w, canvas.h);
  background(col.r);
}

function draw() {
  col.r = map(mouseX, 0, canvas.w, 0, 255);
  col.g = map(mouseY, 0, canvas.h, 0, 255);

  if(col.r+col.g < canvas.w+canvas.h) {
    var blue = mouseX+mouseY;
    var canvasSum = canvas.w+canvas.h;
    col.b = map(blue, 0, canvasSum, 0, 255);
  }

  background(col.r, col.g, col.b);
}
