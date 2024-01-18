// VALUE OF THIS IS DECIDED ONLY AT THE POINT OF FUNCTION EXECUTION

// generally, the value of this is decided based on the value of the context in which the function is executed
// the above rule holds mostly for arrow functions, but there can be exceptions when functions are created using function keyword

function whatIsThis () {
  console.log(`The value of this is ${this}`);
};

const whatIsThisV2 = () => {
  console.log(`The value of this is ${this}`);
};

const obj = {
  whatIsThis,
  whatIsThisV2,
};

/*
whatIsThis(); // this corresponds to Window (global) object
same as doing window.whatIsThis();
*/

const object = {
  greeting: 'hello world',
  greet: function () {
    whatIsThis();
    return this.greeting;
  },
  greetV2: function () {
    whatIsThisV2();
    return this.greeting;
  },
  greetV3: () => {
    whatIsThis.bind(object)();
    return this.greeting;
  },
  greetV4: function () {
    whatIsThis.bind(object)();
    return this.greeting;
  },
  greetV5: function () {
    whatIsThis.bind(this)();
    return this.greeting;
  },
};