const form = document.getElementById("Formulario");
const nome = document.getElementById("InputNome");
const email = document.getElementById("InputEmail");
const tel = document.getElementById("InputTel");
const message = document.getElementById("InputTxt");

function validade(element) {
   element.classList.add('invalido');
}

form.addEventListener("submit", (event) => {
   event.preventDefault();

   if(!nome.value) {
      validade(nome);
      return;
   }

   if(!email.value) {
      validade(email);
      return;
   }

   if(!tel.value) {
      validade(tel);
      return;
   }

   if(!message.value) {
      validade(message);
      return;
   }

   form.submit();
})

nome.addEventListener('input', () => {
   nome.classList.remove('invalido');
})

email.addEventListener('input', () => {
   email.classList.remove('invalido');
})

tel.addEventListener('input', () => {
   tel.classList.remove('invalido');
})

message.addEventListener('input', () => {
   message.classList.remove('invalido');
})