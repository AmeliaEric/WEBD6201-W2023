console.log("JS Script wired up");

function timeRedirect(e) {
    let contactFirst = document.getElementById('FirstName01').value;
    let contactLast = document.getElementById('LastName01').value;
    let contactNumber = document.getElementById('Contact01').value;
    let contactAddress = document.getElementById('Email01').value;
    let contactMessage = document.getElementById('Message01').value;
    console.log("Name: " + contactFirst + " " + contactLast + " \nContact Number: " + contactNumber + " \nEmail Address: " + contactAddress + " \nShort Message: " + contactMessage);
    e.preventDefault();
    setTimeout(function () { 
        window.location.href = "index.html";
    }, 3000);
}

let submitButton = document.getElementById('submit-button');
if(submitButton) {
    submitButton.addEventListener('click', timeRedirect, false);
}

var navLinks = document.getElementsByClassName("nav-link");
for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].innerHTML == "Products") {
        navLinks[i].innerHTML = "Interests";
    }
    if (navLinks[i].innerHTML == "Contact Us") {
        let humanLink = document.createElement('li');
        let icon = document.createElement('i');
        icon.classList.add('fas', 'fa-users');
        humanLink.appendChild(icon);
        let humanText = document.createTextNode(" Human Resources");
        humanLink.appendChild(humanText);
        navLinks[i].parentNode.insertBefore(humanLink, navLinks[i]);
    }
}

let navbar = document.createElement('nav');
navbar.className = "navbar fixed-bottom navbar-light bg-light";
let division = document.createElement("div");
division.className = "container-fluid";
let copyright = document.createElement("a");
copyright.className = "navbar-brand";
copyright.innerHTML = "&#169 Amelia 2023";
division.appendChild(copyright);
navbar.appendChild(division);
document.body.appendChild(navbar);