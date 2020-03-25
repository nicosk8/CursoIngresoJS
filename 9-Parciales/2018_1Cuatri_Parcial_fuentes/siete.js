
//****************************************************************************************************************
/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

/*function mostrar(){

var sexoNotaMin=' ';
var contador=0;
var acumulador=0;
var promedio=0;
var numMin=0;
var cantVarones=0;

	

do{ var nota=parseInt(prompt('Ingrese la nota del alumn@:'));
	var sexo=prompt('Ingrese el sexo del alumn@').toLowerCase();

	acumulador=acumulador+nota;

	if (contador==0){	// establezco la nota minima y el sexo del alumn@
		numMin=nota;
		sexoNotaMin=sexo;
	}else if(contador>0 && nota < numMin){
		numMin=nota;
		sexoNotaMin=sexo;
	}
	if (sexo=='m' && nota>=6){ // si el sexo es 'm' y si la nota es mayor o igual a 6 le sumo 1 a mi contador de varones
		cantVarones++
	} 

	contador++;
	

}
while( ((nota>0 && nota<10)&&(sexo=='m'||sexo=='f')) && (contador<5)); // itera 5 veces siempre que 
																	  //nota este estre 0 y 10. Sexo = 'm' o 'f'

 if((nota<0 && nota>10) || (sexo !='m' ||  sexo !='f')){

	alert('Error. Ingrese una nota del 1 al 10 válida e ingrese "m" para indicar sexo masculino o "f" para femenino');
	nota=parseInt(prompt('Ingrese la nota del alumn@:'));
    sexo=prompt('Ingrese el sexo del alumn@').toLowerCase();
}
}*/
/*/////////////////////////////////////////////////////////////////////////////////////////////////
	var nota=parseInt(prompt('Ingrese la nota del alumn@:'));
    var sexo=prompt('Ingrese el sexo del alumn@').toLowerCase();

if((nota<0 && nota>10) && (sexo !='m' ||  sexo !='f')){

	alert('Error. Ingrese una nota del 1 al 10 válida e ingrese "m" para indicar sexo masculino o "f" para femenino');
	
}


while( ((nota>0 && nota<10)&&(sexo=='m'||sexo=='f')) && (contador<5)){
//	nota=parseInt(prompt('Ingrese la nota del alumn@:'));
//	sexo=prompt('Ingrese el sexo del alumn@').toLowerCase();

	acumulador=acumulador+nota;

	if (contador==0){	// establezco la nota minima y el sexo del alumn@
		numMin=nota;
		sexoNotaMin=sexo;
	}else if(contador>0 && nota < numMin){
		numMin=nota;
		sexoNotaMin=sexo;
	}
	if (sexo=='m' && nota>=6){ // si el sexo es 'm' y si la nota es mayor o igual a 6 le sumo 1 a mi contador de varones
		cantVarones++
	} 

	contador++;

}

*/////////////////////////////////////////////////////////////////////////////////////////////////
function mostrar(){

var sexoNotaMin=' ';
var contador=0;
var acumulador=0;
var promedio=0;
var numMin=0;
var cantVarones=0;

do{ var nota=parseInt(prompt('Ingrese la nota del alumn@:'));
	var sexo=prompt('Ingrese el sexo del alumn@').toLowerCase();

	acumulador=acumulador+nota;

	if (contador==0){	// establezco la nota minima y el sexo del alumn@
		numMin=nota;
		sexoNotaMin=sexo;
	}else if(contador>0 && nota < numMin){
		numMin=nota;
		sexoNotaMin=sexo;
	}
	if (sexo=='m' && nota>=6){ // si el sexo es 'm' y si la nota es mayor o igual a 6 le sumo 1 a mi contador de varones
		cantVarones++
	} 

	contador++;
}while( ((nota>0 && nota<=10)&&(sexo=='m'||sexo=='f')) && (contador<5));

if((nota<0 && nota>10) || (sexo !='m' ||  sexo !='f')){ // si los datos son valido muestro error

	alert('Error. Ingrese una nota del 1 al 10 válida e ingrese "m" para indicar sexo masculino o "f" para femenino');
	
}
alert('El promedio de las notas es: ' + acumulador/contador);
alert('Nota más baja: ' + numMin + ' . Sexo: ' + sexoNotaMin);
alert('La cantidad de varones con nota mayor o igual a seis: ' + cantVarones);
}






