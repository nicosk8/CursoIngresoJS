function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio;
	var maximoExcluido = 11;
	var minimoIncluido = 1;
	//numeroAleatorio = Math.floor(Math.random() * (maximoExcluido - minimoIncluido)) + minimoIncluido;
	numeroAleatorio = Math.random();
	numeroAleatorio *= maximoExcluido - minimoIncluido;
	numeroAleatorio = Math.floor(numeroAleatorio);
	numeroAleatorio += minimoIncluido;
​
	alert(numeroAleatorio);
}
//FIN DE LA FUNCIÓN
