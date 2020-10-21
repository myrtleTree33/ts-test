export class Car {
  numWheels: number;

  constructor(numWheels: number) {
    this.numWheels = numWheels;
  }

  getNumWheels(): number {
    return this.numWheels;
  }
}
