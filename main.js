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
    productDetail.classList.add('inactive');
}

// aside carrito de compras

const productDetail = document.querySelector('.product-detail');
const shoppingCart = document.querySelector('.cart');

shoppingCart.addEventListener('click', toggleShoppingCart)

function toggleShoppingCart (){
    productDetail.classList.toggle('inactive');
    darken.classList.add('inactive')

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
    removeDetalle(); removeDetalle2(); removeDetalle3(); removeDetalle4(); removeDetalle5(); removeDetalle6();
    removeDetalle7(); removeDetalle8(); removeDetalle9(); removeDetalle10();
    removeDetalle11(); removeDetalle12();
    closeDetails();
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
let darken = document.querySelector('.darken');


const productDetailContainer = document.querySelector('#product-detail');

const cardContainer = document.querySelector('.card-container');
const cerrarCardContainer = document.querySelector('#product-detail-close');

// abrir cerrar  aside con mas informacion del producto


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

    let clasess = ['product-detail1','product-detail2','product-detail3','product-detail4','product-detail5','product-detail6','product-detail7','product-detail8','product-detail9','product-detail10', 'product-detail11', 'product-detail12'];

    let i = 0;

    for (product of arr){
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.classList.add(clasess[i]); 
    
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

        i++;
    }
}
renderServices(productList);



    let cardProducto = document.querySelector('.product-detail1');
    let detalleProducto = document.querySelector('#product-detail1');
    
    let closeIcon = document.querySelector('.close-icon1')
    
    cardProducto.addEventListener('click', toggleDetalle)

    closeIcon.addEventListener('click', removeDetalle);
    
    function toggleDetalle () {
        detalleProducto.classList.remove('inactive')
        darken.classList.remove('inactive');
    }
    
    function removeDetalle () {
        detalleProducto.classList.add('inactive')
        darken.classList.add('inactive');
    
        if (mobileMenu.classList.contains('inactive')){
            darken.classList.add('inactive')
        } else {
            darken.classList.remove('inactive')
            detalleProducto.classList.add('inactive')
    
        }
        
    }


    let cardProducto2 = document.querySelector('.product-detail2');
    let detalleProducto2 = document.querySelector('#product-detail2');
    let closeIcon2 = document.querySelector('.close-icon2')
       
    cardProducto2.addEventListener('click', toggleDetalle2)

    closeIcon2.addEventListener('click', removeDetalle2)
    
    function toggleDetalle2 () {
        detalleProducto2.classList.remove('inactive')
        darken.classList.remove('inactive');
    }
    
    function removeDetalle2 () {
        detalleProducto2.classList.add('inactive')
        darken.classList.add('inactive');
    
        if (mobileMenu.classList.contains('inactive')){
            darken.classList.add('inactive')
        } else {
            darken.classList.remove('inactive')
            detalleProducto2.classList.add('inactive')
    
        }
        
    }
    let cardProducto3 = document.querySelector('.product-detail3');
    let detalleProducto3 = document.querySelector('#product-detail3');
    let closeIcon3 = document.querySelector('.close-icon3')
       
    cardProducto3.addEventListener('click', toggleDetalle3)

    closeIcon3.addEventListener('click', removeDetalle3)
    
    function toggleDetalle3 () {
        detalleProducto3.classList.remove('inactive')
        darken.classList.remove('inactive');
    }
    
    function removeDetalle3 () {
        detalleProducto3.classList.add('inactive')
        darken.classList.add('inactive');
    
        if (mobileMenu.classList.contains('inactive')){
            darken.classList.add('inactive')
        } else {
            darken.classList.remove('inactive')
            detalleProducto3.classList.add('inactive')
    
        }
        
    }
    let cardProducto4 = document.querySelector('.product-detail4');
    let detalleProducto4 = document.querySelector('#product-detail4');
    let closeIcon4 = document.querySelector('.close-icon4')
       
    cardProducto4.addEventListener('click', toggleDetalle4)

    closeIcon4.addEventListener('click', removeDetalle4)
    
    function toggleDetalle4 () {
        detalleProducto4.classList.remove('inactive')
        darken.classList.remove('inactive');
    }
    
    function removeDetalle4 () {
        detalleProducto4.classList.add('inactive')
        darken.classList.add('inactive');
    
        if (mobileMenu.classList.contains('inactive')){
            darken.classList.add('inactive')
        } else {
            darken.classList.remove('inactive')
            detalleProducto4.classList.add('inactive')
    
        }
        
    }
    let cardProducto5 = document.querySelector('.product-detail5');
    let detalleProducto5 = document.querySelector('#product-detail5');
    let closeIcon5 = document.querySelector('.close-icon5')
       
    cardProducto5.addEventListener('click', toggleDetalle5)

    closeIcon5.addEventListener('click', removeDetalle5)
    
    function toggleDetalle5 () {
        detalleProducto5.classList.remove('inactive')
        darken.classList.remove('inactive');
    }
    
    function removeDetalle5 () {
        detalleProducto5.classList.add('inactive')
        darken.classList.add('inactive');
    
        if (mobileMenu.classList.contains('inactive')){
            darken.classList.add('inactive')
        } else {
            darken.classList.remove('inactive')
            detalleProducto5.classList.add('inactive')
    
        }
        
    }
    let cardProducto6 = document.querySelector('.product-detail6');
    let detalleProducto6 = document.querySelector('#product-detail6');
    let closeIcon6 = document.querySelector('.close-icon6')
       
    cardProducto6.addEventListener('click', toggleDetalle6)

    closeIcon6.addEventListener('click', removeDetalle6)
    
    function toggleDetalle6 () {
        detalleProducto6.classList.remove('inactive')
        darken.classList.remove('inactive');
    }
    
    function removeDetalle6 () {
        detalleProducto6.classList.add('inactive')
        darken.classList.add('inactive');
    
        if (mobileMenu.classList.contains('inactive')){
            darken.classList.add('inactive')
        } else {
            darken.classList.remove('inactive')
            detalleProducto6.classList.add('inactive')
    
        }
        
    }
    let cardProducto7 = document.querySelector('.product-detail7');
    let detalleProducto7 = document.querySelector('#product-detail7');
    let closeIcon7 = document.querySelector('.close-icon7')
       
    cardProducto7.addEventListener('click', toggleDetalle7)

    closeIcon7.addEventListener('click', removeDetalle7)
    
    function toggleDetalle7 () {
        detalleProducto7.classList.remove('inactive')
        darken.classList.remove('inactive');
    }
    
    function removeDetalle7 () {
        detalleProducto7.classList.add('inactive')
        darken.classList.add('inactive');
    
        if (mobileMenu.classList.contains('inactive')){
            darken.classList.add('inactive')
        } else {
            darken.classList.remove('inactive')
            detalleProducto7.classList.add('inactive')
    
        }
        
    }
    let cardProducto8 = document.querySelector('.product-detail8');
    let detalleProducto8 = document.querySelector('#product-detail8');
    let closeIcon8 = document.querySelector('.close-icon8')
       
    cardProducto8.addEventListener('click', toggleDetalle8)

    closeIcon8.addEventListener('click', removeDetalle8)
    
    function toggleDetalle8 () {
        detalleProducto8.classList.remove('inactive')
        darken.classList.remove('inactive');
    }
    
    function removeDetalle8 () {
        detalleProducto8.classList.add('inactive')
        darken.classList.add('inactive');
    
        if (mobileMenu.classList.contains('inactive')){
            darken.classList.add('inactive')
        } else {
            darken.classList.remove('inactive')
            detalleProducto8.classList.add('inactive')
    
        }
        
    }
    let cardProducto9 = document.querySelector('.product-detail9');
    let detalleProducto9 = document.querySelector('#product-detail9');
    let closeIcon9 = document.querySelector('.close-icon9')
       
    cardProducto9.addEventListener('click', toggleDetalle9)

    closeIcon9.addEventListener('click', removeDetalle9)
    
    function toggleDetalle9 () {
        detalleProducto9.classList.remove('inactive')
        darken.classList.remove('inactive');
    }
    
    function removeDetalle9 () {
        detalleProducto9.classList.add('inactive')
        darken.classList.add('inactive');
    
        if (mobileMenu.classList.contains('inactive')){
            darken.classList.add('inactive')
        } else {
            darken.classList.remove('inactive')
            detalleProducto9.classList.add('inactive')
    
        }
        
    }
    let cardProducto10 = document.querySelector('.product-detail10');
    let detalleProducto10 = document.querySelector('#product-detail10');
    let closeIcon10 = document.querySelector('.close-icon10')
       
    cardProducto10.addEventListener('click', toggleDetalle10)

    closeIcon10.addEventListener('click', removeDetalle10)
    
    function toggleDetalle10 () {
        detalleProducto10.classList.remove('inactive')
        darken.classList.remove('inactive');
    }
    
    function removeDetalle10 () {
        detalleProducto10.classList.add('inactive')
        darken.classList.add('inactive');
    
        if (mobileMenu.classList.contains('inactive')){
            darken.classList.add('inactive')
        } else {
            darken.classList.remove('inactive')
            detalleProducto10.classList.add('inactive')
    
        }
        
    }
    let cardProducto11 = document.querySelector('.product-detail11');
    let detalleProducto11 = document.querySelector('#product-detail11');
    let closeIcon11 = document.querySelector('.close-icon11')
       
    cardProducto11.addEventListener('click', toggleDetalle11)

    closeIcon11.addEventListener('click', removeDetalle11)
    
    function toggleDetalle11 () {
        detalleProducto11.classList.remove('inactive')
        darken.classList.remove('inactive');
    }
    
    function removeDetalle11 () {
        detalleProducto11.classList.add('inactive')
        darken.classList.add('inactive');
    
        if (mobileMenu.classList.contains('inactive')){
            darken.classList.add('inactive')
        } else {
            darken.classList.remove('inactive')
            detalleProducto11.classList.add('inactive')
    
        }
        
    }
    let cardProducto12 = document.querySelector('.product-detail12');
    let detalleProducto12 = document.querySelector('#product-detail12');
    let closeIcon12 = document.querySelector('.close-icon12')
       
    cardProducto12.addEventListener('click', toggleDetalle12)

    closeIcon12.addEventListener('click', removeDetalle12)
    
    function toggleDetalle12 () {
        detalleProducto12.classList.remove('inactive')
        darken.classList.remove('inactive');
    }
    
    function removeDetalle12 () {
        detalleProducto12.classList.add('inactive')
        darken.classList.add('inactive');
    
        if (mobileMenu.classList.contains('inactive')){
            darken.classList.add('inactive')
        } else {
            darken.classList.remove('inactive')
            detalleProducto12.classList.add('inactive')
    
        }
        
    }







