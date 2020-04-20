class Vehicle {
  // public drive(): void {
  //   console.log("chugga chugga");
  // }

  // First way
  // color: string = "red";

  // Second way
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  // Third way
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vrom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

const car = new Car(100, "aqua");
console.log(car.color);
console.log(car.wheels);
car.startDrivingProcess();
