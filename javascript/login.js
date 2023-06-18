function entrar(){
    const loginInput = document.querySelector('#login-label');
    const senhaLoginInput = document.querySelector('#passawordLogin');
    const listaUser = [];
    
    const userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('userList'));

    console.log(listaUser);

    listaUser.forEach((item) => {
        if(loginInput.value == item.userCad && senhaLoginInput == item.senhaCad){

            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    console.log(userValid)
}   