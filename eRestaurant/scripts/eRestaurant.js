// Get the current year
const currYear = (new Date()).getFullYear();

// Get the last modified date of the document
const lastModified = document.lastModified;

// Update the "lastModified" element's text content
document.getElementById("lastModified").textContent += lastModified;

// Update the "currentYear" element's text content
document.getElementById("currentYear").textContent = currYear;
