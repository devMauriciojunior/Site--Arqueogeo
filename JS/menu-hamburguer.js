const btn = document.querySelector('.hamburger')
const menuSus = document.querySelector('.menu-suspenso')

    btn.onclick = function () {
        btn.classList.toggle('is-active')
        menuSus.classList.toggle('is-active')
    }