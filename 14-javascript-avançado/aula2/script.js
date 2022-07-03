/* 

HOISTING (IÇAR, ERGUER)

Hoinst é o compartamento padrão do 
javascript de mover as declaraçoes para 
o topo de um escopo.

*/

function teste(){
    //hoisting
    outrafuncao()

    function outrafuncao(){
        console.log('ok sou a outra função')
    }
    //boa pratica
    outrafuncao()
}

teste()