//Determina si dada una lista, ésta se encuentra ordenada. Se debe devolver verdadero o falso. 
var num = [1, 2, 3, 4, 5, 6];
console.log(numero(num));

function numero(num){
    var n=0;
    for (let i =0; i< num.length-1; i++){
        if(num[i]<num[i+1]){
             n=n+1;
        }else{
             n=n-1;
        }
    }
    if(n==num.length-1){
        return "verdadero";

    }else{
        return "Falso";
    }
    }








