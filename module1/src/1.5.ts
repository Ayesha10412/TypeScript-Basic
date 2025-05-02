//Reference Type --> Object
{
  const user: {
    readonly occupation: "Student"; //type--->literal type
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
  } = {
    occupation: "Student",
    firstName: "Ayesha",
    lastName: "Bristi",
    isMarried: true,
  };
}
