// It's called Shape based
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
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

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  Shape.prototype.duplicate.call(this);

  console.log("duplicate circle");
};

Circle.prototype.draw = function() {
  console.log("draw");
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
  console.log("duplicate square");
};

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  // shape.duplicate();
  // if (shape.type === "circle") {
  //   duplicateCircle();
  // } else if (shape.type === "square") {
  //   duplicateSquare();
  // } else {
  //   duplicateShape();
  // }
  shape.duplicate();
}
