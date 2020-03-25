/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.*/


function Rectangulo () 
{
 	var largo=document.getElementById('Largo').value;
 	var ancho=document.getElementById('Ancho').value;
 		largo=parseInt(largo);
 		ancho=parseInt(ancho);
 	var	perimetro=(largo*2)+(ancho*2);
 	var total=perimetro*3;
 	alert('Para alambrar un terreno rectangular, se debe comprar '+total+' metros de alambre.');
}


function Circulo (){ 
	var radio=document.getElementById('Radio').value;
		radio=parseInt(radio);
//	var circunferencia=radio *2*Math.PI;
//	var circunferencia=Math.floor(radio *2*Math.PI);
	var circunferencia=Math.round(radio *2*Math.PI);
	var cantidad=circunferencia*3;   
	alert('Para alambrar un terreno circular, se debe comprar '+cantidad+' metros de alambre.');
}

function Materiales () {
	var largo=document.getElementById('Largo').value;
 	var ancho=document.getElementById('Ancho').value;
 		largo=parseInt(largo);
 		ancho=parseInt(ancho);
 	var	area=largo*ancho;
 	var bolsasCemento=area*2;
 	var bolsasCal=area*3;
 	alert(' Para construir el entrepiso de ' + area + ' m^2 ' + ' se necesitan ' + bolsasCemento + ' bolsas de cemento y ' + bolsasCal + ' bolsas de cal.' );
}



