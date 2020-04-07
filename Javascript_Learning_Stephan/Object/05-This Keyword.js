// Think of this as a reference to the current execution scope
// The value of this depends on invocation context of the function it is used in.

function sayHi() {
  console.log('HI');
  console.log(this);
}

// const greet = function() {
//   console.log(this);
// };

// sayHi();
// greet();

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person`);
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says HAHAHA`);
  }
};

const printBio = person.printBio;
