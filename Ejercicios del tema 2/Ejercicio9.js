//Realizar un función recursiva que retorne como salida el resultado de la suma 1 + 3 + 5 + 7 + 9 + N.

const sumSquares = ([first, ...rest]) =>
  first === undefined
    ? 0
    : first + sumSquares(rest);
                                         
console.log(sumSquares([1, 3, 5, 7, 9, 5]));
  //=> 55