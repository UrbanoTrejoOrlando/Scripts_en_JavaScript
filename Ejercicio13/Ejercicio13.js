/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que determina el precio del boleto de un viaje */
function calcularPrecio() {
    // Entrada de datos
	var kilometros = parseFloat(document.getElementById("kilometros").value); 
    var resultadoP = document.getElementById("resultado");
    resultadoP.textContent = "El precio del boleto es de: $" + 20.50 * kilometros;
}

