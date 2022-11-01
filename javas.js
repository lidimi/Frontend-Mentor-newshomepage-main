const openBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('#mobile-menu');


openBtn.addEventListener('click', () => {
    mobileMenu.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    mobileMenu.style.display = "none"
});

