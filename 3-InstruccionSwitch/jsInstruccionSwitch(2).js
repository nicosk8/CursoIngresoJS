function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
	case	'Enero':
	case	'Febrero':
	case	'Marzo':
	case	'Abril':
	case 	'Mayo':
	case	'Junio':
			alert('Aun falta para el invierno.');
			break;
	case	'Julio':
	case	'Agosto':
			alert('Abrigate que hace frio');
			break;
	default:
			alert('Ya pasamos el invierno. ¡Ahora calor!');
			break;		
}
}//FIN DE LA FUNCIÓN