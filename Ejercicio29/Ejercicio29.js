/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que almacena calificaciones de alumnos y calcula su promedio */

function calcularPromedio() {
    // Entrada de datos 
	var calificaciones = document.querySelectorAll(".calificacion");
    var suma = 0;

    for (var i = 0; i < calificaciones.length; i++) {
        var calificacion = parseFloat(calificaciones[i].value);
        suma += calificacion;
    }
	// Operaciones
    var promedio = suma / calificaciones.length;
	// Impresion de resultados
    var resultado = document.getElementById("promedioResultado");
    resultado.textContent = "Promedio: " + promedio;
}

