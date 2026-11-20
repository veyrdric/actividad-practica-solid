interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

// ya no hereda de Rectangle, tiene un solo lado
class Square implements Shape {
  private side: number;

  constructor(side: number) {
    this.side = side;
  }

  setSide(side: number): void {
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}

function resizeRectangle(rectangle: Rectangle): void {
  rectangle.setWidth(5);
  rectangle.setHeight(10);
  console.log(`Area esperada: 50. Area obtenida: ${rectangle.area()}`);
}

function printAreas(shapes: Shape[]): void {
  for (const shape of shapes) {
    console.log(`Area: ${shape.area()}`);
  }
}

// pruebas
resizeRectangle(new Rectangle(1, 1));
// resizeRectangle(new Square(1)); // ahora no compila, un cuadrado no es un Rectangle

const square = new Square(1);
square.setSide(5);

printAreas([new Rectangle(5, 10), square]);
