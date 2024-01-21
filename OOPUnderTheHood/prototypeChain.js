const base = {
  color: 'purple',
  greet: function () {
    return `I'm the base object`;
  },
};

const derived = {
  shade: 'violet',
  __proto__: base,
};

const derivedAgain = {
  opacity: 0.8,
  __proto__: derived,
};

/*

derivedAgain.__proto__ -> derived
derivedAgain.__proto__.__proto__ -> base
derivedAgain.__proto__.__proto__.__proto__ -> Object
derivedAgain.__proto__.__proto__.__proto__.__proto__ -> null

*/