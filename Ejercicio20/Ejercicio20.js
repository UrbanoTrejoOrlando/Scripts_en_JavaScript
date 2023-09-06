/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  14-07-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que suma tres numeros */
function calcularSuma() {
	// Entrada de datos
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var numero3 = parseInt(document.getElementById("numero3").value);   
    document.getElementById("suma").textContent = "Suma: " + numero1 + numero2 + numero3;
}


