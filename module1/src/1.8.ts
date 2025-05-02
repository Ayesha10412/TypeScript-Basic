{
  //destructuring in typescript

  //object destructuring
  const user = {
    id: 345,
    name: {
      firstName: "Ayesha",
      lastName: "Khan",
    },
    contactNo: "02837253623",
    address: "Bangladesh",
  };
  const {
    contactNo,
    name: { lastName: lName },
  } = user;

  //array destructuring
  const myFriends = ["ayesha", "bristi", "siam", "sabbir", "nazrul"];
  const [, , brother, ...rest] = myFriends;
}
