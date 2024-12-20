const currYear = (new Date()).getFullYear();
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString(); 

document.getElementById("current-date").textContent += formattedDate;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent += lastModified;
document.getElementById("currentYear").textContent = currYear;

//toggle hamburger
const hamburgerMenu = document.getElementById('hamburgerMenu');
const hamburgerOptions = document.getElementById('hamburgerOptions');
const menuContainer = document.getElementById('menu-container');
const navMenu = document.getElementById('nav-menu');



hamburgerMenu.addEventListener('click', () => {
    if (hamburgerOptions.style.display === 'block') {
        hamburgerOptions.style.display = 'none';  
        menuContainer.style.display = 'block';
        navMenu.style.display = 'block';
    } else {
        hamburgerOptions.style.display = 'block';  // Show 
        menuContainer.style.display = 'none';
        navMenu.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Add event 
    const navigationIcons = document.querySelectorAll('.icon-list img');

    navigationIcons.forEach(icon => {
        icon.addEventListener('click', event => {
            const action = icon.dataset.action; 
            
            // const content = document.getElementById('content');
            // content.innerHTML = ''; 
            
            console.log(`You clicked: ${action}`);
            switch (action) {
                case 'speaker':
                    if (speaker.style.display === 'none') {
                        speaker.style.display = 'block'; 
                    } else {
                        speaker.style.display = 'none'; 
                    }
                    break;
                case 'search':
                    if (search.style.display === 'none') {
                        search.style.display = 'block'; 
                    } else {
                        search.style.display = 'none'; 
                    }
                    break;
                case 'notifications':
                    if (notifications.style.display === 'none') {
                        notifications.style.display = 'block'; 
                    } else {
                        notifications.style.display = 'none'; 
                    }
                    break;
                case 'settings':
                    //content.innerHTML = '<h1>Settings</h1><p>Manage system preferences.</p>';
                    break;
                case 'user':
                    //content.innerHTML = '<h1>User Profile</h1><p>View and edit your profile information.</p>';
                    break;
                default:
                    alert('Unknown action!');
            }
        });
    });

});





