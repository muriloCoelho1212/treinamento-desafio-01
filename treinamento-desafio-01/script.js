// Abrir e fechar modal

const modal = document.querySelector('#modal-cadastro')
const btnAbrirModal = document.querySelector('#botao-abrir-modal')
const btnFecharModal = document.querySelector('#botao-fechar-modal')

btnAbrirModal.addEventListener('click', () => {
    modal.style.display = "block"
})

btnFecharModal.addEventListener('click', () => {
    modal.style.display = "none"
})

// Função criar cadastro

const btnCadastrar = document.querySelector('#botao-modal-cadastrar')

btnCadastrar.addEventListener('click', () => {
    criarCadastro()
})

function criarCadastro(){
    let nome = document.querySelector('#nome-cadastro')
    let data = document.querySelector('#data-cadastro')
    let sexo = document.querySelector('#sexo-cadastro')
    let endereco = document.querySelector('#endereco-cadastro')
    let tel = document.querySelector('#tel-cadastro')
    let email = document.querySelector('#email-cadastro')

    let nomeTabela = document.querySelector('#nomeTabela')
    let dataTabela = document.querySelector('#dataTabela')
    let sexoTabela = document.querySelector('#sexoTabela')
    let enderecoTabela = document.querySelector('#enderecoTabela')
    let telTabela = document.querySelector('#celularTabela')
    let emailTabela = document.querySelector('#emailTabela')

    nomeTabela.innerText = nome.value
    dataTabela.innerText = data.value
    sexoTabela.innerText = sexo.value
    enderecoTabela.innerText = endereco.value
    telTabela.innerText = tel.value
    emailTabela.innerText = email.value
}