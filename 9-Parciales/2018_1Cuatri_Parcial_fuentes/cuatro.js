function mostrar()
{
    var numero1=prompt('Ingrese el primer nro.');
    var numero2=prompt('Ingrese el segundo nro.');
    if(numero1 == numero2){
        alert('Mostrar numeros concatenados: ' +numero1+numero2);
        
    }else if (numero1 > numero2){
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);
        resta=numero1-numero2;
        alert(resta);

    }else if (numero1 < numero2){
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);
        suma=numero1+numero2;
        if(suma > 10){
    alert('La suma es ' + suma + ' y supero el 10');
                   }else{alert(suma);} 
        
        
} 
}