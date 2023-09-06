/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que calcula la letra que te corresponde dependiendo de la calificacion */

function determinarCalificacion() {
    // Entrada de datos
	var calificacion = parseInt(document.getElementById("calificacion").value);
    var resultado = "";
    // Evaluacion de datos 
    switch (calificacion) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            resultado = "Tu calificación es: F";
            break;
        case 6:
        case 7:
            resultado = "Tu calificación es: D";
            break;
        case 8:
            resultado = "Tu calificación es: C";
            break;
        case 9:
            resultado = "Tu calificación es: B";
            break;
        case 10:
            resultado = "Tu calificación es: A";
            break;
        default:
            resultado = "Calificación inválida";
            break;
    }
	// Impresion de datos
    document.getElementById("resultado").textContent = resultado;
}

