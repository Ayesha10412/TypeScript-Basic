{
  //abstraction : 1. Interface, 2.Abstract

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(`I am just testing`);
    }
  }
  const toyotaCar = new Car();

  toyotaCar.startEngine();

  abstract class Car2 {
    abstract startEngine(): void;

    test() {
      console.log(`I am just testing`);
    }
  }
  class Toyota extends Car2 {
    startEngine(): void {
      console.log(`I am starting car engine`);
    }
  }
  const honda = new Toyota();
  honda.startEngine();
}
