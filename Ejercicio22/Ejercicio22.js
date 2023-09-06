/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que calcule las comisiones de un empleado dependiendo de las ventas realizadas */

function calcularComision() {
    // Entrada de datos
	var sueldo = parseFloat(document.getElementById("sueldo").value);
    var ventas = parseInt(document.getElementById("ventas").value);
    
    var comision = 0;
    for (var i = 1; i <= ventas; i++) {
        var precio = parseFloat(prompt("Precio de la venta " + i + ": "));
        comision += precio * 0.10;
    }
    // Operaciones
    var total = comision + sueldo;
    
	// Impresion de datos
    document.getElementById("comision").textContent = comision.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
}

