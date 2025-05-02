{
  //spread operator
  //rest operator
  //destructuring

  //learn spread operators

  const bros1: string[] = ["Mir", "mizan", "Mirajul"];
  const bros2: string[] = ["Akash", "Ashraful", "Ashish"];
  bros2.push(...bros1);
  console.log(bros2);

  const fruits = {
    summer: "mango",
    rainy: "guava",
    spring: "Papya",
    winter: "orange",
  };

  const flowers = {
    summer: "Rose",
    rainy: "gada",
    lateAutumn: "Surjomukhi",
    autumn: "merigold",
    winter: "joba",
    spring: "kathgolap",
  };
  const list = {
    ...flowers,
    ...fruits,
  };

  //learn rest operators
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend) => {
      console.log(`Hi ${friend}`);
    });
  };
  greetFriends("Abul", "kabul", "babul", "ubul", "lubul");
}
