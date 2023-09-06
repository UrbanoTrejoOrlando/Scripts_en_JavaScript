/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo para determinar si eres mayor de edad */
function verificarEdad() {
	// Entrada de datos
    var edad = parseInt(document.getElementById("edad").value);
    var resultadoElement = document.getElementById("resultado");
    // Condiciones
    if (edad >= 18) {
        resultadoElement.textContent = "Eres mayor de edad";
    } else {
        resultadoElement.textContent = "Eres menor de edad";
    }
}

