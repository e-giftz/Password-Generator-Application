// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create arrays to hold the list of various characters
/*var lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var myNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "~", "?", "/", " ", "'", ",", ".",";", ":", "<", ">", "]", "[", "{", "}", "|", "`"];
*/
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}-=|;:'?><,./~`[]";

// Generate password using the criteria selected by user
function generatePassword(){

    // Variables to store user input
    var length = Number(window.prompt("How many characters would you like your password to be?"));
    while (isNaN(length) || length < 8 || length > 128){
        window.alert("Try again - the Password length must be between 8 to 128 numeric value");
        var length = Number(window.prompt("How many characters would you like your password to be?"));
    }

    window.alert("Your password will contain " + " "+ length + " characters");
  
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
    ranPassword = "";

    // Using for loop to select character for each iteration
    for (var i=0;  i<length; ++i) {
        //ranPassword = Math.floor(Math.random() * characters.length);
        ranPassword += characters.charAt(Math.floor(Math.random() * characters.length));
        console.log(ranPassword);
    }
    return ranPassword;

}
// Write password to the #password input
    function writePassword() {
        var password = generatePassword()
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

