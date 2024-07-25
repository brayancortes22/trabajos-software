/*
 * función saludo
 * auto: bscl
 * fecha: 14 de junio de 2024
 */
// operacion de suma resta divicion y multilicacio
let contador = 0 ;
function operacion(opera){
    
    let numeroUno = parseInt( document.getElementById('txtnumeroUno').value);
    let numeroDos = parseInt (document.getElementById('txtnumeroDos').value);
    let numeroTres = parseInt (document.getElementById('txtnumeroTres').value);
    
    let numerosalario_dia = parseInt (document.getElementById('txtdias').value);
    let numerosalario_valor = parseInt (document.getElementById('txtvalor').value);
    
            let resultado;
            let mensaje="";


            let fecha_actual = new Date();
            let fechaNacimiento = new Date(document.getElementById('txtedad').value);
            let fechaNac1 = new Date(document.getElementById('txtedad').value);
            let fechaNac2 = new Date(document.getElementById('txtedad2').value);
            let fechaNac3 = new Date(document.getElementById('txtedad3').value);

            // Calcular las edades en años
            let edad1 = fecha_actual.getFullYear() - fechaNac1.getFullYear();
            let edad2 = fecha_actual.getFullYear() - fechaNac2.getFullYear();
            let edad3 = fecha_actual.getFullYear() - fechaNac3.getFullYear();
            

            
            switch (opera) {
                case 'suma':
                    resultado = numeroUno + numeroDos;
                    mensaje = "Suma: " + resultado;
                    break;
                case 'resta':
                    resultado = numeroUno - numeroDos;
                    mensaje = "Resta: " + resultado;
                    break;
                case 'multiplicacion':
                    resultado = numeroUno * numeroDos;
                    mensaje = "Multiplicación: " + resultado;
                    break;
                case 'division':
                    resultado = numeroUno / numeroDos;
                    mensaje = "División: " + resultado;
                    break;
                    // porcentaje
                case 'porcentaje':
                    resultado = (numeroUno + numeroDos)/100;
                    mensaje = "porcentaje: " + resultado;
                    break;
                    // edad de una persona
                case 'edad':
                    let edad = fecha_actual.getFullYear() - fechaNacimiento.getFullYear();
                    mensaje = "La edad es: " + edad;
                    break;
                    // tres notas
                case 'tres_notas':
                    resultado = (numeroUno + numeroDos + numeroTres)/3;
                    mensaje = "porcentaje de las tres notas: " + resultado;
                    break;
                    // radio de una circuferencia
                case 'area_circulo':
                    resultado = (numeroUno*numeroUno) *3.1416;
                    mensaje = "el area del circulo es: " + resultado;
                    break;
                     // edad de una persona y sacar el promedio
                case 'edad_promedio':
                    // Calcular el promedio de las edades
                    let edadPromedio = (edad1 + edad2 + edad3) / 3;
                    mensaje = "El promedio de las edades es: " + edadPromedio;
                    break;
                    // funcion de saludar
                case 'saludo':
                    resultado ="hola mundo";
                    mensaje= "saludo es: "+resultado
                    break;
                case 'numero_mayor':
                    if (numeroUno > numeroDos) {
                        mensaje = "El número uno es mayor que el número dos";
                    } else if (numeroDos > numeroUno) {
                        mensaje = "El número dos es mayor que el número uno";
                    } else {
                        mensaje = "Ambos números son iguales";
                    }
                    break;
                case 'edad_mayor':
                    let edad_1 = fecha_actual.getFullYear() - fechaNacimiento.getFullYear();
                    if (edad_1 > 17) {
                      mensaje= "usted es mayor de edad";
                    } else {
                      mensaje= "usted es menor de edad";
                    }
                    break;
                case 'triangulo_mayor':
                    //puse el 9 para o crear otra casilla en el html
                    let numero=9;
                    let trianguloUno = numeroUno * numeroDos;
                    let trianguloDos = numeroTres * numero;
                    if (trianguloUno > trianguloDos) {
                      mensaje="triangulo uno es mayor que triangulo dos"
                    } else if (trianguloDos > triangulo){
                      mensaje= "triangulo dos es mayor que triangulo uno"
                    } else  {
                        mensaje=("iguales");
                        }
                    break;
                    
                case 'tres_numeros_mayor':
                    if(numeroUno>numeroDos && numeroUno>numeroTres){
                        mensaje=("numero uno es mayor que numero dos y tres ");
                    }
                    else if(numeroDos>numeroUno && numeroDos>numeroTres){
                    mensaje=("numero dos es mayor que numero uno y tres ");
                    }
                    else{
                    mensaje=("iguales");
                    }
                    break;
                    case 'edades':
                        
                        // Calcular la edad mayor
                        let edades = [edad1, edad2, edad3];
                        let edadMayor = Math.max(...edades);
            
                        // Calcular el promedio de las edades
                        let edad_Promedio = edades.reduce((a, b) => a + b, 0) / edades.length;
            
                        mensaje = "La edad mayor es: " + edadMayor + ". El promedio de las edades es: " + edad_Promedio;
                        break;
                    case 'contador':
                        contador=contador + 1; 
                        mensaje = "El contador es: " + contador;
                        break;
                     case 'contador_consecutivo':
                            let contado = 0;
                            for (let i = 1; i <= numeroUno; i++) {
                                 contado +=`${i}`;
                                 document.getElementById('op').innerHTML = contado;
                            } return false; // Evita el sobrescrito del mensaje general
                        
                    case 'factorial':
                        let num = 5;
                        let factorial=parseInt( document.getElementById('txtnumeroUno').value);
                         
                         for (let contar = 1; contar < num; contar++) {
                             factorial =factorial* contar;
                             mensaje = "El contador es: " + factorial;
                           }
                           mensaje=mensaje;
                        break;
                        case 'tabla_cinco':
                            let tabla = parseInt(document.getElementById('txtnumeroDos').value);
                            let nume = parseInt(document.getElementById('txtnumeroTres').value);
                            // Inicializar una cadena vacía para almacenar los resultados en mensaje
                        
                            for (let contare = 1; contare <= nume; contare++) {
                                let resultado = tabla * contare;
                                mensaje += "La tabla de " + tabla + " x " + contare + " = " + resultado +"<br>";
                            }
                        
                            // Mostrar todos los resultados de las operaciones en la tabla de multiplicar
                            document.getElementById('op').innerHTML = mensaje;
                            break;
                            case 'buzz_bass':
                                let tablar = parseInt(document.getElementById('txtnumeroDos').value);
                                let numer = parseInt(document.getElementById('txtnumeroTres').value);
                                let contarPar = 0;
                                let contarImpar = 0;
                                for (let contare = 1; contare <= numer; contare++) {
                                    let resultado = tablar * contare;
                                    let resultadoMensaje = "";
                                    if (resultado % 2 === 0) {
                                        resultadoMensaje = "buzz";
                                        contarPar++;
                                    } else {
                                        resultadoMensaje = "bass";
                                        contarImpar++;
                                    }
                                    
                                    mensaje += "La tabla de " + tablar + " x " + contare + " = " + resultadoMensaje + "<br>";
                                }
                                
                                mensaje += "Total de pares: " + contarPar + "<br>";
                                mensaje += "Total de impares: " + contarImpar;
                            
                                document.getElementById('op').innerHTML = mensaje;
                                break;
                                case 'salario':
                                    let vidias = numerosalario_dia;
                                    let ndias = numerosalario_valor;
                                    let salarioPersona = vidias * ndias;
                                    let saludPersna = salarioPersona * 0.12;
                                    let arlpersona = salarioPersona * 0.052;
                                    let pensionPersona = salarioPersona * 0.16;
                                    let salarioMinimo = 1300000;
                                    let subsidioT = (salarioPersona <= 2 * salarioMinimo) ? 114000 : 0;
                                    let retencion = (salarioPersona <= 4 * salarioMinimo) ? 114000 : 0;
                                    let descuento = saludPersna + arlpersona + pensionPersona + retencion - subsidioT;
                                    let pago = salarioPersona - descuento;
                                    mensaje = "Salario: " + pago;
                                    break;
                default:
                    mensaje = "Operación inválida";
                    break;
            }
            
            // Mostrar el resultado
            
            document.getElementById("op").innerHTML= mensaje;
            
            // Devolver false para evitar el envío del formulario
            return false;
        }




    
