//Request1
const header = document.getElementsByClassName('header')[0];
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
const cta = document.getElementsByClassName('btn')[0];
const box = document.getElementsByClassName('hidden-box')[0];
cta.addEventListener('click', () => {
    box.style.display = 'grid'
});