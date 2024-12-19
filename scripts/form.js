// Get the current year
const currYear = (new Date()).getFullYear();

// Get the last modified date of the document
const lastModified = document.lastModified;

// Update the "lastModified" element's text content
document.getElementById("lastModified").textContent += lastModified;

// Update the "currentYear" element's text content
document.getElementById("currentYear").textContent = currYear;


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5,
      image: "images/flux-capacitor.jfif"
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7,
      image: "images/power-laces.jfif"
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5,
      image: "images/time-circuits.jfif"
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9,
      image: "images/low-voltage-reactor.jfif"
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0,
      image: "images/warp-equalizer.jfif"
    }
  ];

// Populate Product Name options dynamically
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

document.getElementById("post-review").addEventListener("click", function () {
    event.preventDefault();
    var form = this.closest('form');
    //form is valid
    if (form.checkValidity()) {
        window.location.href = "review.html";
    } else {
        //  trigger a form validation
        form.reportValidity();
    }

});

document.getElementById("product").addEventListener("change", function(){

    const selectId = this.value;
    const selectedProduct = products.find(product => product.id === selectId);

    if (selectedProduct)
    {

        console.log(selectedProduct.id);
        console.log(selectedProduct.name);
        console.log(selectedProduct.averagerating);

        document.getElementById("product-id").innerText = selectedProduct.id;
        document.getElementById("product-name").innerText = selectedProduct.name;
        document.getElementById("product-averagerating").innerText = selectedProduct.averagerating;
        document.getElementById("product-image").src = selectedProduct.image;

    }


});








