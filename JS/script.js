document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const cross = document.querySelector('.cross');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('open');
        cross.classList.toggle('show');
        hamburger.style.display = 'none'; // Hide hamburger when menu is open
    });

    cross.addEventListener('click', function () {
        menu.classList.toggle('open');
        cross.classList.toggle('show');
        hamburger.style.display = 'block'; // Show hamburger when menu is closed
    });
});

