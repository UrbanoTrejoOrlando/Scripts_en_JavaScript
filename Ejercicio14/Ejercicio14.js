/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que calcula la cantidad de euros a monedas y viceversa */

function realizarConversion() {
	// Entrada de datos
    var dolar = 16.89;
    var euro = 0.0053;
    var opcion = parseInt(document.getElementById("opcion").value);
    var dinero = parseFloat(document.getElementById("dinero").value);
    var total = 0;
    
    var resultado = document.getElementById("resultado");
    // Condicionales
    if (opcion === 1) {
        total = dinero * dolar;
        resultado.textContent = "Dinero: " + total.toFixed(2) + " dólares";
    } else if (opcion === 2) {
        total = dinero * euro;
        resultado.textContent = "Dinero: " + total.toFixed(2) + " euros";
    } else {
        resultado.textContent = "Opción no válida";
    }
}

