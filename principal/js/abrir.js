const loginLink = document.querySelector('.abrir-login');
const registerLink = document.querySelector('.abrir-cadastro');
const loginOverlay = document.getElementById('loginOverlay');
const registerOverlay = document.getElementById('registerOverlay');

loginLink.addEventListener('click', function(event) { 
  event.preventDefault();
  loginOverlay.style.display = 'block';
  registerOverlay.style.display = 'none';
});

registerLink.addEventListener('click', function(event) {
  event.preventDefault();
  registerOverlay.style.display = 'block';
  loginOverlay.style.display = 'none';
});

