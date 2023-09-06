/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com 
 * Algoritmo que registra calificaciones de varias materias y calcular su promedio */
var materias = [
    "Cálculo Diferencial",
    "Fundamentos de Programación",
    "Química",
    "Fundamentos de investigación",
    "Matemáticas Discretas",
    "Desarrollo Sustentable"
];
var calificaciones = [];
var promediosMaterias = [0, 0, 0, 0, 0, 0];
var promedioGeneral = 0;

var tablaCalificaciones = document.getElementById("tablaCalificaciones");
var promedioGeneralElement = document.getElementById("promedioGeneral");

for (var i = 0; i < 6; i++) {
    // Entrada de datos
	var row = tablaCalificaciones.insertRow();
    var materiaCell = row.insertCell(0);
    materiaCell.textContent = materias[i];

    calificaciones[i] = [];

    for (var j = 0; j < 5; j++) {
        var calificacion = parseFloat(prompt("Calificación para " + materias[i] + " - Unidad " + (j + 1) + ":"));
        calificaciones[i][j] = calificacion;
        promediosMaterias[i] += calificacion;
    }

    promediosMaterias[i] /= 5;
    promedioGeneral += promediosMaterias[i];

    for (var j = 0; j < 5; j++) {
        var cell = row.insertCell(j + 1);
        cell.textContent = calificaciones[i][j];
    }

    var promedioCell = row.insertCell(6);
    promedioCell.textContent = promediosMaterias[i].toFixed(2);
}
// Operaciones 
promedioGeneral /= 6;
// Impresion de resultados
promedioGeneralElement.textContent = "Promedio general: " + promedioGeneral.toFixed(2);

