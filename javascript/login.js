//BlOQUEIO CARACTERES ESPECIAIS E NUMEROS - INPUTNOME
const nameInput = document.querySelector("#name");

nameInput.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
    var pattern = '[a-zA-Z ^~´`óòõãáàéèê]';
    if (char.match(pattern)) {
    return true;
  }
}
//BlOQUEIO CARACTERES ESPECIAIS E NUMEROS - INPUTNOME

//Validador Nome
const colorName = document.querySelector('.name-color');

nameInput.addEventListener('keyup', () => {
  if(nameInput.value.length < 7){
    colorName.setAttribute('style', 'color: red;')
    nameInput.setAttribute('style', 'color: red;')
  }
  else{
    colorName.setAttribute('style', 'color: green;')
    nameInput.setAttribute('style', 'color: green;')
  }
})
//Validador Nome

// ALTERAR FORMULAS
const loginBtn = document.querySelector("#sign-in-btn");
const cadastroBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

cadastroBtn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
// ALTERAR FORMULAS

//MASCARA CPF
const corporateName = document.querySelector('.corporate-name');

corporateName.addEventListener('keypress', () => {
  let cpfLength = corporateName.value.length;
  
  if(cpfLength <= 11){
    if(cpfLength === 3 || cpfLength === 7){
      corporateName.value += '.';
    }
    else if(cpfLength === 11){
      corporateName.value += '-'
    }
  }

})
//MASCARA CPF

//Validador E-MAIL
function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  if ((usuario.length >=3) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Vish...',
      text: 'E-mail inválido. Tente novamente.',
    })
  }
  }
//Validador E-MAIL



//Validador CPF
const cpfColor = document.querySelector('.cpf-color');
const cpfInput = document.querySelector('#cpf')

cpfInput.addEventListener('keyup', () => {
  if(cpfInput.value.length < 10){
    cpfColor.setAttribute('style', 'color: red;')
    cpfInput.setAttribute('style', 'color: red;')
  }
  else{
    cpfColor.setAttribute('style', 'color: green;')
    cpfInput.setAttribute('style', 'color: black;')
  }
})
//Validador CPF