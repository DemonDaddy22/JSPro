class Circle {
  constructor (radius) {
    this._radius = radius;
  }

  // setters are defined using set keyword
  // these can be used to add additional logic while updating instance properties
  set radius (value) {
    if (value < 0) {
      throw new Error('radius must not be negative');
    } else {
      this._radius = value;
    }
  }
}

/**
 * eg.
 * 
 * const circle = new Circle(5);
 * circle.radius = 3;
 */