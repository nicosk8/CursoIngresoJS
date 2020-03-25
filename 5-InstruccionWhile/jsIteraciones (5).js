function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != 'f' && sexo != 'm'){
	alert('ERROR.Ingrese nuevamente F si el sexo es femenino o M si es masculino');
//	sexo = prompt("ingrese f ó m .");
	break;
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN