function Dog (name, breed) {
  this.name = name;
  this.breed = breed;

  // this attaches the below functions to each dog instance
  // this would not happen out of the box if instead we used 'class'

  // to replicate this behaviour with constructor functions,
  // we could utilise the functionality of prototype
  this.bark = function () {
    return `${this.name} says woof!`;
  };

  this.sleep = function () {
    return `${this.name} is sleeping!`;
  };

  // we can attach the above methods to Dog's __proto__ property
  // these are implicitly added to the prototype when using class keyword
  this.__proto__.commonBark = function () {
    return `${this.name} says woof!`;
  };

  this.__proto__.commonSleep = function () {
    return `${this.name} is sleeping!`;
  };
}

// ideally we shouldn't directly access the __proto__ property and manipulate it
// as it is an internal property attached to each instance
// instead we should make use of prototype property of function to add functionality

Dog.prototype.run = function () {
  return `${this.name} is running!`;
}