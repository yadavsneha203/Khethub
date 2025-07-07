document.getElementById('transaction').addEventListener('submit', function(event) {
    event.preventDefault();

    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const buyer = document.getElementById('buyer').value;
    const transactionDate = document.getElementById('transaction-date').value;
    const paymentMethod = document.getElementById('payment-method').value;

    const totalPrice = quantity * price;

    const transactionRow = `
        <tr>
            <td>${product}</td>
            <td>${quantity}</td>
            <td>$${price}</td>
            <td>$${totalPrice}</td>
            <td>${buyer}</td>
            <td>${transactionDate}</td>
            <td>${paymentMethod}</td>
        </tr>
    `;

    document.querySelector('#transaction-history tbody').insertAdjacentHTML('beforeend', transactionRow);

    // Reset form
    this.reset();
});
