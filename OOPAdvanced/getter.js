class Circle {
  constructor (radius) {
    this._radius = radius;
  }

  // getters are defined using get keyword
  // these can be accessed just like an instance property
  get diameter () {
    return this._radius * 2;
  }
}

/**
 * eg.
 * 
 * const circle = new Circle(5);
 * console.log(circle.diameter);
 */