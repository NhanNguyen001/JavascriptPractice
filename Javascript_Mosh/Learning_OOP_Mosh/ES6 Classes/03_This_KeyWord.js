'use strict';

const Circle2 = function() {
  this.draw = function() {
    console.log(this);
  };
};

const c = new Circle2();
// Method Call
c.draw();

const draw = c.draw;

// Function Call
draw();

class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw();
draw();
