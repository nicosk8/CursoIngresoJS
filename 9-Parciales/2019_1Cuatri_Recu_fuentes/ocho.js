/*Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantida de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color*/
function mostrar()
{
	var color='';
	var precio=0;
	var respuesta
	var iRojos;
	var iRojosPrecioMayor5000;
	var iPrecioMenor5000;
	var esPrimeraVuelta=true;
	do {  
		
		color=prompt('Ingrese el color del vehiculo:');
		while(color.toLowerCase() != 'rojo' || color.toLowerCase() != 'verde' || color.toLowerCase() != 'amarillo' ){
			color=prompt('ERROR. Ingrese rojo, amarillo o verde:').toLowerCase();
		}

		precio=parseInt(prompt('Ingrese el precio del auto:'));
		while(isNaN(precio) || precio <=0 || precio >10000 ){ // si el valor del coche es 0 es invalido
			precio=parseInt(prompt('ERROR.Debe ingresar un numero entre 1 y 10000:'));
		}

		if (color == 'rojo'){
			 iRojos++;
			if (precio >5000){
				 iRojosPrecioMayor5000++;
			
			}
		}
		var respuestaA='Se ingresaron  ' + iRojos + ' cantidad de autos rojos.';
		var respuestaB='La cantidad total de autos rojos con precio mayor a $5000 es ' + iRojosPrecioMayor5000;
		
		if(precio < 5000){
			 iPrecioMenor5000++;
		}
		var respuestaC='La cantidad total de autos  con precio menos a $5000 es ' + iPrecioMenor5000;

		if(esPrimeraVuelta){
			var max=precio;
			var colorMasCaro=color;
			esPrimeraVuelta=false;

		}else if (precio > max){
			max=precio;
			colorMasCaro=color;
		} 
		var respuestaE='El color del auto más caro es ' + colorMasCaro + ' y su importe es de $' + max;


		var iAutos; // contador de autos.
		var promedio=cantidadAutos/iAutos;
		var respuestaD='el promedio total de los autos ingresados es' + Math.ceil(promedio);

	respuesta=confirm('¿Desea continuar?');
	} while (continuar);

function muestroDatos(){
	document.write(respuestaA)+'<br>';
	document.write(respuestaB)+'<br>';
	document.write(respuestaC)+'<br>';
	document.write(respuestaD)+'<br>';
	document.write(respuestaE)+'<br>';

}
}
