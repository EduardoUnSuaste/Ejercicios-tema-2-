//Realiza una función que permita cargar calcular la unión, intersección y diferencia de dos conjuntos dados. 

var mapa =new Map();
mapa.set(0,"cero");
mapa.set(1,"uno");
mapa.set(2,"dos");
mapa.set(3,"tres");
mapa.set(4,"cuatro");

const mapas = function(num){
    return (mapa.get(num));
}

console.log(mapas(0));
console.log(mapas(4));
console.log(mapas(3));