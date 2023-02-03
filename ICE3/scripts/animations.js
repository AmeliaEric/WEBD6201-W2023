function fadeInOutTo() {
    //fade out
    $('.red-box').fadeOut(3000);

    //fade In - display to (in this case) block 
    $('.red-box').fadeIn(1500);

    //fade to 
    $('green-box').fadeTo(2000, .3);

    //fade to 
    $('.blue-box').fadeTo(1000, .5);
    //toggle display(went to none)
    $('.blue-box').fadeToggle();
    //toggle display (went to block, but remembered the fadeTo)
    $('.blue-box').fadeToggle();
}


function hideElement() {
    $('.red-box').hide(1000);
    $('.red-box').show(200);
    $('.red-box').slideUp(2000);
    $('.red-box').slideDown(2000);
    $('.red-box').slideToggle(2000);
    $('.red-box').slideToggle(2000);
}

function chainAnimations() {
    $('.red-box').fadeTo(1000, .5);
    $('.green-box').fadeTo(1000, .5).fadeTo(1000, .5);


    //Chaining even more function calls to create animation
    $('.green-box').delay(2000).fadeTo(1000, .5).fadeTo(1000, .5).delay(1000).fadeOut();
}


chainAnimations();
// hideElement();
// fadeInOutTo();
