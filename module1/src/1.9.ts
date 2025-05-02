{
  //type Alias
  type Student = {
    name: string;
    age: number;
    contactNo?: number;
    gender: string;
    address: string;
  };
  const student1: Student = {
    name: "ayesha",
    age: 23,
    contactNo: 486487337838,
    gender: "Female",
    address: "Dhaka",
  };
  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Ayesha";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
