
//funciones arriba
let nomina=[];
let tablaMulti;
let precioSalario;
let valorDia;
let diasTrobajado;
let suma;
let numeroDoc;
let edadp;
let apellidosp;
let valorDiap;
let diastrobajadosp;

    nomina = [
        { id: 1, numeroDocumento:1032679504, nombre:'July Daniela', apellidos: 'Ramos Peña', edad: 60, valorDias:11, diastrabajados: 2 },
        { id: 2, numeroDocumento:1075235870, nombre:'Brayan Alberto', apellidos: 'Perdomo Perdomo', edad: 17, valorDias:10, diastrabajados: 2 },
        { id: 3, numeroDocumento:1077722422, nombre:'Catalina', apellidos: 'Cometa Fierro', edad: 18, valorDias:10, diastrabajados: 3},
        { id: 4, numeroDocumento:1080427305, nombre:'Maria Alejandra', apellidos: 'Marin Henrique', edad: 17, valorDias:13, diastrabajados: 2},
        { id: 5, numeroDocumento:1080292258, nombre:'Milciades', apellidos: 'Esquivel Leal', edad: 17, valorDias:15, diastrabajados: 3 },
        { id: 6, numeroDocumento:1077227809, nombre:'Merari ', apellidos: 'Urbano', edad: 17, valorDias: 11, diastrabajados: 4},
        { id: 7, numeroDocumento:1079409259, nombre:'Nikolas Santiago', apellidos: 'Morales Trujillo', edad: 17, valorDias:8, diastrabajados: 2 },
        
    ]

console.table(nomina);
for(contador=0;contador<nomina.length;contador++){
    valores=nomina[contador].valorDias;
    dia= nomina[contador].diastrabajados;
//para la tabal de las personas con el pago
    id=nomina[contador].id;
    numeroDoc=nomina[contador].numeroDocumento;
    nombre_p=nomina[contador].nombre;
    apellidos_p=nomina[contador].apellidos;
    edades=nomina[contador].edad;
// se llama a las funciones y se les asigna en una variable
    precioSalario= salario1(dia,valores);
    precio_arl= arl1(dia,valores);
    precio_salud= salud1(dia,valores);
    precio_pension= pension1(dia,valores);
    precio_subtrasporte= subTras1(dia,valores);
    precio_retencion= retencion1(dia,valores);
    precio_extra= extra1(dia,valores);
    precio_deducible= deducible1(dia,valores);
    precio_pagototal= pagoTotal1(dia,valores);
    //
    pago.push=[{ id:nomina[contador].id, numeroDoc:nomina[contador].numeroDocumento, nombre_p:nomina[contador].nombre, apellidos_p:nomina[contador].apellidos,
                edades:nomina[contador].edad
    }]
   
//arreglar porfa vor flata codigo en el pago .push!!!!!

    pago_personas=[{id,numeroDoc,nombre_p,apellidos_p,edades,
        precioSalario,precio_arl,precio_salud,precio_pension,precio_subtrasporte,precio_retencion,precio_extra,precio_deducible,
        precio_pagototal}]
    
        // console.table(pago);
        console.table(pago_personas);
        suma= suma + pago++;
        console.log("la suma de las cantides es: "+suma);
    }
   
             
