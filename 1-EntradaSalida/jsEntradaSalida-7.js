/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var n1=document.getElementById('numeroUno').value;
	var n2=document.getElementById('numeroDos').value;
	n1=parseInt(n1);
	n2=parseInt(n2);
	var resultado=n1+n2;
	alert('El resultado de la suma es ' + resultado);
}

function restar()
{
	var n1=document.getElementById('numeroUno').value;
	var n2=document.getElementById('numeroDos').value;
	n1=parseInt(n1);
	n2=parseInt(n2);
	var resultado=n1-n2;
	alert('El resultado de la resta es ' + resultado);
	
}

function multiplicar()
{ 
	var n1=document.getElementById('numeroUno').value;
	var n2=document.getElementById('numeroDos').value;
	n1=parseInt(n1);
	n2=parseInt(n2);
	var resultado=n1*n2;
	alert('El resultado de la multiplicacion es ' + resultado);
}

function dividir()
{
	var n1=document.getElementById('numeroUno').value;
	var n2=document.getElementById('numeroDos').value;
	n1=parseInt(n1);
	n2=parseInt(n2);
	var resultado=n1/n2;
	//var resultado=Math.round(resultado);
	alert('El resultado de la suma es ' + resultado);
	
}

