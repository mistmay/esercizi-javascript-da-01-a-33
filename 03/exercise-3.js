const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student);
  return
}

addStudent('Marco');
console.log(students);

/*push() doesn't reassign the variable, it just modifies the memory allocation that the variable refers to 
it's still the same array, but with different contents. we have just changed the reference to the memory allocation */