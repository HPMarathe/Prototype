const t1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("t1 success");
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
      reject("t3 fail");
    }, 1000);
  });
};

Promise.myAll = function (promiseArr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      reject(new Error("PromiseArr is not array"));
      return;
    }

    let n = promiseArr.length;

    const results = [];
    if (n === 0) {
      resolve("Empty Array");
      return;
    }

    promiseArr.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        results[index] = res;
        n--;

        if (n === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};

Promise.myAll([t1(), t2(), t3()])
  .then((res) => {
    console.log(`Response is ${res}`);
  })
  .catch((err) => {
    console.error(err);
  });
