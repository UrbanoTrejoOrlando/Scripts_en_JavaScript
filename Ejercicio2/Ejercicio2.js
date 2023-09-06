/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 *
 * Algoritmo que calcula el precio total de una persona */

function CalcularPrecioBoleto() {
	// Datos de entrada 
    var precio = parseFloat(document.getElementById("precio").value);
    var distancia = parseFloat(document.getElementById("distancia").value);
    var precioBoleto = precio * distancia;
	// Impresion de resultadps	
    document.getElementById("precioBoleto").textContent = "Precio del boleto: $" + precioBoleto;
}

