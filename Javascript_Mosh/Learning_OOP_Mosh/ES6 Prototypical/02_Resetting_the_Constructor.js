// It's called Shape based
function Shape() {}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

// It's called Circle based
function Circle(radius) {
  this.radius = radius;
}

// Circle.prototype = Object.create(Object.prototype); // objectBase
// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor(1) ==> new Circle(1)
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('draw');
};

const s = new Shape();
const c = new Circle(1);
