/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com 
 * Algortimo que calcula el descuento de 3 tipos de vestidos */

function calcularTotal() {
    // Entrada de datos
	var marca = parseInt(document.getElementById("marca").value);
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var total = 0;
    // Condicionales
    if (marca === 1) {
        total = cantidad * 5000;
    } else if (marca === 2) {
        total = cantidad * 400;
    } else if (marca === 3) {
        total = cantidad * 300;
    }
    // Impresion de resultados
    var resultado = document.getElementById("totalResultado");
    resultado.textContent = "Monto total de la venta: $" + total;
}

