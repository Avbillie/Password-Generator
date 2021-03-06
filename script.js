// Assignment Code
var welcomeMessage = alert("Welcome to password generator!");

console.log("Start of the program")

var generateBtn = document.querySelector("#generate");

let specialCharValues = "!@#$%^&*-_=+";

let numberValues = "1234567890";

let uCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let lCaseValues = "abcdefghijklmnopqrstuvwxyz";

let password = "";

// Generate and return password 

function generatePassword() {

  // Ask user their desired password length
  var passwordLengthChoice = prompt("Choose your desired length of password between 8-128 characters?");

  // Convert passwordLengthChoice to an integer
  // var passwordLength = parseInt(passwordLengthChoice, 10);
  console.log("Length of password?")
  console.log(passwordLength)

  // If passwordLength is greater >= 8 and <= 128 show alert message
  if (passwordLength >= 8 && passwordLength <= 128 && isNaN(passwordLength) == false) {
    alert("Your password will be " + passwordLengthChoice + " characters long.")
  }
  // If passwordLengthChoice prompt button cancel is hit then exit program
  if (passwordLengthChoice === null) {
    return;
  }

  // Loop while passwordLength < 8 or while passwordLength > 128 or while passwordLength is not a number(integer),
  // show alert message and re-ask user their desired password length
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) == true) {

    alert("Please enter a number value between 8-128.");
    console.log("Please enter a number value.");
    var passwordLengthChoice = prompt("Choose your desired length of password between 8-128 characters?");
    console.log("Length of password?")
    var passwordLength = parseInt(passwordLengthChoice, 10);
    console.log(passwordLength)

    // If passwordLengthChoice prompt button cancel is hit then exit program
    if (passwordLengthChoice === null) {
      return;
    }

    // If passwordLength is greater >= 8 and <= 128 and is a number(integer) show alert message
    if (passwordLength >= 8 && passwordLength <= 128 && isNaN(passwordLength) == false) {
      alert("Your password will be " + passwordLengthChoice + " characters long.");
    }

    // If passwordLength is not a number(integer) show alert message and re-ask user their desired password length
    if (isNaN(passwordLength) == true) {
      alert("Invalid character, please enter a numberValues between 8-128.")
      var passwordLengthChoice = prompt("Choose your desired length of password between 8-128 characters?");
    }
  }

  //  --------------------------------------------------------------------------------------------------------------------------------------------

  // Ask user if they want to include special characters in password
  var specialCharChoice = prompt("Do you want to include special characters(~,`,!,@,#,$,%,^,&,*,-,_,=,+?)?").toUpperCase();
  console.log("Include special Character?")
  console.log(specialCharChoice);

  // If specialCharChoice is equal to yes or equal to no then validate equals true
  if (specialCharChoice == "yes".toUpperCase() || specialCharChoice == "no".toUpperCase()) {
    var validate = true;
    // if specialCharChoice is not equal to yes or is not equal to no then validate equals false
  } else if (specialCharChoice !== "yes".toUpperCase() || specialCharChoice !== "no".toUpperCase())
    var validate = false;

  // If specialCharChoice is equal to yes then show alert message
  if (specialCharChoice == "yes".toUpperCase() && validate == true) {
    alert("Your password will include special characters.");
    // If specialCharChoice is equal to yes then show alert message
  } else if (specialCharChoice == "no".toUpperCase() && validate == true) {
    alert("Your password will not include special characters.")
  }

  // If specialCharChoice prompt cancel button is hit then exit program
  if (specialCharChoice === null) {
    console.log("User has exited the program")
    return;
  }

  // Loop while validate is equal to false, if validate is equal to false then show alert message 
  // and re-ask user if they want to include special characters in password
  while (validate == false) {

    alert("Please enter either yes or no.");
    console.log("Please enter either yes or no.");
    var specialCharChoice = prompt("Do you want to include special characters(~,`,!,@,#,$,%,^,&,*,-,_,=,+?)?").toUpperCase();
    console.log("Include special characters?")
    console.log(specialCharChoice);

    // If specialCharChoice prompt cancel button is hit then exit program
    if (specialCharChoice === null) {
      console.log("User has exited the program")
      return;
    }

    // If specialCharChoice is equal to yes then show alert message and validate equals true
    if (specialCharChoice == "yes".toUpperCase()) {
      alert("Your password will include special characters.")
      var validate = true;
      // If specialCharChoice is equal to no then show alert message and validate equals true
    } else if (specialCharChoice == "no".toUpperCase()) {
      alert("Your password will not include special characters.")
      var validate = true;
    }
  }

  //  --------------------------------------------------------------------------------------------------------------------------------------------

  // Ask user if they want to include numbers in password
  var numberValuesCharChoice = prompt("Do you want to include numeric chracters (0,1,2,3,4,5,6,7,8,9)?").toUpperCase();
  console.log("Include numeric Character?")
  console.log(numberValuesCharChoice);

  // If numberValuesCharChoice is equal to yes or equal to no then validate equals true
  if (numberValuesCharChoice == "yes".toUpperCase() || numberValuesCharChoice == "no".toUpperCase()) {
    var validate = true;
    // if numberValuesCharChoice is not equal to yes or is not equal to no then validate equals false
  } else if (numberValuesCharChoice !== "yes".toUpperCase() || numberValuesCharChoice !== "no".toUpperCase())
    var validate = false;

  // If numberValuesCharChoice is equal to yes then show alert message
  if (numberValuesCharChoice == "yes".toUpperCase() && validate == true) {
    alert("Your password will include numeric characters.")

    // If numberValuesCharChoice is equal to no then show alert message
  } else if (numberValuesCharChoice == "no".toUpperCase() && validate == true) {
    alert("Your password will not include numeric characters.")
  }

  // If numberValuesCharChoice prompt cancel button is hit then exit program
  if (numberValuesCharChoice === null) {
    console.log("User has exited the program")
    return;
  }

  // Loop while validate is equal to false, if validate is equal to false show alert message 
  // and re-ask user if they want to include numbers in password
  while (validate == false) {

    alert("Please enter either yes or no.")
    console.log("Please enter either yes or no.")
    var numberValuesCharChoice = prompt("Do you want to include numeric chracters (0,1,2,3,4,5,6,7,8,9)?").toUpperCase();
    console.log("Include numeric chracters?")
    console.log(numberValuesCharChoice)

    // If numberValuesCharChoice prompt cancel button is hit then exit program
    if (numberValuesCharChoice === null) {
      console.log("User has exited the program")
      return;
    }

    // If numberValuesCharChoice is equal to yes then show alert message and validate equals true
    if (numberValuesCharChoice == "yes".toUpperCase()) {
      alert("Your password will include numeric characters.")
      var validate = true;
      // If numberValuesCharChoice is equal to no then show alert message and validate equals true
    } else if (numberValuesCharChoice == "no".toUpperCase()) {
      alert("Your password will not include numeric characters.")
      var validate = true;
    }
  }

  //  --------------------------------------------------------------------------------------------------------------------------------------------

  // Ask user if they want to include upper case characters in password
  var uCaseCharChoice = prompt("Do you want to include upper case characters?").toUpperCase();
  console.log("Include upper case characters?")
  console.log(uCaseCharChoice);

  // If uCaseCharChoice is equal to yes or equal to no then validate equals true
  if (uCaseCharChoice == "yes".toUpperCase() || uCaseCharChoice == "no".toUpperCase()) {
    var validate = true;
    // If uCaseCharChoice is not equal to yes or  is not equal to no then validate equals false
  } else if (uCaseCharChoice !== "yes".toUpperCase() || uCaseCharChoice !== "no".toUpperCase())
    var validate = false;

  // If uCaseCharChoice is equal to yes show alert message
  if (uCaseCharChoice == "yes".toUpperCase() && validate == true) {
    alert("Your password will include upper case characters.")

    // If uCaseCharChoice is equal to no show alert message
  } else if (uCaseCharChoice == "no".toUpperCase() && validate == true) {
    alert("Your password will not include upper case characters.")
  }

  // If uCaseCharChoice prompt cancel button is hit then exit program
  if (uCaseCharChoice === null) {
    console.log("User has exited the program")
    return;
  }

  // Loop while validate is equal to false, if validate is equal to false show alert message and 
  // re-ask user if they want to include upper case characters in password
  while (validate == false) {

    alert("Please enter either yes or no.")
    console.log("Please enter either yes or no.")
    var uCaseCharChoice = prompt("Do you want to include upper case characters?").toUpperCase();
    console.log("Include upper case characters?")
    console.log(uCaseCharChoice)

    // If uCaseCharChoice prompt cancel button is hit then exit program
    if (uCaseCharChoice === null) {
      console.log("User has exited the program")
      return;
    }

    // If uCaseCharChoice is equal to yes show alert message and validate equals true
    if (uCaseCharChoice == "yes".toUpperCase()) {
      alert("Your password will include upper case characters.")
      var validate = true;
      // If uCaseCharChoice is equal to no show alert message and validate equals true
    } else if (uCaseCharChoice == "no".toUpperCase()) {
      alert("Your password will not include upper case characters.")
      var validate = true;
    }
  }

  //  --------------------------------------------------------------------------------------------------------------------------------------------

  // Ask user if they want to include lower case characters in password
  var lCaseCharChoice = prompt("Do you want to include lower case characters?").toUpperCase();
  console.log("Include lower case characters?")
  console.log(lCaseCharChoice);

  // If lCaseCharChoice is equal to yes or equal to no then validate equals true
  if (lCaseCharChoice == "yes".toUpperCase() || lCaseCharChoice == "no".toUpperCase()) {
    var validate = true;
    // If lCaseCharChoice is not equal to yes or  is not equal to no then validate equals false
  } else if (lCaseCharChoice !== "yes".toUpperCase() || lCaseCharChoice !== "no".toUpperCase())
    var validate = false;

  // If lCaseCharChoice is equal to yes show alert message
  if (lCaseCharChoice == "yes".toUpperCase() && validate == true) {
    alert("Your password will include lower case characters.")
    // If lCaseCharChoice is equal to no show alert message
  } else if (lCaseCharChoice == "no".toUpperCase() && validate == true) {
    alert("Your password will not include lower case characters.")
  }

  // If lCaseCharChoice prompt cancel button is hit then exit program
  if (lCaseCharChoice === null) {
    console.log("User has exited the program")
    return;
  }

  // Loop while validate is equal to false, if validate is equal to false show alert message 
  // and re-ask user if they want to include lower case characters in password
  while (validate == false) {

    alert("Please enter either yes or no.")
    console.log("Please enter either yes or no.")
    var lCaseCharChoice = prompt("Do you want to include lower case characters?").toUpperCase();
    console.log(lCaseCharChoice)

    // If lCaseCharChoice prompt cancel button is hit then exit program
    if (lCaseCharChoice === null) {
      console.log("User has exited the program")
      return;
    }

    // If lCaseCharChoice is equal to yes show alert message and validate equals true
    if (lCaseCharChoice == "yes".toUpperCase()) {
      alert("Your password will include lower case characters.")
      var validate = true;
      // If lCaseCharChoice is equal to yes show alert message and validate equals true
    } else if (lCaseCharChoice == "no".toUpperCase()) {
      alert("Your password will not include lower case characters.")
      var validate = true;
    }
  }

  //  --------------------------------------------------------------------------------------------------------------------------------------------

  // Resets password value upon each iteration of password creation
  var reset = password = "";
  console.log("Creating Password...")

  // Loop for every number(i) that is less than the passwordLength
  for (i = 0; i < passwordLength;) {

    // If specialCharChoice is equal to yes and i(number) is not equal to passwordLength then store a random character 
    // from specialCharValues into the variable password and add 1 to the value of i
    if (specialCharChoice == "yes".toUpperCase() && i != passwordLength) {
      password = password + specialCharValues.charAt(Math.floor(Math.random() * Math.floor(specialCharValues.length - 1)));
      i += 1
    }

    // If numberValuesCharChoice is equal to yes and i(number) is not equal to passwordLength then store a random character 
    // from numberValuesCharChoice into the variable password and add 1 to the value of i
    if (numberValuesCharChoice == "yes".toUpperCase() && i != passwordLength) {
      password = password + numberValues.charAt(Math.floor(Math.random() * Math.floor(numberValues.length - 1)));
      i += 1
    }

    // If uCaseCharChoice is equal to yes and i(number) is not equal to passwordLength then store a random character 
    // from uCaseCharChoice into the variable password and add 1 to the value of i
    if (uCaseCharChoice == "yes".toUpperCase() && i != passwordLength) {
      password = password + uCaseValues.charAt(Math.floor(Math.random() * Math.floor(uCaseValues.length - 1)));
      i += 1
    }

    // If lCaseCharChoice is equal to yes and i(number) is not equal to passwordLength then store a random character 
    // from lCaseCharChoice into the variable password and add 1 to the value of i
    if (lCaseCharChoice == "yes".toUpperCase() && i != passwordLength) {
      password = password + lCaseValues.charAt(Math.floor(Math.random() * Math.floor(lCaseValues.length - 1)));
      i += 1
    }
    console.log(password)
  }
  console.log("Password Created:" + password)

  // Store password value
  return password;
}

// Write password to the #password input 
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)