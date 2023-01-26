/*****************HEADER************************/
/* Name: Amelia Eric-Markovic
Student ID: 100818139
Date: January 26th, 2023
Title: ICE02*/
/***********************************************/



//console.log("formValidation.js loaded");

// /**
//  * Validate the email address
//  * @param {string} email    the email address to validate
//  * @returns {boolean}        to indicate if the email is valid
//  */
// function ValidateEmailAddressSimple(emailString) {
//     console.log('in ValidateEmailAddress');

//     // check for @ sign
//     let atSymbol = emailString.indexOf('@');
//     if(atSymbol < 1) return false;

//     let dot = emailString.indexOf('.');
//     if(dot <= atSymbol + 2) return false;

//     // check that the dot is not at the end
//     if (dot === emailString.length - 1) return false;

//     return true;
// }

// /*
//  * Validate the email address
// * @param {string} emailString
// * @returns {boolean}    validation result
// */
// function ValidateEmailAddressRegex(emailString) {
//     //the regular expression to validate the email address for string+string|number bewten 2-20 characters
//     // note the / and / at the beginning and end of the expression
//     let emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

//     //return true if the email address is valid - how to use regex
// 	return !!emailString && typeof emailString === 'string'
// 		&& emailString.match(emailRegex);
// }

// Function to check the username is valid
function validateUsername() {
    // Setting the text box to a variable
    let usernameInput = document.getElementById('usernameInput');
    // Setting the error label to a variable
    let usernameError = document.getElementById('usernameError');
    // Presetting the background colour to white
    let backgroundColor = "#ffffff";
    // Making a blank error message variable
    let usernameErrorMessage = "";
    // Defining the REGEX for the username requirements
    let usernameRegex = '^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$';
    // Checks if the username is less than 8 characters in length
    if(usernameInput.value.length < 8) {
        // Sets the error message and light red error colour
        usernameErrorMessage = "Username must be at least 8 characters.";
        backgroundColor = "#e5989b";
    // Checks if the username is greater than 20 characters in length
    }else if(usernameInput.value.length > 20) {
        // Sets the error message and light red error colour
        usernameErrorMessage = "Username must be less than 20 characters.";
        backgroundColor = "#e5989b";
    // Checks if the username out of the REGEX bounds
    } else if(!usernameInput.value.match(usernameRegex)) {
        // Sets the error message and light red error colour
        usernameErrorMessage = "Username cannot contain spaces.";
        backgroundColor = "#e5989b";
    }
    // Sets the error message and the background colour
    usernameError.innerHTML = usernameErrorMessage;
    usernameInput.style.backgroundColor = backgroundColor;
}

// Function to clear any error messages
function clearErrorMessages() {
    // Setting the error labels to a variable
    let errors = document.getElementsByClassName('errorOut');
    // Loops through all error labels and clears them
    for(let i = 0; i < errors.length; i++){
            errors[i].innerHTML = "";
    }
}

//TODO:
// Make all fields required - DONE
// Add a pattern attribute in the telephone element (HTML) 
// Ensure the password is redacted into dots on screen when typed in - DONE
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!) - DONE
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?) - DONE
// Validate the username when the form is submitted - DONE
// Clear any additional error message and highlighting when the form is reset - DONE
// COMMENT EVERYTHING :D - DONE
// Pop your .js file into the meeting chat when you're done and we'll have a look at some examples! (Feel free to leave your name off)

// Setting the submit button to a variable
let submitButton = document.getElementById('submit-reg-form');
// Begins if the button is clicked
if(submitButton) {
    // Activates the validate username function
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        validateUsername()
    }, false);
}

// Setting the reset button to a variable
let resetButton = document.getElementById('reset-reg-form');
// Begins if the button is clicked
if(resetButton){
    // Activates the clear error messages function
    resetButton.addEventListener('click', function (e) {
        clearErrorMessages();
    });
}