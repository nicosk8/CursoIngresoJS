function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
	laHora=parseInt(laHora);

/*if (laHora>=7 && laHora<12){
	var mañana=laHora;
}else if (laHora>=12 && laHora<20){
	var tarde=laHora;
}else if(laHora>=20 && laHora<24){
	var noche=laHora;
}else {
	var noExiste=laHora;
}*/

switch(laHora){
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
			alert('Es de mañana');
			break;
	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
	case 19:
			alert('Es de tarde');
	case 20:
	case 21:
	case 22:
	case 23:
	case 24:				
}



}//FIN DE LA FUNCIÓN