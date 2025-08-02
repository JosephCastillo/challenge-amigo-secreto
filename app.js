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
    }
}


