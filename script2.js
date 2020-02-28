// setting up variables to store values from prompts:
var passwordLength = 0; 
var upperCase;
var lowerCase ;
var specialChars;
var num;


// grabbing DOM object for generate Password line 22 html
var button = document.querySelector("#generate");


function generatePasswordConditions() {
     passwordLength = parseInt(prompt("Select a number between 8 and 128"));
     upperCase = confirm("Would you like to use upper case letters in your password?");
     lowerCase = confirm("And how about lower case?");
     specialChars = confirm("Great! And how about special characters?");
     num = confirm("You're almost done! Would you like to include numbers in your password?");
//     // if password length is out of bounds (two different if statements; less than 8 / greater than 128 use alert to tell them and use keyword return)
// //    returning above conditions to an object, stores true or false, these results get stored in line 24 generatePassword variable
//     var passwordOptionsOBJ = {
//         length: passwordLength,
//         hasuppercase: upperCase,
//         haslowercase: lowerCase,
//         hasspecialchars: specialChars,
//         hasNum: num
//     }
//     // this function has been executed, we are coming out of the function, gives the outcome to line 26, acts as key "seals the deal"
//     return passwordOptionsOBJ
}
function generatePassword() {
   // var pwdOptions = generatePasswordConditions();
    //Hold my new password with all combinations user seelected 
    var finalPassword = []; 

    //based all the global vairabl;e bvalues 
    if (lowercase) {
        // in case lower case true, call getrandom function getRandom(lowercaselist) line33
        // new var randomLetter = getRandom(lowercaselist);
        // finalPassword.push(randomLetter);  repeat this at end of each if statement using randomNum
    }

    //Special Chars 
    //NUm Chars 

}
// these arrays can be declared globally up// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

function getRandom(inputArray){
    // Function for getting a random element from an array
  var randIndex = Math.floor(Math.random() * inputArray.length);
  var randElement = inputArray[randIndex];
  return randElement;

}

// declare arrays using var lowercaselist = ['a', 'b', etc] 

    // this is called immediately via line 4, calls generate password upon click
    button.addEventListener("click", generatePassword);