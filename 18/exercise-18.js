function memoize(fn) {
  let cache = {};
  return function (x) {
    if (x in cache) {
      return cache[x];
    } else {
      cache[x] = fn(x);
      return fn(x);
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

const factorialClosure = memoize(factorial);
console.log(factorialClosure(10));
console.log(factorialClosure(6));
console.log(factorialClosure(5));