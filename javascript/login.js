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

//Validador CPF
const cpfColor = document.querySelector('.cpf-color');
const cpfInput = document.querySelector('#cpf')
const chekCPF = document.querySelector('.chekCPF');

function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  var soma = 0;
  var resto;

  for (var i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf[i - 1]) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf[9])) {
    return false;
  }

  soma = 0;

  for (var j = 1; j <= 10; j++) {
    soma = soma + parseInt(cpf[j - 1]) * (12 - j);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf[10])) {
    return false;
  }

  return true;
}

cpfInput.addEventListener('input', function() {
  var cpf = this.value;

  if (validarCPF(cpf)) {
    chekCPF.setAttribute('style', 'display: none;')
    cpfColor.setAttribute('style', 'color: green;')
    cpfInput.setAttribute('style', 'color: black;')
  } else {
    chekCPF.setAttribute('style', 'display: block;')
    cpfColor.setAttribute('style', 'color: red;')
    cpfInput.setAttribute('style', 'color: red;')
  }
});
//Validador CPF

//Validador Confirma E-mail
const emailInput = document.querySelector('.emailInput');
const confirmaIcon = document.querySelector('.confirmColor');

const emailColor = document.querySelector('.emailColor');
const confirmaInput = document.querySelector('.email-confirm')

const checkEmail = document.querySelector('.duoemailcheck');

confirmaInput.addEventListener('blur', () => {
  if(confirmaInput.value != emailInput.value){
    emailColor.setAttribute('style', 'color: red;')
    emailInput.setAttribute('style', 'color: red;')
    confirmaIcon.setAttribute('style', 'color: red;')
    confirmaInput.setAttribute('style', 'color: red;')

    checkEmail.setAttribute('style', 'display: block;')
  }
  else{
    emailColor.setAttribute('style', 'color: green;')
    emailInput.setAttribute('style', 'color: black;')
    confirmaIcon.setAttribute('style', 'color: green;')
    confirmaInput.setAttribute('style', 'color: black;')

    checkEmail.setAttribute('style', 'display: none;')
  }
})
//Validador Confirma E-mail

//Validador E-MAIL
const emailInvalido = document.querySelector('.invalidEmail')
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
        emailInvalido.setAttribute('style', 'display: none;')
        emailColor.setAttribute('style', 'color: green;')
        emailInput.setAttribute('style', 'color: black;')
  }
  else{
    emailInvalido.setAttribute('style', 'display: block;')
    emailColor.setAttribute('style', 'color: red;')
    emailInput.setAttribute('style', 'color: red;')
  }
  }
//Validador E-MAIL

//Validador SENHA
const senhaInput = document.querySelector('.password');
const senhaColor = document.querySelector('.passwordColor');
const senhaCheck = document.querySelector('.passwordCheck');

function validarSenha(input) {
  var senha = input.value;
  
  // Verificar o comprimento mínimo da senha
  if (senha.length < 8) {
    senhaCheck.setAttribute('style', 'display: block;')
    senhaColor.setAttribute('style', 'color: red;')
    senhaInput.setAttribute('style', 'color: red;')
      return;
  }
  
  // Verificar se há pelo menos um caractere especial
  var caractereEspecial = /[\W_]/;  // Regex para verificar caractere especial
  if (!caractereEspecial.test(senha)) {
    senhaCheck.setAttribute('style', 'display: block;')
    senhaColor.setAttribute('style', 'color: red;')
    senhaInput.setAttribute('style', 'color: red;')
      return;
  }
  
  // Verificar se há pelo menos um número
  var numero = /\d/;  // Regex para verificar número
  if (!numero.test(senha)) {
    senhaCheck.setAttribute('style', 'display: block;')
    senhaColor.setAttribute('style', 'color: red;')
    senhaInput.setAttribute('style', 'color: red;')
      return;
  }

  senhaCheck.setAttribute('style', 'display: none;')
  senhaColor.setAttribute('style', 'color: green;')
  senhaInput.setAttribute('style', 'color: black;')
}
//Validador SENHA

//Validador ConfirmaSENHA
const confirmaSenhaInput = document.querySelector('.confirmaSenha');
const confirmPassColor = document.querySelector('.confirmPassColor');
const confirmPasswordCheck = document.querySelector('.confirmPasswordCheck');

function validarConfirmaSenha(input){

  if(confirmaSenhaInput.value != senhaInput.value){
    confirmPasswordCheck.setAttribute('style', 'display: block;')
    confirmPassColor.setAttribute('style', 'color: red;')
    confirmaSenhaInput.setAttribute('style', 'color: red;')
  }
  else{
    confirmPasswordCheck.setAttribute('style', 'display: none;')
    confirmPassColor.setAttribute('style', 'color: green;')
    confirmaSenhaInput.setAttribute('style', 'color: black;')
  }
}
//Validador ConfirmaSENHA

const dateInput = document.querySelector('.dateInput');
const checkDate = document.querySelector('.checkDate')
const dateColor = document.querySelector('.dateColor');

dateInput.addEventListener('keypress', () => {
  let dateInputLength = dateInput.value.length;
  
  if(dateInputLength <= 9){
    if(dateInputLength === 2 || dateInputLength === 5){
      dateInput.value += '/';
    }
    else{
      false
    }
  }
})

function validarData() {
  const dataInput = document.querySelector('.dateInput')
  var inputData = dataInput.value;
  
  // Verifica se a data é válida
  var partesData = inputData.split('/');
  var dia = parseInt(partesData[0], 10);
  var mes = parseInt(partesData[1], 10) - 1; // O mês em JavaScript é baseado em zero
  var ano = parseInt(partesData[2], 10);
  
  var data = new Date(ano, mes, dia);
  if (data.getFullYear() !== ano || data.getMonth() !== mes || data.getDate() !== dia) {
    checkDate.setAttribute('style', 'display: block;')
    dateColor.setAttribute('style', 'color: red;')
    dateInput.setAttribute('style', 'color: red;')
    return false;
  }
  
  if(ano >= 2004){
    checkDate.setAttribute('style', 'display: block;')
    dateColor.setAttribute('style', 'color: red;')
    dateInput.setAttribute('style', 'color: red;')
    return false;
  }
  checkDate.setAttribute('style', 'display: none;')
  dateColor.setAttribute('style', 'color: green;')
  dateInput.setAttribute('style', 'color: black;')
  return true;
}