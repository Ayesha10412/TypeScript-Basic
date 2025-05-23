{
  //union types
  //   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  //   type FullStackDeveloper = "fakibazdevelop[er" | "expertDeveloper";
  //   type Developer = FrontendDeveloper | FullStackDeveloper;
  //   const newDeveloper: FrontendDeveloper = "juniorDeveloper";
  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "A+" | "B+";
  //   };
  //   const user1: User = {
  //     name: "Ayesha",
  //     gender: "male",
  //     bloodGroup: "B+",
  //   };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["html", "css", "node", "express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
