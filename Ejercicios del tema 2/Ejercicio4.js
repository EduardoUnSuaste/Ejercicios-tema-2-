//Determine el mayor de 4 enteros. 

function numero(n1,n2,n3,n4){

if (n1 > n2 && n1 > n3 && n1>n4) {
    return(n1);
} else if (n2 > n3) {
    return(n2);
} else if(n3>n4){
    return(n3);
}else{
    return(n4); 
}
}
    console.log(numero(1,34,8,9));
