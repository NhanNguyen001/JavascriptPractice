// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function() {
//     console.log('draw');
//   };
// }

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  static test = 2;

  draw() {
    console.log(Circle.test);
    console.log('draw');
    console.log(this);
  }
}

const circle = new Circle(1);
const draw = circle.draw;
draw();
