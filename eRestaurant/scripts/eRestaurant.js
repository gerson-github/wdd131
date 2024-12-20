// Get the current year
const currYear = (new Date()).getFullYear();

const currentDate = new Date();
const formattedDate = currentDate.toLocaleString(); 

document.getElementById("current-date").textContent += formattedDate;


// Get the last modified date of the document
const lastModified = document.lastModified;

// Update the "lastModified" element's text content
document.getElementById("lastModified").textContent += lastModified;

// Update the "currentYear" element's text content
document.getElementById("currentYear").textContent = currYear;


// JavaScript to toggle hamburger menu visibility
const hamburgerMenu = document.getElementById('hamburgerMenu');
const hamburgerOptions = document.getElementById('hamburgerOptions');
const menuContainer = document.getElementById('menu-container');
const navMenu = document.getElementById('nav-menu');


// Toggle hamburger menu on click
hamburgerMenu.addEventListener('click', () => {
    if (hamburgerOptions.style.display === 'block') {
        hamburgerOptions.style.display = 'none';  // Hide menu
        menuContainer.style.display = 'block';
        navMenu.style.display = 'block';
    } else {
        hamburgerOptions.style.display = 'block';  // Show menu
        menuContainer.style.display = 'none';
        navMenu.style.display = 'none';
    }
});

