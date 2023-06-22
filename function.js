
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
         habilidades[1].classList.add("html");
         habilidades[2].classList.add("css");
         habilidades[3].classList.add("github");
         habilidades[4].classList.add("git");
         habilidades[5].classList.add("ingles");
         habilidades[6].classList.add("trabajo-en-equipo");
         habilidades[7].classList.add("comunicacion");
         habilidades[8].classList.add("organizacion");
         habilidades[9].classList.add("automotivacion");
         habilidades[10].classList.add("meticulosidad");
    }
}
window.onscroll = function(){
    efectoHabilidades();
}