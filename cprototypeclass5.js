//https://www.geeksforgeeks.org/JS-Prototype/
//protype means to add the data in bwetwwn in the program
function Person(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

// This will show Person's prototype property
console.log(Person.prototype);
//
function Person(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

Person.prototype.calculateAge = function () {
    console.log('The current age is: ' + (2019 - this.yearOfBirth));
}

console.log(Person.prototype);
let Person1 = new Person('Jenni', 'clerk', 1986);
console.log(Person1)
let Person2 = new Person('Madhu', 'Developer', 1997);
console.log(Person2)

Person1.calculateAge();
Person2.calculateAge();