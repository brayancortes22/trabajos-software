function tabal9(multi) {
  let contarPar, contarImpar, total, tabla, contador, resultado, numero;
  multi = multi;
  numero = 5;
  for (tabla = 1; tabla <= multi; tabla++) {
    contador = 0;
    for (contador = 0; contador <= numero; contador++) {
      resultado = tabla * contador;
      if (resultado % 2 === 0) {
       return("buzz");
        contarPar = contarPar + 1;
      } else {
        return("bass");
        contarImpar = contarImpar + 1;
      }
      total = resultado;
      return(total);
    }
  }
  return("cantidad de numeros pares" +contarPar +":" +resultado +"\n" +"cantidad de numeros imapres" +contarImpar +resultado +":"
  );
  return total;
}

"\n\n"

const tabal9_1 = function (multi) {
  let contarPar, contarImpar, total, tabla, contador, resultado, numero;
  multi = multi;
  numero = 5;
  for (tabla = 1; tabla <= multi; tabla++) {
    contador = 0;
    for (contador = 0; contador <= numero; contador++) {
      resultado = tabla * contador;
      if (resultado % 2 === 0) {
        return("buzz");
        contarPar = contarPar + 1;
      } else {
        return("bass");
        contarImpar = contarImpar + 1;
      }
      total = resultado;
      return(total);
    }
  }
  return(
    "cantidad de numeros pares" +contarPar +":" +resultado +"\n" +"cantidad de numeros imapres" +contarImpar +resultado +":"
  );
  return total;
}
