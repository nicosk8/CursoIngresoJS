/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/

var tiempoInicio;
function comenzar()
{
	var colorSecreto;
	colorSecreto=Math.floor(Math.random()*(6-1) + 1);

	switch(colorSecreto){
		case 1:
			document.getElementById('ColorElejido').value='Rojo';
			document.getElementById('ColorElejido').style.color = 'red';
			break;
		case 2:
			document.getElementById('ColorElejido').value='Verde';
			document.getElementById('ColorElejido').style.color = 'green';
	//		document.getElementById('ColorElejido').setAttribute(textColor , 'green');
			break;
		case 3:
			document.getElementById('ColorElejido').value='Amarillo';
	//		document.getElementById('ColorElejido').setAttribute(textColor , 'green');
	document.getElementById('ColorElejido').style.color = 'yellow';
			break;
		case 4:
			document.getElementById('ColorElejido').value='Azul';
			document.getElementById('ColorElejido').setAttribute(color , 'blue');
			break;
		case 5:
			document.getElementById('ColorElejido').value='Marrón';
			document.getElementById('ColorElejido').setAttribute(color , 'brown');
			break;
		case 6:
		 	document.getElementById('ColorElejido').value='Celeste';
		 	document.getElementById('ColorElejido').setAttribute(color , 'light-blue');
		 	break;
		default: alert('ERROR en el math.random()');
	}

	

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	
	


}//FIN DE LA FUNCIÓN
