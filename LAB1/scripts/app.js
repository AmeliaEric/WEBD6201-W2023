/**********HEADER**********
Name: Amelia Eric-Markovic
Date: January 31st, 2022
Student ID: 100818139
***************************/

/*
 *Takes in information from the contact form, displays it to the console, and then goes to the index.html page.
 * @param {event} e
 */
function timeRedirect(e) {
    // Setting up the variable to hold the first name collected
    let contactFirst = document.getElementById('FirstName01').value;
    // Setting up the variable to hold the last name collected
    let contactLast = document.getElementById('LastName01').value;
    // Setting up the variable to hold the phone number collected
    let contactNumber = document.getElementById('Contact01').value;
    // Setting up the variable to hold the email collected
    let contactAddress = document.getElementById('Email01').value;
    // Setting up the variable to hold the short message collected
    let contactMessage = document.getElementById('Message01').value;
    // SGiving the console the information formatted nicley to output
    console.log("Name: " + contactFirst + " " + contactLast + " \nContact Number: " + contactNumber + " \nEmail Address: " + contactAddress + " \nShort Message: " + contactMessage);
    e.preventDefault();
    // Works to change the current page to the home page after 3 seconds.
    setTimeout(function () { 
        window.location.href = "index.html";
    }, 3000);
}

// Setting the submit button to a variable
let submitButton = document.getElementById('submit-button');
// Begins if the button is clicked
if(submitButton) {
    // Calls the redirect timer function
    submitButton.addEventListener('click', timeRedirect, false);
}

// Calling all of the "nav-link" class element
let navLinks = document.getElementsByClassName("nav-link");
// Loops through all of the element in the nodelist
for (let i = 0; i < navLinks.length; i++) {
    // Checks the value/text of the element is "Product"
    if (navLinks[i].innerHTML == "Products") {
        // Changes the text to be "Interests"
        navLinks[i].innerHTML = "Interests";
    }
    // Checks the value/text of the element is "About Us"
    if (navLinks[i].innerHTML == "About Us") {
        // Creating a 'a' element 
        let humanLink = document.createElement('a');
        // Adds the list of classes to the element
        humanLink.classList.add('nav-item', 'nav-link');
        // Setting the attribute of having a link to the element
        humanLink.setAttribute('href', '#');
        // Creating a 'i' element 
        let icon = document.createElement('i');
        // Adds the list of classes to the element
        icon.classList.add('fas', 'fa-users');
        // Setting the attribute of having a icon of people to the element
        humanLink.appendChild(icon);
        // Creating a textnode element         
        let humanText = document.createTextNode(" Human Resources");
        // Appending the new textnode to the 'a' element
        humanLink.appendChild(humanText);
        // Inserts the new element after the "About Us" nav link
        navLinks[i].parentNode.insertBefore(humanLink, navLinks[i].nextSibling);
    }
}
// Creating a nav element 
let navbar = document.createElement('nav');
// Adds a class to the element
navbar.className = "navbar fixed-bottom navbar-light bg-light";
// Creating a div element 
let division = document.createElement("div");
// Adds a class to the element
division.className = "container-fluid";
// Creating a 'a' element 
let copyright = document.createElement("a");
// Adds a class to the element
copyright.className = "navbar-brand";
// Adding new text to the element
copyright.innerHTML = "&#169 Amelia 2023";
// Appending the new elements to the new bottom nav bar
division.appendChild(copyright);
navbar.appendChild(division);
document.body.appendChild(navbar);

