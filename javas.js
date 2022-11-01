const openBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const pageShadow = document.querySelector('#page-shadow');


openBtn.addEventListener('click', () => {
    mobileMenu.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    mobileMenu.style.display = "none"
});

