const spanForYear = document.querySelector('.year')
const navlinks = document.querySelectorAll('.nav-links li a')
const local = window.location.href;

const year = new Date();

spanForYear.innerHTML = year.getFullYear();