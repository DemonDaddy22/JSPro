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

calling cat.meow() prints Blue says meow meow
but when a class method is stored in a variable and executed, the value of
this becomes undefined

const func = cat.meow;
func() returns an error as the method was declared in class and not in global
scope so the value of this here becomes undefined

referred to as LOSING THE THIS CONTEXT
*/