function triangulo(baseUno, alturaUno, alturaDos, baseDos) {
  let trianguloUno = baseUno * alturaUno;
  let trianguloDos = baseDos * alturaDos;

  if (trianguloUno > trianguloDos) {
    alert("triangulo uno es mayor que triangulo dos");
    return "triangulo uno es mayor que triangulo dos";
  } else {
    alert("triangulo dos es mayor que triagulo uno");
    return "triangulo dos es mayor que triangulo uno";
  }
}

const triangulo1 = function (baseUno, alturaUno, alturaDos, baseDos) {
  let trianguloUno = baseUno * alturaUno;
  let trianguloDos = baseDos * alturaDos;

  if (trianguloUno > trianguloDos) {
    alert("triangulo uno es mayor que triangulo dos");
    return "triangulo uno es mayor que triangulo dos";
  } else {
    alert("triangulo dos es mayor que triagulo uno");
    return "triangulo dos es mayor que triangulo uno";
  }
};
