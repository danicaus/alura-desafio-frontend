const buttonSearch = document.querySelector("#header-searchIcon");
const buttonMenu = document.querySelector("#header-menuIcon");

buttonMenu.addEventListener('click', () => {
    const menu = document.querySelector('[data-menu]');
    const buttonClass = document.querySelector('.menuIcon__hamburger');
    buttonClass.classList.toggle('menuOpen');
    menu.toggleAttribute('hidden');
});

buttonSearch.addEventListener('click', () => {
    const header = document.querySelector('.header');
    const searchElement = document.querySelector('[data-search]');
    const buttonClass = document.querySelector('.menuIcon__search');
    const logoClass = document.querySelector('.logo-alura');
    
    buttonClass.classList.toggle('searchOpen');
    
    if(buttonClass.classList.contains('searchOpen')) {
        logoClass.remove();
        searchElement.style.visibility = 'visible';
    } else {
        const logoElement = document.createElement('a');
        logoElement.classList.add('logo-alura');
        header.insertBefore(logoElement, searchElement);
        searchElement.style.visibility = 'hidden';
    };
});