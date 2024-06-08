const t1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("t1 success");
    }, 1000);
  });
};

const t2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("t2 success");
    }, 500);
  });
};

const t3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("t3 success");
    }, 400);
  });
};

Promise.myAny = function (promiseArr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      reject(new Error("PromiseArr is not array"));
      return;
    }

    let n = promiseArr.length;
    const errors = [];

    if (n === 0) {
      reject(new AggregateError([], "All promises were rejected"));
      return;
    }

    promiseArr.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((err) => {
          errors.push(err);
          n--;
          if (n === 0) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};

Promise.myAny([t1(), t2(), t3()])
  .then((res) => {
    console.log(`Response is ${res}`);
  })
  .catch((err) => {
    console.error(err);
  });
