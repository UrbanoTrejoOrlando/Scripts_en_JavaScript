/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejoi@gmail.com
 * Algoritmo para calcular el descuento de un medicamento */
function calcularDescuento() {
    // Entrada de datos
	var precio = parseFloat(document.getElementById("precio").value);
    var total = precio - (precio * 0.35);
    var nombre = document.getElementById("nombre").value;
	// Impresion de resultados
    var resultado = document.getElementById("resultado");
    resultado.textContent = "Cliente " + nombre + ", el total a pagar es de: $" + total.toFixed(2);
}

