// // segundo ejercisio con matrices
// // echo por : Brayan stid cortes lombana
// // fecha:26/04/2024

let bingo = [];

let tabla;
let interno;
let multiplicar;
let tablaMulti;
let contador = 0;

for (tabla = 0; tabla < 5; tabla++) {
  let interno = [];

  for (multiplicar = 0; multiplicar < 5; multiplicar++) {
    contador += 1; // multiplicar hace la delimitacion de los valores del arreglo
    tablaMulti = contador * 2;
    //el contador sive para que se pueda hacer la multiplicacion y el interno .push
    //para que se guarde dentro del arreglo y se

    interno.push(tablaMulti);
  }
  bingo.push(interno);
}
console.log(bingo);

console.log("letras del bingo");
console.log("B I N G O");

for (tablaMulti = 0; tablaMulti < 5; tablaMulti++) {
  console.log(
    bingo[tablaMulti][0],
    bingo[tablaMulti][1],
    bingo[tablaMulti][2],
    bingo[tablaMulti][3],
    bingo[tablaMulti][4]
  );
}
//primera x
for (let tablaMulti = 0; tablaMulti < 3; tablaMulti++) {
  for (let multiplicar = 0; multiplicar < 3; multiplicar++) {
    if (tablaMulti % 2 == 0 && multiplicar % 2 == 0) {
      console.log(bingo[tablaMulti][multiplicar]);
    } else if (tablaMulti % 2 == 1 && multiplicar % 2 == 1) {
      console.log(bingo[tablaMulti][multiplicar]);
    } else {
      console.log(":(");
    }
  }
}
//segunda x

console.log("\n");
for (let tablaMulti = 2; tablaMulti < 5; tablaMulti++) {
  for (let multiplicar = 2; multiplicar < 5; multiplicar++) {
    if (tablaMulti % 2 == 0 && multiplicar % 2 == 0) {
      console.log(bingo[tablaMulti][multiplicar]);
    } else if (tablaMulti % 2 == 1 && multiplicar % 2 == 1) {
      console.log(bingo[tablaMulti][multiplicar]);
    } else {
      console.log(":(");
    }
  }
}

console.log("\n");
//tercera x
for (let tablaMulti = 2; tablaMulti < 5; tablaMulti++) {
  for (let multiplicar = 2; multiplicar < 4; multiplicar++) {
    if (tablaMulti % 2 == 0 && multiplicar % 2 == 0) {
      console.log(bingo[tablaMulti][multiplicar]);
    } else if (tablaMulti % 2 == 1 && multiplicar % 2 == 1) {
      console.log(bingo[tablaMulti][multiplicar]);
    } else {
      console.log(":(");
    }
  }
}

console.log("X grnadeeeee\n");
//x grande
// for (let tablaMulti = 0; tablaMulti < 5; tablaMulti++) {

//   for (let multiplicar = 0; multiplicar < 5; multiplicar++) {

//     if (tablaMulti == multiplicar) {
//       console.log(bingo[tablaMulti][multiplicar]);
//     }
//    else if(tablaMulti==multiplicar){

//     console.log(bingo[tablaMulti][multiplicar]);
//    }
//     else {
//       console.log(":(");
//     }
//   }
// }

for (let multiplicar = 0; multiplicar <= 4; multiplicar++) {
  console.log(bingo[multiplicar][multiplicar]);
}

let multiplicari = 4;
for (let contador = 0; contador < 5; contador++) {
  //el contador remplaza la busqueda a tablamulti de los numeros
  console.log(bingo[multiplicari][contador]);
  multiplicari -= 1;
}
