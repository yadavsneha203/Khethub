// Example data for farmers and their products
const biddingData = [
    {
        farmerName: "Farmer John",
        product: "Wheat",
        initialPrice: "₹500 per ton"
    },
    {
        farmerName: "Farmer Emily",
        product: "Corn",
        initialPrice: "₹300 per ton"
    },
    {
        farmerName: "Farmer Rahul",
        product: "Rice",
        initialPrice: "₹600 per ton"
    }
];

// Function to create bidding cards
function displayBiddingData() {
    const container = document.getElementById('biddingContainer');
    biddingData.forEach(bid => {
        const card = document.createElement('div');
        card.className = 'bidding-card';
        card.innerHTML = `
            <h2>${bid.farmerName}</h2>
            <p>Product: ${bid.product}</p>
            <p class="initial-price">Initial Price: ${bid.initialPrice}</p>
            <a href="biddingLink.html?farmerName=${encodeURIComponent(bid.farmerName)}&product=${encodeURIComponent(bid.product)}&initialPrice=${encodeURIComponent(bid.initialPrice)}" class="btn-bid">Place a Bid</a>
        `;
        container.appendChild(card);
    });
}

// Initialize the bidding data on page load
window.onload = displayBiddingData;