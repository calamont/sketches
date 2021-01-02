const s = (sketch) => {

  const depth = 6;

  sketch.setup = () => {
    sketch.background(255);
    // size(1024, 1024);
    sketch.createCanvas(1024, 1024);

    // lineVertices = new ArrayList<ArrayList<PVector>>();
    let lineVertices = Array(depth)
    for (let i = 0; i < depth; i++) {
      lineVertices[i] = Array();
    }

    // PVector centre = new PVector(width / 2, height / 2);
    let width = 400;
    let height = 400;
    let centre = sketch.createVector(width / 2, height / 2);
    console.log(lineVertices)
    hilbert(0, 0, 100, depth, centre, lineVertices);
    console.log(lineVertices)
    for (let d = 0; d < depth; d++) {
      let h = lineVertices[d]
      for (let i = 0; i < h.length - 1; i++) {
        sketch.line(h[i].x, h[i].y, h[i + 1].x, h[i + 1].y)
      }
    }
    for (let i = 1; i < depth; i++) {
      m[i] = new Mover(lineVertices[i], i);
    }
  };

  let m = Array(depth);
  sketch.draw = () => {
    for (let i = 2; i < depth; i++) {
      m[i].update();
      m[i].display();
    }
  }

  const hilbert = (i1, i2, w, n, offset, v) => {
    let p1 = sketch.createVector((offset.x - w * (1 - 2 * i1)), (offset.y + w * (1 - 2 * i1)));
    let p2 = sketch.createVector((offset.x - w * (1 - 2 * i2)), (offset.y - w * (1 - 2 * i2)));
    let p3 = sketch.createVector((offset.x + w * (1 - 2 * i1)), (offset.y - w * (1 - 2 * i1)));
    let p4 = sketch.createVector((offset.x + w * (1 - 2 * i2)), (offset.y + w * (1 - 2 * i2)));

    v[depth - n].push(p1);
    v[depth - n].push(p2);
    v[depth - n].push(p3);
    v[depth - n].push(p4);

    if (n != 1) {
      let rotate1 = (i2 < 1) ? 1 : 0;
      let rotate2 = (i1 < 1) ? 1 : 0;
      hilbert(i1, rotate1, w / 2, n - 1, p1, v);
      hilbert(i1, i2, w / 2, n - 1, p2, v);
      hilbert(i1, i2, w / 2, n - 1, p3, v);
      hilbert(rotate2, i2, w / 2, n - 1, p4, v);
    }
  }
  class Mover {
    // PVector location;
    // PVector oldLocation;
    // PVector velocity;
    // float mass;
    // int depth;

    // ArrayList < PVector > corners;
    // PVector lastCorner;
    // int cornerCount;
    // float lineLength;


    constructor(vertex, d) {
      //variables needed for the tracer
      this.moverX = new Array(30);
      this.moverY = new Array(30);
      this.deltaX = new Array(30);
      this.deltaY = new Array(30);
      this.elastic = new Array(30);
      this.apo = new Array(30);
      this.epiX = new Array(30);
      this.epiY = new Array(30);
      this.velocity = vertex[1].sub(vertex[0]);
      this.velocity.mult(0.0001 * Math.pow(4, d));
      this.location = sketch.createVector(0, 0);
      this.location.set(vertex[0]);
      this.oldLocation = sketch.createVector(0, 0);
      this.oldLocation.set(location);
      this.depth = d + 1;

      this.corners = vertex;
      this.cornerCount = 0;
      this.lastCorner = sketch.createVector(0, 0);
      this.lastCorner.set(vertex[0]);

      this.lineLength = this.corners[0].dist(this.corners[1]);
    }

    update() {
      this.oldLocation.set(this.location);
      if (this.cornerCount < this.corners.length - 2) {
        if (this.location.dist(this.lastCorner) >= this.lineLength) {
          this.velocity = corners[this.cornerCount + 2].sub(corners[cornerCount + 1]);
          //velocity.normalize();
          this.velocity.mult(0.0001 * pow(4, this.depth));
          this.lastCorner.set(this.corners[cornerCount + 1]);
          this.cornerCount++;
        }
      } else {
        if (this.location.dist(this.lastCorner) >= this.lineLength) {
          this.velocity.mult(0);
        }
      }
      this.location.add(this.velocity);
      // calcTracer(this.location.x, this.location.y);
    }

    display() {
      sketch.colorMode(sketch.HSB);
      // renderTracer();
      sketch.stroke(255 / (this.cornerCount + 1), 255, 50);
      if (this.depth < 7) {
        sketch.stroke(0);
        sketch.strokeWeight(1.5);
        sketch.fill(0);
        sketch.line(this.oldLocation.x, this.oldLocation.y, this.location.x, this.location.y);
      }
      // let fxMouse, fyMouse, pointX, pointY;

      //dictates latency/precision of the line to the cursor
      // float response;
    }
  };
}
let myp5 = new p5(s);
