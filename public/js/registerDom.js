const div = document.getElementById('paragraph');
const btn = document.getElementById('btn');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email')
const p = document.createElement('p');
function allwork() {
  if ((email.value.trim() === '') ||(username.value.trim() === '') || (password.value.trim() === '')) {
    p.textContent = 'Fill All inputs to login please!';
    div.appendChild(p);
  } else {
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
}
btn.addEventListener('click', event => {
  allwork();
});
function pressEnter() {
  if(event.keyCode == 13 ){
    allwork();
  }
}
