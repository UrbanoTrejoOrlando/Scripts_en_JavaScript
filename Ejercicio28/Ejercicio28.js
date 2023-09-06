/* Autor:  Orlando Urbano Trejo @Lando
 * Fecha:  04-09-2023
 * Correo: orlandourbanotrejo@gmail.com
 * Algoritmo que imprima un arbol de navidad */
document.addEventListener("DOMContentLoaded", function() {
    // Entrada de datos 
	var arbol1 = document.getElementById("arbol");
    var altura = parseInt(prompt("Altura del árbol: "));

    var arbol = "";

    for (var i = 1; i <= altura; i++) {
        var espacios = altura - i;

        // Espacios en blanco
        for (var j = 1; j <= espacios; j++) {
            arbol += " ";
        }

        // Asteriscos
        for (var j = 1; j <= 2 * i - 1; j++) {
            arbol += "*";
        }

        arbol += "\n";
    }
	// Imprimir el tronco
    var tronco = altura - 1;
    for (var i = 1; i <= 2; i++) {
        for (var j = 1; j <= tronco; j++) {
            arbol += " ";
        }
        arbol += "*\n";
    }

    arbol1.textContent = arbol;
});

