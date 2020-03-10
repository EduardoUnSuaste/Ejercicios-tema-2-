//ELEVACION DE UN NUMERO EN LA POTENCIA
const potencia= function(base, exponente){
    let result =1;
    for (let count =0; count< exponente; count++){
        result *= base;
    }
    return result;
    }

    console.log(potencia(2,3));


