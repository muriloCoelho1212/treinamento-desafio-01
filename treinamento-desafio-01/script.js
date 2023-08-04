function abrirModal(){
    let modal = document.getElementById('modal-cadastro')
    modal.style.display = "block"
}

function criarCadastro(){
    let nome = document.querySelector('#nome-cadastro').value

    let data = document.querySelector('#data-cadastro').value
    let dataNasc = new Date(dataNasc)
    let dataNascFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

    let sexo = document.querySelector('.input-cadastro:checked').value
    let endereco = document.querySelector('#endereco-cadastro').value
    let tel = document.querySelector('#telefone-cadastro').value
    let email = document.querySelector('#email-cadastro').value


    console.log(nome)
    console.log(dataNascFormatada)
    console.log(sexo)
    console.log(endereco)
    console.log(tel)
    console.log(email)
}