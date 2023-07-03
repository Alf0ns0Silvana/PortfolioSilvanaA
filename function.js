
let menuVisible=false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible=false;
}

function efectoHabilidades(){
    var skills= document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=150){
        let habilidades =document.getElementsByClassName("progreso");
         habilidades[0].classList.add("html-css");
         habilidades[1].classList.add("javascript");
         habilidades[2].classList.add("vue");
         habilidades[3].classList.add("react");
         habilidades[4].classList.add("node");
         habilidades[5].classList.add("github");
         habilidades[6].classList.add("git");
         habilidades[7].classList.add("ingles");
         habilidades[8].classList.add("trabajo-en-equipo");
         habilidades[9].classList.add("comunicacion");
         habilidades[10].classList.add("organizacion");
         habilidades[11].classList.add("automotivacion");
         habilidades[12].classList.add("meticulosidad");
    }
}
window.onscroll = function(){
    efectoHabilidades();
}
const form = document.getElementById('form-contact');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const error = document.getElementById('error');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  console.log("enviando form");
  var msjError = [];

  function mostrarError(input, mensaje) {
    const errorHtml = `<div class="error-message">${mensaje}</div>`;
    input.insertAdjacentHTML('afterend', errorHtml);
    input.classList.add('error-input');
   }
   
  function limpiarErrores() {
    const errorDivs = document.querySelectorAll('.error-message');
    errorDivs.forEach((div) => div.remove());
    const inputs = document.querySelectorAll('[data-error]');
    inputs.forEach((input) => input.classList.remove('error-input'));
  }
  limpiarErrores();


  if (nombre.value === null || nombre.value === '') {
    mostrarError(nombre, 'Ingresa tu nombre (hasta 50 caracteres)');
  }
  if (email.value === null || email.value === '') {
    mostrarError(email, 'Ingresa tu email.');
  } else if (!validarEmail(email.value.trim())) {
    mostrarError(email, 'El correo electrónico ingresado no es válido.');
  }
  if (asunto.value === '') {
    mostrarError(asunto, 'Este campo es obligatorio (hasta 50 caracteres)');
  }
  if (mensaje.value === '') {
    mostrarError(mensaje, 'Este campo es obligatorio (hasta 300 caracteres)');
  }

  if (msjError.length === 0) {
    form.reset(); 
  }

});

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
