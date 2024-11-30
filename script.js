// Part 1: Understanding and Creating Objects
const student = {
    name: "John Doe",
    age: 20,
    enrolled: true,
    courses: ["Math", "Science", "History"],
    displayInfo: function () {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};

// Log the name and age of the student
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);

// Log the result of calling the displayInfo method
console.log(student.displayInfo());