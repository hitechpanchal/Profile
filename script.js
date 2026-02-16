const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const header = document.querySelector('header'); // Select the header for scroll styling

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
    header.classList.toggle('menu-open'); // Toggle class for menu open state
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('show');
        header.classList.remove('menu-open');
    });
});

// Scroll Event Listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
