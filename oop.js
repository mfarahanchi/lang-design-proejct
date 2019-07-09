console.log("hello");
grades = [14, 12, 9, 15, 7, 17, 19, 16, 18, 19.5, 16.5];

function getBestGrade(grades) {
  if (grades.length <= 0) return null;
  let max = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > max) {
      max = grades[i];
    }
  }
  return max;
}

console.log("best grade: " + getBestGrade(grades));
