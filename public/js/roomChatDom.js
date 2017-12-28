const btn = document.getElementById('btn');
let message = document.getElementById('message');
const divChat = document.getElementById('room');
window.scrollTo(0,document.querySelector("li").scrollHeight);
function allwork() {
  const dataMessage = {
    message : message.value
  }
  sendMassage(JSON.stringify(dataMessage),(err,response) =>{
    if (response.status ===200) {
      location.reload();
    }
  })
  showMessage((err,response)=>{
    location.reload();
  })
}
btn.addEventListener('click', event => {
  allwork();
});
function pressEnter() {
  if(event.keyCode == 13 ){
    allwork();
  }
}
