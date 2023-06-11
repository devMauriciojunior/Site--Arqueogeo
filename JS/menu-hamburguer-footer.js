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

// CARROSSEL

document.getElementById('radio1').checked = true;
let conta = 1;

setInterval(() => { ProximaImg() }, 3000);

function ProximaImg() {
    conta++;
    if(conta > 2) {
        conta = 1;
    }
    document.getElementById('radio'+conta).checked = true;
};