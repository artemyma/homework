const button = document.getElementById('loadMore2')
const hiddenCards = document.querySelectorAll('.leaders-sales__product.hidden-lead')
let isExpended = false

button.addEventListener('click', () => {
    if (!isExpended) {
        hiddenCards.forEach(card => {
            card.classList.remove('hidden-lead')
        })

        button.textContent = "Свернуть всё"
        isExpended = true

    } else {
        hiddenCards.forEach(card => {
            card.classList.add('hidden-lead')
        })

        button.textContent = "Посмотреть всё"
        isExpended = false

    }
})