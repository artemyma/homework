const closeButton = document.getElementById('bannerClose')
const banner = document.querySelector('.banner')

closeButton.addEventListener('click', () => {
    banner.classList.add('banner-off-on')
})