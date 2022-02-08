const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
let array = [];
for (let i = 0; i < Object.keys(person).length; i++) {
  array.push(Object.keys(person)[i] + ": " + Object.values(person)[i]);
}
console.log(array);