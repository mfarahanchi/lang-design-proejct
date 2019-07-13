grades = [14, 12, 9, 15, 7, 17, 19, 16, 18, 19.5, 16.5];

class Message {
  constructor(name, attr, bhv) {
    // name
    this._name = name;
    // attributes
    this._attr = attr;
    // behaviour
    this._bhv = bhv;
  }
  getName() {
    return this._name;
  }
  getAttr() {
    return this._attr;
  }
  getBhv() {
    return this._bhv;
  }
}

function Person(name, age) {
  let _name = name;
  let _age = age;
  return function(message) {
    switch (message.getName()) {
      case "get-name":
        return function() {
          if (message.getAttr()["new"])
            return _name + " (" + message.getBhv()["length"](_name) + ")";
          return _name + " (old one)";
        };

      case "get-age":
        return function() {
          return _age;
        };

      default:
        console.log("No message implemented");
    }
  };
}

function Student(name, age, grades) {
  let _grades = grades;
  let base = Person(name, age);

  return function(message) {
    switch (message.getName()) {
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
        return base(message);
    }
  };
}

const johnny = Person("Johnny", 42);
const carlos = Student("Carlos", 22, grades);

const mesJohn = new Message(
  "get-name",
  { new: true },
  {
    length: function(a) {
      return a.length;
    }
  }
);

const mesCarl = new Message("get-name", { new: false }, {});
console.log(johnny(mesJohn)()); // Outputs: 'Johnny'
console.log(carlos(mesCarl)()); // Outputs: 'Carlos' (Polymorphism)

const mesJohn2 = new Message("get-best-grade", {}, {});
const mesCarl2 = new Message("get-best-grade", {}, {});

console.log(johnny(mesJohn2)); // Outputs on console: 'No message implemented'
console.log(carlos(mesCarl2)()); // Outputs: 19.5
