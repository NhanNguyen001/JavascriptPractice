// Implementation Detail
const _radius = new WeakMap();

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

// module.exports.Circle = Circle;
// module.exports.Square = Square;
module.exports = Circle;

// radius and draw is not accessible in our other modules
