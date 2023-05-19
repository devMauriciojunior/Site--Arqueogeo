const btn = document.querySelector('.menu')
const btnIcon = document.querySelector('.menu i')
const menuSus = document.querySelector('.menu-suspenso')

    btn.onclick = function () {
        menuSus.classList.toggle('aberto')
        const estaAberto = menuSus.classList.contains('aberto')

        btnIcon.classList = estaAberto
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }