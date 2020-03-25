/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

var eleccionMaquina;

function piedra()
{	eleccionMaquina=Math.floor(Math.random()*(3-0) + 1);
	
	switch(eleccionMaquina){
		case 1: // cuando la maquina elije piedra
		 alert('¡Empate!');
		break;
		case 2: // cuando la maquina elije papel
		alert('¡Perdiste!');

		break;
		case 3: // cuando la maquina elije tijera
		alert('¡Ganaste!');
		break;
		default: alert('ERROR. La máquina obtuvo valor: ' + eleccionMaquina);
		break;
	}

}//FIN DE LA FUNCIÓN
function papel()
{	eleccionMaquina=Math.floor(Math.random()*(3-0) + 1);
	
	switch(eleccionMaquina){
		case 1: // cuando la maquina elije piedra
		 alert('¡Ganaste!');
		break;
		case 2: // cuando la maquina elije papel
		alert('¡Empate!');

		break;
		case 3: // cuando la maquina elije tijera
		alert('¡Perdiste!');
		break;
		default: alert('ERROR. La máquina obtuvo valor: ' + eleccionMaquina);
		break;
	}

	

}//FIN DE LA FUNCIÓN
function tijera()
{	eleccionMaquina=Math.floor(Math.random()*(3-0) + 1);
	
	switch(eleccionMaquina){
		case 1: // cuando la maquina elije piedra
		 alert('¡Perdiste!');
		break;
		case 2: // cuando la maquina elije papel
		alert('¡Ganaste!');

		break;
		case 3: // cuando la maquina elije tijera
		alert('¡Empate!');
		break;
		default: alert('ERROR. La máquina obtuvo valor: ' + eleccionMaquina);
		break;
	}

	

}//FIN DE LA FUNCIÓN