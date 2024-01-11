class Circle {
  radius; // public field - can be accessed outside the class
  #diameter; // private field - cannot be accessed outside the class

  constructor (radius) {
    this.radius = radius;
    this.#diameter = radius * 2;
  }

  #calculateArea () {
    return Math.PI * (this.radius ** 2);
  }

  set radius (value) {
    this.radius = value;
  }

  get diameter () {
    this.#diameter = this.radius * 2;
    return this.#diameter;
  }

  get area () {
    return this.#calculateArea();
  }
}

/**
 * eg.
 * 
 * const c = new Circle(5);
 * console.log(c.radius);
 * console.log(c.diameter);
 * console.log(c.area);
 * console.log(c.#diameter);
 * console.log(c.#calculateArea());
 */
