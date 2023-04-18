window.addEventListener('load', subtitulo)
let subtitle = document.querySelector('.subtitle')
function subtitulo(){
    subtitle.innerHTML = 'Ingresa a tu cuenta para acceder a las ultimas novedades';
}

// sing out desktop seleccionando correo
const email = document.querySelector('.email')
const desktopMenu = document.querySelector('.desktop-menu');
const login = document.querySelector('.login');
const footer = document.querySelector('.footer');


email.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}

login.addEventListener('click', clickonBody);
footer.addEventListener('click', clickonBody);

function clickonBody() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

// sign out mobile

const logoMnu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

logoMnu.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu (){
    mobileMenu.classList.toggle('inactive')
}




