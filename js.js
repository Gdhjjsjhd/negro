// Função para abrir o modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex"; // Mostra o modal
}

// Função para fechar o modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none"; // Oculta o modal
}

// Ao clicar nas divs (pessoa1, pessoa2, etc.), abre o modal correspondente
document.querySelectorAll('.pessoa1, .pessoa2, .pessoa3, .pessoa4').forEach((div, index) => {
    div.addEventListener('click', () => {
        openModal(`modal${index + 1}`); // Abre o modal correspondente
    });
});

// Fechar os modais quando clicar no "X"
document.querySelectorAll('.close1, .close2, .close3, .close4').forEach((closeBtn, index) => {
    closeBtn.addEventListener('click', () => {
        closeModal(`modal${index + 1}`); // Fecha o modal correspondente
    });
});

// Fechar os modais quando clicar fora do modal
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none"; // Fecha o modal quando clicar fora dele
        }
    });
};


