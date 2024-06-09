document.write ('<h2>USER INPUT & CONDITIONAL STATEMENT<h2>')

 let city = prompt("Please enter your city name:");

 if (city.toLowerCase() === "karachi") {
     alert("Welcome to the city of lights");
 } else {
     alert("Welcome to " + city);
 }


// question 2

let gender = prompt("Please enter your gender (male/female):")

if (gender === 'female') {  
        alert('Good Morning  Ma’am');
    }

else if ( gender === 'male') {
    alert('Good Morning Sir')
}

// ----------------------------

let color = prompt("Please enter the color of the road traffic signal (Red/Yellow/Green):");

if (color === "red") {
    console.log("Must Stop");
}
 else if (color === "yellow") {
    console.log("Ready to move");
}
 else if (color === "green") {
    console.log("Move now");
}
 else {
    console.log("Invalid color. Please enter 'Red', 'Yellow', or 'Green'.");
}
// -------------------------

let remainingFuel = prompt("Enter the remaining fuel in your car (in litres):");

if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("Your fuel level is enough");
}

// ---------------------------------------------


// a.
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// output: The alert message will be displayed.

// b.
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// c.
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// d.
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e.
 if (true){
alert("True");
}
if (false){
alert("False");
}

// f.
 if("car" < "cat"){
    alert("car is smaller than cat");
    }

    // -----------------------------------------------

  
        // Take input for marks obtained in three subjects
        let marks1 = (prompt("Enter marks obtained in subject 1:"));
        let marks2 = (prompt("Enter marks obtained in subject 2:"));
        let marks3 = (prompt("Enter marks obtained in subject 3:"));
    
        // Take input for total marks
        let totalMarks = parseFloat(prompt("Enter total marks:"));
    
        // Compute the total marks obtained
        let marksObtained = marks1 + marks2 + marks3;
    
        // Compute the percentage
        let percentage = (marksObtained / totalMarks) * 100;

        let grade;
        let remarks;
        if (percentage >= 80) {
            grade = "A";
            remarks = "Excellent";
        } else if (percentage >= 70) {
            grade = "B";
            remarks = "Good";
        } else if (percentage >= 60) {
            grade = "C";
            remarks = "You need to improve";
        } else {
            grade = "F";
            remarks = "Sorry";
        }
    
        document.write("Total Marks: " + 300 + "<br>");
        document.write("Marks Obtained: " + 219 + "<br>");
        document.write("Percentage: " + 73% + "<br>");
        document.write("Grade: B" + "<br>");
        document.write("Remarks:  You need to improve "  + "<br>");


// --------------------------

let userGuess = prompt("Guess the secret number (between 1 and 10):");

if (userGuess === 3) {
    console.log("Bingo! Correct answer");
} else if (userGuess === 3 + 1 || userGuess === 3 - 1) {
    console.log("Close enough to the correct answer");
} else {
    console.log("Try again! The secret number was " + 3);
}

// ---------------------------

    // Take a number input from the user
    let number = prompt("Enter a number to check if it is divisible by 3");

    // Check if the number is divisible by 3
    if (number % 3 === 0) {
        console.log("The number " + number + " is divisible by 3.");
    } else {
        console.log("The number " + number + " is not divisible by 3.");
    }

    // ---------------------------------------------

// Function to check if a number is even or odd
let checkEvenOrOdd = number => number % 2 === 0 ? 'Even' : 'Odd';

let inputNumber = parseInt(prompt('Enter a number to check if it is even or odd:'), 10);

if (!isNaN(inputNumber)) {
    let result = checkEvenOrOdd(inputNumber);
    console.log(`The number ${inputNumber} is ${result}.`);
    alert(`The number ${inputNumber} is ${result}.`);
} else {
    console.log('Invalid input. Please enter a valid number.');
    alert('Invalid input. Please enter a valid number.');
}
// ---------------------------------------------------

// temperatureCheck.js

let temperature = parseInt(prompt('Enter the temperature:'), 10);
let message = '';

if (temperature > 40) {
    message = 'It is too hot outside.';
} else if (temperature > 30) {
    message = 'The Weather today is Normal.';
} else if (temperature > 20) {
    message = 'Today’s Weather is cool.';
} else if (temperature > 10) {
    message = 'OMG! Today’s weather is so Cool.';
} else {
    message = 'The temperature is quite low.';
}
console.log(message);
alert(message);
// -----------------------------------------------


let num1 = parseFloat(prompt('Enter the first number:'));
let num2 = parseFloat(prompt('Enter the second number:'));
let operation = prompt('Enter the operation (+, -, *, /, %):');
let result;

if (operation === '+') {
    result = num1 + num2;
} else if (operation === '-') {
    result = num1 - num2;
} else if (operation === '*') {
    result = num1 * num2;
} else if (operation === '/') {
    result = num1 / num2;
} else if (operation === '%') {
    result = num1 % num2;
} else {
    result = 'Invalid operation';
}

console.log(`The result is: ${result}`);
alert(`The result is: ${result}`);



    

    









    
    
  
    
