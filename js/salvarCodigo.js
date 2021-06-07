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
    classCommunity.removeAttribute('contenteditable')
    classCommunity.setAttribute('aria-label', 'codigo')
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

    window.location.href = '/comunity.html'

}

saveButton.addEventListener('click', saveInputs)