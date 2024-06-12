function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    else return a;
  };
}

add = sum(6)(6)(9)(4)();
console.log(add);

function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    else return a;
  };
}
