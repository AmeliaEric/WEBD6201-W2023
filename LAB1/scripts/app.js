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
}
