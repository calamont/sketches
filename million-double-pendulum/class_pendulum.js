function setup() {
  w = 800;
  c = createCanvas(w, w*0.8);
  pixelDensity(10);
  // frameRate(10);

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
  n_pendulums = 1000;
  delta = n_pendulums * (200000 / 10000)
  for (let i=0; i<n_pendulums; i++) {
    // pendulums[i] = new SimpleDoublePendulum(i*1/20000, i/1000);
    // pendulums[i] = new SimpleDoublePendulum(0.3+(i*1/200000), i/1000);
    // pendulums[i] = new SimpleDoublePendulum(0.2+(i*1/20000), i/3000);
    // pendulums[i] = new SimpleDoublePendulum(0.2+(i*1/20000), i/1000);
    // pendulums[i] = new SimpleDoublePendulum(0.01+(i*1/200000), Math.min(Math.max(i/10000, 0.0), 1));
    pendulums[i] = new SimpleDoublePendulum(0.1+(i*1/delta), Math.min(Math.max(i/n_pendulums, 0.0), 1));
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
    // pixelDensity(frame%10);
    background(255,255,242);
    background(255);
    imageMode(CORNER);
    image(buffer, 0, 0, width, height);

    for (let i=0; i<pendulums.length; i++) {
      pendulums[i].update();
      pendulums[i].draw();
    }
    // tint(0, 153, 204);
  }
}

// _RdBu_data = (
//   (0.40392156862745099,  0.0                ,  0.12156862745098039),
//   (0.69803921568627447,  0.09411764705882353,  0.16862745098039217),
//   (0.83921568627450982,  0.37647058823529411,  0.30196078431372547),
//   (0.95686274509803926,  0.6470588235294118 ,  0.50980392156862742),
//   (0.99215686274509807,  0.85882352941176465,  0.7803921568627451 ),
//   (0.96862745098039216,  0.96862745098039216,  0.96862745098039216),
//   (0.81960784313725488,  0.89803921568627454,  0.94117647058823528),
//   (0.5725490196078431 ,  0.77254901960784317,  0.87058823529411766),
//   (0.2627450980392157 ,  0.57647058823529407,  0.76470588235294112),
//   (0.12941176470588237,  0.4                ,  0.67450980392156867),
//   (0.0196078431372549 ,  0.18823529411764706,  0.38039215686274508)
//   )
