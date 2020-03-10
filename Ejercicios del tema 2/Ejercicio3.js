function numero(x){
    minutes = Math.floor( x / 60 );
    seconds = x % 60;
    hora = x / 3600;
    //Anteponiendo un 0 a los minutos si son menos de 10 
    minutes = minutes < 10 ? '0' + minutes : minutes;
 
    //Anteponiendo un 0 a los segundos si son menos de 10 
    seconds = seconds < 10 ? '0' + seconds : seconds;

    //Anteponiendo un 0 a los segundos si son menos de 10 
    hora = hora < 10 ? '0' + hora : hora;
 
 
    return result = "EL tiempo es: "+ hora + ":" + minutes + ":" + seconds;  // 161:30
}
    console.log(numero(7200));


 
