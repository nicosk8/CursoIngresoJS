function mostrar()
{
 var precio=parseInt(prompt('Ingrese el precio del producto'));
 var porcentaje=parseInt(prompt('Ingrese el porcentaje de descuento'));
 var descuento=precio*porcentaje/100;
 var precioFinal=precio-descuento;
 document.getElementById('elPrecioFinal').value=precioFinal;
}
