document.getElementById('rotationBtn').addEventListener('click', function() {
    const schedulesDiv = document.getElementById('rotationSchedules');
    schedulesDiv.classList.toggle('hidden');
    if (!schedulesDiv.classList.contains('hidden')) {
        schedulesDiv.innerHTML = '<p>Rotation Schedule Example: Wheat -> Corn -> Soybeans</p>';
    } else {
        schedulesDiv.innerHTML = '';
    }
});

document.getElementById('contractBtn').addEventListener('click', function() {
    const agreementsDiv = document.getElementById('contractAgreements');
    agreementsDiv.classList.toggle('hidden');
    if (!agreementsDiv.classList.contains('hidden')) {
        agreementsDiv.innerHTML = '<p>Example Agreement: Farmer agrees to grow 1000 kg of organic tomatoes as per buyer specifications.</p>';
    } else {
        agreementsDiv.innerHTML = '';
    }
});