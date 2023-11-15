
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
         habilidades[0].classList.add("javascript");
         habilidades[1].classList.add("angular");
         habilidades[2].classList.add("react");
         habilidades[3].classList.add("mongo");
         habilidades[4].classList.add("express");
         habilidades[5].classList.add("node");
         habilidades[6].classList.add("material");
         habilidades[7].classList.add("ingles");
         habilidades[8].classList.add("trabajo-en-equipo");
         habilidades[9].classList.add("comunicacion");
         habilidades[10].classList.add("organizacion");
         habilidades[11].classList.add("automotivacion");
    }
}
window.onscroll = function(){
  efectoHabilidades();
}

function validateForm() {
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const asunto = document.getElementById('asunto');
  const mensaje = document.getElementById('mensaje');

  console.log('valores form:', nombre.value, email.value, asunto.value, mensaje.value);
  
  if (nombre.value === null || nombre.value === '') {
    return false;
  }  
  if (email.value === null || email.value === '') {
    return false;
  } else if (!validarEmail(email.value.trim())) {
  }  
  if (asunto.value === '') {
    return false;
  }  
  if (mensaje.value === '') {
    return false;
  }  
  return true;
}    

document.getElementById('form-contact').addEventListener('submit', function(event) {
  if (!validateForm()) {
    event.preventDefault();
  }  
});  

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
} 
