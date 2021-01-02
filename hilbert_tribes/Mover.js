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
        this.velocity.mult(0.0001 * pow(4, d));
        this.location = sketch.createVector(0, 0);
        this.location.set(c[0]);
        this.oldLocation = sketch.createVector(0, 0);
        this.oldLocation.set(location);
        this.depth = d + 1;

        this.corners = vertex;
        this.cornerCount = 0;
        this.lastCorner = createVector(0, 0);
        this.lastCorner.set(c[0]);

        this.lineLength = corners.get(0).dist(corners.get(1));
    }

    update() {
        oldLocation.set(location);
        if (cornerCount < corners.size() - 2) {
            if (location.dist(lastCorner) >= lineLength) {
                velocity = PVector.sub(corners.get(cornerCount + 2), corners.get(cornerCount + 1));
                //velocity.normalize();
                velocity.mult(0.0001 * pow(4, depth));
                lastCorner.set(corners.get(cornerCount + 1));
                cornerCount++;
            }
        } else {
            if (location.dist(lastCorner) >= lineLength) {
                velocity.mult(0);
            }
        }
        location.add(velocity);
        calcTracer(location.x, location.y);
    }
    // let fxMouse, fyMouse, pointX, pointY;

    //dictates latency/precision of the line to the cursor
    // float response;
}
