// Assignment Code
var generateBtn = document.querySelector("#generate");

// Stores all character possibiilities in a variable
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}-=|;:'?><,./~`[]";

// Generate password using the criteria selected by user
function generatePassword(){

    // Variable to store user input
    var length = Number(window.prompt("How many characters would you like your password to be?"));

    // Using if statements to validate user response
    if (isNaN(length)){
        window.alert("Please enter  a valid number");
        var length = Number(window.prompt("How many characters would you like your password to be?"));
    }
    else if (length <= 7 || length > 128) {
        window.alert("Try again - the Password length must be between 8 to 128 numeric value");
        var length = Number(window.prompt("How many characters would you like your password to be?"));
    }
    else {
        window.alert("Your password will contain " + " "+ length + " characters");
    }

    // Variable to store and confirm user input for the different character types
    var confirmLowerCase = confirm ("Would you like to include lowercase letters?");
    var confirmUpperCase = confirm ("Would you like to include uppercase letters?");
    var confirmNumeric = confirm ("Would you like to include numbers?");
    var confirmSpecialChar = confirm ("Would you like to include special characters?");

    // While loop to validate user response to prompts
    while (confirmLowerCase === false && confirmUpperCase ===false && confirmNumeric === false && confirmSpecialChar === false) {
        window.alert("You must select at least one character type");
        // Repeat the prompts to the user
        var confirmLowerCase = confirm ("Would you like to include lowercase letters?");
        var confirmUpperCase = confirm ("Would you like to include uppercase letters?");
        var confirmNumeric = confirm ("Would you like to include numbers?");
        var confirmSpecialChar = confirm ("Would you like to include special characters?");
    }

    // Generating the password
    randomChar = "";

    // Using for loop to select character for each iteration
    for (var i=0;  i<length; ++i) {
        // Use Math function to calculate and generate random characters
        randomChar += characters.charAt(Math.floor(Math.random() * characters.length));
        console.log(randomChar);
    }
    return randomChar;
}
// Write password to the #password input
    function writePassword() {
        var password = generatePassword()
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

