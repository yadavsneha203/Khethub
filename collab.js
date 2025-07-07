document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

// Add functionality for the map and calendar as per your requirements
 // Star rating functionality
 var stars = document.querySelectorAll(".star");
 stars.forEach(function(star) {
     star.addEventListener("click", function() {
         stars.forEach(function(s) { s.classList.remove("selected"); });
         this.classList.add("selected");
         var rating = this.getAttribute("data-value");
         document.getElementById("rating").value = rating;
     });
 });