// Creamos array para almacenar los nombres de los participantes
let nombres = [];

// Obtenemos el elemento del DOM donde se escribirán los nombres
let nombreAmigo = document.getElementById("amigo");

// Validar que el campo no esté vacío
function validarNombre(nombreAmigo) {
    if (nombreAmigo.value.trim() === "") {
        alert("Por favor, ingresa un nombre.");
        return false;
    } else {
        return true;
    }
}

// Función para limpiar el campo de entrada
function limpiarCampo() {
    // Limpiar el campo de entrada
    nombreAmigo.value = "";
}
// Función para agregar un amigo al array
function agregarAmigoArray() {
    nombres.push(nombreAmigo.value.trim());
}
// Función para agregar un amigo al array
function agregarAmigo() {

    // Si el nombre es válido, agregarlo al array
    const esValido = validarNombre(nombreAmigo);
    if (esValido) {
        // Agregar el nombre al array
        agregarAmigoArray();
        // Limpiar el campo de entrada
        limpiarCampo();
        // Recorrer el array y mostrar los amigos
        recorrerArrayAmigos();
    }
}


// Funcion para recorrer el array amigos
function recorrerArrayAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de agregar nuevos amigos
    for (let i=0; i < nombres.length; i++){
        // Crear un nuevo elemento de lista
        let li = document.createElement("li");
        // Asignar el nombre del amigo al contenido del elemento
        li.textContent = nombres[i];
        // Agregar el elemento a la lista
        listaAmigos.appendChild(li);
    }
}

// Función para seleccionar un amigo al azar
function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Debes agregar al menos dos amigos para seleccionar un amigo secreto.");
        return
    }
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    // obtener el nombre del amigo secreto
    let amigoSeleccionado = nombres[indiceAleatorio];
    // Mostrar el nombre del amigo secreto la lista
    let amigoSecreto = document.getElementById("resultado");
    amigoSecreto.textContent = "Tu amigo secreto es: " + amigoSeleccionado;

    }