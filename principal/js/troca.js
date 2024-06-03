// Seleciona o botão Continuar Reserva
const btnContinuar = document.getElementById('continuarReserva');

// Seleciona a div da tela de login
const loginOverlay = document.getElementById('loginOverlay');

// Adiciona um evento de clique ao botão Continuar Reserva
btnContinuar.addEventListener('click', () => {
    loginOverlay.style.display = 'block';
});