// even better way to initialise instances would be to use class constructor
// although we can do anything inside the constructor, but most common usage includes
// data validation
// assignment of properties

class Triangle {
  constructor (a, b) {
    if (!Number.isFinite(a) || a <= 0) {
      throw new Error(`Invalid a: ${a}`);
    }

    if (!Number.isFinite(b) || b <= 0) {
      throw new Error(`Invalid b: ${b}`);
    }

    this.a = a;
    this.b = b;
  }

  getArea () {
    return 0.5 * this.a * this.b;
  }

  getHypotenuse () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

/**
 * eg 1.
 * 
 * const t1 = new Triangle(3, 4);
 * t1.getArea();
 * t1.getHypotenuse();
 * 
 * eg 2.
 * 
 * const t2 = new Triangle(true, -1);
 * an error is thrown in this case because of the data validation added in the constructor
 */
