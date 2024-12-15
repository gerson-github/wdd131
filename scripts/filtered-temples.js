const currYear = (new Date()).getFullYear();
const lastModified = document.lastModified;

document.getElementById("lastModified").textContent += lastModified;
document.getElementById("currentYear").textContent = currYear;

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
  ];




  function loadTemples(temples) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Clear existing temples before reloading
    
    temples.forEach(temple => {

        const section = document.createElement('section');
        section.classList.add('section-custom');

        const name = document.createElement('h3');
        name.textContent = temple.templeName;

        const location = document.createElement('p');
        location.innerHTML = `<span class="label"> Location:</span> ${temple.location}`;

        const dedication = document.createElement('p');
        dedication.innerHTML = `<span class="label"> Dedicated:</span> ${temple.dedicated}`;

        const figure = document.createElement('figure');
        figure.classList.add('image-container');

        const area = document.createElement('p');
        area.innerHTML = `<span class="label"> Size:</span> ${temple.area}`;
        
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName}, ${temple.location}`;

        // const figcaption = document.createElement('figcaption');
        // figcaption.classList.add('subtitle');
        // figcaption.textContent = `${temple.templeName}, ${temple.location}`;

        figure.appendChild(img);
        // figure.appendChild(figcaption);

        section.appendChild(name);
        section.appendChild(location);
        section.appendChild(dedication);
        section.appendChild(area);
        section.appendChild(figure);

        gridContainer.appendChild(section);
    });
}

document.addEventListener('DOMContentLoaded', () => { 
    loadTemples(temples); // Load all temples 
    
    const navigationLinks = document.querySelectorAll('.navigation a');

    navigationLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Prevent default link behavior
            const action = link.dataset.action; // Retrieve the data-action attribute
            
            const gridContainer = document.querySelector('.grid-container');
            gridContainer.innerHTML = '';

            
            console.log(`You clicked: ${action}`);
            switch (action) {
                case 'home':
                    document.getElementById('home-title').innerText = 'Home';
                    loadTemples(temples); // Load all temples
                    break;
                case 'old':
                    document.getElementById('home-title').innerText = 'Old';
                    loadTemples(temples.filter(temple => {
                        const year = new Date(temple.dedicated).getFullYear(); // Extract the year
                        return year < 1900;
                    }));
                    break;
                case 'new':
                    document.getElementById('home-title').innerText = 'New';
                    loadTemples(temples.filter(temple => {
                        const year = new Date(temple.dedicated).getFullYear(); // Extract the year
                        return year > 2000;
                    }));
                    break;
                case 'large':
                    document.getElementById('home-title').innerText = 'Large';
                    loadTemples(temples.filter(temple => temple.area > 90000));
                    break;
                case 'small':
                    document.getElementById('home-title').innerText = 'Small';
                    loadTemples(temples.filter(temple => temple.area < 10000));
                    break;                    
                default:
                    alert('Unknown action!');
            }
        });
    });
});