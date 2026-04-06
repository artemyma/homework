const button = document.getElementById('loadMore')
const hiddenCards = document.querySelectorAll('.new-arrivals__product.hidden-new')


let isExpended = false

button.addEventListener('click', () => {
    if (!isExpended) {
        hiddenCards.forEach(card => {
            card.classList.remove('hidden-new')
        })

        button.textContent = "Свернуть всё"
        isExpended = true

    } else {
        hiddenCards.forEach(card => {
            card.classList.add('hidden-new')
        })

        button.textContent = "Посмотреть всё"
        isExpended = false

    }
})


