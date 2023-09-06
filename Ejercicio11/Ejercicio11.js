/* Orlando Urbano Trejo (Lando)
 * Fecha: 04-09-2023
 * Correo: urbanoorlando79@gmail.com
 * Algoritmo que calcula la multiplicacion de dos numeros */

function calcularMultiplicacion() {
    // Entrada de datos
	var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    document.getElementById("resultado").textContent = "El resultado es: " + numero1 * numero2;
}

