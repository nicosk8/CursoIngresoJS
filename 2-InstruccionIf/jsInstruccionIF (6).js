function mostrar()
{
//tomo la edad  
 var edad=document.getElementById('edad').value;
     edad=parseInt(edad);
        if (edad>=18){
            alert('La persona es mayor de edad.');

        } else if (edad <=17 && edad >=13){
            alert('La persona es adolescente.');
        } else{
            alert('La persona es un/a niño/a.');
        } 
}//FIN DE LA FUNCIÓN