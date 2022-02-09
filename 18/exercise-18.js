function memoize(fn) {
  let cache = {};
  return function (x) {
    if (x in cache) {
      return cache[x];
    }
    const y = fn(x);
    cache[x] = y;
    return y;
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));