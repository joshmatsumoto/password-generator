// Assignment Code
var generateBtn = document.querySelector("#generate");
var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lCharSet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specSet= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", ";", ":", "'", ",", "<", ".", ">", "/", "?","|"]
var uCharSet= ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var finSet= []
var passLength = 0
var character = ""
var pword = ""

function generatePassword(){
  for (i=0; i<=passLength; i++){
    console.log (passLength)
    character = finSet[Math.floor(Math.random() * finSet.length)]
    pword += character
  }
  return pword
}

// Write password to the #password input
function writePassword() {
  passLength=prompt("How many characters will your password be?")
    parseInt(passLength)
    if (passLength>128){
      alert("Password too long, please input an acceptable value")
      return
    }
    if (passLength<8){
      alert("Password too short, please input an acceptable value")
      return
    }
  var ucaseCond = confirm("Do you want your password to contain Uppercasse Letters?");
  var lcaseCond = confirm("Do you want your password to contain Lowercase Letters?");
  var specialCond =  confirm("Do you want your password to contain special characters?");
  var numCondition = confirm("Do you want your password to contain numbers?");
  if (ucaseCond){
    finSet=[...finSet,...uCharSet]
  }
  if (lcaseCond){
    finSet=[...finSet,...lCharSet]
  }
  if (specialCond){
    finSet=[...finSet,...specSet]
  }
  if (numCondition){
    finSet=[...finSet,...numSet]
  }

  var password = generatePassword()

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log (pword)


