let timerId = 1;
let timerMap = {};

function setTimeoutPolyfill(callback, delay, ...args) {
  let id = timerId++;
  timerMap[id] = true;
  let start = Date.now();

  function triggerCalllback() {
    if (!timerMap[id]) return;
    if (Date.now() > start + delay) {
      callback.apply(this, args);
    } else {
      requestIdleCallback(triggerCalllback);
    }
  }

  requestIdleCallback(triggerCalllback);
  return id;
}

function clearTimeoutPolyfill(id) {
  delete timerMap[id];
}

console.log("start");
let myid = setTimeoutPolyfill(() => {
  console.log("first");
}, 10000);

console.log("end");
// clearTimeoutPolyfill(myid);
