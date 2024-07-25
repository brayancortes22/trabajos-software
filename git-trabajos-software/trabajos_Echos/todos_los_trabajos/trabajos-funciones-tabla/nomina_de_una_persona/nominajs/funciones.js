// se calcula el salario de la persona
const salario1 = function(diasTrabajados,valorDia){
    let vidias = diasTrabajados
    let ndias = valorDia
    let resultado = vidias * ndias
    return resultado
}
// se calcula el salud de la persona
 const salud1 = function(diasTrabajados,valorDia){
    let saludPersna;
    let salarioPersona = salario1(diasTrabajados,valorDia)
    saludPersna = salarioPersona * 0.12
    return saludPersna
 }
 // secalcula el arl de la persona
 const arl1 = function(diasTrabajados,valorDia){
    let saludPersna;
    let salarioPersona = salario1(diasTrabajados,valorDia)
    saludPersna = salarioPersona * 0.052
    return saludPersna
 }
 //se calcula la pension
 const pension1 = function(diasTrabajados,valorDia){
    let saludPersna;
    let salarioPersona = salario1(diasTrabajados,valorDia)
    saludPersna = salarioPersona * 0.16
    return saludPersna
 }
//se agrega la cantidad de subsidio respectivo 
 const subTras1 = function(diasTrabajados,valorDia){
    let salarioPersona = salario1(diasTrabajados,valorDia) 
    let subsidioT;
    let salarioMinimo = 1300000
    if (salarioPersona<=2 * salarioMinimo)
    subsidioT = 114000

    else subsidioT = 0
    return subsidioT
}
//para calcular si se aplica a bonificasion por la edades
const retencion1 = function(diasTrabajados,valorDia){
    let salarioPersona = salario1(diasTrabajados,valorDia) 
    let retencion;
    let salarioMinimo = 1300000
    if (salarioPersona<=4 * salarioMinimo){
        retencion = 0.02*salarioPersona

    }

    else if(salarioPersona<=6 *salarioMinimo){
        retencion = 0.04*salarioPersona
    }
    else{
        retencion=0;
    }
    return  retencion
}

// extra para las personas de edades 40 y 60
const extra1 = function(diasTrabajados,valorDia){
    edades=nomina[contador].edad;
    salarioPersona = salario1(diasTrabajados,valorDia)
    if ( edades > 40 ){
        salario_edad = 0.06 * salarioPersona;
    }
    
    else if(edades > 60) {
        salario_edad = 0.08 * salarioPersona;
    }
    else{
        salario_edad=0;
    }

    return salario_edad
}

// suma de las sumas y retenciones que se le hacen al salario de la persona
const deducible1 = function(diasTrabajados,valorDia){
    let descuento; 
    let dsalud = salud1(diasTrabajados,valorDia)
    let dpension = pension1(diasTrabajados,valorDia)
    let darl = arl1(diasTrabajados,valorDia)
    let dretencion = retencion1(diasTrabajados,valorDia)
    descuento = dsalud + dpension + darl + dretencion 
    return descuento
}
// pago finaldespues de apicar los descuentos
const pagoTotal1 = function(diasTrabajados,valorDia){
    let salrioPersona =salario1(diasTrabajados,valorDia)
    let subtrasporte = subTras1(diasTrabajados,valorDia)
    let pdeducible = deducible1(diasTrabajados,valorDia)
    let pago
    pago = salrioPersona + subtrasporte - pdeducible + salario_edad
    return pago
}
