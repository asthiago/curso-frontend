function valemail(){
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');

    if(!email.checkValidity()){
        error.innerHTML = "Email invalido"
    }
}

function redefmsg(){
    var error = document.querySelector('#error-email')
    if (error.innerHTML == 'Email invalido'){
        error.innerHTML = '';
    }
}


function valnome(){
    var nome = document.querySelector('#nome');
    var errorn = document.querySelector('#error-nome');

    if(nome.value.length <= 2){
        errorn.innerHTML = "nome invalido"
    }
}

function redefmsgn(){
    var errorn = document.querySelector('#error-nome')
    if (errorn.innerHTML == 'nome invalido'){
        errorn.innerHTML = '';
    }
}










function valcpfl(){
    var cpf = document.querySelector('#cpf');
    var errorc = document.querySelector('#erro');
    var regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if(cpf.value.length < 14||cpf.value.length > 14){
        errorc.innerHTML = "cpf invalido";
    }
}

function redefmsg(){
    var errorc = document.querySelector('#erro')
    if (errorc.innerHTML == 'cpf invalido'){
        errorc.innerHTML = '';
    }
}

const input = document.querySelector('#cpf')


input.addEventListener('keypress',() => {
    let inputlength = input.value.length

    if (inputlength === 3 || inputlength === 7 ){
        input.value += '.'
    } else if (inputlength === 11){
        input.value += '-'
    }


})


