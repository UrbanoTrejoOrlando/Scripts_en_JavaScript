/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que calcula la tercera parte de un numero */

function realizarOperaciones() {
    // Entrada de datos
	var numero = parseFloat(document.getElementById("numero").value);
    var r1 = numero * 2;
    var r2 = r1 / 3;
    var r3 = r2 / 2;
    // Impresion de resultados
    var resultado = document.getElementById("resultado");
    resultado.textContent = "La mitad de la tercera parte del doble de " + numero + " es: " + r3;
}

