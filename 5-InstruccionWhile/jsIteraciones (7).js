function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta=prompt('¿Desea ingresar un nro? Escriba SI o NO').toLowerCase();
	while(respuesta == 'si'){
		var numero=prompt('Ingrese un numero:');
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador++
		if (respuesta == 'si'){
			respuesta=prompt('¿Desea ingresar un nro? Escriba SI o NO').toLowerCase(); // toLowerCase(); CONVIERTE A MINUS , toUpperCase(); CONVIERTE A MAYÙS.
		}
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

//conviene usarlo para validar datos.

//********************************************************** */
/*function mostrar(){
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=='si'){
		numero=parseInt(prompt('ingrese un numero'));
		acumulador=acumulador+numero;
		contador++;
		respuesta=prompt('¿Desea continuar? ¿Si o no?');
	}

}*/

// RegExp();