/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo para calcular el factorial de un numero */
function calcularFactorial() {
	// Entrada de datos
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = 1;
    
    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    
    var resultado1 = document.getElementById("resultado");
    resultado1.textContent = "El factorial de " + numero + " es: " + resultado;
}

