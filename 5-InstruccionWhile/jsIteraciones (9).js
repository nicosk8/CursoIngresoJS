function mostrar()
{

	var contador=0;
	var numero=0;
	var numMax;
	var numMin;
	var continuar;
	// declarar variables
	

do{
	numero=parseInt(prompt('ingrese un numero'));
	if (contador==0){
		numMax=numero;
		numMin=numero;

	}else{
			if(numero > numMax){
				numMax=numero;
			}
			if (numero < numMin){
				numMin=numero;
			}
					
	}
	continuar= prompt('desea seguir ingresando? si o no?');
	contador++;
}while(continuar =='si');

document.getElementById('maximo').value=numMax;
document.getElementById('minimo').value=numMin;

}//FIN DE LA FUNCIÓN

// ctrl + h para reemplazar variables;

//*********************************************************** */

