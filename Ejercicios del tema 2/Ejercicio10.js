//Realizar una función que reciba una lista y devuelva empleando recursividad otra lista de los elementos pares. 

var recursivo=[4,2,3,1,4,5,8,3,9,10,40,7];

var serieNumeroParesRecursivo = recursivo.filter(
    
    //recursivo
    function(numero){
    return numero % 2 == 0;
});

console.log(serieNumeroParesRecursivo);