window.addEventListener('load', subtitulo)

let subtitle = document.querySelector('.subtitle')


const email = document.querySelector('.email')
const desktopMenu = document.querySelector('.desktop-menu');
const login = document.querySelector('.login');
const footer = document.querySelector('.footer');


email.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu () {
    desktopMenu.classList.remove('inactive');
}

login.addEventListener('click', clickonBody);
footer.addEventListener('click', clickonBody);
function clickonBody() {
    desktopMenu.classList.add('inactive')
}


// funciones principales

function subtitulo(){
subtitle.innerHTML = 'Ingresa a tu cuenta para acceder a las ultimas novedades';
}



// funciones secundarias 
