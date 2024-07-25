function edadcomp(yearnow,yearbegihtUno){
  if (edadUno > edadDos && edadUno > edadTres) {
    return "edad uno es mayor que edad dos y tres";
  } else {
    if (edadDos > edadUno && edadDos > edadTres) {
      return "edad dos es mayr que edad uno y tres";
    } else {
      return "edad tres es mayor que edad dos y uno";
    }
  }

  if (promedio > 18) {
    return "el promedio de las edades son mayores de edad";
  } else {
    return "el promedio de las edades son menores de edad";
  }
  return promedio;
}

function edadcomp(yearnow, yearbegihtUno) {
  edadUno1 = yearnow - yearbegihtUno;
  edadDos2 = yearnow - yearbegihtUno;
  edadTres3 = yearnow - yearbegihtUno;
 
  if (edadUno > edadDos && edadUno > edadTres) {
    alert("edad uno es mayor que edad dos y tres ");
    return "edad uno es mayor que edad dos y tres";
  } else {
    if (edadDos > edadUno && edadDos > edadTres) {
      return "edad dos es mayr que edad uno y tres";
    } else {
      return "edad tres es mayor que edad dos y uno";
    }
  }
  if (promedio > 18) {
    return "el promedio de las edades son mayores de edad";
  } else {
    return "el promedio de las edades son menores de edad";
  }
  return promedio;
}