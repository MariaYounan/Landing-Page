/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

"use strict"

const sections = document.getElementsByTagName('section');
const unorderList = document.getElementById('navbar__list'); 
const menuLinks = document.getElementsByClassName('menu__link');
let listItem;
let wasActive;
let wasInViewPort;



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Function to check if an element is in viewport or not
const isInViewport = function (el) {
    const bounding = el.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


// Function to get the section in viewport and let it in active design and design its nav list item
const selectActive = function(){
    for (let section of sections){
        if(isInViewport(section)){
            // console.log(section);
            wasActive = document.getElementsByClassName('your-active-class')[0];
            wasActive.classList.remove('your-active-class');
            section.classList.add('your-active-class');
            for (let menuLink of menuLinks){
                menuLink.classList.remove('inViewport');
            }
            document.getElementsByClassName(section.getAttribute('id'))[0].classList.add('inViewport');
        }
    }
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let section of sections){
    listItem = document.createElement('li');
    listItem.className = 'menu__link ' + section.getAttribute('id');
    listItem.innerHTML = '<a href="#' + section.getAttribute('id') + '">' + section.getAttribute('data-nav') +'</a>';
    unorderList.appendChild(listItem);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


selectActive();
document.addEventListener('scroll',selectActive);


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click



// Set sections as active


