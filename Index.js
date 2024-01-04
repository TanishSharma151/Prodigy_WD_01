// script.js

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const menuItems = document.querySelectorAll("#navbar a");

    // Change background color on hover
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "green";
        });

        item.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "";
        });
    });

    // Change background color on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#444";
        } else {
            navbar.style.backgroundColor = "#333";
        }
    });
});
