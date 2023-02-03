console.log('selector.js loaded');

function highlight(element) {
    element.css("background-color", "#fcf30040");
}

function cssSelectors() {
    //all paragraphs
    $('p').css('background-color', '#2a9d8f');

    //using classes
    $('.red-box').css('background-color', '#2a9d8f');

    // using ids
    // $('#list').css('background-color', '#2a9d8f');

    //
    $('h1, h2').css('background-color', '#3a86ff');
    $('li:first').css('background-color', 'red');
}



function traversingTheDOM() {
    // $('#list').find('li').css('background-color', '#3a86ff');

    //all parents of the ul
    $('#list').parents('body').css('background-color', '#3a86ff');

    //direct parents
    $('#list').parents('div').css('font-size', '20px');

    //.siblings('div') <- siblings divs of elements
    
    //prev & next
    $('#list').prev().css('background-color', '#3a86ff');
    $('#list').next().css('background-color', '#3a86ff');
    $('#list').prev().next().css('background-color', '#3a86ff');
}


function filtering() {
    // $('#list').find('li').filter(':even').css('background-color', '#3a86ff');
    // $('#list').filter(function (index) {
    //     return index % 3 === 0;
    // }).css('background-color', '#219ebc');

    //highlighting
    let items = $('#list').find('li');
    highlight(items);
}


function addingReplacingRemoving() {
    $('ul ul:first').append($("<li>I'm going to be the last Item!"));

    $("<li>Now I'm going to be the last Item").appendTo('ul ul:first');

    // insert at first child
    $('ul ul:first').prepend($("<li>I'm going to be the first child!"));
    // reverse the syntax
    $("<li>Now I'm the first!!</li>").prependTo($("ul ul:first"));

    //after
    $('.red-box').before($("<div class='red-box'>Another Red Box!</div>"));

    //simple text
    let text1 = "Last night, Darth Vader came down from planet Vulcan."

    //replace with new element
    $('li').replaceWith('<li>${text1}</li>');
    //replace all
    $("<div class='green-box'>Created Green Box</div>").replaceAll(".red-box");

    //remove
    $('li').remove();

    //detaching - safer
    let detachedItems = $('li').detach()
    $('content').append(detachedItems);
}

addingReplacingRemoving();
// filtering();
// traversingTheDOM();
// cssSelectors();