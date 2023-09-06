/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio: 
 * La CONAGUA requiere determinar el pago que debe de realizar a una persona por el total de metros cúbicos que consume de agua */

function precioDelAgua() {
    // Entrada de datos
	var precio = parseFloat(document.getElementById("precio").value);
    var metros = parseFloat(document.getElementById("metros").value);
    document.getElementById("total").textContent = "Pago: $" + precio * metros;
}

