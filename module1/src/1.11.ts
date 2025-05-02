{
  //ternary operator || optional chaining|| nullish colescing operator
  const age: number = 18;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
  const isAdult = age >= 18 ? "adult" : "not adult";
  //   console.log({ isAdult });

  //nullish coalescing operator

  //null | undefined ---> decision making
  //   const isAuthenticated = undefined;
  //   const isAuthenticated = null;
  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  //optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      presentAdress: string;
      road: string;
      parmanentAddress?: string;
    };
  };
  const user: User = {
    name: "ayesha",
    address: {
      city: "dhaka",
      presentAdress: "mirpur",
      road: "kalapani",
    },
  };
  const parmanentAddress =
    user?.address?.parmanentAddress ?? "No parmanent Address";
  console.log({ user }, { parmanentAddress });
}

