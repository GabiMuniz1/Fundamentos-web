let nome    = window.document.getElementById("nome")
let email   = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML   = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML   = 'Nome Válido'
        txtNome.style.color = 'green'
    }

}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOF('@') == -1 || email.value.indexOF('.')){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else{

        txtEmail.innerHTML   = 'Email Válido'
        txtEmail.style.color = 'green'
    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if(assunto.value.length > 2){
        txtAssunto.innerHTML = '<h1>teste1</h1>'
    }
}