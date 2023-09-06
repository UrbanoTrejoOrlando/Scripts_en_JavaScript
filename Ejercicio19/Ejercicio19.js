/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que determina el descuento de un empleado */

function calcularSalario() {
    // Entrada de datos
	var nombre = document.getElementById("nombre").value;
    var salario = parseFloat(document.getElementById("salario").value);
    var total = salario - (salario * 0.29);
    
    document.getElementById("nombreResultado").textContent = nombre;
    document.getElementById("total").textContent = total.toFixed(2);
}

