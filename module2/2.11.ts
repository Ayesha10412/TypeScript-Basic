{
  //utility
  //pick

  type person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
  };

  type nameAge = Pick<person, "name" | "age">;
  type ContactNo = Omit<person, "name" | "age">;
  type PersonRequired = Required<person>;
  type personPartial = Partial<person>;
  type PersonReadOnly = Readonly<person>;
  const person1: person = {
    name: "ayesha",
    age: 23,
    contactNo: 232,
  };
  person1.name = "khan";

  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };
  const EmptyObj: Record<string, unknown>;
  type MyObj = Record<string, string>;
  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
  };
}
