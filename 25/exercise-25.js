const person = {
  firstName: "",
  lastName: "",
  setname(name, surname) {
    this.firstName = name;
    this.lastName = surname;
  },
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
let john = Object.assign({}, person);
let simon = Object.assign({}, person);
john.setname("John", "Doe");
simon.setname("Simon", "Collins");
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins