function mostrar()
{
//tomo la edad  
 var edad=document.getElementById('edad').value;
 edad=parseInt(edad); // SIEMPRE QUE TRABAJO COMPARANDO VALORES UTILIZAR parseInt() para convertir siempre a numèrico
 if (edad == 15){
 	alert('Niña bonita es el numero 15 en la quiniela');
 }else{
 	alert('Ingrese el valor 15 para ver el mensaje');
 } 

}//FIN DE LA FUNCIÓN