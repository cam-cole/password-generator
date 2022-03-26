// Set character set and condition prompt variables
var passwordCharacterSet = [];
var specialCharactersSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var lowerCaseLettersSet = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLettersSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbersSet = "0123456789".split("");

var specialCharactersPrompt = window.confirm("Would you like to include special characters in your password?");
var lowerCaseLettersPrompt = window.confirm("Would you like to include lower case letters in your password?");
var upperCaseLettersPrompt = window.confirm("Would you like to include upper case letters in your password?");
var numbersPrompt = window.confirm("Would you like to include numbers in your password?");
var passwordLength = window.prompt("How long would you like your password to be? It must be between 8 and 128 characters.");

// Get Random Number Function
var getRandomInt = function(max) {
  return Math.floor(Math.random() * max);
}

// if user confirms a prompt, append the character set to the password character set
if (specialCharactersPrompt) {
  passwordCharacterSet.push.apply(passwordCharacterSet,specialCharactersSet);
}

if (lowerCaseLettersPrompt) {
  passwordCharacterSet.push.apply(passwordCharacterSet,lowerCaseLettersSet);
}

if (upperCaseLettersPrompt) {
  passwordCharacterSet.push.apply(passwordCharacterSet,upperCaseLettersSet);
}

if (numbersPrompt) {
  passwordCharacterSet.push.apply(passwordCharacterSet,numbersSet);
}

console.log(passwordCharacterSet);
console.log(passwordCharacterSet.length)

// function to generate password
var generatePassword = function() {
  password = "";
  for (var i = 0; i < passwordLength; i++) {
    character = passwordCharacterSet[getRandomInt(passwordCharacterSet.length)];
    console.log(character);
    password += character;
  }
  console.log(password);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
