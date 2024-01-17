class Cat {
  constructor (name) {
    this.name = name;
  };

  meow (phrase = 'meow') {
    return `${this.name} says ${phrase}`;
  };
}

/*
const cat = new Cat('Blue');

To counter the situation of 'Losing the context'
we could also utilise the functionality of 'bind'
which allows us to create a permanent binding of a
function with the passed context

const meow = cat.meow;
const boundMeow = meow.bind(cat);
boundMeow();
*/