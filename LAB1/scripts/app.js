console.log("JS Script wired up");

function timeRedirect(e) {
    let contactEmail = document.getElementById('validationCustom01').value;
    let contactPassword = document.getElementById('validationCustom02').value;
    console.log("Email: " + contactEmail + "Password: " +contactPassword);
    e.preventDefault();
    setTimeout(function () { 
        window.location.href = "index.html";
    }, 3000);
}

let submitButton = document.getElementById('submit-button');
if(submitButton) {
    submitButton.addEventListener('click', timeRedirect, false);
}