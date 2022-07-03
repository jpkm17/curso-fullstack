// seletor para ID
document.querySelector('#titulo').innerHTML = 'exemplo'


// Seletor por tag
document.querySelector('a').innerHTML = 'teste ancora'


//Selecionando mais de 1 item
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ //função anonima / callback
   elemento.innerHTML = 'alterando os ancoras'
})


//Selecionando mais de 1 item por classe
let boxes = document.querySelectorAll('.box')

boxes.forEach(function(caixas, index){
    caixas.innerHTML = ' caixa alterada' + (index +1) //{INDEX} posiçãoo do elemento no array
})