// clicking generateBtn will call writePassword
var generateBtn = document.querySelector("#generate");

// Where do I put criteria prompts? Will put here for now
var passwordLength = prompt("Select a number between 8 and 128");

if (passwordLength >= 8 && passwordLength <= 128) {
  var upperCase = confirm("Great! Would you like to use upper case letters in your password?")
} else {
  alert("Sorry, you must choose between 8 and 128!")
}
if (upperCase) {
  var lowerCase = confirm("Okay. And how about lower case letters?")
}
if (lowerCase) { 
  var specialChars = confirm("Would you like to use special characters in your password?")
}
if (specialChars) {
  confirm("Awesome! You're almost there! How about numbers?")
}
if (specialChars) {
  alert("You did it! Now click on the red button to see your incredibly secure password!")
}
// the above prompts work! Hooray! Getting somewhere finallyyyyyyy


// writePassword will call generatePassword, which puts the 
// result on the page BUT generatePassword isn't implemented yet. 
// I need to write generatePassword so that it asks user what they
// want their password to look like; builds the password requested and
// returns the password.

// this is a function called writePassword. Its function body contains two variables: password and passwordText
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // what is .value? Answer: The value property sets or returns the value of the value attribute of a text field.
  passwordText.value = password;
  // seems like i have to use the variables above (from the prompts) to generate and store random 
  // letters, numbers, and special characters. Do I do that here in the function? How??

}
// what is document.bt? Nevermind I replaced it with this and tried to make it so when you access the 
// class card-footer it will do something with the button within that div and then run generatePassword function??
if (document.querySelector("#card-footer")) {
  generatePassword();
}
  // Add event listener to generate button
  // what is addEventListener?
  // below is where the button gets clicked and calls the function writePassword
  generateBtn.addEventListener("click", writePassword);
