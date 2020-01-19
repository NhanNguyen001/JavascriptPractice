const _radius = Symbol(); // get a unique value
const _draw = Symbol();

class Circle {
  constructor(radius) {
    // this.radius = radius;
    // this['radius'] = radius;
    this[_radius] = radius;
  }

  [_draw]() {}
}

const c = new Circle(1);
// console.log(Object.getOwnPropertyNames(c));
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);

// 1. The First approach --> this._radius;

// 2. The second approach
