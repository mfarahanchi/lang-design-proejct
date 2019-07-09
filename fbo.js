grades = [14, 12, 9, 15, 7, 17, 19, 16, 18, 19.5, 16.5];

function Student(grades) {
  let _grades = grades;
  return {
    getGrades: function() {
      return _grades;
    },
    getBestGrade: function() {
      if (_grades.length <= 0) return null;
      let max = _grades[0];
      for (let i = 1; i < _grades.length; i++) {
        if (_grades[i] > max) {
          max = _grades[i];
        }
      }
      return max;
    }
  };
}

const carlos = Student(grades); // no need to use new keyword, because it's a function
console.log(carlos.getGrades()); // Outputs: [1,3,8,5]
console.log(carlos.getBestGrade()); // Outputs: 8
