//Request1
const header = document.querySelector('.header');
header.addEventListener('click', () => {
    header.textContent = 'Have a Good Time!'
});
//Request2
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('show');
    menuBtn.style.display = 'none';
});
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    menuBtn.style.display = 'block';
});
//Request3
const cta = document.querySelector('.btn');
const box = document.querySelector('.hidden-box');
cta.addEventListener('click', () => {
    if (window.innerWidth <= 500) {
        box.style.display = 'flex'; 
    } else {
        box.style.display = 'grid'; 
    }
});