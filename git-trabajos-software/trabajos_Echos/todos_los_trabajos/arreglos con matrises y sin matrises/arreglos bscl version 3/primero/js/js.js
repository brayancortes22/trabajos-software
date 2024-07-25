// primer ejercisio con arreglos 
// echo por : Brayan stid cortes lombana
// fecha:26/04/2024

let arreglonumeros=[];
let arregloFrutas=[];
let consecutivo=0;
let iteracion;

arreglonumeros=[1,2,3,4,5,6,7,8,9,10,11]; //tipo numerico
arregloFrutas=['mango','pera','manga','fresa'] //tipo texto

let sizearreglo = arreglonumeros.length; //length para contar los valores que hay en el arreglo
let sizearregloFrutas = arregloFrutas.length;

console.log("numero de datos en el arreglo de numeros: "+sizearreglo);
console.log("numero de datos almacenados en el arreglo frutas: "+sizearregloFrutas);

console.log("dato sacdo individualmente por medio del arreglo: "+arreglonumeros[0]);
arregloFrutas.push('mandara');

console.log("numero de datos en el arreglo de numeros: "+sizearreglo);
arreglonumeros.push('queso');

sizearregloFrutas = arregloFrutas.length;


for(iteracion=0;iteracion<arregloFrutas.length;iteracion++){
   consecutivo=consecutivo+1;
    console.log(consecutivo+":"+arregloFrutas[iteracion]);
}
'\n'+'\n'


for(iteracion=0;iteracion<arreglonumeros.length;iteracion++){
    consecutivo=consecutivo+1;
     console.log(consecutivo+": "+arreglonumeros[iteracion]);
 }


 