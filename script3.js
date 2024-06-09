
let studentNames = [];
studentNames.push('Aleena');
studentNames.push('Bushra');
studentNames.push('Fatima');

console.log(studentNames); 

// -------------------------------------

let studentNames2 = new Array();

studentNames2.push('Aleena');
studentNames2.push('Bushra');
studentNames2.push('Fatima');

console.log(studentNames2); 

// -------------------------------------

// strings array
let stringsArray = ['Hello', 'World', 'Array'];

alert('Strings Array: ' + stringsArray);

// ------------------------------------

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbersArray);
alert('Numbers Array: '+ numbersArray);

// -------------------------------------------

//boolean array
let booleanArray = [true, false, true, false,];

console.log(booleanArray);
alert('Boolean Array: ' + booleanArray);

// ---------------------------

// mixed array
let mixedArray = [ 'Hello', true, null,  "name", [1, 2, 3]];

console.log(mixedArray);
alert('Mixed Array: '+ mixedArray);

// -------------------------

// Declare and initialize the array with education qualifications
let qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

let qualificationsList = '<h1>Available Education Qualifications in Pakistan</h1><ul>';
for (let i = 0; i < qualifications.length; i++) {
    qualificationsList += '<li>' + qualifications[i] + '</li>';
}
qualificationsList += '</ul>';
document.write(qualificationsList);

// -----------------------------------------

// arrays for student names and scores
let studentNames3 = ['Michael', 'Jhon', 'Tony'];
let studentScores = [320, 230, 480];
const totalMarks = 500;

let output = '<h1>Student Scores and Percentages</h1><ul>';
for (let i = 0; i < studentNames3.length; i++) {
    let percentage = (studentScores[i] / totalMarks) * 100;
    output += `<li>${studentNames3[i]}: Score = ${studentScores[i]}, Percentage = ${percentage.toFixed(2)}%</li>`;
}
output += '</ul>';
document.write(output);

 // -------------------------------


// Initialize an array with color names
let colors = ['Red', 'Green', 'Blue'];
console.log('Initial colors:', colors);
alert('Initial colors: ' + colors);

// a. Add a color in the beginning
let colorToAddBeginning = prompt('Enter a color to add to the beginning:');
colors.unshift(colorToAddBeginning);
console.log('Updated colors:', colors);
alert('Updated colors: ' + colors);

// b. Add a color to the end
let colorToAddEnd = prompt('Enter a color to add to the end:');
colors.push(colorToAddEnd);
console.log('Updated colors:', colors);
alert('Updated colors: ' + colors);

// c. Add two more colors to the beginning
colors.unshift('Purple', 'Orange');
console.log('Updated colors:', colors);
alert('Updated colors: ' + colors);

// d. Delete the first color
colors.shift();
console.log('Updated colors:', colors);
alert('Updated colors: ' + colors);

// e. Delete the last color
colors.pop();
console.log('Updated colors:', colors);
alert('Updated colors: ' + colors);

// f. Add a color at a specific index
let indexToAdd = parseInt(prompt('Enter the index to add a color:'), 10);
let colorToAdd = prompt('Enter the color to add:');
colors.splice(indexToAdd, 0, colorToAdd);
console.log('Updated colors:', colors);
alert('Updated colors: ' + colors);

// g. Delete color(s) from a specific index
let indexToDelete = parseInt(prompt('Enter the index to delete color(s):'), 10);
let numToDelete = parseInt(prompt('Enter the number of colors to delete:'), 10);
colors.splice(indexToDelete, numToDelete);
console.log('Updated colors:', colors);
alert('Updated colors: ' + colors.join);

// -------------------------------------

// Declare and initialize the array with student scores
let ScoresOfStudents = [320, 230, 480, 120,];

document.write('Orderd Scores of students:', ScoresOfStudents);
alert('Orderd Scores of students: ' + ScoresOfStudents);

ScoresOfStudents.sort((a, b) => a - b);

document.write('Orderd Scores of students:', ScoresOfStudents);
alert('Orderd Scores of students: ' + ScoresOfStudents);

// ------------------------------------------

// Initialize an array with city names
let cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
let selectedCities = cities.slice(2, 4);

console.log('Cities:', cities);
console.log('Selected Cities:', selectedCities);

// -------------------------------------------

// Initialize the array join method
var arr = ["This", " is", " my", " cat"];
var singleString = arr.join("");

console.log(singleString);


// -------------------------------

// Create a new array
let queue = [];

// Add values to the array (FIFO order)
queue.push('keyboard');
queue.push('mouse');
queue.push('printer');
queue.push('monitor');

// Access and display values in FIFO order
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());


// -----------------------------

// Create a new array
let stack = [];

// Add values to the array (LIFO order)
stack.push('keyboard');
stack.push('mouse');
stack.push('printer');
stack.push('monitor');

console.log(stack.pop()); 
console.log(stack.pop());
console.log(stack.pop()); 
console.log(stack.pop()); 

