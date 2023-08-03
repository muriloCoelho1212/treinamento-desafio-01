function modalCadastro(){
    let modal = document.getElementById('modal-cadastro')
    let fecharModal = document.getElementById('fechar')
    
    modal.style.display = 'block'
    
    fecharModal.onclick = function(){
        modal.style.display = 'none'
    }

    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = 'none'
        }
    }
}

function cadastrar(){
    let nome = document.getElementById('nome-cadastro')
    let dataNasc = document.getElementById('data-cadastro')
    dataNasc = new Date().toLocaleDateString()


    console.log(nome)
    console.log(dataNasc)
}