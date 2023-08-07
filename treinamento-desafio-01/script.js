// Abrir e fechar modal

const modal = document.querySelector('#modal-cadastro')
const btnAbrirModal = document.querySelector('#botao-abrir-modal')
const btnFecharModal = document.querySelector('#botao-fechar-modal')
const tabela = document.querySelector("table")

btnAbrirModal.addEventListener('click', () => {
    modal.style.display = "block"
})

btnFecharModal.addEventListener('click', closeModal)

function closeModal(){
    modal.style.display = "none"
}

// Função criar cadastro

const btnCadastrar = document.querySelector('#botao-modal-cadastrar')

btnCadastrar.addEventListener('click', () => {
    criarCadastro()
})

function criarCadastro(){

    let nome = document.querySelector('#nome-cadastro')

    let data = new Date(document.querySelector('#data-cadastro').value)
    let formatData = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

    let sexo = document.querySelector('#sexo-cadastro')
    let endereco = document.querySelector('#endereco-cadastro')
    let tel = document.querySelector('#tel-cadastro')
    let email = document.querySelector('#email-cadastro')

    closeModal()
    mostraCadastro(nome.value, formatData, sexo.value, endereco.value, tel.value, email.value)
}

// Função mostrar cadastro

function mostraCadastro(nome, formatData, sexo, endereco, tel, email){

    let nomeTabela = document.querySelector('#nomeTabela')
    let dataTabela = document.querySelector('#dataTabela')
    let sexoTabela = document.querySelector('#sexoTabela')
    let enderecoTabela = document.querySelector('#enderecoTabela')
    let telTabela = document.querySelector('#celularTabela')
    let emailTabela = document.querySelector('#emailTabela')
    
    nomeTabela.innerText = nome
    dataTabela.innerText = formatData
    sexoTabela.innerText = sexo
    enderecoTabela.innerText = endereco
    telTabela.innerText = tel
    emailTabela.innerText = email

    criaLinha(nome, formatData, sexo, endereco, tel, email)
}

function criaLinha(nome, formatData, sexo, endereco, tel, email){
    let numLinha = tabela.rows.length
    let novaLinha = tabela.insertRow(1)
    novaLinha.insertCell(0).innerText = nome
    novaLinha.insertCell(1).innerText = formatData
    novaLinha.insertCell(2).innerText = sexo
    novaLinha.insertCell(3).innerText = endereco
    novaLinha.insertCell(4).innerText = tel
    novaLinha.insertCell(5).innerText = email
    console.log(numLinha)
}