// const reviewCount = localStorage.getItem("reviewCount");


// document.addEventListener("DOMContentLoaded", () => {
//     const productSelect = document.getElementById("product");
//     products.forEach(product => {
//         const option = document.createElement("option");
//         option.value = product.id;
//         option.textContent = product.name;
//         productSelect.appendChild(option);
//     });
// });


    // Increment review counter using localStorage
    let reviews = parseInt(localStorage.getItem("reviewCount")) || 0;
    reviews=reviews+1;
    localStorage.setItem("reviewCount", reviews);

    let reviewCount = localStorage.getItem("reviewCount");
    
    // Display the updated review count on the page
    document.getElementById("review-count").textContent = reviewCount;
    
    console.log(`Total Reviews Submitted: ${reviewCount}`);




