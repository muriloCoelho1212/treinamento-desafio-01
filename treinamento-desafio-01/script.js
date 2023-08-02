function modalCadastro(){
    let modal = document.getElementById('modal-cadastro')
    let span = document.getElementById('close')
    
    modal.style.display = "block"
    
    span.onclick = function(){
        modal.style.display = "none"
    }
    // window.onclick = function(event) {
    //     if(event.target == modal){
    //         modal.style.display = "none"
    //     }
    // }
}