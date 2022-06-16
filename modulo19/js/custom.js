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

