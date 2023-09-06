/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que calcula la edad de una persona en meses */

function calcularEdad() {
    // Entrada de datos
	var edad = parseInt(document.getElementById("edad").value);
    var meses = parseInt(document.getElementById("meses").value);
    var resultado = (edad * 12) + meses;
    
    document.getElementById("resultado").textContent = "Edad en meses: " + resultado;
}

