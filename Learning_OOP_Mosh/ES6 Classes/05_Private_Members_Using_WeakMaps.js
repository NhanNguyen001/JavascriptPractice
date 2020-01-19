const _radius = new WeakMap();
const _move = new WeakMap();
const privateProps = new WeakMap();

class Circle {
  constructor(radius) {
    // The first implementation
    privateProps.set(this, {
      radius: radius,
      move: () => {}
    });
    privateProps.get(this);

    // The second implementation
    _radius.set(this, radius);
    // This keyword of arrow function in move will inherited
    // from the constructor function
    _move.set(this, () => {
      console.log('move', this);
    });
  }

  draw() {
    console.log(_radius.get(this));
    _move.get(this)();
    console.log('draw');
  }
}

const c = new Circle(1);
