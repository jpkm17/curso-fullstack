/* 

SINCRONO vs ASSINCRONO

*/

function primeira(){
    console.log('primeira')
    
    //sincrono
    for(let index = 0; index < 1000; index++){
        /* o interpretador vai executar esse código até terminar, 
        ai ele continua a execução dos outros códigos */
    }
}

function segunda(){
    console.log('segunda')
}
/* 
    assincrono, (ele não espera a execução do código)
setTimeout(primeira, 2000)
    o interpretador quando passar não vai esperar 2 segundos para executar o código. 
*/
primeira()

segunda()

//callback --> função que vai ser executada quando ele terminar aquele processamento