const arr = [3, 4, 5, 6, 7, 8, 9];

Array.prototype.myFilter = function (cb) {
  const temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const newArray = arr.myFilter((num, i, arr) => {
  //   console.table(num, i, arr);
  return num > 6;
});

console.log(newArray);
