/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe=document.getElementById('sueldo').value;
	    //importe=parseInt(importe);
		importe=parseFloat(importe);	
		var aumento=importe*10/100;
	    aumento=parseInt(aumento);
	var resultado=importe+aumento;
	document.getElementById('resultado').value=resultado;
}
