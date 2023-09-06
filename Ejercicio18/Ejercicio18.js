/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que calcule el sueldo total de un empleado */
function calcularSueldo() {
	// Entrada de datos
    var horas = parseFloat(document.getElementById("horas").value);
    var sueldo = parseFloat(document.getElementById("sueldo").value); 
    document.getElementById("total").textContent = "Sueldo: $" + horas * sueldo;
}

