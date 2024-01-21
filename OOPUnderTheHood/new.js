/*
new keyword does the following things

- creates a new object
- sets the keyword 'this' to be that object
- returns the object - returns this
- creates a link to object's prototype
*/

/*
class Dog {
  constructor (name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark () {
    return 'Woof!';
  }
}
*/

// Before the introduction of classes
// We were able to mimic behaviour of classes through
// Constructor Functions

function Dog (name, breed) {
  this.name = name;
  this.breed = breed;

  this.bark = function () {
    return 'Woof!';
  };
}