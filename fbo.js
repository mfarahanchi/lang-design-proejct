grades = [14, 12, 9, 15, 7, 17, 19, 16, 18, 19.5, 16.5];

function Person(name, age) {
  let _name = name;
  let _age = age;
  return function(message) {
    switch (message) {
      case "get-name":
        return function() {
          return _name;
        };

      case "get-age":
        return function() {
          return _age;
        };

      default:
        // console.log("19,", message);
        console.log("No message implemented");
    }
  };
}

function Student(name, age, grades) {
  let _grades = grades;
  let base = Person(name, age);

  return function(message) {
    switch (message) {
      case "get-grades":
        return function() {
          return _grades;
        };

      case "get-best-grade":
        return function() {
          if (_grades.length <= 0) return null;
          let max = _grades[0];
          for (let i = 1; i < _grades.length; i++) {
            if (_grades[i] > max) {
              max = _grades[i];
            }
          }
          return max;
        };

      default:
        // console.log("49,", message);
        return base(message);
    }
  };
}

const johnny = Person("Johnny", 42);
const carlos = Student("Carlos", 22, grades);

console.log(johnny("get-name")()); // Outputs: 'Johnny'
console.log(carlos("get-name")()); // Outputs: 'Carlos' (Polymorphism)

console.log(johnny("get-best-grade")); // Outputs on console: 'No message implemented'
console.log(carlos("get-best-grade")()); // Outputs: 19.5
