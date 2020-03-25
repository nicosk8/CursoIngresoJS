var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var iEmpate=0;
var iPerdiste=0;
var iGanaste=0;

function comenzar(){
	
	eleccionMaquina=Math.floor(Math.random()*(3-1) + 1);
}
function piedra()
{
	comenzar();
	switch(eleccionMaquina){
		case 1: // cuando la maquina elije piedra
		 alert('¡Empate!');
		 iEmpate++;
//		 document.getElementById('empatadas').value='Partidas empatadas: ' + iEmpate;
		break;
		case 2: // cuando la maquina elije papel
		alert('¡Perdiste!');
		iPerdiste++;
//		document.getElementById('perdidas').value='Partidas perdidas: ' + iPerdiste;
		break;
		case 3: // cuando la maquina elije tijera
		alert('¡Ganaste!');
		iGanaste++;
//		document.getElementById('ganadas').value='Partidas ganadas: ' + iGanaste;
		break;
		default: alert('ERROR. La máquina obtuvo valor: ' + eleccionMaquina);
		break;
	}
mostrarResultado();
}//FIN DE LA FUNCIÓN

function papel()
{
	comenzar()	
	switch(eleccionMaquina){
		case 1: // cuando la maquina elije piedra
		 alert('¡Ganaste!');
		 iGanaste++;
//		document.getElementById('ganadas').value='Partidas ganadas: ' + iGanaste;
		break;
		case 2: // cuando la maquina elije papel
		alert('¡Empate!');
		iEmpate++;
//		 document.getElementById('empatadas').value='Partidas perdidas: ' + iEmpate;
		break;
		case 3: // cuando la maquina elije tijera
		alert('¡Perdiste!');
		iPerdiste++;
//		document.getElementById('perdidas').value='Partidas perdidas: ' + iPerdiste;
		break;
		default: alert('ERROR. La máquina obtuvo valor: ' + eleccionMaquina);
		break;
	}
mostrarResultado();
}//FIN DE LA FUNCIÓN

function tijera()
{ 	
	comenzar()
	switch(eleccionMaquina){
		case 1: // cuando la maquina elije piedra
		 alert('¡Perdiste!');
		 iPerdiste++;
		break;
		case 2: // cuando la maquina elije papel
		alert('¡Ganaste!');
		iGanaste++;
		break;
		case 3: // cuando la maquina elije tijera
		alert('¡Empate!');
		iEmpate++;
		break;
		default: alert('ERROR. La máquina obtuvo valor: ' + eleccionMaquina);
		break;
	}
	mostrarResultado();
}//FIN DE LA FUNCIÓN


function mostrarResultado()
{
	
document.getElementById('empatadas').value='Partidas perdidas: ' + iPerdiste ;
document.getElementById('ganadas').value='Partidas ganadas: ' + iGanaste;
document.getElementById('perdidas').value='Partidas empatadas: ' + iEmpate;

}


