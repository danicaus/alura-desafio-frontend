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
