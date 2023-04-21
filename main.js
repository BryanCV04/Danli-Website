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