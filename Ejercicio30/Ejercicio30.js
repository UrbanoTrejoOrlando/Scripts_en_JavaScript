/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  05-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que multiplique dos arreglos */
function calcularMultiplicacion() {
    // Declarar arreglos
	var primerArray = document.querySelectorAll("#primerArray .valor");
    var segundoArray = document.querySelectorAll("#segundoArray .valor");
    var resultado = document.getElementById("resultado");
    
    var multiplicacion = [];

    for (var i = 0; i < 5; i++) {
		// Entrada de datos
        var valor1 = parseInt(primerArray[i].value);
        var valor2 = parseInt(segundoArray[4 - i].value);
        
        multiplicacion[i] = valor1 * valor2;
    }

    resultado.innerHTML = ""; 

    for (var i = 0; i < 5; i++) {
        var resultadoLi = document.createElement("li");
        resultadoLi.textContent = multiplicacion[i];
        resultado.appendChild(resultadoLi);
    }
}

