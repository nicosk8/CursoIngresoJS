/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
 var precio1=document.getElementById('PrecioUno').value;
     precio1=parseInt(precio1);
 var precio2=document.getElementById('PrecioDos').value;
     precio2=parseInt(precio2);
 var precio3=document.getElementById('PrecioTres').value;
     precio3=parseInt(precio3);
 var final=precio1+precio2+precio3;	
 alert('El precio final es: ' + '$' + final);
}

function Promedio () 
{
 var n1=document.getElementById('PrecioUno').value;
     n1=parseInt(n1);    
 var n2=document.getElementById('PrecioDos').value;
     n2=parseInt(n2);
 var n3=document.getElementById('PrecioTres').value;
     n3=parseInt(n3);
 var total=n1+n2+n3;	
    var promedio=total/3;
    alert('El promedio de los tres productos es: ' + promedio);
}
function PrecioFinal () 
{
 var saldo1=document.getElementById('PrecioUno').value; 
     saldo1=parseInt(saldo1); 
 var saldo2=document.getElementById('PrecioDos').value;
     saldo2=parseInt(saldo2);
 var saldo3=document.getElementById('PrecioTres').value;
     saldo3=parseInt(saldo3);
 var total=saldo1+saldo2+saldo3;	
 var iva=total*21/100;
 var resultadoFinal=total+iva;
    alert('El precio final màs IVA es: ' + '$' + resultadoFinal);
}