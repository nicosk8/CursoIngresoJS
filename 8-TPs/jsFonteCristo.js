/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
// a) muestro la cantidad de nros. pares.
function NumerosPares(){
		var numero=document.getElementById('numero').value;
 			numero=parseInt(numero);
 		var i=0;

 		if(isNaN(numero) || numero <0 ){
 		alert('Error. Debe ingresar un numero postivo.');
 		}else if(numero%2==0){
 		
 			for(numero; numero>0; i++ ){
 				numero-=2;}
 			
 		}else{alert('Error. ' + numero + ' no es un numero par.');}	
 		
 		alert('cantidad de numeros pares desde el número ingresado hasta el cero: ' + i);
 	}
// b) muestro la cantidad de nros. impares.
function NumerosImpares(){
		var numero=document.getElementById('numero').value;
 			numero=parseInt(numero);
 		var i=0;
 		if(isNaN(numero) || numero <0 ){
 		alert('Error. Debe ingresar un numero postivo.');
 		}else if(numero%2!=0){
 		// b) muestro la cantidad de nros. impares.
 			for(numero; numero>0; i++ ){
 				numero-=2;}
 			
 		}else{alert('Error. '+ numero + ' no es un numero par.');}	
 		
 		alert('cantidad de numeros impares desde el número ingresado hasta el cero: ' + i);
}
// c) muestro la cantidad de nros. divisibles de ese numero.
function NumerosDivisibles(){
		var numero=document.getElementById('numero').value;
 			numero=parseInt(numero);
 		var i=0;
 		if(isNaN(numero) || numero <0 ){
 		alert('Error. Debe ingresar un numero postivo.');
 		}else if(numero>1 || numero<100){
 		
 			for(numero; numero>0; i++ ){
 				numero-=2;}
 			
 		}else{alert('Error. '+ numero + ' no es un numero par.');}	
 		
 		alert('cantidad de numeros impares desde el número ingresado hasta el cero: ' + i);



}
// d) muestro si el número es un número primo o no.
function VerificarPrimo(){
		var numero=document.getElementById('numero').value;
 			numero=parseInt(numero);
 		var i=0;
 		if(isNaN(numero) || numero <0 ){
 		alert('Error. Debe ingresar un numero postivo.');
 		}else if(numero/numero==1 && numero/1==numero){ 
 			alert(numero + ' es un numero primo.');
 		}else{alert(numero + ' NO es un numero primo.');}
 		}

 // e) muestro la cantidad de numeros primos.
 function NumerosPrimos(){
 		var numero=document.getElementById('numero').value;
 			numero=parseInt(numero);
 		var i=0;
 		if(isNaN(numero) || numero <0 ){
 		alert('Error. Debe ingresar un numero postivo.');
 		}else if(numero/numero==1 && numero/1==numero){ 
 			switch (numero){
 				case 3:
 					alert('La cantidad de numeros primeros consecutivos antes y sin abarcar del 3, es : 1. Dicho numero es el 2');
 				break;
 				case 2:
 				alert('El 2 es el último numero primo antes del 0');
 				break;
 				default:
 				for(numero; numero>1; i++ ){
 				numero-=2;}
 				alert('La cantidad de numeros primos desde el número ingresado hasta el cero son: ' + i);
 				break;

 			

 			
 }}}


 			
 		
 		
 		






