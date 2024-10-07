const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const lastUpdated = document.getElementById('lastUpdated');
lastUpdated.textContent = document.lastModified;
