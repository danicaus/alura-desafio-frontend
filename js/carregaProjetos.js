function loadProjects() {
    const bankProjects = JSON.parse(localStorage.getItem("projects")) || []
    console.log(bankProjects)
    
    bankProjects.forEach((projeto) => {
        const section = document.querySelector(".community-main")
        const card = document.createElement('a')
        card.classList.add('community-card')
        const codigo = `<div class="community-codeContainer" style="background-color:${projeto.color}">
            <div class="code-macBtnContainer -communityMacBtn">
                <div class="code-macBtn -bgRed"></div>
                <div class="code-macBtn -bgYellow"></div>
                <div class="code-macBtn -bgGreen"></div>
            </div>
            <div class="code-wrapper" data-code>	
                ${projeto.code}
            </div>
        </div>
        <div class="community-cardDescription">
            <h3 class="text-title">${projeto.title}</h3>
            <p class="text-body">${projeto.description}</p>
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
        </div>`

        card.innerHTML = codigo
        
        section.appendChild(card)
    })
}

loadProjects()