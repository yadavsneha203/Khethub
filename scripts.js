function redirectToFarmers(productName) {
    // Assuming you have separate pages for each product (like apples.html, bananas.html, etc.)
    window.location.href = productName + ".html";
}
function toggleMenu() {
    var menu = document.getElementById("dropdown-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function redirectToFarmers(productName) {
    window.location.href = productName + ".html";
}

// Optionally, close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.three-dots')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

function toggleMenu() {
    var menu = document.getElementById("dropdown-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


window.onclick = function(event) {
    // Check if the click is outside the dropdown menu and the three dots
    if (!event.target.matches('.three-dots')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slides img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = 'block';  
    setTimeout(showSlides, 2000); 
}
function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    if (product) {
        document.getElementById('product-title').textContent = product.charAt(0).toUpperCase() + product.slice(1);
    }
};
function openProductPage(productName) {
    window.location.href = `product.html?product=${productName}`;
}

function openServicePage(serviceName) {
    window.location.href = `service.html?service=${serviceName}`;
}
function openServicePage(serviceName) {
    
    location.href = `service.html?service=${encodeURIComponent(serviceName)}`;
}
function openSchemeDetails(title, description, details) {
    // Redirect to the serviceDetails.html page with query parameters
    location.href = `serviceDetails.html?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&details=${encodeURIComponent(details)}`;
}