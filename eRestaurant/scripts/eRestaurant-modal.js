
document.addEventListener('DOMContentLoaded', () => {
    // Add event 
    
    const modal = document.getElementById('modal');
    const addButton = document.getElementById('add-wait-list');
    const closeButton = document.querySelector('.close');

    // Open modal
    addButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Submit form
    const form = document.getElementById('waitlist-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form data
        const formData = new FormData(form);
        const customerName = formData.get('customer-name');
        const phoneNumber = formData.get('phone-number');
        const partySize = formData.get('party-size');
        const checkIn = formData.get('check-in');
        const estimateWait = formData.get('estimate-wait');
        const tablePreference = formData.get('table-preference');

        // Process data (e.g., send to server or display on the screen)
        console.log({
            customerName,
            phoneNumber,
            partySize,
            checkIn,
            estimateWait,
            tablePreference,
        });

        // Clear form and close modal
        form.reset();
        modal.style.display = 'none';
    });


});





