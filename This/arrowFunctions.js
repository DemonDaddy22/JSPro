// Arrow functions don't make their own this
// the value of this corresponds to the context
// in which arrow functions get executed

class Cat {
  constructor (name) {
    this.name = name;
  }

  greet () {
    console.log(`1. ${this.name} says Hi`);
    
    setTimeout(function () {
      console.log(this);
      console.log(`2. ${this.name} says Hi`);
    }, 500);

    setTimeout(() => {
      console.log(this);
      console.log(`3. ${this.name} says Hi`);
    }, 1000);
  }
}