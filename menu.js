const btnMenu = document.getElementById('btnMobile');
const btnNames = document.getElementById('btnLista');

function toggleMenu(){
    btnMenu.classList.toggle('ativo');
}


btnMenu.addEventListener('click', toggleMenu);