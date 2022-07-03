
let listaAtores = [
    {
      name: 'Keanu Reeves',
      personagem: 'Neo',
      filme: 'The Matrix',
    },
    {
      nome: 'David Prowse',
      personagem: 'Darth Vader',
      filme: 'Star Wars Episódios IV-VI',
    },
    {
      nome: 'Bruce Wayne',
      personagem: 'Batman',
      filme: 'Batman - O Início'
    },
]

let htmlAtores = ''

for (let count = 0; count < listaAtores.length; count++) {
  let ator = listaAtores[count]
  let nome = ator.name
  let personagem = ator.personagem
  let filme = ator.filme

  htmlAtores += `
    <div class="actor">
      <h3>${nome}</h3>
      <p>Interpreta o personagem ${personagem} no filme ${filme}
    </div>
  ` 
}

const content = document.querySelector('#content')
content.innerHTML = htmlAtores
