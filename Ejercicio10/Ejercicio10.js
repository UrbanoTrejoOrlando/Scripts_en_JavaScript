/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que calcula el saldo de sus clientes, para no generar intereses y dependiendo del año hacer un descuento */
function calcularPagos() {
    var numClientes = parseInt(document.getElementById("numClientes").value);
    var clientesContainer = document.getElementById("clientesContainer");
    var resultadosDiv = document.getElementById("resultados");
    
    clientesContainer.innerHTML = ""; // Limpiar campos anteriores
    resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores
    
    for (var i = 1; i <= numClientes; i++) {
        var clienteDiv = document.createElement("div");
        
        var nombreLabel = document.createElement("label");
        nombreLabel.textContent = "Nombre del cliente " + i + ": ";
        var nombreInput = document.createElement("input");
        nombreInput.type = "text";
        nombreInput.id = "nombre" + i;
        
        var saldoAnteriorLabel = document.createElement("label");
        saldoAnteriorLabel.textContent = "Saldo anterior: ";
        var saldoAnteriorInput = document.createElement("input");
        saldoAnteriorInput.type = "number";
        saldoAnteriorInput.id = "saldoAnterior" + i;
        
        var depositoLabel = document.createElement("label");
        depositoLabel.textContent = "Último depósito: ";
        var depositoInput = document.createElement("input");
        depositoInput.type = "number";
        depositoInput.id = "deposito" + i;
        
        var montoComprasLabel = document.createElement("label");
        montoComprasLabel.textContent = "Monto por ventas: ";
        var montoComprasInput = document.createElement("input");
        montoComprasInput.type = "number";
        montoComprasInput.id = "montoCompras" + i;
        
        var saldoActualLabel = document.createElement("label");
        saldoActualLabel.textContent = "Saldo actual: ";
        var saldoActualInput = document.createElement("input");
        saldoActualInput.type = "number";
        saldoActualInput.id = "saldoActual" + i;
        
        clienteDiv.appendChild(nombreLabel);
        clienteDiv.appendChild(nombreInput);
        clienteDiv.appendChild(document.createElement("br"));
        clienteDiv.appendChild(saldoAnteriorLabel);
        clienteDiv.appendChild(saldoAnteriorInput);
        clienteDiv.appendChild(document.createElement("br"));
        clienteDiv.appendChild(depositoLabel);
        clienteDiv.appendChild(depositoInput);
        clienteDiv.appendChild(document.createElement("br"));
        clienteDiv.appendChild(montoComprasLabel);
        clienteDiv.appendChild(montoComprasInput);
        clienteDiv.appendChild(document.createElement("br"));
        clienteDiv.appendChild(saldoActualLabel);
        clienteDiv.appendChild(saldoActualInput);
        
        clientesContainer.appendChild(clienteDiv);
    }
    
    var calcularButton = document.createElement("button");
    calcularButton.textContent = "Calcular Resultados";
    calcularButton.onclick = function() {
        mostrarResultados(numClientes);
    };
    clientesContainer.appendChild(calcularButton);
}

function mostrarResultados(numClientes) {
    var resultadosDiv = document.getElementById("resultados");
    
    resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores
    
    for (var i = 1; i <= numClientes; i++) {
        var nombre = document.getElementById("nombre" + i).value;
        var saldoAnterior = parseFloat(document.getElementById("saldoAnterior" + i).value);
        var deposito = parseFloat(document.getElementById("deposito" + i).value);
        var montoCompras = parseFloat(document.getElementById("montoCompras" + i).value);
        var saldoActual = parseFloat(document.getElementById("saldoActual" + i).value);
        
        var pagoActual = (saldoActual * 0.12) + 200;
        var saldoMinimo = saldoActual * 0.15;
        var pagoInteres = saldoActual * 0.85;
        
        var resultado = document.createElement("p");
        resultado.textContent = "Cliente: " + nombre + "\n" +
                                "Tu saldo actual es de: $" + pagoActual + "\n" +
                                "Tu pago mínimo es de: $" + saldoMinimo + "\n" +
                                "El pago para no generar intereses es de: $" + pagoInteres;
        resultadosDiv.appendChild(resultado);
    }
}



