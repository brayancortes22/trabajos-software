/**
 * operaciones
 * Juan Carlos Jurado
 * 5 abril 2024
 * version 1.0
 */
function mayor(numeroUno,numeroDos,numeroTres){
    let num1 = numeroUno;
    let num2 = numeroDos;
    let num3 = numeroTres;
    let resultado;
    resultado = num1 > num2 && num1 > num3 ? "numero Uno es mayor" :
    resultado = num1 < num2 && num2 >= num3 ? "numero dos es mayor" : "numero tres es mayor";

   
    return resultado;
     
}