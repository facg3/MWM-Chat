const paragraph = document.getElementById('paragraph');
const btn = document.getElementById('btn');
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginForm = document.getElementById('loginForm');
const p = document.createElement('p');
function allworkLogin() {
  if ((username.value.trim() === '') || (password.value.trim() === '')) {
    p.textContent = 'Fill All inputs to login please!';
    paragraph.appendChild(p);
  } else {
    username.value = username.value.trim();
    password.value = password.value.trim();
    const dataToSend = {
      username: username.value,
      password: password.value
    };
    login(JSON.stringify(dataToSend), response => {
      if(response.status === 200){
         window.location.pathname='/roomChat'
      }
      else{
        p.textContent = 'username or password is False';
        paragraph.appendChild(p);
      }
    });
    p.textContent = '';
  }
}
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  allworkLogin();
});
