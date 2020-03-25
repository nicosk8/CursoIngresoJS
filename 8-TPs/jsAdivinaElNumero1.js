/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos;

function comenzar()
{
	
//Genero el número RANDOM entre 1 y 100
	
	var min=1;
	var max=100; 
	numeroSecreto=Math.floor(Math.random() * (100-1) + 1);
	contadorIntentos=0;
}

function verificar()
{
	var numUsuario=document.getElementById('numero').value;
		numUsuario=parseInt(numUsuario);
	 if (numUsuario == numeroSecreto){
			contadorIntentos=contadorIntentos+1;
			alert('¡Usted es un ganador! ¡y en sólo ' + contadorIntentos + ' intentos!.' );
	}else if (numUsuario < numeroSecreto){
			alert('Le falta, intente de nuevo');
			contadorIntentos=contadorIntentos+1;
	}else {
			alert('Se pasó, vuelva a intentar');
			contadorIntentos=contadorIntentos+1;
	}
}