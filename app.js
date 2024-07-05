const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu nav ul');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});