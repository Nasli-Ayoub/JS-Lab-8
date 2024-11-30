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

// Part 2: Working with JSON
const studentJSON = JSON.stringify(student);
console.log("Student as JSON:", studentJSON);

// Convert back to object
const newStudent = JSON.parse(studentJSON);
console.log("New Student Object:", newStudent);

// Part 3: Using Destructuring
const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [score1, score2] = scores;
console.log("First Score:", score1);
console.log("Second Score:", score2);