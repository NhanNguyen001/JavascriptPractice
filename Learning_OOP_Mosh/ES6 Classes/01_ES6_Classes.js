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
  }
}

const circle = new Circle(1);
