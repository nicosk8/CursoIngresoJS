function mostrar()
{

	var contador=0;
	var acumulador=0;
	var producto=0;
//	var positivo=0;
//	var negativo=1;
	var respuesta=prompt('¿Desea ingresar un nro.? Escriba "SI" o "NO".');
	while(respuesta == 'si'){
		var numero=prompt('Ingrese un numero.');
		var numero=parseInt(numero);	
		if (numero>0){
			acumulador=acumulador+numero;
		}else {

			producto=numeroAnterior*numero;
			var numeroAnterior=numero;
		}
		

		if(respuesta == 'si'){
			respuesta=prompt('¿Desea seguir ingresando numeros? Escriba "SI" o "NO".');
		}


	}
	 


document.getElementById('suma').value=acumulador;
document.getElementById('producto').value=producto;

}//FIN DE LA FUNCIÓN