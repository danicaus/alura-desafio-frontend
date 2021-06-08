const highlightButton = document.querySelector('.code-btnHighlight');


for (const option of document.querySelectorAll(".customSelectOption")) {
    option.addEventListener('click', function() {
        const highlightLang = document.querySelector('.code-textarea')
        const languageSelected = document.querySelector('.-csSelected');
        const language = languageSelected.getAttribute('data-value');

        if(!highlightLang.classList.contains(language)){
            const languages = ["javascript", "html", "css"];
            highlightLang.classList.remove(...languages);
            highlightLang.classList.add(language);
        }
    })
}


highlightButton.addEventListener('click', (event)=> {
    event.preventDefault();
    const code = document.querySelector('code')
    const languageSelected = document.querySelector('.-csSelected');
    const language = languageSelected.getAttribute('data-value');
    code.innerHTML = hljs.highlight(code.innerText, {language: language}).value;
})

/*Meu código HTML para teste
 <!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Desafio FrontEnd - Alura Dev</title>
    </head>
    <body>
        <h1>Olá, mundo!</h1>
        <h2>Essa é a estrutura responsiva do Alura Dev. Vai ficar bem bonitinho!</h2>
        <p>Me segue no GitHub!<p>
            <a href="https://github.com/danicaus">https://github.com/danicaus</a>
    </body>
</html>
*/