/*Se pide la carga de datos de un contenedor de alimento canino con un máximo de carga de 1000kg.
Cargar hasta que el cliente quiera ó se llene el contenedor.
Se pide:
* marca
* kilos por bolsa
* cantidad de bolsas
* importe por bolsa
a) ¿Qué marca tiene más kilos en el contenedor?
b) ¿Qué marca tiene más bolsas de alimento en el contenedor?
c) ¿Qué marca tiene el mayor importe por bolsa de alimento?
d) El importe y la marca de la bolsa de alimento menos pesada.*/
comenzar();
function comenzar(){
	
	var marca;
	var kilos;
	var cantidadBolsas;
	var importeBolsa;
	var noHayMaxNiMin=true;
	var max;
	var min;
	var minBolsas;
	var maxKilos;
	var minKilos;
	var marcaConMasKilosDentro;
	var maxBolsas;
	var marcaConMasBolsasDentro;
	var marcaMayorImporteXbolsa;
	var marcaMenosPesada;
	var importeMarcaMenosPesada;
	var cargaTotal;
	var esPimeraVuelta=true;

	do{
		
		marca=prompt('Ingrese la marca de alimento:');
		while ((marca.toUpperCase() <"A" || marca.toUpperCase() >"Z") && (marca.toUpperCase() <"a" || marca.toUpperCase() >"z")){
			marca=prompt('ERROR. Ingresó caracteteres inválidos. Reingrese la marca de alimento:');
		}

		kilos=parseInt(prompt('Ingrese los kilos de la bolsa'));
		while (isNaN(kilos)){
			kilos=parseInt(prompt('ERROR. Los kilos deben ser un valor numerico:'));
		}
		cargaContenedor += kilos;

		cantidadBolsas=parseInt(prompt('Ingrese la cantidad de bolsas'));
		while (isNaN(cantidadBolsas)){
			cantidadBolsas=parseInt(prompt('ERROR. La cantidad de bolsas debe ser un valor numerico:'));
		}

		importeBolsa=parseInt(prompt('Ingrese el importe:'));
		while (isNaN(importeBolsa)){
			importeBolsa=parseInt(prompt('ERROR. El importe debe ser un valor numerico:'));
		}

		if (esPimeraVuelta){
			
			maxKilos=kilos;
			marcaConMasKilosDentro=marca;
			maxBolsas=cantidadBolsas;
			marcaConMasBolsasDentro=marca;
			maxImporte=importeBolsa;
			marcaMayorImporteXbolsa=marca;
			var bolsaMenosPesada=kilos;
			var marcaMenosPesada=marca;
			esPimeraVuelta=false;
		
		}

		//a) ¿Qué marca tiene más kilos en el contenedor?

		if (kilos>maxKilos){
			if(marcaConMasKilosDentro != marca){
				marcaConMasKilosDentro=marca;
			}
		} else { var respuestaA=alert('la marca con más kilos en el contenedor es: ' + marcaConMasKilosDentro)}
		//b) ¿Qué marca tiene más bolsas de alimento en el contenedor?

		if (cantidadBolsas > maxBolsas){
			if (marcaConMasBolsasDentro > maxBolsas){
				if (marcaConMasBolsasDentro !=){
					marcaConMasBolsasDentro=marca;
				}else {var respuestaB=alert('La marca con más bolsas de alimento es: ' + marcaConMasBolsasDentro);}
			}
		}
		//c) ¿Qué marca tiene el mayor importe por bolsa de alimento?
		if (importeBolsa > maxImporte){
			if (marcaMayorImporteXbolsa != marca){
				marcaMayorImporteXbolsa=marca;
			}
		}else{ var respuestaC=alert('La marca de mayor importe por bolsa es: ' + marcaMayorImporteXbolsa);}

		//d) El importe y la marca de la bolsa de alimento menos pesada.*/

		if (kilos <  bolsaMenosPesada){
			if (marcaMenosPesada != marca){
				marcaMenosPesada=marca;
			}

		}else {
			var importeMenosPesada=importeBolsa; 
			var respuestaD=alert('la marca de la bolsa de alimento menos pesada es ' + marcaMenosPesada + ' y cuesta $' + importeMenosPesada );}

		continuar=confirm('¿Desea seguir ingresando datos?');

} while(continuar || cargaContenedor>=1000)

function muestroDatos(){
	document.write(respuestaA) + '<br>';
	document.write(respuestaB) + '<br>';
	document.write(respuestaC) + '<br>';
	document.write(respuestaD) + '<br>';
}

}