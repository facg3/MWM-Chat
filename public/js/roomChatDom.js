const btn = document.getElementById('btn');
let message = document.getElementById('message');
const divChat = document.querySelector('.room');
const chatForm = document.getElementById('chatForm');
divChat.scrollTo(0,divChat.scrollHeight);
function allwork(e) {
  e.preventDefault();
  const dataMessage = {
    message : message.value
  }
  sendMassage(JSON.stringify(dataMessage),(err,response) =>{
    console.log(response);
    if (response.status ===200) {
      showMessage((err,response)=>{
        if (response) {
          location.reload()

        }
      })
    }
  })
  showMessage((err,response)=>{
    location.reload();
  })
}

if (chatForm) {
  chatForm.addEventListener('submit', allwork);
}
