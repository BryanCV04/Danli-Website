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
    mobileMenu.classList.toggle('inactive');
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

// logoMnu.addEventListener('click', desactivarProductDetail, closeDetails)

logoMnu.addEventListener('click', function(){
    desactivarProductDetail(); closeDetails();
});

function desactivarProductDetail(){
    productDetail.classList.add('inactive');
}

shoppingCart.addEventListener('click', desactivarMenu)

function desactivarMenu (){
    mobileMenu.classList.add('inactive');
    closeDetails();
}

// servicios precios e informacion

let productList = [];
const productDetailContainer = document.querySelector('#product-detail');

const cardContainer = document.querySelector('.card-container');
const cerrarCardContainer = document.querySelector('#product-detail-close');

// abrir cerrar  aside con mas informacion del producto

let darken = document.querySelector('.darken');

function openDetails (){
    productDetailContainer.classList.remove('inactive');
    darken.classList.remove('inactive');
}

cerrarCardContainer.addEventListener('click', closeDetails);

 function closeDetails (){
    productDetailContainer.classList.add('inactive');
    darken.classList.add('inactive');

    if (mobileMenu.classList.contains('inactive')){
        darken.classList.add('inactive')
    } else {
        darken.classList.remove('inactive')
    }

 }

productList.push({
    name: 'Auditoria de la Marca ¡Pago Único!',
    price: 'Ref. $40',
    img: 'https://th.bing.com/th/id/OIG.CiJ8MZNbQqzN4wYils85?pcl=1b1a19&pid=ImgGn'
});
productList.push({
    name: 'Asesoria Presencial ¡Pago Único!',
    price: 'Ref. $30',
    img: 'https://th.bing.com/th/id/OIG.vqSkRQA1CfmwvFVbRJMe?w=173&h=173&c=6&pcl=1b1a19&r=0&o=5&pid=ImgGn'
});
productList.push({
    name: 'Asesoria Virtual ¡Pago Único!',
    price: 'Ref. $30',
    img: 'https://th.bing.com/th/id/OIG.tR4OyriYJlEGMlNmWMLN?w=173&h=173&c=6&pcl=1b1a19&r=0&o=5&pid=ImgGn'
});
productList.push({
    name: 'Gestion de Ads ¡Empieza Ya!',
    price: 'Ref. $50',
    img: 'https://th.bing.com/th/id/OIG.0Lo1_W7O0zLHRraZuGxl?w=173&h=173&c=6&pcl=1b1a19&r=0&o=5&pid=ImgGn'
});
productList.push({
    name: 'Desbloqueo de Cuentas Publicitarias',
    price: 'Ref. $100',
    img: 'https://th.bing.com/th/id/OIG.JKzygCvz5bUbsE_Lcosn?w=173&h=173&c=6&pcl=1b1a19&r=0&o=5&pid=ImgGn'
});
productList.push({
    name: 'Creacion de Logo ¡Eleva Tu Marca!',
    price: 'Ref. $100',
    img: 'https://th.bing.com/th/id/OIG.X7sfMDO0RZb6Kl4p.Sb8?w=173&h=173&c=6&pcl=1b1a19&r=0&o=5&pid=ImgGn'
});
productList.push({
    name: 'Creacion de Logo + Branding',
    price: 'Ref. $150',
    img: 'https://th.bing.com/th/id/OIG.mZP7Spb8ufiCGMu1IZu1?pcl=1b1a19&pid=ImgGn'
});
productList.push({
    name: 'Soporte de Diseño para Redes Sociales',
    price: 'Ref. $80',
    img: 'https://th.bing.com/th/id/OIG.LaAYuSQQZOkE1M3M9Bxl?pcl=1b1a19&pid=ImgGn'
});
productList.push({
    name: 'Diseño de Catálogo ¡Muestra Tus Productos!',
    price: 'Ref. $1',
    img: 'https://th.bing.com/th/id/OIG.GWApO.w3cspPFOxaqKxl?w=173&h=173&c=6&pcl=1b1a19&r=0&o=5&pid=ImgGn'
});
productList.push({
    name: 'Creación De Landing Page',
    price: 'Ref. $300',
    img: 'https://th.bing.com/th/id/OIG.5EEjo_eZgrZ6qShQzz_1?w=173&h=173&c=6&pcl=1b1a19&r=0&o=5&pid=ImgGn'
});
productList.push({
    name: 'Creación De Aplicacion Web',
    price: 'Ref. $600',
    img: 'https://th.bing.com/th/id/OIG.yNKfeb.4_bXlGJM0YHSP?w=173&h=173&c=6&pcl=1b1a19&r=0&o=5&pid=ImgGn'
});
productList.push({
    name: 'Email Marketing ¡Proximamente!',
    price: 'No Avaible',
    img: 'https://th.bing.com/th/id/OIG.dCpwuWFRelWu8FMXXAIj?w=173&h=173&c=6&pcl=1b1a19&r=0&o=5&pid=ImgGn'
});

function renderServices (arr){
    for (product of arr){
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        let img = document.createElement('img');
        img.setAttribute('src', product.img);
    
        let productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        let productInfoDiv = document.createElement('div');
    
        let productName = document.createElement('p');
        productName.innerText = product.name
    
        let productPrice = document.createElement('p');
        productPrice.innerText = product.price;
    
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
        let productInfoFigure = document.createElement('figure');
        let ProductImgPLUS = document.createElement('img');
        ProductImgPLUS.setAttribute('src', '../assets/iconos/icono+svg-cropped.svg');
        ProductImgPLUS.addEventListener('click', openDetails)

        productInfoFigure.appendChild(ProductImgPLUS);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        // aqui se lo insertamos al form container
        cardContainer.appendChild(productCard);
    }
}
renderServices(productList);











