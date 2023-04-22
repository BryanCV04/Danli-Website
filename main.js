// animacion
setTimeout(function() {
    document.querySelector('#loader').style.display = 'none';
  }, 3000);
  
const email = document.querySelector('.email')
const desktopMenu = document.querySelector('.desktop-menu');
const login = document.querySelector('.login');
const footer = document.querySelector('.footer');


// sing out desktop seleccionando correo

email.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}

login.addEventListener('click', clickonBody);
footer.addEventListener('click', clickonBody);

function clickonBody() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
    opcionIdioma.classList.add('inactive');
}

// sign out mobile

const logoMnu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

logoMnu.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu (){
    mobileMenu.classList.toggle('inactive')
}

// aside carrito de compras

const productDetail = document.querySelector('.product-detail');
const shoppingCart = document.querySelector('.cart');

shoppingCart.addEventListener('click', toggleShoppingCart)

function toggleShoppingCart (){
    productDetail.classList.toggle('inactive');
}

// idiomas

const imagenidioma = document.querySelector('.language-icon');
const opcionIdioma = document.querySelector('.language-option');

imagenidioma.addEventListener('click', toggleLanguage);

function toggleLanguage (){
    opcionIdioma.classList.toggle('inactive');
}

// interaccion entre logo menu y notificaciones en responsive

logoMnu.addEventListener('click', desactivarProductDetail)

function desactivarProductDetail(){
    productDetail.classList.add('inactive');
}

shoppingCart.addEventListener('click', desactivarMenu)

function desactivarMenu (){
    mobileMenu.classList.add('inactive')
}