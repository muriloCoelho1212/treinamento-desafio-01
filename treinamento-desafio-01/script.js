// Abrir e fechar modal

const modal = document.querySelector('#modal-cadastro')
const btnAbrirModal = document.querySelector('#botao-abrir-modal')
const btnFecharModal = document.querySelector('#botao-fechar-modal')
const tabela = document.querySelector("table")
const form = document.querySelector('#form-cadastro')

btnAbrirModal.addEventListener('click', () => {
    modal.style.display = "block"
})

btnFecharModal.addEventListener('click', closeModal)

function closeModal(evento){
    evento.preventDefault()

    modal.style.display = "none"
}

// Função criar cadastro

const btnCadastrar = document.querySelector('#botao-modal-cadastrar')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    criarCadastro()
})

function criarCadastro(){
    let nome = document.querySelector('#nome-cadastro')
    let data = new Date(document.querySelector('#data-cadastro').value)
    let sexo = document.querySelector('input[name=sexo]:checked')
    let endereco = document.querySelector('#endereco-cadastro')
    let tel = document.querySelector('#tel-cadastro')
    let email = document.querySelector('#email-cadastro')
    
    data = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

    criaLinha(nome.value, data, sexo.value, endereco.value, tel.value, email.value)
    form.reset()
    console.log(nome)
}

// Função mostrar cadastro

function criaLinha(nome, formatData, sexo, endereco, tel, email){
    let novaLinha = tabela.insertRow(1)
    novaLinha.insertCell(0).innerText = nome
    novaLinha.insertCell(1).innerText = formatData
    novaLinha.insertCell(2).innerText = sexo
    novaLinha.insertCell(3).innerText = endereco
    novaLinha.insertCell(4).innerText = tel
    novaLinha.insertCell(5).innerText = email
}