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
    }, 300);
  });
};

const t3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("t3 success");
    }, 400);
  });
};

Promise.myRace = function (promiseArr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      reject(new Error("PromiseArr is not array"));
      return;
    }

    for (let promise of promiseArr) {
      Promise.resolve(promise).then(resolve, reject);
    }
  });
};

Promise.myRace([t1(), t2(), t3()])
  .then((res) => {
    console.log(`Response is ${res}`);
  })
  .catch((err) => {
    console.error(err);
  });
