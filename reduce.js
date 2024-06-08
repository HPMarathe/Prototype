const arr = [5, 6, 7, 4, 3, 2, 7];

Array.prototype.myReduce = function (cb, initialVal) {
  // assign initialVal for acc
  var acc = initialVal;

  for (let i = 0; i < this.length; i++) {
    // if user havent given any initialVal assign first value from array
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const reduceArray = arr.myReduce((acc, currVal, i, arr) => {
  //   console.table(acc, currVal, i, arr);
  return acc + currVal;
}, 10);

console.log(reduceArray);
