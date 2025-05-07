{
  //type guards
  //typeof --> type guard
  type alphaneumeric = string | number;
  const add = (param1: alphaneumeric, param2: alphaneumeric): alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const result1 = add("2", "3");
  console.log(result1);

  //in guard
  type normalUser = {
    name: string;
  };
  type adminUser = {
    name: string;
    role: string;
  };

  const getUser = (user: adminUser | normalUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My ${user.name}`);
    }
  };
  const normaluser: normalUser = {
    name: "Ayesha",
  };
  const adminUser = {
    name: "bristi",
    role: "student",
  };
  getUser(adminUser);
}
