// // segundo ejercisio con matrices 
// // echo por : Brayan stid cortes lombana
// // fecha:26/04/2024

// let bingo=[];
let iteracion;
let interacion2;



// bingo=[
//   /*0*/  ["BINGO"],
//    /*1*/ ["B",2,12,22,32,42],
//    /*2*/ ["I",4,14,24,34,44],
//    /*3*/ ["N",6,16,26,36,46],
//    /*4*/ ["G",8,18,28,38,48],
//    /*5*/ ["O",10,20,30,40,50],
//   ];

  // for(iteracion=0;iteracion<bingo.length;iteracion++){
  //     for(interacion2=0;interacion2<bingo[iteracion].length;interacion2++){
        
  //         console.log(bingo[iteracion][interacion2],
  //           bingo[iteracion+1][interacion2],
  //           bingo[iteracion+2][interacion2],
  //           bingo[iteracion+3][interacion2],
  //           bingo[iteracion+4][interacion2]
  
  //         )
  //     }
  // }

        let bingo = [];

        let tabla;
        let interno;
        let multiplicar;
  
        let tablaMulti;
        let contador=0;

  for(tabla=0; tabla < 5; tabla++){
  
  let interno=[];
  
  for(multiplicar=0; multiplicar < 5; multiplicar++){
        contador= contador + 1; // multiplicar hace la delimitacion de los valores del arreglo 
        tablaMulti=contador *2; //el contador sive para que se pueda hacer la multiplicacion y el interno .push para que se guarde dentro del arreglo y se 
  
        interno.push(tablaMulti);
    }
    bingo.push(interno);
  }

console.log("letras del bingo");
console.log("B I N G O");

for(tablaMulti=0; tablaMulti< 5 ; tablaMulti++){
  console.log(
    bingo[tablaMulti][0],
    bingo[tablaMulti][1],
    bingo[tablaMulti][2],
    bingo[tablaMulti][3],
    bingo[tablaMulti][4]
  );
 
}

for( tablaMulti=0;tablaMulti<5 ; tablaMulti++){
  conmsole.log(bingo[iterno][])
}
// mire aca lo del la otra parte hay una idea


// const arreglo = [12, 23, 34, 45, 56, 67, 78, 89, 90];

// // Creamos un arreglo vacío para almacenar los números que terminen en par
// const numerosTerminadosEnPar = [];

// // Iteramos sobre el arreglo original
// for (let i = 0; i < arreglo.length; i++) {
//     // Obtenemos el último dígito del número actual
//     const ultimoDigito = arreglo[i] % 10;
    
//     // Verificamos si el último dígito es par
//     if (ultimoDigito % 2 === 0) {
//         // Si es par, añadimos el número al arreglo de números terminados en par
//         numerosTerminadosEnPar.push(arreglo[i]);
//     }
// }

// // Imprimimos los números que terminan en par
// console.log(numerosTerminadosEnPar);


console.log("valores individuales para la primera x: "+bingo[0][0],bingo[0][2],bingo[1][1],bingo[2][0],bingo[2][2]);

console.log("valores individuales para la segunda x: "+bingo[0][2],bingo[0][4],bingo[1][3],bingo[2][2],bingo[2][4]);

console.log("valores individuales para la tercera x: "+bingo[2][1],bingo[2][3],bingo[3][2],bingo[4][1],bingo[4][3]);


console.log("\n\n\n valores individuales para la x grande : "+bingo[0][0],bingo[1][1],bingo[4][1],bingo[3][3],bingo[4][4],

bingo[0][4],bingo[1][3],bingo[3][1],bingo[4][0],);

  