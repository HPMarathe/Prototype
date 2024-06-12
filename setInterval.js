var intervalId = 0;
var timerMap = {};

function setIntervalPolyfill(callback, delay, ...args) {
  var id = intervalId++;
  timerMap[id] = true;

  function executeInterval() {
    if (!timerMap[id]) return;
    callback(...args);
    setTimeout(executeInterval, delay);
  }

  setTimeout(executeInterval, delay);
  return id;
}

function clearIntervalPoly(id) {
  delete timerMap[id];
}

console.log("Start");

var intervalId = setIntervalPolyfill(() => {
  console.log("Interval callback executed every 1000ms");
}, 1000);

// Uncomment the line below to test clearIntervalPoly
setTimeout(() => {
  clearIntervalPoly(intervalId);
}, 4000);

console.log("End");
