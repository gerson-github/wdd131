const currYear = (new Date()).getFullYear();
const lastModified = document.lastModified;

document.getElementById("lastModified").textContent += lastModified;
document.getElementById("currentYear").textContent = currYear;

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

const temperature = 10; 
const windSpeed = 5;    

function calculateWindChill(temp, wind) {
    return ( 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1); 
}

function displayWindChill() {
    const windChillElement = document.getElementById("windChill");
    console.log(temperature);
    console.log(windSpeed);
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

window.onload = displayWindChill;
