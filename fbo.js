function Counter(initial) {
  return function() {
    return initial++;
  };
}

// First we build 2 counters
const c1 = Counter(0);
const c2 = Counter(5);

// Now we show them on the console
console.log(c1()); // Outputs 0
console.log(c1()); // Outputs 1
console.log(c2()); // Outputs 5
console.log(c1()); // Outputs 2
console.log(c2()); // Outputs 6
