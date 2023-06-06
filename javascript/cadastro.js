const form = document.querySelector('#form');

const nome = document.querySelector('#name');
const iconNome = document.querySelector('#icon-nome-validador');
let validNome = false;

const email = document.querySelector('#email');
const iconEmail = document.querySelector('#icon-email-validador');
let validEmail = false;

const senha = document.querySelector('#password');
const iconSenha = document.querySelector('#icon-senha-validador');
let validSenha = false;

const confirmaSenha = document.querySelector('#password-confirm');
const iconConfirma = document.querySelector('#icon-confirma-validador');
let validConfirma = false;

console.log(nome);

nome.addEventListener("keypress", function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    if(keyCode > 47 && keyCode < 58){
        e.preventDefault();
    }
})

nome.addEventListener('keyup', () =>{
    if(nome.value.length <= 6){
        nome.setAttribute('style', 'color: red;');
        iconNome.setAttribute('style', 'color: red;');
        validNome = false;
    }
    else{
        nome.setAttribute('style', 'color: #000000;');
        iconNome.setAttribute('style', 'color: green;');
        validNome = true;
    }
})

email.addEventListener('keyup', () =>{
    if(email.value.length <= 6){
        email.setAttribute('style', 'color: red;');
        iconEmail.setAttribute('style', 'color: red;');
        validEmail = false;
    }
    else{
        email.setAttribute('style', 'color: #000000;');
        iconEmail.setAttribute('style', 'color: green;');
        validEmail = true;
    }
})

senha.addEventListener('keyup', () =>{
    if(senha.value.length <= 7){
        senha.setAttribute('style', 'color: red;');
        iconSenha.setAttribute('style', 'color: red;');
        validSenha = false;
    }
    else{
        senha.setAttribute('style', 'color: #000000;');
        iconSenha.setAttribute('style', 'color: green;');
        validSenha = true;
    }
})

confirmaSenha.addEventListener('keyup', () =>{
    if(confirmaSenha.value != senha.value){
        senha.setAttribute('style', 'color: red;');
        iconSenha.setAttribute('style', 'color: red;');
        confirmaSenha.setAttribute('style', 'color: red;');
        iconConfirma.setAttribute('style', 'color: red;');
        validConfirma = false;
    }
    else{
        senha.setAttribute('style', 'color: #000000;');
        iconSenha.setAttribute('style', 'color: green;');
        confirmaSenha.setAttribute('style', 'color: #000000;');
        iconConfirma.setAttribute('style', 'color: green;');
        validConfirma = true;
    }
})

const cadastroBotao = document.querySelector('#cadastro-botao')

function cadastro(){
    if(validNome && validEmail && validSenha && validConfirma){

        let userList = JSON.parse(localStorage.getItem('userList') || '[]');
        userList.push({
            nomeCad: nome.value,
            emailCad: email.value,
            senhaCad: senha.value,
        })
        localStorage.setItem('userList', JSON.stringify(userList));
        

        Swal.fire({
            icon: 'success',
            title: 'Usuário Cadastrado',
            text: 'Você foi cadastrado corretamente.',
            footer: '<a href="">Clique aqui para voltar à página inicial.</a>',
            timerProgressBar: true,
            closeButton: '',
            confirmButton: '',
            timer: 5000,
        }).then(() => {
            window.location.reload()
        })
    } 


    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo errado aconteceu!',
            footer: '<a href="">Verifique se os campos estão corretos.</a>',
            timer: 5000,
          })
    }
}