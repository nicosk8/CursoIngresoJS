function mostrar()
{
//tomo la edad 
var edad=document.getElementById("edad").value;
var civil=document.getElementById("estadoCivil").value;
edad=parseInt(edad);
if (edad <= 17 && civil != "Soltero"){
    alert("Usted es muy pequeño para no estar soltero");

}
}