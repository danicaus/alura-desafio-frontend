

function toggleMenu() {
    const divMenu = document.querySelector('[data-menu]');
    const buttonClass = document.querySelector('.menuIcon__hamburger');
    buttonClass.classList.toggle('menuOpen');
    divMenu.toggleAttribute('hidden');
}