//Menu de navegacion
const botonMenu = document.getElementById('Menu_Des'),
      cerrar = document.getElementById('Cerrar'),
      MenuFondo = document.querySelector('.Menu_Fondo'),
      Enlaces = document.querySelector('.Enlaces')

function openMenu() {
  Enlaces.style.left = '0'
  setTimeout(() => {
    MenuFondo.style.display = 'block'
    Enlaces.style.display = 'flex'
  }, 50);
}

function closeMenu() {
  Enlaces.style.left = '-100%'
  setTimeout(() => {
    MenuFondo.style.display = 'none'
    Enlaces.style.display = 'none'
  }, 200)
}

botonMenu.addEventListener('click', openMenu)
cerrar.addEventListener('click', closeMenu)

//Contenedor de imagenes
const slider = document.getElementById('Slider'),
      slides = slider.getElementsByClassName('img')
let currentSlide = 0

function showSlide(index) {
  if (index < 0 || index >= slides.length) return;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  let nextIndex = currentSlide + 1
  if (nextIndex >= slides.length) {
    nextIndex = 0
  }
  showSlide(nextIndex);
}

function previousSlide() {
  let previousIndex = currentSlide - 1
  if (previousIndex < 0) {
    previousIndex = slides.length - 1
  }
  showSlide(previousIndex)
}

// Agrega los event listeners para los botones de siguiente y anterior
document.getElementById('Next').addEventListener('click', nextSlide)
document.getElementById('Back').addEventListener('click', previousSlide)

// Muestra la primera diapositiva inicialmente
showSlide(0)

//Agregar cantidad de producto
const suma = document.getElementById('Plus');
const resta = document.getElementById('Minus');
let cantidad = document.querySelector('.Cant');

function sumaCant() {
  cantidad.innerHTML = parseInt(cantidad.innerHTML) + 1;
}

function restaCant() {
  if (parseInt(cantidad.innerHTML) > 0) {
    cantidad.innerHTML = parseInt(cantidad.innerHTML) - 1;
  }
}

suma.addEventListener('click', sumaCant);
resta.addEventListener('click', restaCant);

//Carrito de compras
const Carrito = document.querySelector('.Car');
      Cart = document.querySelector('.Cart'),
      Fall = document.querySelector('.Fall')

let   CostoUni = document.querySelector('.CostoUni'),
      CantidadCar = document.querySelector('.Cantidad'),
      ValueTottal = document.querySelector('.ValueTottal'),
      NameProduct = document.querySelector('.NameProduct'),
      Total = document.querySelector('.Total'),
      CantPro = document.querySelector('.CantPro'),
      Tenn = document.querySelector('.Tenn')
function AddCar(){
let TotalHtml = Total.textContent,
      TotalInt = parseInt(TotalHtml.substring(1, 6), 10)

  if (parseInt(cantidad.textContent, 10) > 0) {
    CantPro.style.display = 'block'
    Tenn.style.display = 'block'
    CantPro.textContent = cantidad.textContent
    Fall.textContent = NameProduct.textContent
    CostoUni.textContent = TotalHtml
    CantidadCar.textContent = 'x ' + cantidad.textContent

    if (!isNaN(TotalInt)) {
      ValueTottal.textContent = (TotalInt * parseInt(cantidad.textContent, 10))+'.00'
    } else {
      console.error('Invalid TotalInt:', TotalInt)
    }
  }else{
    CantPro.style.display = 'none'
  }
}   
      
function Add() {
  if(Cart.style.display === 'flex'){
    Cart.style.display = 'none'
  } else {
    Cart.style.display = 'flex'
  }
}

Carrito.addEventListener('click', Add)

//borrar del carrito de compras

const Delete = document.querySelector('.Delete')

Delete.addEventListener('click', () => {
    CantPro.style.display = 'none'
    Tenn.style.display = 'none'
    CantPro.textContent = ''
    Fall.textContent = ''
    CostoUni.textContent = ''
    CantidadCar.textContent = ''
    ValueTottal.textContent = ''
})

//Cambiar imagen
const imG1 = document.querySelector('#img1'),
      imG2 = document.querySelector('#img2'),
      imG3 = document.querySelector('#img3'),
      imG4 = document.querySelector('#img4'),
      imgG = document.querySelector('.imgG')

imG1.addEventListener('click', cambiarImagen)
imG2.addEventListener('click', cambiarImagen)
imG3.addEventListener('click', cambiarImagen)
imG4.addEventListener('click', cambiarImagen)
imgG.addEventListener('click', sliderPrin)
function cambiarImagen(e) {
  imgG.src = e.target.src;
}

//Slider principal
function sliderPrin() {

}