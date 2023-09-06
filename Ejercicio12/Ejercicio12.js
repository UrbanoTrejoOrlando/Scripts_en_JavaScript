/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que determina los intereses que tiene una persona con el banco */

function calcularIntereses() {
	// Entrada de datos
    var anioPrestamo = parseInt(document.getElementById("anioPrestamo").value);
    var anioActual = parseInt(document.getElementById("anioActual").value);
    var resultadosDiv = document.getElementById("resultados");
    
    resultadosDiv.innerHTML = ""; 
    
    var prestamo = 1000;
    for (var i = anioPrestamo; i <= anioActual; i++) {
        prestamo = prestamo + (prestamo * 0.27);
        
        var resultado = document.createElement("p");
        resultado.textContent = `El interés de ${i} es de: $${prestamo}`;
        resultadosDiv.appendChild(resultado);
    }
}

