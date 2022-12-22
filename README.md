# password-generator
## Description 

This application generates passwords of a user's desired length from 8 to 128 characters using possible combinations of upper and lowercase letters, numbers, and/or special characters.

[Visit the Deployed Link Here](https://joshmatsumoto.github.io/password-generator/)


## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

In order to make use of the website, press the generate password button and follow the prompts according to  your password needs

## Usage 

Use this website to create your own password that will contain a random string of elements using the prompters to define what type of characters will appear in the password.

# Password Length Prompt
![password length prompt](https://github.com/joshmatsumoto/password-generator/blob/main/assets/images/passlength.png?raw=true)

# Alert and Prompt Example
```
{
    passLength=prompt("How many characters will your password be?")
    if (passLength<8){
      alert("Password too s, please input an acceptable value")
      return 
}
```

# Example of Password too short
![password is too short example](https://github.com/joshmatsumoto/password-generator/blob/main/assets/images/passtooshort.png?raw=true)

# Alert when password is too short
![resulting alert](https://github.com/joshmatsumoto/password-generator/blob/main/assets/images/passtooshortalert.png?raw=true)

# Uppercase Character Condition
![uppercase charachter set conditions](https://github.com/joshmatsumoto/password-generator/blob/main/assets/images/ucasecond.png?raw=true)

# Lowercase Charachter Condition
![lower case charachter set conditions](https://github.com/joshmatsumoto/password-generator/blob/main/assets/images/lcasecond.png?raw=true)

# Number Charachter Condition
![number charachter set conditions](https://github.com/joshmatsumoto/password-generator/blob/main/assets/images/numcond.png?raw=true)

# Special Charachter Condition
![special charachter set conditions](https://github.com/joshmatsumoto/password-generator/blob/main/assets/images/speccond.png?raw=true)

# Example of Password with all conditins applied
![password example with all conditions applied](https://github.com/joshmatsumoto/password-generator/blob/main/assets/images/allcond.png?raw=true)

# For loop to create random values from adjustable array

```
{
    for (i=0; i<=passLength; i++){
    console.log (passLength)
    character = finSet[Math.floor(Math.random() * finSet.length)]
    pword += character
  }
  return pword
}
```

# Example of Password with only Uppercase Condition Applied
![password example with only uppercase condition applied](https://github.com/joshmatsumoto/password-generator/blob/main/assets/images/ucaseonly.png?raw=true)

# Determining Array based on boolean values
```
{
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
  console.log(finSet)
}
```

# Example of Password with lowercase and Uppercase conditions applied
![password example with lowercase and uppercase conditions applied](https://github.com/joshmatsumoto/password-generator/blob/main/assets/images/ucaseandlcase.PNG?raw=true)




## Credits

McCoy Dickersen: Navigated with error where password was being stored into the log box


## License

N/a

---