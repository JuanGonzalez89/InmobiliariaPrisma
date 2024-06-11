const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
e.preventDefault();
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmPassword').value;
if (password == confirmPassword) {
  alert('Usted se ha registrado');
} else {
  alert('ERROR, Las contraseñas no son iguales');
}
});