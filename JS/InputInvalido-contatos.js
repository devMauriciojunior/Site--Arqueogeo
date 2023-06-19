const form = document.getElementById("Formulario");
const nome = document.getElementById("InputNome");
const email = document.getElementById("InputEmail");
const tel = document.getElementById("InputTel");
const message = document.getElementById("InputTxt");

form.addEventListener("submit", (event) => {
   event.preventDefault();
   
   if(!nome.value) {
      nome.classList.add('invalido')
      return;
   }

   if(!email.value) {
      email.classList.add('invalido')
      return;
   }

   if(!tel.value) {
      tel.classList.add('invalido')
      return;
   }

   if(!message.value) {
      message.classList.add('invalido')
      return;
   }

   form.submit();
})

nome.addEventListener('input', () => {
   nome.classList.remove('invalido')
})

email.addEventListener('input', () => {
   email.classList.remove('invalido')
})

tel.addEventListener('input', () => {
   tel.classList.remove('invalido')
})

message.addEventListener('input', () => {
   message.classList.remove('invalido')
})