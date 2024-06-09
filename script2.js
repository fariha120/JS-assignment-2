function checkCharacter(char) {
    if (char.length !== 1) {
        console.log("Please enter a single character.");
        return;
    }

    let ascii = char.charCodeAt(0);
    if (ascii >= 48 && ascii <= 57) {
        console.log("The character is a number.");
    } else if (ascii >= 65 && ascii <= 90) {
        console.log("The character is an uppercase letter.");
    } else if (ascii >= 97 && ascii <= 122) {
        console.log("The character is a lowercase letter.");
    } else {
        console.log("The character is neither a number nor a letter.");
    }
}
checkCharacter(prompt("Enter a character:"));

// ------------------------------ 

function compareIntegers() {
    let num1 = parseInt(prompt("Enter the first integer:"));
    let num2 = parseInt(prompt("Enter the second integer:"));

    if (num1 > num2) {
        console.log(num1 + " is larger than " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " is larger than " + num1);
    } else {
        console.log("Both integers are equal.");
    }
}

// Test the function
compareIntegers();

function checkNumberSign() {
    let num = parseFloat(prompt("Enter a number:"));

    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// Test the function
checkNumberSign();

// ---------------------------

function isVowel(char) {
    if (char.length !== 1) {
        console.log("Please enter a single character.");
        return;
    }

    char = char.toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}

// Test the function
console.log(isVowel(prompt("Enter a character:")));

// --------------------------------

function validatePassword() {
    const correctPassword = "mySecret123";
    let userPassword = prompt("Enter your password:");

    if (!userPassword) {
        console.log("Please enter your password");
    } else if (userPassword === correctPassword) {
        console.log("Correct! The password you entered matches the original password.");
    } else {
        console.log("Incorrect password");
    }
}

// Test the function
validatePassword();


// ------------------------------

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);


// -----------------------------------

function convertTime() {
    let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));
    if (time >= 0 && time <= 2359) {
        if (time >= 0 && time < 1200) {
            console.log("Good Morning");
        } else if (time >= 1200 && time < 1700) {
            console.log("Good Afternoon");
        } else if (time >= 1700 && time < 2100) {
            console.log("Good Evening");
        } else if (time >= 2100 && time <= 2359) {
            console.log("Good Night");
        }
    } else {
        console.log("Invalid time entered. Please enter time in 24-hour format.");
    }
}

// Test the function
convertTime();



