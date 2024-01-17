class Cat {
  constructor (name) {
    this.name = name;
  };

  meow () {
    return `${this.name} says meow meow`;
  };
}

/*
const cat = new Cat('Blue');

To counter the situation of 'Losing the context'
we could utilise the functionality of 'call' or 'apply'
which allows us to pass the context on which the
function must get executed

const meow = cat.meow;
meow.call(cat);

Major difference between call and apply is
how they handle additional arguments.
Call expects us to pass the arguments as individual arguments
but in apply we are expected to pass the arguments as an
array or array-like object of arguments
*/