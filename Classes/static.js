class Cat {
  constructor (name, breed) {
    this.name = name;
    this.breed = breed;
  }

  // static property is not tied to any instance
  // rather tied to the class itself
  // access it using Cat.species
  static species = 'felis catus';

  // the same is true for static methods
  // static methods cannot access instance properties
  static meow () {
    return `Every cat of ${this.species} species does meow meow!`;
  };

  // a common use case would be to have factory functions
  static registerStrayCat () {
    const names = ['Blue', 'Cookie', 'Cherry', 'Shirley', 'Ginger', 'Thomas'];
    const randInd = Math.floor(Math.random() * names.length);
    const name = names[randInd];

    return new Cat(name, 'unknown');
  }
}

// another common use case of static methods would be to group together certain functionality
// without having the need to create Class instances

class MyMath {
  static sum (...args) {
    return [...args].reduce((accu, curr) => accu += curr, 0);
  }

  static multiply (...args) {
    return [...args].reduce((accu, curr) => accu *= curr, 1);
  }
}