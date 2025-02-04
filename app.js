// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let input = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function limpiarCampos() {
    input.value = "";//Limpiando el valor del input
    resultado.innerHTML = "";//En caso de iniciar nuevamente la aplicación después de obtener un resultado, se borrará el resultado anterior.
    listaAmigos.innerHTML = "";//Limpia la lista de amigos existente para que se muestre la lista actualizada cada vez que se agrega un amigo.
}


function agregarAmigo() {
    let amigo = input.value.trim();//Tomando el valor del input.

    limpiarCampos();
        
    if (!amigo) {
        alert("Por favor, inserte un nombre.");
    } else{
        amigos.push(amigo);
        
        for (let index = 0; index < amigos.length; index++) {
            let amigo = amigos[index];
            let elementoLi = document.createElement("li");
        
            elementoLi.innerHTML = amigo;
            listaAmigos.appendChild(elementoLi);
        }
    }
}

function sortearAmigo() {
    //Condiciona el mensaje de error o seleciona y muestra el amigo secreto.
    if (amigos.length === 0) {
        alert("Debes ingresar los nombres de tus amigos para realizar el sorteo");
    } else {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];
        
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSecreto}`;
        amigos.length = 0;//Limpia el array si se quiere iniciar un nuevo juego sin necesidad de actualizar el navegador.
    }
}



