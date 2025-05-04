{
  //constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "Ayesha",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 3433,
    name: "Ayesha khan",
    email: "y@gmail.com",
    hasWatch: "Apple",
  });
}
