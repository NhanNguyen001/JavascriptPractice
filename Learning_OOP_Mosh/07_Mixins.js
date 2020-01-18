const canEat = {
  eat: function() {
    this.hunger--;
    console.log("eating");
  }
};

const canWalk = {
  walk: function() {
    console.log("waking");
  }
};

const canSwim = {
  swim: function() {
    console.log("swim");
  }
};

function Person() {}

Object.assign(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {}

Object.assign(Goldfish.prototype, canEat, canSwim);

const goldFish = new Goldfish();
console.log(goldFish);
