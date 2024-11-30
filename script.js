// Part 1: Understanding and Creating Objects
const student = {
    name: "Nasli Ayoub",
    age: 23,
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

// Part 4: The Spread Operator
const clonedStudent = { ...student, graduationYear: 2024 };
console.log("Cloned Student with Graduation Year:", clonedStudent);

const additionalCourses = ["Art", "Music"];
const allCourses = [...student.courses, ...additionalCourses];
console.log("All Courses:", allCourses);

// Part 5: Object Methods
student.addCourse = function (course) {
    this.courses.push(course);
};

student.totalCourses = function () {
    return this.courses.length;
};

// Use the methods
student.addCourse("Programming");
console.log("Updated Courses:", student.courses);
console.log("Total Number of Courses:", student.totalCourses());

// Bonus: Calculate Average Score
const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
console.log("Average Score:", averageScore);