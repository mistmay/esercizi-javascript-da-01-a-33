function calculate() {
  let number = 0;
  return {
    add(a) {
      number += a;
      return this;
    },
    multiply(a) {
      number = number * a;
      return this;
    },
    sub(a) {
      number -= a;
      return this;
    },
    divide(a) {
      number = number / a;
      return this;
    },
    printResult() {
      console.log(number);
      return this;
    }
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7