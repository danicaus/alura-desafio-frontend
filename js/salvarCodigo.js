// const linguagem = document.querySelector('.-csSelected')
// const areaDoCodigo = document.querySelector('')
// const botaoPreview = document.querySelector('.code-btnHighlight')
// const botaoSalvar = document.querySelector('.-btnSubmit')
// const descricaoProjeto = document.querySelector('')
// const tituloProjeto = document.querySelector('')


// botaoSalvar.addEventListener('click', () => {
//     if (typeof(Storage) !== "undefined"){
//         console.log("Suporta o Localstorage")
//         const projeto = montaProjeto()
//         salvaLocalStorage(projeto)
//         console.log(projeto)
//     }else {
//         console.log("Não suporta o local storage")
//     }
// })


// function montaProjeto() {
//     let projeto = {
//         'id': atribuiId(),
//         'detalhesDoProjeto': {
//             'nomeDoProjeto': tituloProjeto.value,
//             'descricaoDoProjeto': descricaoProjeto.value,
//             'linguagem': linguagem.value,
//             'codigo': areaDoCodigo.queryselector('code').innerText
//         }
//     }
//     return projeto
// }

// let numeroId = 1

// if (localStorage.lenght > 0) {
//     numeroId = localStorage.lenght
// }

// function atribuiId() {
//     if (localStorage.lenght == 0){
//         return 0
//     } else {
//         if (localStorage.lenght == numeroId) {
//             let novoId = numeroId
//             numeroId++
//             return novoId
//         }
//     }
// }


// /* Alternativa:
//     function atribuiId() {
//         return localStorage.lenght
//     }
// */

// function salvaLocalStorage (objetoJson) {
//     localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
// }

// // Para limpar o localStorage: localStorage.clear() no console do navegador


// // Colocar em outro doc depois. 
// // Essa parte vai mostrar todos os projetos dentro da página de comunidade

// const todosOsProjetos = document.querySelector('js-todos-projetos')

// new function() {
//     mostraProjetos()
// }

// function mostraProjetos(){
//     if(localStorage.lenght == 0) {
//         return
//     }
//     let projetos = []
//     for(let i=0; i < localStorage.lenght; i++) {
//         projetos.push(JSON.parse(localStorage.getItem(i)))
//     }
//     projetos.forEach(projeto => {
//         todosOsProjetos.innerHTML += montaCartao(projeto)
//         const codigoHtml = todosOsProjetos.querySelector(`[data-id"${projeto.id}"]`)
//         codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
//     })    
// }

// function montaCartao(projeto) {
//     let cartao = `estrutura HTML do cartão `
//     return cartao
// }


/* Quero usar o LocalStorage para armazenar os dados do cartão. Já tenho o layout:

<a class="community-card">
    <div class="community-codeContainer">
        <div class="code-macBtnContainer -communityMacBtn">
            <div class="code-macBtn -bgRed"></div>
            <div class="code-macBtn -bgYellow"></div>
            <div class="code-macBtn -bgGreen"></div>
        </div>
        [código]
    </div>
    <div class="community-cardDescription">
        <h3 class="text-title">Título do projeto</h3>
        <p class="text-body">Essa é a descrição do meu projeto</p>
        <div class="community-actionsWrapper">
            <div class="community-reactionContainer">
                <figure>
                    <img src="assets/img/icone-comment.png" alt="">
                    <figcaption>9</figcaption>
                </figure>
                <figure>
                    <img src="assets/img/icone-like.png" alt="">
                    <figcaption>9</figcaption>
                </figure>
            </div>
            <div class="profileHover">
                <span class="profilePhoto"></span>
                <p class="text-body" id="header-profileName">Dani Caus</p>
            </div>
        </div>
    </div>
</a>

Pra isso, preciso
- o código, a partir da class code-wrapper [data-code-text] para a class .community-textarea
- a cor do background para a class .community-codeContainer
- o título da class index .main-input.code-name para a class .text-title
- a descrição, class .main-input.code-description para a class .text-body

Eventos:

Botão salvar projeto
- pega os dados
- salva no LocalStorage
- redireciona para a página Comunity

Mostrar projeto na página
- coleta os dados no localStorage
- exibe na tela
*/

const saveButton = document.querySelector('[data-submit]')

const saveInputs = (event) => {
    event.preventDefault()
    
    const projects = JSON.parse(localStorage.getItem("projects")) || []
    const id = (projects.length + 1)
    
    const titleArea = document.querySelector('.main-input.code-name')
    const title = titleArea.value
    
    const descriptionArea = document.querySelector('.main-input.code-description')
    const description = descriptionArea.value
    
    const codeContainer = document.querySelector('.code-container')
    const color = codeContainer.style.backgroundColor
    
    const codeArea = document.querySelector('[data-code-text]')
    const classCommunity = codeArea.querySelector(".code-textarea")
    classCommunity.classList.add("--community")
    const code = codeArea.innerHTML

    const project = {
        id,
        title,
        description,
        color,
        code
    }

    const bankProjects = [...projects, project]
    localStorage.setItem("projects", JSON.stringify(bankProjects))


    titleArea.value = " "
    descriptionArea.value = " "

}


saveButton.addEventListener('click', saveInputs)