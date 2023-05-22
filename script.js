// let suma = document.getElementById("btn_suma");
//document.getElementById('txtres').value= res;
// let num1=11;
// let num2=11;
// suma.addEventListener("click", function(){alert(num1+num2);});
function showAlert() {
    
    alert('....eeeehhh, este es un mensaje de alerta, viteh...');
}
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }

  document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function() {
         document.querySelector(".nav-links").
                    classList.toggle("nav-links-responsive")})
