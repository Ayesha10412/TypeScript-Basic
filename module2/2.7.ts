{
  //generic constraints with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type owner = keyof Vehicle;

  const person: owner = "car";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "ayesha",
    age: 23,
    address: "mirpur",
  };
  const car = {
    model: "toyota",
    year: 2023,
  };
}
