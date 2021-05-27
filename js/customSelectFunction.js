document.querySelector('.customSelectWrapper').addEventListener('click', function() {
    this.querySelector('.customSelect').classList.toggle('open');
})


for (const option of document.querySelectorAll(".customSelectOption")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('-selected')) {
            this.parentNode.querySelector('.customSelectOption.-selected').classList.remove('-selected');
            this.classList.add('-selected');
            this.closest('.customSelect').querySelector('.customSelectTrigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.customSelect')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});