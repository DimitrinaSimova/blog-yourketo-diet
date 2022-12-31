$(document).ready(function(){
    $('.testimonials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
    });
});



document.getElementById('navbarBurger').onclick = function() {
    let mainNav = document.getElementById('mainNav');

    mainNav.classList.add('show-nav');
    document.body.classList.add('overflow-hidden');

    // if(!mainNav.classList.contains('show-nav')) {
    //     mainNav.classList.add('show-nav');
    //     document.body.classList.add('overflow-hidden');
    // } else {
    //     mainNav.classList.remove('show-nav');
    //     document.body.classList.remove('overflow-hidden');
    // }
}

document.querySelector('.navbar-close').onclick = function() {
    mainNav.classList.remove('show-nav');
    document.body.classList.remove('overflow-hidden');
}

//////////////////////////////////////////////////////
// DARK MODE 

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#darkMode');

const enableDarkMode = () => {
    // Add the class to the body
    // document.body.classList.add('darkmode', 'no-scroll');
    document.body.classList.add('darkmode');
    // Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    // Remove the class from the body
    document.body.classList.remove('darkmode');
    // document.body.classList.add('no-scroll');
    // Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('change', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode'); 

    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
        enableDarkMode();
    // if it has been enabled, turn it off  
    } else {  
        disableDarkMode(); 
    }
});