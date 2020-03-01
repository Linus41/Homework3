// declare global variables for prompts/questions
var passwordLength; 
var upperCase;
var lowerCase ;
var specialChars;
var num;
var upperChar = ["A", "B"];
var lowerChar = ["a", "b"];

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

// Do this for every one of them
function pickUpper() {
    return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
}



function pickLower() {
    return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
}

function pickSpecialChar() {
    return ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
}

function pickNums() {
    return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
}



// create new function with for loop to loop through array based on password length from user input
function generatePassword() {
    generatePasswordOptions();
    if(upperCase) {
        charOptions = charOptions.concat(pickUpper());
    }
    if(lowerCase) {
        charOptions = charOptions.concat(pickLower());
    }
    if(specialChars) {
        charOptions = charOptions.concat(pickSpecialChar());
    }
    if(num) {
        charOptions = charOptions.concat(pickNums());
    }
    
    console.log(charOptions);
    var password = ""
    for(var i = 0; i < passwordLength; i++) {
        password = password + charOptions[Math.floor(Math.random() * charOptions.length)];
    }
        console.log(password);
    

    }
    var password = document.querySelector("#password");
    // need to get value of "password" variable to the textarea!
    // set result variable to textarea

// this is called immediately via line 4, calls generate password upon click
button.addEventListener("click", generatePassword);
