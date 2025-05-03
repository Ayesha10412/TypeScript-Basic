{
  //Generic with interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }
  type Emilab = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<Emilab> = {
    name: "ayesha",
    computer: {
      brand: "asus",
      model: "X-djfhe66",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emailb",
      model: "3fhueh4",
      display: "OLED",
    },
  };
  interface rich {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface Yamaha {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<rich, Yamaha> = {
    name: "ayesha",
    computer: {
      brand: "asus",
      model: "X-djfhe66",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Apple",
      model: "3fhueh4",
      heartTrack: true,
      sleepTrack: false,
    },
    bike: {
      model: "yamaha",
      engineCapacity: "4545cc",
    },
  };
}
