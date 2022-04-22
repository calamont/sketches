function setup() {
  w = 800;
  c = createCanvas(w, w*0.8);
  pixelDensity(1);

  frame = 0;
  skip = false;
  a1 = PI - 0.001;
  a2 = PI - 0.001;
  cx = width / 2;
  cy = height / 2.5;
  buffer = createGraphics(width, height);
  buffer.background(255);
  // buffer.background(255,255,242);
  buffer.translate(cx, cy);

  pendulums = [];
  n_pendulums = 100;
  delta = n_pendulums * (1000000 / 10000)

  for (let i=0; i<n_pendulums; i++) {
    pendulums[i] = new DoublePendulum(0.1+(i*1/delta), Math.min(Math.max(i/n_pendulums, 0.0), 1));
  }
}

function keyPressed() {
  skip = !skip;
}

function mousePressed() {
  saveCanvas(c, 'canvas', 'png');
}

function draw() {
  if (!skip) {
    frame++;

    background(255,255,242);
    background(255);
    imageMode(CORNER);
    image(buffer, 0, 0, width, height);

    for (let i=0; i<pendulums.length; i++) {
      pendulums[i].update();
      pendulums[i].draw();
    }

  }
}
