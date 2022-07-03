
const Main = {
    init: function () {
        //this referencia ao pai, nesse caso o main é o pai do init
        this.cacheSelectors()
        this.bindEvents()
    },

    //o chacheSelctors vai ser responsavel por armazenar os elementos do html em uma variavel 
    cacheSelectors: function () {
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
    },

    //adicionar eventos
    bindEvents: function () {
        const self = this
        this.$checkButtons.forEach(function (button) {
            button.onclick = self.Events.checkButton_click
        })
                                                                    //bind --> levar esse this para dentro do evento 
        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

        this.$removeButtons.forEach(function(button){
            button.onclick = self.Events.removeButton_click
        })
    },

    Events: {
        checkButton_click: function (e) {
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')

            //boa pratica verificar primeiro a negação da variavel 
            if (!isDone) {
                //return serve para impedir o continuamento da execução do código caso a variavel caia no if
                //o else tem um custo um pouco maior de processamento
                return li.classList.add('done')
            }
            li.classList.remove('done')
        },

        inputTask_keypress: function(e){
            const key = e.key
            const value = e.target.value

            if (key == 'Enter'){
                this.$list.innerHTML += `
                    <li>
                        <div class="check"></div>
                        <label class="task">
                            ${value}
                        </label>
                        <button class="remove"></button>
                    </li>    
                `

                e.target.value = ''

                //chamar a função dnv porque o navegador tira a lista e dps coloca toda a lista dnv com a nova <li> (tarefa)
                this.cacheSelectors()
                this.bindEvents()
            }
        },

        removeButton_click: function(e){
            let li = e.target.parentElement

            li.classList.add('removed')

            setTimeout(function(){
                li.classList.add('hidden')
            },300)
        }
    }
}

Main.init()