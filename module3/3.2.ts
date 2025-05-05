{
  //inheritance

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfHours: number) {
      console.log(`${this.name} will take class for ${numOfHours}`);
    }
  }
  const teacher1 = new Teacher("ayesha", 23, "Dhaka", "lecturer");
  teacher1.takeClass(6);
  const student1 = new Student("ayesha", 23, "Dhaka");
  student1.getSleep(6);
}
