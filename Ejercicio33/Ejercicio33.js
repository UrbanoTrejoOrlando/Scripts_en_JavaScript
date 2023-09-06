/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  08-09-2023 
 * Correo: orlandourbanotrejo@gmail.com 
 * Algoritmo que calcula los creditos de cada alumno dependiendo de ciertas actividades */
function determinarCreditos() {
    // Datos de entrada
	var creditoTaller = parseInt(document.getElementById("creditoTaller").value);
    var resultado = "";
	// Condicionales
    if (creditoTaller === 1) {
        resultado += "Tienes un crédito\n";

        var carrera = parseInt(prompt("Participaste en la carrera (1 = sí y 2 = NO): "));
        if (carrera === 1) {
            resultado += "Tienes otro crédito\n";

            var lugar = parseInt(prompt("Quedaste en uno de los 3 primeros lugares (1 = sí y 2 = NO): "));
            if (lugar === 1) {
                resultado += "Genial, tienes tres créditos";
            } else if (lugar === 2) {
                resultado += "Tienes dos créditos";
            }
        } else if (carrera === 2) {
            resultado += "Tienes solo un crédito";
        }
    } else if (creditoTaller === 2) {
        resultado += "Inscríbete a un taller por favor\n";

        var carrera = parseInt(prompt("Participaste en la carrera (1 = sí y 2 = NO): "));
        if (carrera === 1) {
            resultado += "Tienes un crédito\n";

            var lugar = parseInt(prompt("Quedaste en uno de los 3 primeros lugares (1 = sí y 2 = NO): "));
            if (lugar === 1) {
                resultado += "Tienes dos créditos";
            } else if (lugar === 2) {
                resultado += "Tienes un crédito";
            }
        } else if (carrera === 2) {
            resultado += "No tienes ningún crédito";
        }
    } else {
        resultado += "Opción inválida";
    }

    document.getElementById("resultado").textContent = resultado;
}

