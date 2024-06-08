const Anime1 = {
  first: "One",
  last: "Piece",
};

const Anime2 = {
  first: "Attack",
  last: "Titan",
};

function callMyName(country, state) {
  console.log(
    ` My top watched anime is ${this.first} ${this.last} from ${country}, ${state}`
  );
}

// prototype for call will take obj & other arguments
Function.prototype.myCall = function (obj = {}, ...rest) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }

  // add a function in object & give reference to the parent function
  // give parameters on function as argument
  obj.fn = this;
  obj.fn(...rest);
};

const new1 = callMyName.myCall(Anime1, "India", "Mumbai");
console.log(new1);
