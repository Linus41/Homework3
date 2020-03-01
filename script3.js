// declare global variables for prompts/questions
var passwordLength; 
var upperCase;
var lowerCase ;
var specialChars;
var num;


// connect button variable to button in HTML via generate ID 
var button = document.querySelector("#generate");

// create function that stores user input via variables
function generatePasswordOptions() {
    passwordLength = parseInt(prompt("Select a number between 8 and 128"));
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Sorry, you must pick a number between 8 and 128");
        // return shuts down the function for the if statement's code block jic user puts in incorrect #
        return;
    }
    upperCase = confirm("Would you like to use upper case letters in your password?");
    lowerCase = confirm("And how about lower case?");
    specialChars = confirm("Great! And how about special characters?");
    num = confirm("You're almost done! Would you like to include numbers in your password?");
}
// charoptions variable assigned empty array for pushing password criteria into
var charOptions = [];

// Create functions that hold array for each criteria category, returns array to be pushed into charOptions further down
function pickUpper() {
    return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
}
console.log(pickUpper);
function pickLower() {
    return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
}

function pickSpecialChar() {
    return ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
}

function pickNums() {
    return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
}



// this function holds all user options and applies "if" statements to each criteria to push choices
//  into charOptions array using the concat method to combine two or more arrays
function generatePassword() {
    generatePasswordOptions();
    if(upperCase) {
        // this adds the array to itself and adds the contents of pickUpper array
        charOptions = charOptions.concat(pickUpper());
    }
    // this adds the new array to itself and adds the contents of pickLower array
    if(lowerCase) {
        charOptions = charOptions.concat(pickLower());
    }
    // ...and so forth until the array is full of all the options chosen by user
    if(specialChars) {
        charOptions = charOptions.concat(pickSpecialChar());
    }
    if(num) {
        charOptions = charOptions.concat(pickNums());
    }
    // logged charOptions to make sure they were showing up in console and that I'm on the right track!
    console.log(charOptions);
    // created empty string for password variable to pass into browser bc browser only accepts strings?
    var password = ""

    // created new function with "for" loop to loop through charOptions array to reach password length
    // chosen by user
    for(var i = 0; i < passwordLength; i++) {
        // this sets the password variable to hold itself (empty) plus the charOptions array with a method
        // that randomizes the array's contents and ends at the predetermined length, now stored in...oh god 
        // I'm still confused...why don't we have to ever use "i" from the for loop ever again? And how does passwordLength
        // translate into charOptions.length?? Got some help on this section, still trying to understand
        password = password + charOptions[Math.floor(Math.random() * charOptions.length)];
    }
        console.log(password);
        // This new variable connects to id password from HTML and thus the textarea
    var passwordText = document.querySelector("#password");
// This takes the new variable, which is linked to textarea, and grabs the contents of var password, which holds
//  all the password user input, and puts password's info into the textarea
    passwordText.value = password;

    }
    


// this is called immediately via line 4, calls generate password upon click
button.addEventListener("click", generatePassword);
