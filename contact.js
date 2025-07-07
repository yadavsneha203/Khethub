const farmers = [
    { name: 'Ram', address: '123 Farm Rd', phone: 'XXXXXX1234', email: 'ram@example.com', crops: 'Wheat, Corn' },
    { name: 'Jane Smith', address: '456 Field Ln', phone: 'XXXXXX5678', email: 'jane@example.com', crops: 'Soybeans, Rice' },
    { name: 'Paul Adams', address: '789 Harvest Blvd', phone: 'XXXXXX8765', email: 'paul@example.com', crops: 'Barley, Oats' },
    { name: 'Emily Clark', address: '1010 Orchard St', phone: 'XXXXXX4321', email: 'emily@example.com', crops: 'Apples, Peaches' },
    { name: 'Mark White', address: '1212 Crop Ave', phone: 'XXXXXX1111', email: 'mark@example.com', crops: 'Grapes, Tomatoes' }
];

const customers = [
    { name: 'Alice Johnson', address: '789 Market St', phone: '555-8765', email: 'alice@example.com' },
    { name: 'Bob Brown', address: '321 Orchard Ave', phone: '555-4321', email: 'bob@example.com' },
    { name: 'Carol Green', address: '654 Commerce Rd', phone: '555-5432', email: 'carol@example.com' },
    { name: 'David Wilson', address: '987 Trade Blvd', phone: '555-9876', email: 'david@example.com' },
    { name: 'Eve Harris', address: '1234 Retail St', phone: '555-7654', email: 'eve@example.com' }
];

const agents = [
    { name: 'Mike Davis', address: '654 Insurance Way', phone: '555-9876', email: 'mike@example.com' },
    { name: 'Sarah Lee', address: '987 Policy Pl', phone: '555-6543', email: 'sarah@example.com' },
    { name: 'Tom Rogers', address: '321 Protection Ave', phone: '555-3210', email: 'tom@example.com' },
    { name: 'Nancy Drew', address: '123 Cover St', phone: '555-2109', email: 'nancy@example.com' },
    { name: 'James Bond', address: '456 Shield Blvd', phone: '555-6547', email: 'james@example.com' }
];

function showList(category) {
    const contactList = document.getElementById('contactList');
    const contactDetails = document.getElementById('contactDetails');
    contactList.innerHTML = '';
    contactDetails.style.display = 'none';

    let contacts = [];
    if (category === 'farmers') contacts = farmers;
    if (category === 'customers') contacts = customers;
    if (category === 'agents') contacts = agents;

    contacts.forEach((contact, index) => {
        const div = document.createElement('div');
        div.className = 'contact-item';
        div.textContent = `${index + 1}. ${contact.name}`;
        div.onclick = () => showDetails(contact);
        contactList.appendChild(div);
    });

    contactList.style.display = 'block';
}

function showDetails(contact) {
    const contactDetails = document.getElementById('contactDetails');
    contactDetails.innerHTML = `
        <h2>${contact.name}</h2>
        <p><strong>Address:</strong> ${contact.address}</p>
        <p><strong>Phone:</strong> ${contact.phone}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
    `;
    if (contact.crops) {
        contactDetails.innerHTML += `<p><strong>Crops:</strong> ${contact.crops}</p>`;
    }
    contactDetails.style.display = 'block';
}
