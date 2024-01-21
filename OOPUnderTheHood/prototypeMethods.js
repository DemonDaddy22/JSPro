const person = {
  isHuman: true,
  greet: function () {
    return 'Hey there!';
  },
};

const p1 = Object.create(person);

console.log(Object.getPrototypeOf(p1));

Object.setPrototypeOf(p1, { ...person, isHuman: false});

console.log(person.isPrototypeOf(p1));