class Rectangle {
  constructor (l, b) {
    this.l = l;
    this.b = b;
  }

  getArea () {
    return this.l * this.b;
  }

  describe () {
    return `This is a rectangle with area: ${this.getArea()}`;
  }
}

/**
 * We can now create a sub-class Square which is basically a rectangle with equal l and b
 * and override certain methods of parent class Rectangle
 */
class Square extends Rectangle {
  constructor (s) {
    super(s, s);
  }

  describe () {
    return `This is a square with area: ${this.getArea()}`;
  }
}