function detectCycle(obj) {
  const storeObj = new Set();

  function detect(obj) {
    if (obj && typeof obj === "object") {
      if (storeObj.has(obj)) {
        return true; // Cycle detected
      }
      storeObj.add(obj); // Mark this object as seen
      for (let key in obj) {
        if (detect(obj[key])) {
          // Recursively check properties
          return true;
        }
      }
    }
    return false;
  }

  return detect(obj);
}

// Example usage:

// false
const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
};

// true
const a = {};
const b = { a: a };
a.b = b;
console.log(a);
console.log(detectCycle(a)); // true, there is a cycle
