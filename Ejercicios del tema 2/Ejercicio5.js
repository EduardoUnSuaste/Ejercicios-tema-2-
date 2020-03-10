   //Calcula la suma de una lista (arreglo) de elementos.
   numeros = [1, 2, 3, 4, 5];
    suma = 0;
    numeros.forEach (function(numero){
         suma += numero;
    });

    console.log("La suma del arreglo es: " + suma);