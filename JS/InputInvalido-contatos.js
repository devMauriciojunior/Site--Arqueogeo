const form = document.getElementById("Formulario");
const nome = document.getElementById("InputNome");
const email = document.getElementById("InputEmail");
const tel = document.getElementById("InputTel");
const message = document.getElementById("InputTxt");

form.addEventListener("submit", (event) => {
   event.preventDefault();

   if(nome.value === "") {
      alert("Preencha seu nome!")
      nome.style.borderBottom = "1px solid red";
      return;
   }

   if(email.value === "") {
      alert("Preencha seu email!")
      email.style.borderBottom = "1px solid red";
      return;
   }

   if(tel.value === "") {
      alert("Preencha seu telefone!")
      tel.style.borderBottom = "1px solid red";
      return;
   }

   if(message.value === "") {
      alert("Escreva uma mensagem!")
      message.style.border = "1px solid red";
      return;
   }

   form.submit();
})

