{
  //polymorphism

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }
  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };
  const shape1 = new Shape();
  const shape2 = new Circle(4);
  const shape3 = new rectangle(10, 20);
  getShapeArea(shape2);
}
