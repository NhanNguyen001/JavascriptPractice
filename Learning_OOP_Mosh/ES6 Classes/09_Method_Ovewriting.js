class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log('cirle move');
  }
}

const c = new Circle();
