// MENU SUSPENSO
const btn = document.querySelector('.hamburger');
const menuSus = document.querySelector('.menu-suspenso');
btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
    menuSus.classList.toggle('is-active');
})

// ANO FOOTER
const Ano = document.getElementById('anoAtual');
Ano.innerHTML = new Date().getFullYear();

// BOTÃO VOLTAR AO TOPO
const VoltarTop = document.getElementById('VoltarTop')
VoltarTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
});