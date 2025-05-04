{
  //function with generic

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res1 = createArray("Ayesha");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");
  type User = { id: number; name: string };
  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "ayesha",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const res2 = createArrayWithTuple<string, number>("Ayesha", 232);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    name: "Ayesha",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "Ayesha",
    email: "y@gmail.com",
    hasWatch: "Apple",
  });
}
