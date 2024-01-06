const triangle1 = {
  a: 3,
  b: 4,
  getArea: function () {
    return 0.5 * this.a * this.b;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};

const triangle2 = {
  a: 5,
  b: 12,
  getArea: function () {
    return 0.5 * this.a * this.b;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};

// the above approach is not very scalable when dealing with numerous instances
// better approach would be to create a class and create instances of the class

class Triangle {
  getArea () {
    return 0.5 * this.a * this.b;
  }

  getHypotenuse () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

/**
 * now we can simply create instances of the above class with different dimensions
 * eg.
 * 
 * const t1 = new Triangle();
 * t1.a = 3;
 * t1.b = 4;
 * t1.getArea();
 * t1.getHypotenuse();
 */