const navSlid = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navWrapper = document.querySelector('.nav-wrapper');
    const body = document.querySelector('body');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navWrapper.classList.toggle('popup-wrapper');
        body.classList.toggle('overflow');

    });
    navWrapper.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        navWrapper.classList.remove('popup-wrapper');
        body.classList.remove('overflow')

    });
};

navSlid();