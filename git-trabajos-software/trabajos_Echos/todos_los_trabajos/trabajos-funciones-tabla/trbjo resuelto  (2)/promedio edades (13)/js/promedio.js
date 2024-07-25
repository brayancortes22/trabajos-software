/** 
 * operaciones
 * Juancarlos Jurado
 * 5 abril 2024
 * version 1.0
 */

function edadespromedio(añoNacimiento1,añoNacimiento2,añoNacimiento3){
    const añoActual = 2024;
    let fecha1 = añoNacimiento1; 
    let fecha2 = añoNacimiento2;
    let fecha3 = añoNacimiento3;
    let resultado1;
    let resultado2;
    let resultado3;
    let promedio;
    resultado1 = añoActual - fecha1;
    resultado2 = añoActual - fecha2;
    resultado3 = añoActual - fecha3;

    promedio = (resultado1 + resultado2 + resultado3)/3;

    resultado1 = resultado1 >= 18 ? "es mayor de edad" : "es menor de edad";
    resultado2 = resultado2 >= 18 ? "es mayor de edad" : "es menor de edad";
    resultado3 = resultado3 >= 18 ? "es mayor de edad" : "es menor de edad";

    console.log("Promedio : "+promedio);
    console.log("edad Uno : "+resultado1);
    console.log("edad Dos : "+resultado2);
    console.log("edad Tres : "+resultado3);

    return resultado1 , resultado2 , resultado3, promedio;
    


}
