/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  14-07-2023
 * Correo: orlandourbanotrejo@gmail.com
 *
 * Algoritmo que calcula la cantidad de ventas que realiza un vendedor y de acuerdo a esas ventas aplicar un descuento */

function agregarVenta() {
    // Entrada de datos 
	var ventasContainer = document.getElementById("ventasContainer");
    var numVentas = document.getElementById("ventas").value;
    
	// Limpiar el contenedor
    ventasContainer.innerHTML = "";
    
    for (var i = 0; i < numVentas; i++) {
        var ventaInput = document.createElement("input");
        ventaInput.type = "number";
        ventaInput.placeholder = "Precio de la venta " + (i + 1);
        ventasContainer.appendChild(ventaInput);
    }
}

function calcularTotales() {
    var ventas = parseInt(document.getElementById("ventas").value);
    var totalFinal = 0;
    var totalMenor1000 = 0;
    
    for (var i = 0; i < ventas; i++) {
        var precio = parseFloat(document.getElementById("ventasContainer").children[i].value);
        
        totalFinal += precio;
        // Condicionales 
        if (precio < 1000) {
            totalMenor1000 += precio;
        }
    }
    
    document.getElementById("totalFinal").textContent = "Total final = $" + totalFinal;
    document.getElementById("totalMenor1000").textContent = "Total ventas menores a $1000 = $" + totalMenor1000;
}

document.getElementById("ventas").addEventListener("change", agregarVenta);

