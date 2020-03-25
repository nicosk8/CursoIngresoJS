/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var F=document.getElementById('Temperatura').value;
		F=parseInt(F);
	var C=(F-32)*5/9;
	alert(F + ' °F son ' + C + ' °C.');		
}

function CentigradosFahrenheit () 
{
	var C=document.getElementById('Temperatura').value;
		C=parseInt(C);
	var F=(C*9/5)+32;
	alert(C + ' °C son ' + F + ' °F.');
	
}
