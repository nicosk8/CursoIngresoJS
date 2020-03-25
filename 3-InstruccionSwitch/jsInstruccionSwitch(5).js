function mostrar()
{
//tomo la edad  
// PREGUNTAR CÓMO SE COMPORTA EL FORMATO DE HORA (11,59/11:59/11.59).
// ES NECESARIO DEFINIRLO? 
// POR QUÉ SI TOMA 11:59 SE MUESTRA EL MSJ 'ES DE MAÑANA' ?
// SABIENDO QUE 11:59 SOBREPASA 11 EN LA LÓGICA 
var laHora=document.getElementById('hora').value;
//	laHora=parseInt(laHora);
switch(laHora){
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
		alert('Es de mañana');
		break;
	default:
		alert('Es de tarde');
}
}

//FIN DE LA FUNCIÓN