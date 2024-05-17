const personagens = document.querySelectorAll('.personagem')
const imagemPersonagemGrande = document.querySelector('.personagem-grande')

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado')

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagem(personagem);
        
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/images/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

