/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 *
 * Algoritmo que calcule el total de una caja registradora */

function calcularTotal() {
    var dineroCantidad = parseFloat(document.getElementById("dineroCantidad").value);
    var dineroDenominaciones = [1000, 500, 200, 100, 50, 20, 5, 2, 1, 0.5, 0.2, 0.1];
    var total = 0;
    
    for(var i = 0; i < dineroDenominaciones.length; i++){
        // Dato de entrada 
		var cantidadDeDenominacion = Math.floor(dineroCantidad / dineroDenominaciones[i]);
        dineroCantidad -= cantidadDeDenominacion * dineroDenominaciones[i];
        total += cantidadDeDenominacion * dineroDenominaciones[i];
    }
    // Impresion de resultados
    document.getElementById("totalCalculado").textContent = "Total calculado: $" + total;
}

