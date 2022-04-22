function DoublePendulum(world, ang) {

  this.ang = ang/1000;
  // add bodies
  this.group = Matter.Body.nextGroup(true),
      length = 200,
      width = 2;

  this.body = Matter.Bodies.rectangle(400, 400, length, width, {
        collisionFilter: { group: this.group },
        angularVelocity: 0,
        angularSpeed: 0,
        inertia: 0,
        speed: 0,
        frictionAir: 0.00001,
        frictionStatic: 0,
        friction: 0,
        chamfer: 5,
        render: {
            fillStyle: 'transparent',
            lineWidth: 1
        }
    });

  Matter.World.add(world, this.body)

  // this.pendulum = Matter.Composites.stack(400, 400, 2, 1, -20, 0, function(x, y) {
  //   return Matter.Bodies.rectangle(x, y, length, width, {
  //       collisionFilter: { group: this.group },
  //       angularVelocity: 0,
  //       angularSpeed: 0,
  //       inertia: 0,
  //       speed: 0,
  //       frictionAir: 0.00001,
  //       frictionStatic: 0,
  //       friction: 0,
  //       chamfer: 5,
  //       render: {
  //           fillStyle: 'transparent',
  //           lineWidth: 1
  //       }
  //   });
  // });

  // Matter.Composites.chain(this.pendulum, 0.5, 0, -0.5, 0, {
  //   stiffness: 0.9,
  //   length: 0,
  //   angularStiffness: 0.001,
  //   render: {
  //       strokeStyle: '#4a485b'
  //   }
  // });

  // Matter.Composite.add(this.pendulum, Matter.Constraint.create({
  //   bodyB: this.pendulum.bodies[0],
  //   pointB: { x: -length * 0.5, y: 0 },
  //   pointA: { x: this.pendulum.bodies[0].position.x - length * 0.5, y: this.pendulum.bodies[0].position.y },
  //   stiffness: 0.9,
  //   length: 0,
  //   render: {
  //       strokeStyle: '#4a485b'
  //   }
  // }));

  // this.upperArm = this.pendulum.bodies[0];
  // this.lowerArm = this.pendulum.bodies[1];



  // console.log(this.upperArm)
  // this.upperArm.setVelocity(0);
  // console.log(this.lowerArm)

  // // Matter.Body.rotate(this.pendulum, -Math.PI)
  // Matter.Body.rotate(this.upperArm, -2.59);
  // Matter.Body.rotate(this.lowerArm, -2.6);

  // console.log(this.upperArm)
  // console.log(this.lowerArm)

  // Matter.Body.rotate(this.lowerArm, -Math.PI * 0.5, {
  //   x: this.lowerArm.position.x - 300,
  //   y: this.lowerArm.position.y
  // });

  // Matter.Body.rotate(this.lowerArm, -Math.PI * this.ang, {
  //   x: this.lowerArm.position.x - 100,
  //   y: this.lowerArm.position.y
  // });

  // Matter.World.add(world, this.pendulum)

  // this.show = function (s) {
  //   let bodies = this.pendulum.bodies
  //   // let pos = this.body.position;
  //   // let angle = this.body.angle;
  //   for (let i=0; i<2; i++){
  //     let pos = bodies[i].position;
  //     let angle = bodies[i].angle;

  //     // console.log(bodies[i]);

  //     s.push();
  //     s.translate(pos.x, pos.y);
  //     s.rotate(angle);
  //     s.rectMode(s.CENTER);
  //     s.rect(0, 0, 200, 2);
  //     s.pop();
  //   }
  // }

  this.show = function (s) {
    let pos = this.body.position;
    let angle = this.body.angle;

    s.push();
    s.translate(pos.x, pos.y);
    s.rotate(angle);
    s.rectMode(s.CORNER);
    s.rect(0, 0, 200,  2);
    s.pop();
  }
}
