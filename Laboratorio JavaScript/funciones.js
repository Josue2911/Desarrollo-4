function cambiar_color(){
    var color_random = '#' + Math.floor(Math.random()*12345678).toString(16); // Genera un color random
    document.getElementById("celda_1.1").style.color = color_random;
}
function añadir_texto(){
    var texto = "Ten lindo día.";
    var parrafo = document.getElementById("celda_1.2");
    parrafo.innerHTML += " " + texto;
}
function concatenarText(){
    var primerTexto = document.getElementById("p1").textContent;
    var segundoTexto = document.getElementById("p2").textContent;
    var concatenar = primerTexto + " " + segundoTexto;

    document.getElementById("concatenacion").textContent = concatenar;
}
function eleminarElemento(){
    var opcion = document.getElementById("paises");
    var opcionSeleccionada = opcion.opcionSeleccionada;
    if(opcionSeleccionada !== 0){
        opcion.remove(opcionSeleccionada);
    }
}

function enlaceVideo(){
    var URLVideo = "https://www.youtube.com/watch?v=koU_xuoc4WQ&pp=ygUVc2t5IGNvdGwgcGMgYW5pbWF0aW9u";
    open(URLVideo, "-blank");
}

function mensajeAlert(){
    const msjMostrar = document.getElementById("texto-mostrar").textContent;
    alert(msjMostrar);
}

function validarCampo(){
    var campoNom = document.getElementById("solo-letras");
    var contenido = campoNom.value;
    if (/[^A-Za-zÁÉÍÓÚáéíóú\s]+/.test(contenido)){
        alert("Los datos introducidos " + contenido + " no son letras o no son letras en su totalidad");
    }
    else{
        alert("Los datos se han escrito correctamente")
    }
}

function mostrarDeseo(){
    var eloro = document.getElementById("celda_1.7").textContent;
    console.log(eloro)
}

function print_estado(){
    var micheckbox = document.getElementById("celda_1.8");
    var result = document.getElementById("resultado");
    var estado;
    if (micheckbox.checked){
        estado = "Activado";
    }
    else{
        estado = "Desactivado";
        
    }
    result.innerHTML = estado;
}
function radio_estado() {
    const opcionSeleccionada = document.querySelector('input[name="opcion"]:checked');
    const resultado = document.getElementById("opcionSeleccionada");
    var opcion;

    if (opcionSeleccionada){
        opcion = opcionSeleccionada.value;
    }
    else{
        opcion = "Ninguna opción seleccionada";
    }
    resultado.innerHTML = opcion;
}

function obtenerDatos(){
    fetch("https://pokeapi.co/api/v2/pokemon/charmander").then(resp=>{
        if(resp.ok){
            resp.json().then(poke =>{
                MapearPokemon(poke);
            });
        }
    });
}

function MapearPokemon(poke){
    let contenedorPoke = document.getElementById("contenedor-poke");

    contenedorPoke.innerHTML = MapearPlantilla(poke);
    
}

function MapearPlantilla(p){
    return `<td>${p.species.name}</td>
    <td><img src="${p.sprites.other.dream_world.front_default}" alt=""></td>
    <td>${p.types[0].type.name}</td>
    `;
}





