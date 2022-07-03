const cidades = {
  sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
  rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}

let form = document.querySelector('#formulario')
let divCidade = document.querySelector('#divCidades')
let listaCidade = document.querySelector('#listaCidade')
let estado = document.forms['formulario']['estado']
let cidade = document.forms['formulario']['cidade']


estado.onchange = function () {
  let optionCidade = `<option value=''>-- Selecione uma cidade --</option>`

  if (estado.value === 'sp') {
    for (let spEstado of cidades.sp) {
      optionCidade += `<option value='${spEstado}'> ${spEstado} </option>`
      listaCidade.innerHTML = `
        <select>
          ${optionCidade}
        </select>
      `
      divCidade.classList.add('cidadeVisivel')
      divCidade.classList.remove('divCidades')
    }
  }
  if (estado.value === 'rj') {
    for (let spEstado of cidades.rj) {
      optionCidade += `<option value='${spEstado}'> ${spEstado} </option>`
      listaCidade.innerHTML = `
          <select>
            ${optionCidade}
          </select>
        `
      divCidade.classList.add('cidadeVisivel')
      divCidade.classList.remove('divCidades')
    }
  }

}



form.onsubmit = function (enviar) {
  enviar.preventDefault()

  if (!estado.value) {
    estado.classList.add('erroInput')
    let span = estado.nextSibling.nextSibling
    span.classList.add('spanVisivel')
  }
  else {
    estado.classList.remove('erroInput')
    let span = estado.nextSibling.nextSibling
    span.classList.remove('spanVisivel')
  } 

  if (!cidade.value) {
    // divCidade.classList.remove('divCidade')
    // divCidade.classList.add('cidadeVisivel')
    cidade.classList.add('erroInput')
    let span = cidade.nextSibling.nextSibling
    span.classList.add('spanVisivel')
  }
  else {
    // divCidade.classList.remove('divCidade')
    // divCidade.classList.add('cidadeVisivel')
    cidade.classList.remove('erroInput')
    let span = cidade.nextSibling.nextSibling
    span.classList.remove('spanVisivel')
  }
} 