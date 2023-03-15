/**********HEADER**********
Name: Amelia Eric-Markovic
Date: March 15th, 2023
Student ID: 100818139
***************************/

//console.log('blog.js loaded');
/**
 * Function to make the posts 1 through 20 on the page, 
 * assigns an id number and assembles all parts of the blog post together
 */
const makePosts = () => {
    // Loops through for all 20 posts
    for(let j = 0; j < 20; j++){
        // Makes an id number for each post
        let id_no = j;
        // Making the card and giving its attributes and appending it to the correct div
        let card = $(`<div class="card blog"><div/>`)
            .attr('id', 'card-'+ id_no)
            .appendTo($('.blog-column'));
        // Making the cards body and giving its attributes and appending it to the card
        let body = $('<div class="card-body blog"></div>')
            .attr('id', 'card-body-'+ id_no)
            .appendTo(card);
        // Making the title and giving its attributes and appending it to the body of the card
        let title = $('<h5 class="card-title blog"></h5>')
            .attr("id", 'card-title-blog'+ id_no)
            .appendTo(body);
        // Making the picture and giving its attributes and appending it to the body
        let pic = $("<img>").attr("id", 'img-'+id_no)
            .addClass('blog-pic').css('max-height', '100px')
            .appendTo(body);
        // Making the text and giving its attributes and appending it to the body
        let text = $('<p class="card-text blog"></p>')
            .attr("id", 'card-text-'+ id_no)
            .appendTo(body);
        // Making the sub and giving its attributes and appending it to the body
        let sub = $('<p class="userId blog"></p>')
            .attr("id", 'sub-'+ id_no)
            .appendTo(body);
        // Making the posts id and giving its attributes and appending it to the sub
        let post_id = $('<span></span>')
            .attr("id", 'post-'+ id_no)
            .text('Post #: ', id_no)
            .appendTo(sub);
        // Making the user id and giving its attributes and appending it to the sub
        let  user_id= $('<span></span>')
            .attr("id", 'user-'+ id_no)
            .appendTo(sub);
    }
    // Calling on the function that retrieves the post information
    getPostData();
    // Calling on the function that retrieves the pictures for the posts
    getPictures();
};

/**
 * Function that grabs the blog posts information from the website given
 */
const getPostData = () => {
    // Holds the website url that stores the blog post contents
    const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
    // Fetches the information from the website
    fetch(POSTS_URL)
        .then(res => res.json())
        // Gets the data and assigns it to the title, body, and user id
        .then(data => {
            // Loops through for all 20 posts 
            for (let i = 0; i < 20; i++) {
                // Sets the title as the new datas title
                $('#card-title-blog' + i).text(data[i].title);
                // Sets the text as the new datas text
                $('#card-text-' + i).text(data[i].body);
                // Sets the User as the new datas user
                $('#user-' + i).text('User: ' + data[i].userId);
            }
        })
    // Catches an error and displays it in the console to read
    .catch(err => console.log(err));
};

const getPictures = () => {
    // Stores the Pixabay key 
    PIXABAY_KEY = '17621889-c57f624c02e2794d224175b03';
    // Stores the link to the website
    const PIXABAY_URL = 'https://pixabay.com/api/?key=<KEY>&q=dramatic&lands&image_type=photo&per_page=30';
    // Replaces the word key in the url with the key stores in PIXABAY_KEY
    const url = PIXABAY_URL.replace('<KEY>', PIXABAY_KEY);
    // Displays the url in the console
    console.log(`URL: ${url}`);
    // Fetches the information from the URL
    fetch(url)
        .then((res) => {
            return res.json();
        })
        // Gets the data from the url
        .then((data) => {
            // Logs information about the data in the console
            console.log(data);
            // Loops through for all 20 posts
            for(let i=0; i < 20; i++){
                // Sets the pics src from the new datas web format url
                let picSrc = data['hits'][i]['webformatURL'];
                // Sets the pics alternative text from the new datas tag
                let altText = data['hits'][i]['tags'];
                // Puts the new data collected int the console
                console.log(`URL: ${picSrc} ALT: ${altText}`);
                // Sets the inmage with this new data attributes
                $('#img-' + i)
                        .attr("src", picSrc)
                        .attr('alt', altText);
            }
        })
    // Catches an error and displays it in the console to read
    .catch((err) => console.log(err))

};

// Calls the function to make all the posts
makePosts();