document.addEventListener('DOMContentLoaded', () => {
    const requestForm = document.getElementById('request-form');
    const requestsList = document.getElementById('requests-list');
    const searchBar = document.getElementById('search-bar');
    const modal = document.getElementById('confirmation-modal');
    const closeBtn = document.querySelector('.close-btn');
    const confirmationMessage = document.getElementById('confirmation-message');

    requestForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect form data
        const cropType = document.getElementById('crop-type').value;
        const quantity = document.getElementById('quantity').value;
        const quality = document.getElementById('quality').value;
        const timeframe = document.getElementById('timeframe').value;

        // Create a new request card
        const requestCard = document.createElement('div');
        requestCard.className = 'request-card';

        requestCard.innerHTML = `
            <h3>New Request</h3>
            <p>Crop Type: ${cropType}</p>
            <p>Quantity: ${quantity} kg</p>
            <p>Quality: ${quality}</p>
            <p>Timeframe: ${timeframe}</p>
            <button class="accept-btn">Accept</button>
            <button class="decline-btn">Decline</button>
            <button class="negotiate-btn">Negotiate</button>
        `;

        // Append new request card to the requests list
        requestsList.appendChild(requestCard);

        // Show the confirmation modal
        confirmationMessage.textContent = 'Request submitted successfully!';
        modal.style.display = 'block';
    });

    // Close the modal when the user clicks on <span> (x)
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const cards = requestsList.getElementsByClassName('request-card');

        Array.from(cards).forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    requestsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('accept-btn')) {
            alert('Bid Accepted');
        } else if (event.target.classList.contains('decline-btn')) {
            alert('Bid Declined');
        } else if (event.target.classList.contains('negotiate-btn')) {
            alert('Negotiation Started');
        }
    });
});