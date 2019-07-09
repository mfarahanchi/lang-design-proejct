console.log("hello");
grades = [14, 12, 9, 15, 7, 17, 19, 16, 18, 19.5, 16.5];

class Student {
  constructor(grades) {
    this.grades = grades;
    console.log(grades);
  }

  getBestGrade() {
    if (this.grades.length <= 0) return null;
    let max = this.grades[0];
    for (let i = 1; i < this.grades.length; i++) {
      if (this.grades[i] > max) {
        max = this.grades[i];
      }
    }
    return max;
  }
}

const carlos = new Student(grades);
console.log(carlos.getBestGrade());
