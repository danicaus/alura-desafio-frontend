

function toggleMenu() {
    const menu = document.querySelector('[data-menu]');
    const buttonClass = document.querySelector('.menuIcon__hamburger');
    buttonClass.classList.toggle('menuOpen');
    menu.toggleAttribute('hidden');
}

function toggleSearch() {
    const header = document.querySelector('.header')
    const searchElement = document.querySelector('[data-search]');
    const buttonClass = document.querySelector('.menuIcon__search');
    const logoClass = document.querySelector('.logo-alura');
    
    const logoElement = document.createElement('a');
    logoElement.classList.add('logo-alura');
    
    
    buttonClass.classList.toggle('searchOpen');
    if(buttonClass.classList.contains('searchOpen')) {
        logoClass.remove();
        searchElement.setAttribute("style", "visibility:visible;");
    } else {
        header.insertBefore(logoElement, searchElement);
        searchElement.removeAttribute("style");
    }
    ;
}