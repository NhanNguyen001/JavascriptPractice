const makeDogPromise = timeout => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) resolve('nhan');
      else reject();
    }, timeout);
  });
};

makeDogPromise(3000)
  .then(res => console.log('Yay we got a dog', res))
  .catch(() => {
    console.log('No dog');
  });
