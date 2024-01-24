/*

1. Write a function, showNumberTrivia, that makes a request to the Numbers API
(http://numbersapi.com) to get trivia about your favorite number.
(Make sure you get back JSON — you may need to look at the documentation
of the API to see how to do this: Details.) Log the piece of trivia to the
console.

2. Have a “race”: make a new function, showNumberRace, that asks for
trivia about four different numbers (using four separate requests), but,
as soon as one request returns, log the piece of trivia for the winning
number to the console.

3. Get all: make a new function, showNumberAll. that asks for trivia about
different numbers. Make all of the requests at the same time, but handle
them once all requests are completed.

However, at least one of the “numbers” you use should be an invalid thing,
like the string “WRONG”.

Log to the console the array of trivia for responses with a successful status code, and the array of error messages for the responses with a failed status code.

4. Write a function, main, which calls all three of those functions, in
order, moving onto the next function only after the current function fully
completes.

*/

const NUMBER_API_BASE_URI = 'http://numbersapi.com';

const showNumberTrivia = async (num) => {
  const res = await fetch(`${NUMBER_API_BASE_URI}/${num}?json`);
  const json = await res.json();
  return json.text;
};

const showNumberRace = async (num1, num2, num3, num4) => {
  const winner = await Promise.race([
    showNumberTrivia(num1),
    showNumberTrivia(num2),
    showNumberTrivia(num3),
    showNumberTrivia(num4),
  ]);
  return winner;
};

const showNumberAll = async (...args) => {
  const numbers = [...args];
  const response = await Promise.allSettled(numbers.map(showNumberTrivia));
  console.log({ response });
  const statusWiseResponse = response.reduce((accu, curr) => {
    if (!(curr.status in accu)) {
      accu[curr.status] = [];
    }
    accu[curr.status].push(curr.value || curr.reason.message || '');
    return accu;
  }, {});
  return statusWiseResponse;
};

const main = async (...args) => {
  try {
    const trivia = await showNumberTrivia(args[0] || 0);
    console.log(`showNumberTrivia: ${trivia}\n`);

    const winner = await showNumberRace(...[...args].slice(0, 4));
    console.log(`showNumberRace: ${winner}\n`);

    const numberAllResponse = await showNumberAll(...[...args]);
    for (let key of Object.keys(numberAllResponse)) {
      console.log(`showNumberAll ${key}: ${JSON.stringify(numberAllResponse[key])}`);
    }
  } catch (err) {
    console.error(err);
  }
};