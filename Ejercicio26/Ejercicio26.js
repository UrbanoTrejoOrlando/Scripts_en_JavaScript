/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que calcula la calificacion de N alumnos y obtiene el promedio general */
function calcularPromedio() {
 	// Entrada de datos
	var alumnos = parseInt(document.getElementById("alumnos").value);
    var edades1 = document.getElementById("edadesContainer");
    var totalEdades = 0;
    
    edadesContainer.innerHTML = "";
    
    for (var i = 0; i < alumnos; i++) {
        var edadLabel = document.createElement("label");
        edadLabel.textContent = "Edad del alumno " + i + ": ";
        
        var edadInput = document.createElement("input");
        edadInput.type = "number";
        
        edades1.appendChild(edadLabel);
        edades1.appendChild(edadInput);
        edades1.appendChild(document.createElement("br"));
    }
   
    var calcularButton = document.createElement("button");
    calcularButton.textContent = "Calcular Promedio";
    calcularButton.onclick = function() {
        totalEdades = 0;
        
        for (var i = 1; i <= alumnos; i++) {
            var edad = parseFloat(document.querySelector("#edadesContainer input:nth-child(" + i + ")").value);
            totalEdades += edad;
        }
        
        var promedio = totalEdades / alumnos;
        document.getElementById("promedioResultado").textContent = "El promedio de los alumnos es: " + promedio.toFixed(2);
    };
    
    edades1.appendChild(calcularButton);
}

