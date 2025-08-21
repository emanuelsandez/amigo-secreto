//Declaración de variables globales
let amigos =[];
let amigosNuevos = "";

//Función agregar amigo a la lista de amigos para sortear entre los cuales se realiza el sorteo
function agregarAmigo(){
    let nombreAmigo= document.getElementById('amigo').value;
    
    if(nombreAmigo==""){
                 alert("Por favor, inserte un nombre.");
         limpiarCaja();   
        }else if (amigos.includes (nombreAmigo)){
                alert ("El nombre ingresado ya se encuentra registrado, por favor ingresa otro.");
                limpiarCaja();
            } else  {
                amigos.push(nombreAmigo);
                //console.log(amigos);
                actualizarAmigo();        
                limpiarCaja();
                }
}

//Función para elegir el nombre al azar del amigo secreto
function sortearAmigo(){
    if(amigos!=""){
        let amigoSecreto = amigos[Math.floor(Math.random()*amigos.length)];        
        let resultadoAmigo= document.getElementById('resultado');
        resultadoAmigo.innerHTML=`El amigo secreto es ${amigoSecreto}`;
        condicionesIniciales();
        amigos =[];
        }else{
            alert("Debe ingresar al menos un amigo");
            limpiarCaja();
             }
}

//Función que muestra la lista de amigos ingresados
function actualizarAmigo(){
    amigosNuevos= document.getElementById('listaAmigos');
    amigosNuevos.innerHTML=amigos;
    let elementoListaNueva = "";
    limpiarListaAmigos();
     for (var i = 0; i < amigos.length; i++){
        elementoListaNueva = document.createElement("li");
        elementoListaNueva.textContent = amigos [i];
        amigosNuevos.appendChild(elementoListaNueva);
    }
}

//Función para limpiar la caja de texto despúes de alguna acción
function limpiarCaja(){
    document.querySelector('#amigo').value='';
}

//Función que limpia la lista de amigos a mostrar
function limpiarListaAmigos(){
    amigosNuevos.innerHTML = "";    
}


//Función para volver a las condiciones iniciales del sistema
function condicionesIniciales(){
    //limpiar caja
    limpiarCaja();
    //limpiar lista amigos
    limpiarListaAmigos();    
}
