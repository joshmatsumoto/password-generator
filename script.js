// Assignment Code
var generateBtn = document.querySelector("#generate");


function passwordCriteria(){
  var ucaseCond = confirm("Do you want your password to contain Uppercasse Letters?");
  var lcaseCond = confirm("Do you want your password to contain Lowercase Letters?");
  var specialCond =  confirm("Do you want your password to contain special characters?");
  var numCondition = confirm("Do you want your password to contain numbers?");
};
function passwordLength(){
  var passLength=prompt("How many characters will your passoword be?")
  parseInt(passLength)
  if (passLength > 128){
    alert("Password too long, please input acceptable value")
  }
  if (passLength < 8){
    alert("Password too short, please input acceptable value")
  }
  }
function passwordCharacters
  for (i=0; i>passLength; i++){
    Math.random
  }
 

function generatePassword() {
  passwordLength()
  passwordCriteria()


};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log (passwordLength.prompt)

