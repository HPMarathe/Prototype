let timerId = 1;
let timerMap = {};

function polyfillTime(callback, delay, ...args) {
  let id = timerId++;
  timerMap[id] = true;

  function callb() {
    if (!timerMap[id]) return;
    callback(...args);
    setTimeout(callb, delay);
  }

  setTimeout(callb, delay);
  return id;
}

function clearTime(id) {
  delete timerMap[id];
}

console.log("start");
const myid = polyfillTime(() => {
  console.log("midd");
}, 4000);

console.log("end");
clearTime(myid);

// new feature
