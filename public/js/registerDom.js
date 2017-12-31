const div = document.getElementById('paragraph');
const btn = document.getElementById('btn');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email')
const registerForm = document.getElementById('registerForm')
const p = document.createElement('p');
function allwork() {
  username.value = username.value.trim();
  password.value = password.value.trim();
  email.value = email.value.trim();
  const dataToSend = {
    email : email.value ,
    username: username.value,
    password: password.value,
  };
  register(JSON.stringify(dataToSend), result => {
    if (result.status===200) {
      window.location.pathname='/';
    }else {
      p.textContent = 'User is already exists';
      div.appendChild(p);
    }
  });
}
registerForm.addEventListener('submit', function(event){
  event.preventDefault();
  allwork();
})
