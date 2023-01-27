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

let navLinks = document.getElementsByClassName("nav-link");
for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].innerHTML == "Products") {
        navLinks[i].innerHTML = "Interests";
    }
    if (navLinks[i].innerHTML == "About Us") {
        let humanLink = document.createElement('a');
        humanLink.classList.add('nav-item', 'nav-link');
        humanLink.setAttribute('href', '#');
        let icon = document.createElement('i');
        icon.classList.add('fas', 'fa-users');
        humanLink.appendChild(icon);
        let humanText = document.createTextNode(" Human Resources");
        humanLink.appendChild(humanText);
        navLinks[i].parentNode.insertBefore(humanLink, navLinks[i].nextSibling);
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

if (document.title === 'Home') {
    let welcomeMessage = "Welcome to my WEBD - Client Side website! I hope you enjoy browsing through the content :)";
    let welcomeDiv = document.getElementById("welcome-message");
    welcomeDiv.innerHTML = welcomeMessage;
} else if (document.title == "Product") {
    let interestingMessage = "For my first piece of media, I chose the new Batman movie starring everyones favourite sparkling vampire\
    Robert Pattinson. His take on this classic rich superhero was the side of batman I loved as a kid watching the tv shows and playing the\
    video games, the detective side! An incredible take on the dark knight with my favourite villan as the nemisis, could I ask for more?!\
    <br><br>My second piece of media is Mama Mia cause the classics don't die. I spent my entire childhood (and into my adult years) with Mia as\
    my nickname cause this movie is all I wanted to watch on my birthday every year. ABBA has my heart and singing/dancing along to dancing queen\
    will forever make me feel 17 again.<br><br> Lastly for my media choices, we have the new Elvis movie because holly molly Austin Butler is handsome...and ya know..sounds like Elvis\
    . My grandfather's Elvis records got passed down to me when he passed away, so I took a history of pop music class to learn more about the King of Rock himself\
    and this movie came out during the middle of that class. It is such a perfect movie down to every detail that it should be everyones favuorite movie.";
    let interestingDiv = document.getElementById("interest-message");
    interestingDiv.innerHTML = interestingMessage;
} else if (document.title == "Services") {
    let skillsMessage = "Hi, my name is Amelia Eric-Markovic and I am a computer programming and analysis student at Durham College in Oshawa, Ontario. I have a strong set of technical skills that I can offer to clients, including custom programming, web design, and data analysis.\
    One of my best skills is custom programming, where I am able to produce a web-based database incorporated into dynamic web page content. This allows me to execute a web user's registration and authentication, making it easy for users to access the content they need.\
    Additionally, I have experience using the .NET framework to create, test, and document programs to specifications given, which allows me to deliver high-quality software that meets client needs.\
    Another skill I excel in is web design. I am able to produce web pages that look and are documented to industry standards, making it easy for clients to navigate and understand the website.\
    Additionally, I have a commitment to understanding and describing the software development lifecycle (SDLC), which ensures that the website is developed in a way that is efficient, reliable, and meets industry standards.\
    Lastly, I have grown an understanding of Power BI, which is a tool that allows me to analyze and visualize data in a meaningful way. This skill allows me to provide my clients with data-driven insights that can help them make better business decisions.\
    Overall, I have a strong set of technical skills that I can offer to clients, including custom programming, web design, and data analysis. I am committed to delivering high-quality software that meets client needs and am excited to work with new clients to bring their ideas to life.";
    let skillsDiv = document.getElementById("skills-message");
    skillsDiv.innerHTML = skillsMessage;
} else if (document.title == "About Us") {
    let aboutMessage = "I am 19 years old and the eldest child in my family with a younger brother.\
     I'm also a proud owner of a shiatzu poodle mix named Michelangelo Pokémon Nenad Eric-Markovic.\
     Listening to music and podcasts are also things I enjoy, as well as exploring smart home technology and experimenting with interior design.\
     I am not currently a member of any teams or actively involved in volunteer work currently due to working part-time and school full-time,\
     but I am always looking for ways to give back to my community and make a positive impact.\
     In my free time, I love to spend time with my family and my furry companion, Michelangelo, and enjoy watching a movie or leafs game together.\
     I always strive to maintain a positive attitude and stay open to new experiences.";
    let aboutDiv = document.getElementById("about-message");
    aboutDiv.innerHTML = aboutMessage;
}



