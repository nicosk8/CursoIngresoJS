function mostrar()
{
//tomo la edad  
var mesDelAño =document.getElementById('mes').value;
switch(mesDelAño){
	case	'Febrero':
				alert('Este mes tiene 29 días');
				break;
	case 'Abril':
	case 'Junio':
	case 'Septiembre':
	case 'Junio':
	case 'Noviembre':
				alert('Este mes tiene 30 días');
				break;
	default:
				alert('Este mes tiene 31 días');
				break;			

}

	
	



}//FIN DE LA FUNCIÓN