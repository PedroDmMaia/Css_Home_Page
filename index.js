let button = document.querySelectorAll('.menu-button');
let sideMenu = document.querySelector('.mobile-side');

button.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (sideMenu.classList.contains('oculto')) {
            sideMenu.classList.remove('oculto');
        } else {
            sideMenu.classList.add('oculto');
        }
    });
});