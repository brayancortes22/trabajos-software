/**
 * operaciones
 * Juan Carlos Jurado
 * abril 2 2024 
 * version 1.0
 */


function circunferencia(radio) {
    
    if (isNaN(radio)) {
      throw new Error("El radio debe ser un número");
    }
  
    const PI = Math.PI;
  
    
    const area = PI * radio ** 2;
  
    return area;
  }
  