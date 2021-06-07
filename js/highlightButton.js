const highlightButton = document.querySelector('.code-btnHighlight');


for (const option of document.querySelectorAll(".customSelectOption")) {
    option.addEventListener('click', function() {
        const highlightLang = document.querySelector('.code-textarea')
        const languageSelected = document.querySelector('.-csSelected');
        const language = languageSelected.getAttribute('data-value');
        console.log(language)

        if(!highlightLang.classList.contains(language)){
            const languages = ["javascript", "html", "css"];
            highlightLang.classList.remove(...languages);
            console.log(highlightLang.classList);
            highlightLang.classList.add(language);
        }
    })
}


highlightButton.addEventListener('click', (event)=> {
    event.preventDefault();
    const code = document.querySelector('code')
    hljs.highlightElement(code);
})

// const areaDoCodigo = document.querySelector('.code-wrapper')
// const languageSelected = document.querySelector('.-csSelected');
// const language = languageSelected.getAttribute('data-value');
// const botao = document.querySelector('.code-btnHighlight')

// function mudaLinguagem() {
//     const codigo = areaDoCodigo.querySelector('code')
//     areaDoCodigo.innerHTML = `<code class="code-textarea hljs ${language}" spellcheck="false" contenteditable="true" aria-label="editor"></code>`
//     areaDoCodigo.firstChild.innerText = codigo.innerText
// }

// languageSelected.addEventListener('click', () => {
//     mudaLinguagem()
// })

// botao.addEventListener('click', (event) => {
//     event.preventDefault();
//     const codigo = areaDoCodigo.querySelector('code')
//     hljs.highlightBlock(codigo)
// })