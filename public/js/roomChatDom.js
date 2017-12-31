let message = document.getElementById('message');
let chatForm = document.getElementById('chatForm');
let divChat = document.querySelector('.room');
divChat.scrollTo(0,divChat.scrollHeight);
function allwork() {
  const dataMessage = {
    message : message.value
  }
  sendMassage(JSON.stringify(dataMessage),(err,response) =>{
    console.log('sss');
    if (response.status ===200) {
      showAllMessages((err,{ posts }) => {
        if (posts) {
          const room = document.querySelector('.room ul');
          room.innerHTML = posts.reduce((acc, post)=>{
            acc += `<li>${post.username } : ${post.message}</li>`;
            return acc;
          },'');
          message.value ="";
          divChat.scrollTo(0,divChat.scrollHeight);
        }
    });
    }
    // location.reload();
  });
}
chatForm.addEventListener('submit', event => {
  event.preventDefault();
  allwork();
});
