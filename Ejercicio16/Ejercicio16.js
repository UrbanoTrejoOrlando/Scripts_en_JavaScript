/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com 
 * Algoritmo que calcula el presupuesto anual en tres areas de un hospital */

function calcularPresupuestos() {
    // Entrada de datos
	var presupuesto = parseFloat(document.getElementById("presupuesto").value);
	// Operaciones
    var urgencias = presupuesto * 0.37;
    var pediatria = presupuesto * 0.42;
    var traumatologia = presupuesto * 0.21;
    
    var urgencia = document.getElementById("urgencias");
    var pediatrias = document.getElementById("pediatria");
    var traumatologias = document.getElementById("traumatologia");
    // Impresion de resultados
    urgencia.textContent = "Presupuesto Urgencias: " + urgencias.toFixed(2);
    pediatrias.textContent = "Presupuesto Pediatría: " + pediatria.toFixed(2);
    traumatologias.textContent = "Presupuesto Traumatología: " + traumatologia.toFixed(2);
}

