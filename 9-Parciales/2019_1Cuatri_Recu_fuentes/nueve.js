/*Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los adolescentes.
c) El promedio de notas de los mayores
d) El promedio de notas por sexo masculino y femenino
*/
function mostrar()
{
	var nombre='';
	var edad=0;
	var sexo='';
	var nota=0;
	var iVaronesAprobados=0;
	var acumuladorNotasAdolescentes=0;
	var iNotasAdolescentes=0;
	var promedioAdolescentes=0;
	var acumuladorNotasMayores=0;
	var iNotasMayores=0;
	var promedioMayores=0;
	var acumuladorNotasF=0;
	var iNotasF=0;
	var promedioF=0;
	var acumuladorNotasM=0;
	var iNotasM=0;
	var promedioM=0;
	var respuestaA='';
	var respuestaB='';
	var respuestaC='';
	var respuestaD='';
	var respuestaE='';
	var confirmar;


	do{ nombre=prompt('Ingrese nombre del alumn@:');
		while((nombre.toUpperCase() <'A' || nombre.toUpperCase() >'Z') && (nombre.toLowerCase() <'a' || nombre.toLowerCase() >'Z') ){
			nombre=prompt('ERROR.Debe ingresar un nombre válido sin caracteres especiales.');
		}
		edad=parseInt(prompt('Ingrese edad del alumn@:'));
		while(isNaN(edad) || edad <13 ){
			edad=parseInt(prompt('ERROR. La edad debe ser un numero mayor a 13.'));
		}

		sexo=prompt('Ingrese sexo del alumn@: "f" para femenino o "m" para masculino');
		while( sexo != 'f' && sexo != 'm'){
			sexo=prompt('ERROR. Reingrese el sexo: "f" para femenino o "m" para masculino.');
		}

		nota=parseInt(prompt('Ingrese la nota del alumn@:'));
		while(isNaN(nota) || nota <=0 ){
			nota=parseInt(prompt('ERROR. La nota debe ser un numero mayor a 0.'));
		}

		if (sexo == 'm' && nota >=6){ // varones aprobados
		  iVaronesAprobados++;
		  respuestaA='Los varones aprobados son ' + iVaronesAprobados;
		}

		if (edad >13 || edad <18){ // promedio de las notas de los adolescentes y los mayores
			 acumuladorNotasAdolescentes+=nota;
			 iNotasAdolescentes++;
			 promedioAdolescentes=acumuladorNotasAdolescentes/iNotasAdolescentes;
			 respuestaB='el promedio de notas de los adolescentes es ' + promedioAdolescentes.toFixed(2);
		}else{
			 acumuladorNotasMayores+=nota;
			 iNotasMayores++;
			 promedioMayores=acumuladorNotasMayores/iNotasMayores;
			 respuestaC='el promedio de notas de los mayores es ' + promedioMayores.toFixed(2);

		}

		if (sexo=='f'){
			 acumuladorNotasF+=nota;
			 iNotasF++;
			 promedioF=acumuladorNotasF/iNotasF;
			 respuestaD='el promedio de notas de las mujeres es  ' + promedioF.toFixed(2);

		} else{
			 acumuladorNotasM+=nota;
			 iNotasM++;
			 promedioM=acumuladorNotasM/iNotasM;
			 respuestaE='el promedio de notas de los varones es ' + promedioM.toFixed(2);


		}

	confirmar=confirm('¿desea seguir ingresando datos?');
	}while(confirmar);
	mostrarDatos();
	function mostrarDatos(){
		document.write(respuestaA) + '<br>';
		document.write(respuestaB) + '<br>';
		document.write(respuestaC) + '<br>';
		document.write(respuestaD) + '<br>';
		document.write(respuestaE) + '<br>';
	}
}
