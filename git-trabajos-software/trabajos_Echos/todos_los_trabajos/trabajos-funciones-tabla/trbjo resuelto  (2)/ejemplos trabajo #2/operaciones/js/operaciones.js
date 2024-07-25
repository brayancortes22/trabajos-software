let num1;
let num2;

const suma=function(Pnum1,Pnum2){                  
let num1 =Pnum1;
let num2= Pnum2
let suma;
suma = num1 + num2;
return suma;
}

const resta=function(Pnum1,Pnum2){                  
    let num1 =Pnum1;
    let num2= Pnum2
    let resta;
    resta = num1 - num2;
    return resta;
    }
    
    const multiplicacion=function(Pnum1,Pnum2){                  
        let num1 = Pnum1;
        let num2= Pnum2
        let multiplicacion;
        multiplicacion = num1 * num2;
        return multiplicacion;
        }

        const division=function(Pnum1,Pnum2){                  
            let num1 =Pnum1;
            let num2= Pnum2
            let division;
            division = num1 / num2;
            return division;
            }


const operaciones = function (Poperar , Pnum1, Pnum2){
    let operar = Poperar;
    let operacion;
    
    if(Poperar == "sumar"){
        operacion = suma (Pnum1,Pnum2);
    }
    else if(Poperar == "resta"){
        operacion = resta (Pnum1,Pnum2);
    }
    else if(Poperar == "multiplicacion"){
        operacion = multiplicacion (Pnum1,Pnum2);
    }
    else if(Poperar =="division"){
        operacion = division (Pnum1,Pnum2);
    }
    else{
        operacion="Error , no notifiaca operacion";
    }
    return operacion;
}