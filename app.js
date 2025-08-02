// Creamos array para almacenar los nombres de los participantes
let nombres = [];

// Obtenemos el elemento del DOM donde se escribirán los nombres
let nombreAmigo = document.getElementById("amigo");

// Validar que el campo no esté vacío
function validarNombre(nombreAmigo) {
    if (nombreAmigo.value.trim() === "") {
        alert("Por favor, ingresa un nombre.");
        return false;
    }
}

function agregarAmigo() {
    validarNombre(nombreAmigo);
}
