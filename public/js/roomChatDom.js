const btn = document.getElementById('btn');
let message = document.getElementById('message');
const divChat = document.getElementById('room');
function allwork() {
  const dataMessage = {
    message : message.value
  }
  sendMassage(JSON.stringify(dataMessage),(err,response) =>{
    console.log(response);
    if (response.status ===200) {
      location.reload();
    }
  })
  showMessage((err,response)=>{
    
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
