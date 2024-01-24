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