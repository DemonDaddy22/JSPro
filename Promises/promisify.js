const callbackFoo = (isSuccess, cb) => {
  const data = isSuccess ? 'yay' : 'nay';
  setTimeout(() => cb(isSuccess ? data : null, isSuccess ? null : data), 1000);
};

const promisify = (foo) => {
  return (...args) => {
    return new Promise((res, rej) => {
      foo(...args, (data, err) => {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
    });
  };
};

const callExample = async () => {
  try {
    const foo = promisify(callbackFoo);
    const data = await foo(Math.random() < 0.5);
    console.log('Data received', data);
  } catch (err) {
    console.log('Error caught', err);
  }
};