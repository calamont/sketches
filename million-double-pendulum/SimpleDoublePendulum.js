let g = 0.1;
let m1 = 5;
let m2 = 5;
let r1 = 125;
let r2 = 125;

class SimpleDoublePendulum {
  constructor(a_diff, order) {
    this.a1 = PI - a_diff;
    this.a2 = PI - a_diff;
    this.cx = width / 2;
    this.cy = height / 2.5;
    this.a1_v = 0;
    this.a2_v = 0;
    this.x1 = 0;
    this.x2 = 0;
    this.y1 = 0;
    this.y2 = 0;
    this.col = d3.interpolateRdBu(order);
    // this.col = d3.interpolateRdGy(order);
    this.alpha = 0.5;
    this.col = this.col.split("(")[1].split(")")[0].split(",");
  }

  update() {

    let num1 = -g * (2 * m1 + m2) * sin(this.a1);
    let num2 = -m2 * g * sin(this.a1 - 2 * this.a2);
    let num3 = -2 * sin(this.a1 - this.a2) * m2;
    let num4 = this.a2_v * this.a2_v * r2 + this.a1_v * this.a1_v * r1 * cos(this.a1 - this.a2);
    let den = r1 * (2 * m1 + m2 - m2 * cos(2 * this.a1 - 2 * this.a2));
    let a1_a = (num1 + num2 + num3 * num4) / den;

    num1 = 2 * sin(this.a1 - this.a2);
    num2 = (this.a1_v * this.a1_v * r1 * (m1 + m2));
    num3 = g * (m1 + m2) * cos(this.a1);
    num4 = this.a2_v * this.a2_v * r2 * m2 * cos(this.a1 - this.a2);
    den = r2 * (2 * m1 + m2 - m2 * cos(2 * this.a1 - 2 * this.a2));
    let a2_a = (num1 * (num2 + num3 + num4)) / den;

    this.x1 = r1 * sin(this.a1);
    this.y1 = r1 * cos(this.a1);

    this.x2 = this.x1 + r2 * sin(this.a2);
    this.y2 = this.y1 + r2 * cos(this.a2);

    this.a1_v += a1_a;
    this.a2_v += a2_a;
    this.a1 += this.a1_v;
    this.a2 += this.a2_v;

    this.a1_v *= 0.9999;
    this.a2_v *= 0.9999;
  }

  draw() {
    push()
    translate(this.cx, this.cy);
    stroke(...this.col, 255 * this.alpha);
    strokeWeight(0.1);

    line(0, 0, this.x1, this.y1);
    fill(0);
    // ellipse(this.x1, this.y1, m1, m1);

    line(this.x1, this.y1, this.x2, this.y2);
    fill(0);
    pop()
    // ellipse(this.x2, this.y2, m2, m2);
  }
}
