function createSetTimeout() {
  var timerId = 0;
  var timerMap = {};

  function setTimeoutPolyfill(callback, delay, ...args) {
    var id = timerId++;
    timerMap[id] = true;
    var start = Date.now();
    function triggerCallback() {
      if (!timerMap[id]) return;
      if (Date.now() > start + delay) {
        callback.apply(this, args);
      } else {
        //     triggerCallback();
        //     RangeError: Maximum call stack size exceeded
        // at triggerCallback (setTimeout.js:14:9
        requestIdleCallback(triggerCallback);
      }
    }
    // triggerCallback();
    requestIdleCallback(triggerCallback);

    return id;
  }

  function clearTimeoutPoly(id) {
    delete timerMap[id];
  }
  return { setTimeoutPolyfill, clearTimeoutPoly };
}
var { setTimeoutPolyfill, clearTimeoutPoly } = createSetTimeout();

console.log("start");
var myId = setTimeoutPolyfill(function () {
  console.log("Welcome home");
}, 3000);
// clearTimeoutPoly(myId);

console.log("end");

// console.log("start");
// var myId = setTimeout(function () {
//   console.log("Welcome home");
// }, 1000);
// clearTimeout(myId);

// console.log("end");
