//  Dont use arrrow functions for maaking protype
// reason - this works differently in arrow functions

Array.prototype.myMap = function (cb) {
  // as map creates new array create temp
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  console.log(temp);
  return temp;
};

let arr = [2, 3, 4, 5];
const newArr = arr.myMap(function (num, i, arr) {
  return num * 2;
});

console.log(newArr);
