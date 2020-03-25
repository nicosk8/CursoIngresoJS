/*para la gestión de un hotel:
Ingresar los siguientes datos validados de una reserva:
* nombre del huésped.
* cantidad de personas.
* cantidad de días de estadía. 
* forma de pago(efectivo , tarjeta o QR).
a) Informar el huésped que trajo más personas en una sola reserva.
b) Informar la cantidad de personas que se quedaron más días.
c) Informar la forma de pago más utilizada.
d) Informar el promedio de cantidad de días por reserva.*/
function mostrar()
{	// defino mis variables de trabajo.
	var aceptar;
	var huesped='';
	var personas=0;
	var dias=0;
	var FormaDePago='';
	var máxCantidadHuespedes=0;
	var HuespedQueTrajoMasPersonas='';

	

//inicio
aceptar=confirm('Presione "acerptar" para iniciar la reserva.');
// pido y valido datos.
while(aceptar){
	huesped=prompt('Cuál es su nombre?');
	/*while ((huesped.toUpperCase() <"A" || huesped.toUpperCase() > "Z") || (huesped.toLowerCase() <"a" || huesped.toLowerCase() >"z")){
		huesped=prompt('ERROR. El nombre no puede tener caracteres especiales. Ingrese otra vez:');
	}*/
	while (!(!/[^a-zA-Z]/.test(huesped))){
		huesped=prompt('ERROR. El nombre no puede tener caracteres especiales. Ingrese otra vez:');
	}


	personas=parseInt(prompt('cuántas personas desean reservar?:'));
	while (isNaN(personas)){
		personas=parseInt(prompt('ERROR. Ingrese un numero de personas valido.'));
	}

	dias=parseInt(prompt('Ingrese la cantidad de dias de la estadía:'));
	while(isNaN(dias) || dias<0){
		dias=parseInt(prompt('ERROR. debe ingresar un numero mayor a 0. Reingrese:'));
	}


	FormaDePago=prompt('Ingrese el tipo de pago: escriba "efectivo", "tarjeta" o "QR" :').toLowerCase();
	while((!(!/[^a-zA-Z]/.test(FormaDePago))) && 
			FormaDePago != "tarjeta" && 
			FormaDePago != "efectivo" && 
			FormaDePago != "qr"){
		FormaDePago=prompt('ERROR. Ingrese si el pago es con efectivo, si es con tarjeta o  si es con QR :');
		
}
}
	// a) Informar el huésped que trajo más personas en una sola reserva.
	if (esPrimeraVuelta){
		máxCantidadHuespedes=personas;
		var HuespedQueTrajoMasPersonas=huesped;
	}


// finalizar. Muestro totales.
document.write(respuesta) + '<br>';

}
	
/*
function mostrar()
{	// defino mis variables de trabajo.
	var nombreAlumno='';
	var edadAlumno;
	var notaAlumno;
    var cantidadMateriasDelAlumno;
    var cantiAlumnos=0;
    while(cantiAlumnos<3){
        nombreAlumno = prompt("nombre alumno");
        edadAlumno=CargarNumeros('ingrese edad del alumno:',5,18);
        notaAlumno=CargarNumeros('ingrese nota alumno',1,10)
        cantidadMateriasDelAlumno=CargarNumeros('cantidad Materias inscriptas del alumnno',1,5)
       cantiAlumnos++;
    }
        // finalizar. Muestro totales.
}
function CargarNumeros(mensaje,numValidoMin,numValidoMax)
{
  var variableAuxiliar ;
  variableAuxiliar =  parseInt(prompt(mensaje));
  while(isNaN(variableAuxiliar) || variableAuxiliar<numValidoMin || variableAuxiliar > numValidoMax ){
            variableAuxiliar=parseInt(prompt('ERROR. ' + mensaje + " valido  entre " + numValidoMin + " y " + numValidoMax));
    }
    return variableAuxiliar;
}*/