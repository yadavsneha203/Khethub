// script.js

document.getElementById('cropForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const soilType = document.getElementById('soilType').value.toLowerCase();
    const climate = document.getElementById('climate').value.toLowerCase();
    const resources = document.getElementById('resources').value.toLowerCase();
    const season = document.getElementById('season').value.toLowerCase();

    // Mock AI logic for crop recommendations
    const cropSuggestions = getCropSuggestions(soilType, climate, resources);
    const seasonalSuggestions = getSeasonalSuggestions(season);
    const rotationPlan = getCropRotationPlan();

    // Display recommendations
    document.getElementById('cropSuggestions').innerText = cropSuggestions.join(', ');
    document.getElementById('seasonalSuggestions').innerText = seasonalSuggestions.join(', ');
    document.getElementById('rotationPlan').innerText = rotationPlan;
});

// Mock functions for AI logic
function getCropSuggestions(soilType, climate, resources) {
    // Example of simple matching logic (replace with AI model)
    const suggestions = {
        'sandy': ['Carrots', 'Peanuts'],
        'loamy': ['Wheat', 'Corn'],
        'clay': ['Rice', 'Soybeans']
    };
    return suggestions[soilType] || ['Tomatoes', 'Potatoes'];
}

function getSeasonalSuggestions(season) {
    const seasonal = {
        'spring': ['Spinach', 'Broccoli'],
        'summer': ['Corn', 'Tomatoes'],
        'autumn': ['Pumpkins', 'Squash'],
        'winter': ['Cabbage', 'Kale']
    };
    return seasonal[season] || ['Lettuce', 'Beets'];
}

function getCropRotationPlan() {
    return 'Year 1: Wheat -> Year 2: Corn -> Year 3: Soybeans -> Year 4: Cover Crops';
}