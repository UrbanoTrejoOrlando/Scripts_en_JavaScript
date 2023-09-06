/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que calcula la cantidad total de dinero que tienes */
var cajero = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50];
function calcularTotal() {
    var total = 0;
    
    for (var i = 0; i < cajero.length; i++) {
        // Entrada de datos
		var cantidad = parseFloat(document.getElementById("cantidad" + i).value);
        total += cantidad * cajero[i];
    }
    
    document.getElementById("total").textContent = total.toFixed(2);
}

var cajeroContainer = document.getElementById("cajeroContainer");

for (var i = 0; i < cajero.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = `
        <label>Cantidad de $${cajero[i]} que tienes:</label>
        <input type="number" id="cantidad${i}" step="any"><br>
    `;
    cajeroContainer.appendChild(div);
}

var totalButton = document.createElement("button");
totalButton.textContent = "Calcular Total";
totalButton.onclick = calcularTotal;
cajeroContainer.appendChild(totalButton);

