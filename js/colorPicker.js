const colorPicker = document.querySelector('.code-selectColor');

colorPicker.addEventListener('input', (event) => {
    const codeContainer = document.querySelector('.code-container');
    codeContainer.style.backgroundColor = event.target.value;
})