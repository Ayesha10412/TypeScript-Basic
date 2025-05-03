{
  //generic type

  type GenericArray<T> = Array<T>;
  const rollNumbers: GenericArray<number> = [3, 5, 6];
  const mentors: GenericArray<string> = ["d", "f", "t"];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Ayesha",
      age: 23,
    },
    {
      name: "Ayesha",
      age: 23,
    },
  ];

  //generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    {
      name: "ayesha",
      email: "a@gmail.com",
    },
  ];
}
