/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.*/ 
 
function CalcularPrecio () {

	const precio=35;
 	var   cantidad=document.getElementById('Cantidad').value;
 		  cantidad=parseInt(cantidad);
 	var   importe=precio*cantidad;
 	var	  totalImporte; 	
 	var   marca=document.getElementById('Marca').value;
 	var	  descuento;

	if (cantidad >= 6){
		descuento=importe*0.5;
		totalImporte=importe-descuento;
		document.getElementById('precioDescuento').value=totalImporte;
	}
		
	else if(cantidad == 5){
		switch(marca){
			case 'ArgentinaLuz':
				descuento=importe*0.4;
				totalImporte=importe-descuento;
				document.getElementById('precioDescuento').value=totalImporte;
				break;
			default:
				descuento=importe*0.3;
				totalImporte=importe-descuento;
				document.getElementById('precioDescuento').value=totalImporte;
			}
	} else if (cantidad == 4){
		switch (marca){
			case 'ArgentinaLuz':
			case 'FelipeLamparas':
				descuento=importe*0.25;
				totalImporte=importe-descuento;
				document.getElementById('precioDescuento').value=totalImporte;
				break;
			default:
				descuento=importe*0.2;
				totalImporte=importe-descuento;
				document.getElementById('precioDescuento').value=totalImporte;
				break;
			}
	}else if (cantidad == 3){
		switch(marca){
			case 'ArgentinaLuz':
				descuento=importe*0.15;
				totalImporte=importe-descuento;
				document.getElementById('precioDescuento').value=totalImporte;
				break;
			case 'FelipeLamparas':
				descuento=importe*0.10;
				totalImporte=importe-descuento;
				document.getElementById('precioDescuento').value=totalImporte;
				break;
			default:
				descuento=importe*0.05;
				totalImporte=importe-descuento;
				document.getElementById('precioDescuento').value=totalImporte;
				break;}
	}else {		
				document.getElementById('precioDescuento').value=totalImporte;
				
	}

	if (totalImporte>120){
		var impuesto=totalImporte*0.1;
		var finalTotal=totalImporte+impuesto;
		document.getElementById('precioDescuento').value=finalTotal;
		alert('Se le cobrará $' + impuesto + ' de IIBB por el monto total.');
	}


}