const modal = document.querySelector('[data-modal]')
const btnModal = document.querySelectorAll('[data-btn-modal]')
const table = document.querySelector("[data-table]")
const form = document.querySelector('[data-form-cadastro]')

btnModal.forEach( (element) => {
    element.addEventListener('click', () => {
        if(modal.style.display == "block"){
            modal.style.display = "none"
        } else {
            modal.style.display = "block"
        }
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    criarCadastro()
})


function criarCadastro(){
    const person = {
        nome: document.querySelector('[data-nome]').value,
        dataNascimento: document.querySelector('[data-nascimento]').value,
        sexo: document.querySelector('input[data-sexo]:checked').value,
        endereco: document.querySelector('[data-endereco]').value,
        telefone: document.querySelector('[data-telefone]').value,
        email: document.querySelector('[data-email]').value
    }
    person.dataNascimento = new Date(person.dataNascimento).toLocaleDateString('pt-BR', {timeZone: 'UTC'})

    criaLinha(person)
    form.reset()
}

function criaLinha(person){
    const novaLinha = table.insertRow()
    let personValues = Object.values(person)
    for(let i = 0; i < personValues.length; i++){
        novaLinha.insertCell(i).innerText = personValues[i]
    }
}