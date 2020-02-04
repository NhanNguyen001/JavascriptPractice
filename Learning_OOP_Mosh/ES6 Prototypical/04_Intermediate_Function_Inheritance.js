// It's called Shape based
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

// We have encapsulated this logic somewhere that we can use
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Circle.prototype.constructor = Circle;
}

function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;
}

// Intermediate function inheritance
extend(Circle, Shape);

Circle.prototype.draw = function() {
  console.log('draw');
};

function Square(size) {
  this.size = size;
}

// Intermediate function inheritance
extend(Square, Shape);

const sq = new Square(12);
const s = new Shape();
const c = new Circle(1, 'red');
