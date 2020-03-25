
/*Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento 
por prompt,con los kilos (validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne*/
function mostrar()
{	
	var peso;
	var sabor;
	var iBolsas;
	var iBolsasCarne;
	var cantidadKilosCarne;
	var promedio;	
	var esPrimeravuelta=true;

	for (var i=0 ; i<=10; i++){
		peso=parseInt(prompt('Ingrese el kilo  del alimento'));
		while (isNaN(peso) || peso <0 || peso >500){
			peso=prompt('Reingrese un peso mayor a 0 y menor a 500kg');
		}
	
		sabor=prompt('Ingrese el sabor de la bolsa. Debe de pollo, carne o vegetales:').toLowerCase();
		while (sabor != 'pollo' || sabor != 'carne' || sabor != 'vegetales'){
			sabor=prompt('ERROR. Debe el sabor debe ser pollo, carne o vegetales. Reingrese:');
		}
		
		if (esPrimeravuelta){ // establezco el peso mas liviano y su  sabor
			var pesoMin=peso;
			var	saborMin=sabor;
			esPrimeravuelta=false;

		} else if (peso < pesoMin){
			pesoMin=peso;
			saborMin=sabor;
		}
		var respuestaB='La sabor de la bolsa de comida más liviana es ' + saborMin + ' y el peso de la bolsa ' + pesoMin + 'kg.';

		if (sabor == 'carne'){ // cantidad y promedio de bolsas de carne
			 iBolsasCarne++;
			 cantidadKilosCarne += kilos
			var promedioCarne=cantidadKilosCarne/iBolsasCarne;
			var respuestaC='Se ingresaron en total ' + iBolsasCarne + ' con un promedio de ' + promedioCarne + ' kilos de carne en total';
		}

		iBolsas++; // contador de bolsas
		promedio=peso/iBolsas;
		var respuestaA='el promedio de los kilos totales es: ' + promedio;

mostrarDatos();
function mostrarDatos(){
	document.write(respuestaA)+'<br';
	document.write(respuestaB)+'<br';
	document.write(respuestaC)+'<br';
	

}


	}
}
