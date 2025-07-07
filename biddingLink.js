// Function to get query parameters from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Displaying the farmer's name, product, and initial price on the page
document.getElementById('farmerName').textContent = getQueryParam('farmerName');
document.getElementById('product').textContent = `Product: ${getQueryParam('product')}`;
document.getElementById('initialPrice').textContent = `Initial Price: ${getQueryParam('initialPrice')}`;

let buyerCount = 0;

// Handling the bid submission
document.getElementById('bidForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission behavior
    const bidAmount = document.getElementById('bidAmount').value;

    buyerCount++;  // Increment the buyer count for each new bid

    const bidsList = document.getElementById('bidsList');
    const bidItem = document.createElement('li');
    bidItem.innerHTML = `
        Buyer ${buyerCount}: ₹${bidAmount} 
        <button class="btn-accept">Accept</button>
        <button class="btn-reject">Reject</button>
    `;
    bidsList.appendChild(bidItem);

    document.getElementById('bidAmount').value = '';  // Clear the bid input field

    // Handling the accept button click
    bidItem.querySelector('.btn-accept').addEventListener('click', function() {
        bidItem.style.color = 'green';
        alert('Bid Accepted!');
    });

    // Handling the reject button click
    bidItem.querySelector('.btn-reject').addEventListener('click', function() {
        bidItem.style.color = 'red';
        alert('Bid Rejected!');
    });
});

// Handling the chat functionality
document.getElementById('sendBtn').addEventListener('click', function() {
    const chatBox = document.getElementById('chatBox');
    const chatInput = document.getElementById('chatInput').value;
    if (chatInput.trim() !== '') {  // Check if the input is not empty
        const message = document.createElement('p');
        message.textContent = `You: ${chatInput}`;
        chatBox.appendChild(message);
        document.getElementById('chatInput').value = '';  // Clear the chat input field
        chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom of the chat box
    }
});

// Setting the minimum height for the body on page load
window.onload = function() {
    document.body.style.minHeight = '1000px';
    document.body.style.paddingBottom = '50px';
}
