/*
 * operaciones
 * Juan Carlos jurado
 * 4 abril 2024
 * version 1.0
 */

function triangulo(alturaUno,alturaDos,baseUno,baseDos){
    let triangulo1 = baseUno;
    let triangulo2 = baseDos;
    let triangulo3 = alturaUno;
    let triangulo4 = alturaDos;
    let operacion;
    let operacion2;
    let resultado;
    operacion = triangulo3 * triangulo1;
    operacion2 = triangulo4 * triangulo2;
  
    resultado = operacion > operacion2 ? "triangulo uno es mayor" : "triangulo dos es mayor";
    resultado = operacion2 > operacion ? "triangulo Dos es mayor" : "triangulo uno es mayor";

    return resultado;

}