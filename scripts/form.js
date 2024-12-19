const currYear=(new Date).getFullYear(),lastModified=document.lastModified;document.getElementById("lastModified").textContent+=lastModified,document.getElementById("currentYear").textContent=currYear;const mainnav=document.querySelector(".navigation"),hambutton=document.querySelector("#menu");hambutton.addEventListener("click",(()=>{mainnav.classList.toggle("show"),hambutton.classList.toggle("show")}));

const products = [
    { id: "prod1", name: "Product 1" },
    { id: "prod2", name: "Product 2" },
    { id: "prod3", name: "Product 3" }
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
