document.querySelector('.customSelectWrapper').addEventListener('click', function() {
    this.querySelector('.customSelect').classList.toggle('-csOpen');
})


for (const option of document.querySelectorAll(".customSelectOption")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('-csSelected')) {
            this.parentNode.querySelector('.customSelectOption.-csSelected').classList.remove('-csSelected');
            this.classList.add('-csSelected');
            this.closest('.customSelect').querySelector('.customSelectTrigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.customSelect')
    if (!select.contains(e.target)) {
        select.classList.remove('-csOpen');
    }
});