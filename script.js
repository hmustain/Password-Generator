// Global Variables 
var input;
var confirmNumber;
var confirmLowercase;
var confirmUppercase;
var confirmCharacter;
var choices;

// Objects & Values
// Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Lower case
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Upper Case
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Special Characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~", " "];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Asks user for input
input = parseInt(prompt("How many characters would you like your password to have? Must be between 8 and 128"));

// if statement 
if (!input){
  alert("You must enter a value");

} else if (input < 8 || input > 128){
  input = parseInt(prompt("You must choose between 8 and 128"));

} else {
  confirmNumber = confirm("Will this contain numbers?");
  confirmLowercase = confirm("Will this contain Lowercase letters?");
  confirmUppercase = confirm("Will this contain Uppercase letters?");
  confirmCharacter = confirm("Will this contain special characters? ie: !@#$%^&*()");
};
// what to do w/ 4 negative options
if (!confirmNumber && !confirmLowercase && !confirmUppercase && !confirmCharacter) {
  choices = alert("You must choose a criteria!");
}
// what to do w/ 4 positive options
 else if (confirmNumber && confirmLowercase && confirmUppercase && confirmCharacter) {
  choices = number.concat(lowerCase, upperCase, character);
}
//what to do w/ 3 positive options  
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(lowerCase, upperCase);

 } else if (confirmNumber && confirmLowercase && confirmCharacter) {
  choices = number.concat(lowerCase, character);

 } else if (confirmNumber && confirmUppercase && confirmCharacter) {
  choices = number.concat(upperCase, character);

 } else if (confirmLowercase && confirmUppercase && confirmCharacter) {
  choices = lowerCase.concat(upperCase, character);
 }

//  what to do w/ 2 positive options
else if (confirmNumber && confirmLowercase){
  choices = number.concat(lowerCase);

} else if (confirmNumber && confirmUppercase){
  choices = number.concat(upperCase);

} else if (confirmNumber && confirmCharacter) {
  choices = number.concat(character);

} else if (confirmLowercase && confirmUppercase){
  choices = lowerCase.concat(upperCase);

} else if (confirmLowercase && confirmCharacter){
  choices = lowerCase.concat(character);

} else if (confirmUppercase && confirmCharacter){
  choices = upperCase.concat(character);
}

// what to do w/ 1 positive option
else if (confirmNumber) {
  choices = number;

} else if(confirmLowercase) {
  choices = lowerCase;

} else if (confirmUppercase) {
  choices = upperCase;

} else if (confirmCharacter) {
  choices = character;
};
