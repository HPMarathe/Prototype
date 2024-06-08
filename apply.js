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
Function.prototype.myApply = function (obj = {}, rest = []) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }

  if (!Array.isArray(rest)) {
    throw new Error("Type is not array");
  }

  // add a function in object & give reference to the parent function
  // give parameters on function as argument
  obj.fn = this;
  obj.fn(...rest);
};

callMyName.myApply(Anime1, ["Japan", "Mumbai"]);
