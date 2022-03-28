// Set password criteria variables
var specialCharactersSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var lowerCaseLettersSet = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLettersSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbersSet = "0123456789".split("");

// Get Random Number Function
var getRandomInt = function(max) {
  return Math.floor(Math.random() * max);
}

// function to generate password
var generatePassword = function() {
  // Set empty password set and criteria variables
  var passwordCharacterSet = [];
  var specialCharactersPrompt = null;
  var lowerCaseLettersPrompt = null;
  var upperCaseLettersPrompt = null;
  var numbersPrompt = null;
  var passwordLength = null;

  // password criteria prompts
  specialCharactersPrompt = window.confirm("Would you like to include special characters in your password?");
  lowerCaseLettersPrompt = window.confirm("Would you like to include lower case letters in your password?");
  upperCaseLettersPrompt = window.confirm("Would you like to include upper case letters in your password?");
  numbersPrompt = window.confirm("Would you like to include numbers in your password?");

  // password criteria validation
  if (!specialCharactersPrompt && !lowerCaseLettersPrompt && !upperCaseLettersPrompt && ! numbersPrompt) {
    window.alert("You must select at least one of the password criteria. Please try again.");
    return generatePassword();
  }
  
  // password length prompt
  passwordLength = window.prompt("How long would you like your password to be? It must be between 8 and 128 characters.");

  // password length validation
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === null) {
    window.alert("Invalid password length input. Please try again.");
    return generatePassword();
  }

  // if user confirms a prompt, append the confirmed character set to the password character set
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
  
  // Create password based on prompts
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
