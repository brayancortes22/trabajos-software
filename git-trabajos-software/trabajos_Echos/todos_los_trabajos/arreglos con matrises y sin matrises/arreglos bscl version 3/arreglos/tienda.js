let tienda=[];
let sumar=0;
let iteracion;
let descuento;


tienda=[
    {id:1, nombreProducto:'arroz', tipoProducto:'granos',tipoUnidad:'gramos',unidad:1000,precio:2400},
    {id:2, nombreProducto:'lentejas', tipoProducto:'granos',tipoUnidad:'gramos',unidad:500,precio:1300},
    {id:3, nombreProducto:'carne_Res', tipoProducto:'carnes',tipoUnidad:'gramos',unidad:500,precio:13500},
    {id:4, nombreProducto:'pollo_entero', tipoProducto:'carnes',tipoUnidad:'gramos',unidad:1000,precio:12500},
    {id:5, nombreProducto:'cebolla_junca', tipoProducto:'verduras',tipoUnidad:'gramos',unidad:500,precio:1300},
    {id:6, nombreProducto:'mora', tipoProducto:'frutas',tipoUnidad:'gramos',unidad:500,precio:1200}
]
//crear un registro

tienda.push(    {id:7, nombreProducto:'lulo', tipoProducto:'frutas',tipoUnidad:'gramos',unidad:500,precio:1600}
);
tienda.push(    {id:8, nombreProducto:'papa', tipoProducto:'verdura',tipoUnidad:'gramos',unidad:500,precio:500}
);
console.log(tienda);
for(iteracion=0;iteracion<tienda.length;iteracion++){
if(tienda[iteracion].id==7){
    tienda[iteracion].precio=3600;
}
else{
    console.log("no existe el pructo");
}
if(tienda[iteracion].tipoProducto=='carnes'){
    tienda[iteracion].precio=21800;
}
else{
    console.log("no existe el producto");
}
sumar =sumar +tienda[iteracion].precio;
if(tienda[iteracion].tipoProducto=='frutas'){
    descuento= des(tienda[iteracion].precio);
}
else{
    descuento=0;
}
console.log(descuento);

}
console.log(tienda);
console.log("tienda valores de los precios sumados");
console.log(sumar);