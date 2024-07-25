
// version numero dos

const futbol = function (factorial1){
    let numero = 5;
   let factorial=factorial1;
    
    for (let contar = 1; contar <= numero; contar++) {
        factorial =factorial* contar;
        console.log(factorial);
      }
      return factorial;
    
}

// version numero uno sin parametros

 function futbol1(factorial1){
  let numero = 5;
  let factorial = factorial1;
  
  for (let contar = 1; contar <= numero; contar++) {
      factorial =factorial* contar;
      console.log(factorial);
    }
    return factorial;
  
}