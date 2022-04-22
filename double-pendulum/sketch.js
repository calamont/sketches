// Uncomment to run in react
// import Spinner from "./Spinner"

const sketch = (s) => {

  let pendulums = [];
  let n_pendulums = 100
  let delta = n_pendulums * 1000

  s.setup = () => {
    let c = s.createCanvas(window.innerWidth, window.innerHeight);

    for (let i=0; i<n_pendulums; i++) {
      pendulums[i] = new DoublePendulum(0.3+(i/delta), Math.min(Math.max(i/n_pendulums, 0.0), 1));
    }
  };

  s.draw = () => {
    s.background(255);

    for (let i=0; i<pendulums.length; i++) {
      pendulums[i].update();
      pendulums[i].draw(s);
    }

  };
};

// Comment out to run in react
let myp5 = new window.p5(sketch);

// Uncomment to run in react
// export default sketch;
