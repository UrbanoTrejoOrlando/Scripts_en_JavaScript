/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que calcula el descuento de una urna dependiendo del tipo de pelota que saque */
function calcularDescuento() {
	var opciones = document.getElementById("opciones");
    var compraInput = document.getElementById("total");
    var resultado1 = document.getElementById("resultado");
    // Entrada de datos 
    var opcion = parseInt(opciones.value);
    var compra = parseFloat(compraInput.value);
    var resultado = 0;
	// Condicionales
    if (opcion === 1) {
        resultado = compra - (compra * 0.10);
    } else if (opcion === 2) {
        resultado = compra - (compra * 0.05);
    } else if (opcion === 3) {
        resultado = compra - (compra * 0.15);
    } else {
        resultado1.textContent = "Opción no válida";
        return;
    }
	// Impresion de resultaods
    resultado1.textContent = "Monto total: $" + resultado.toFixed(2);
}

