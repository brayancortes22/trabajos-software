// segundo ejercisio con matrices 
// echo por : Brayan stid cortes lombana
// fecha:26/04/2024


let matriz=[];
let iteracion;
let interacion2;
matriz=[
    ["manzana","pera","chulupa",],
    ["cebolla larga","acelga","espinaca"],
    ["papa sabanera","papa pastursa","papa criolla"],
];
console.log(matriz);
console.log("valores individuales: "+matriz[2][2]);
console.log("numero de datos : "+matriz.length+"\n\n\n");

for(iteracion=0;iteracion<matriz.length;iteracion++){
    for(interacion2=0;interacion2<matriz[iteracion].length;interacion2++){
        console.log(matriz[iteracion][interacion2]);
    }
}