document.getElementById('cropSelectionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const soilType = document.getElementById('soilType').value;
    const climate = document.getElementById('climate').value;
    const waterAvailability = document.getElementById('waterAvailability').value;
    const marketPrice = document.getElementById('marketPrice').value;
    const resources = document.getElementById('resources').value;

    const cropCompatibility = checkSoilCompatibility(soilType);
    const waterRequirement = calculateWaterRequirement(waterAvailability);
    const economicViability = calculateEconomicViability(marketPrice, resources);

    document.getElementById('cropCompatibility').textContent = cropCompatibility;
    document.getElementById('waterRequirement').textContent = waterRequirement;
    document.getElementById('economicViability').textContent = economicViability;
});

function checkSoilCompatibility(soilType) {
    // Sample logic for soil compatibility
    return Crops compatible with ${soilType} soil: Wheat, Barley.;
}

function calculateWaterRequirement(waterAvailability) {
    // Sample logic for water requirement
    return Estimated water requirement for selected crops: ${waterAvailability} liters/day.;
}

function calculateEconomicViability(marketPrice, resources) {
    // Sample logic for economic viability
    return Potential profit based on current market price (₹${marketPrice}/kg) and available resources: High.;
}