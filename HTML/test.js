const ativar = document.getElementById("RegFund");
const modal = document.getElementById("ativando");
const fechar = document.getElementById("fechar");
const container = document.getElementById("modal-container");
const show = document.getElementsByClassName("modal-show");
const activeModalClass = 'modal-show';

const openModal = () => container.classList.add(activeModalClass);

const closeModal = () => container.classList.remove(activeModalClass);

function Ativarr(){
    openModal();
}

function Fecharr(){
    closeModal();
}