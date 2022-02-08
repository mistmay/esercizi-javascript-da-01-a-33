function sumUntil(maxValue) {
  let sum = 0;
  let string = "OUTPUT: ";
  for (let i = 1; i <= 5; i++) {
    sum += i;
    string += i;
    if (i < 5) {
      string += " + ";
    } else {
      string += " = ";
    }
  }
  string += sum;
  return string;
}

console.log(sumUntil(5));