// Checks the title of the element is "Home"
if (document.title === 'Home') {
    // Setting a new message to display
    let welcomeMessage = "Welcome to my WEBD - Client Side website! I hope you enjoy browsing through the content :)";
    // Setting the div to a variable
    let welcomeDiv = document.getElementById("welcome-message");
    // Setting the div to display the new message on the page
    welcomeDiv.innerHTML = welcomeMessage;
// Checks the title of the element is "Product"
} else if (document.title == "Product") {
    // Setting a new message to display
    let interestingMessage = "For my first piece of media, I chose the new Batman movie starring everyones favourite sparkling vampire\
    Robert Pattinson. His take on this classic rich superhero was the side of batman I loved as a kid watching the tv shows and playing the\
    video games, the detective side! An incredible take on the dark knight with my favourite villan as the nemisis, could I ask for more?!\
    <br><br>My second piece of media is Mama Mia cause the classics don't die. I spent my entire childhood (and into my adult years) with Mia as\
    my nickname cause this movie is all I wanted to watch on my birthday every year. ABBA has my heart and singing/dancing along to dancing queen\
    will forever make me feel 17 again.<br><br> Lastly for my media choices, we have the new Elvis movie because holly molly Austin Butler is handsome...and ya know..sounds like Elvis\
    . My grandfather's Elvis records got passed down to me when he passed away, so I took a history of pop music class to learn more about the King of Rock himself\
    and this movie came out during the middle of that class. It is such a perfect movie down to every detail that it should be everyones favuorite movie.";
    // Setting the div to a variable
    let interestingDiv = document.getElementById("interest-message");
    // Setting the div to display the new message on the page
    interestingDiv.innerHTML = interestingMessage;
// Checks the title of the element is "Services"
} else if (document.title == "Services") {
    // Setting a new message to display
    let skillsMessage = "Hi, my name is Amelia Eric-Markovic and I am a computer programming and analysis student at Durham College in Oshawa, Ontario. I have a strong set of technical skills that I can offer to clients, including custom programming, web design, and data analysis.\
    One of my best skills is custom programming, where I am able to produce a web-based database incorporated into dynamic web page content. This allows me to execute a web user's registration and authentication, making it easy for users to access the content they need.\
    Additionally, I have experience using the .NET framework to create, test, and document programs to specifications given, which allows me to deliver high-quality software that meets client needs.\
    Another skill I excel in is web design. I am able to produce web pages that look and are documented to industry standards, making it easy for clients to navigate and understand the website.\
    Additionally, I have a commitment to understanding and describing the software development lifecycle (SDLC), which ensures that the website is developed in a way that is efficient, reliable, and meets industry standards.\
    Lastly, I have grown an understanding of Power BI, which is a tool that allows me to analyze and visualize data in a meaningful way. This skill allows me to provide my clients with data-driven insights that can help them make better business decisions.\
    Overall, I have a strong set of technical skills that I can offer to clients, including custom programming, web design, and data analysis. I am committed to delivering high-quality software that meets client needs and am excited to work with new clients to bring their ideas to life.\
    My resume can be found <a href='https://ameliaeric.github.io/Resume.html'>here</a> for any interested clients.";
    // Setting the div to a variable
    let skillsDiv = document.getElementById("skills-message");
    // Setting the div to display the new message on the page
    skillsDiv.innerHTML = skillsMessage;
// Checks the title of the element is "About Us"
} else if (document.title == "About Us") {
    // Setting a new message to display
    let aboutMessage = "I am 19 years old and the eldest child in my family with a younger brother.\
     I'm also a proud owner of a shiatzu poodle mix named Michelangelo Pokémon Nenad Eric-Markovic.\
     Listening to music and podcasts are also things I enjoy, as well as exploring smart home technology and experimenting with interior design.\
     I am not currently a member of any teams or actively involved in volunteer work currently due to working part-time and school full-time,\
     but I am always looking for ways to give back to my community and make a positive impact.\
     In my free time, I love to spend time with my family and my furry companion, Michelangelo, and enjoy watching a movie or leafs game together.\
     I always strive to maintain a positive attitude and stay open to new experiences.";
    // Setting the div to a variable
     let aboutDiv = document.getElementById("about-message");
    // Setting the div to display the new message on the page
    aboutDiv.innerHTML = aboutMessage;
}


/*****************LAB 2 CODE*****************/
//LOGIN PAGE
// select the Login link
let loginLink = $('#btnLogin');
if (loginLink) {
    // bind a click event handler
    loginLink.click(function (e) {
        // prevent the default submit action (stay on the page)
        e.preventDefault();
        // get the username and password input values
        let username = $('#Username01').val();
        let password = $('#Password01').val();
        
        if (username && password) { // if both fields are not empty
            // create a new list item with the username
            let usernameItem = $('<li class="nav-item navbar-text">' + username + '</li>');
            // insert the new list item after the Contact Us link
            $(usernameItem).insertAfter($('.navbar-nav .nav-link[href="./contact.html"]'));
            // change the Login link to a Logout link
            let navLinks = document.getElementsByClassName("nav-link");
            // Loops through all of the element in the nodelists
            for (let i = 0; i < navLinks.length; i++) {
                // Checks the value/text of the element is "Product"
                if (navLinks[i].innerHTML == "Login" || navLinks[i].innerHTML == "Logout") {
                    // Changes the text to be "Interests"
                    if (loginLink.text() == "Login") {
                        navLinks[i].innerHTML = "Logout";
                    } else {
                        navLinks[i].innerHTML = "Login";
                    }
                }
            }
            
        }
    });
}


// REGISTER PAGE
// Get the navigation bar element
let firstNameGroup = $("#first-group");

// Create the error message div
let errorDivision = document.createElement("div");
errorDivision.id = "ErrorMessage";
errorDivision.style.display = "none";

// Insert the error message div after the navigation bar div
$(errorDivision).insertBefore(firstNameGroup);

// Get references to the first name and last name input elements
let firstNameInput = $('#inputFirst');
let lastNameInput = $('#inputLast');

// if the submit button is on the page
if ($("#btnRegSubmit")) {
  // click function that calls a callback function
  $("#btnRegSubmit").click(function (e) {
    // prevent the default submit action (stay on the page)
    e.preventDefault();
    validateInputs() 
  });
}

// Function to validate the input values and display an error message if needed
function validateInputs() {
  // Get the current input values
  let firstNameValue = firstNameInput.val();
  let lastNameValue = lastNameInput.val();
  
  // Check if either input value is less than 2 characters long
  if (firstNameValue.length < 2 || lastNameValue.length < 2) {
    // Display an error message at the top of the page
    errorDivision.textContent = 'First Name and Last Name must be at least 2 characters long';
    errorDivision.style.display = "block";
  } else {
    // Hide the error message if both inputs are valid
    errorDivision.style.display = "none";
  }
}
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
    // Checks if the username is greater than 20 characters in length
    }else if(usernameInput.value.length > 20) {
        // Sets the error message and light red error colour
        usernameErrorMessage = "Username must be less than 20 characters.";
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