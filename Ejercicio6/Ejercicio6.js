/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 *
 * Algoritmo para determinar el costo que tendra realizar una llamada telefonica */

function CostoLlamada() {
    // Entrada de datos
	var tiempo = parseFloat(document.getElementById("tiempo").value);
    var costo = parseFloat(document.getElementById("costo").value);
   document.getElementById("total").textContent = "Costo de la llamada: $" + tiempo * costo;
}


