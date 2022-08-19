// start of function for password generation //
function generatePassword (){
  
// boolean variables for prompts //
  var passLength = prompt("How long will your password be? You must pick a number between 8 and 128.");
  var upperCase = confirm("Will your password use uppercase?");
  var lowerCase = confirm("Will your password use lowercase?");
  var numbers  = confirm("Will your password use numbers?");
  var specialCh = confirm("Will your password use special characters?");
  
  // arrays for possible password characters //
  var password = "";
  var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
  var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArr = ["!", "@", "#", "$", "%", "&", "^", "*"];
  var allCharacters = [];

  // if statements to combine arrays //
  if (upperCase === true) { 
    allCharacters.push.apply(allCharacters, upperCaseArr);
  }
  if (lowerCase === true) {
    allCharacters.push.apply(allCharacters, lowerCaseArr);
  }
  if (numbers === true) {
    allCharacters.push.apply(allCharacters, numbersArr);
  }
  if (specialCh === true) {
    allCharacters.push.apply(allCharacters, specialArr);
  }
  
  // makes password random and the exact length selected by the user //
  for (var i=0; i<passLength; i++) {
    var random = Math.floor(Math.random() * allCharacters.length);
    password = password + allCharacters[random];
  }


  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


