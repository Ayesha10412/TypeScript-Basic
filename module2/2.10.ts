{
  //mapped types
  const arrOfNumbers: number[] = [1, 32, 4];

  type AreaNumber = {
    height: string;
    width: string;
  };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };
  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 40,
  };
}
