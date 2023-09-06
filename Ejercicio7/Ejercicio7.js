/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 *
 * Algoritmo para leer calificaciones de N alumnos y determinar el numero aprobados y reprobados */

function ingresarCalificaciones() {
	// Entrada de datos
    var cantidadAlumnos = parseInt(document.getElementById("cantidadAlumnos").value);
    var calificacionesContainer = document.getElementById("calificacionesContainer");
    // Limpiar calificaciones anteriores
	calificacionesContainer.innerHTML = "";    
    for (var i = 0; i < cantidadAlumnos; i++) {
        // Recabar calificaciones de alumnos 
		var calificacionInput = document.createElement("input");
        calificacionInput.type = "number";
        calificacionInput.placeholder = "Calificación del alumno " + (i+1);
        calificacionesContainer.appendChild(calificacionInput);
    }
    
    var calcularButton = document.createElement("button");
    calcularButton.textContent = "Calcular Resultados";
    calcularButton.onclick = function() {
        calcularResultados(cantidadAlumnos);
    };
    calificacionesContainer.appendChild(calcularButton);
}

function calcularResultados(cantidadAlumnos) {
    var resultadosDiv = document.getElementById("resultados");
    // Limpiar resultados anteriores
    resultadosDiv.innerHTML = ""; 
    
    for (var i = 1; i <= cantidadAlumnos; i++) {
        var calificacion = parseFloat(document.getElementById("calificacionesContainer").children[i - 1].value);

        var resultado = document.createElement("p");
        resultado.textContent = "Alumno " + i + ": " + (calificacion >= 70 ? "Aprobado" : "Reprobado");
        resultadosDiv.appendChild(resultado);
    }
}


