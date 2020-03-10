//Dadas dos listas, determine si son iguales. Devolver verdadeo o falso.
var arreglo1= [1,2,3,4,5];
var arreglo2= [1,2,4,4,5];

if(arreglo1.sort().join(',')=== arreglo2.sort().join(',')){
    console.log("VERDADERO---SI ESTA IGUAL");
}else{
    console.log("FALSO---NO ESTA IGUAL");
}
