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
	//PREGUNTO SI MI NRO. ALEATORIO. SI NOTA ES IGUAL A 9 0 10 MOSTRAR "EXCELENTE". SI NOTA ES MAYOR O IGUAL A 4 MOSTRAR "APROBO".
	//SI  NOTA ES MENOR A 4 MOSTRAR "VAMOS, LA PROXIMA SE PUEDE"
	if (numeroAleatorio == 9 || numeroAleatorio == 10 ){
		alert('Excelente! Usted obtuvo nota: '+numeroAleatorio);
	}else if (numeroAleatorio>=4){
		alert('Aprobado. Usted obtuvo la nota: '+numeroAleatorio);
	}else{
		alert('Vamos, la proxima se puede. Nota final: '+numeroAleatorio);
	}  

	//alert(numeroAleatorio);
}
//FIN DE LA FUNCIÓN
