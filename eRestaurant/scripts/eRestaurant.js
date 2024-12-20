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
