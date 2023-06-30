const hamburgerBtn = document.getElementById('hamburger');
const navbar = document.getElementsByClassName('responsive-nav')[0];
const section = document.getElementsByClassName('section')[0];

console.log(navbar);

hamburgerBtn.addEventListener('click', function()  {
    navbar.classList.toggle('responsive-nav');
    section.classList.toggle('navopen-home');
});