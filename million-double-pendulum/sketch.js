// Uncomment to run in react
// import Spinner from "./Spinner"

const sketch = (s) => {

  let pendulums = [];
  let n_pendulums = 100;
  let delta = n_pendulums * (1000000 / 10000)

  s.setup = () => {
    let w = 800;
    let c = s.createCanvas(800, 800);

    let frame = 0;
    let skip = false;
    let a1 = s.PI - 0.001;
    let a2 = s.PI - 0.001;
    let cx = width / 2;
    let cy = height / 2.5;

    // buffer = createGraphics(width, height);
    // buffer.background(255);
    // // buffer.background(255,255,242);
    // buffer.translate(cx, cy);

    for (let a=0; a<1; a++) {
      // pendulums.push(new DoublePendulum(world, a*2));
      pendulums[i] = new DoublePendulum(0.1+(i*1/delta), Math.min(Math.max(i/n_pendulums, 0.0), 1));
    }
  };

  s.draw = () => {

    s.background(255);

    for (let i=0; i<pendulums.length; i++) {
      pendulums[i].update();
      pendulums[i].draw();
    }

  };
};

// Comment out to run in react
let myp5 = new window.p5(sketch);

// Uncomment to run in react
// export default sketch;
