/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 *
 * Algoritmo para calcular el tiempo que tarda un persona en hacer un recorrido */

function CalcularTiempo() {
    // Datos de entrada
	var km = parseFloat(document.getElementById("km").value);
    var distancia = parseFloat(document.getElementById("distancia").value);
    document.getElementById("resultado").textContent = "Tiempo: " + (km * distancia) / 60 + " horas";
}

