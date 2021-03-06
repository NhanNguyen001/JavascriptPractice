// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}

const circle = createCircle(1);
circle.draw();

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

// {} => set this point to another object => return object from constructor function
const another = new Circle(1);
