function sendMassage(message,cb) {
  fetch('/roomChat', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: message,
    credentials: 'include'
  })
  .then((response) => {
     cb(null, response);
  })
  .catch( (err) => {
    cb(err)
  });

}

  // function showMessage(cb) {
  //   fetch('/roomChat', {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     credentials: 'include'
  //   })
  //   .then((response) => {
  //      cb(null, response);
  //   })
  //   .catch( (err) => {
  //     cb(err);
  //   });
  //
  // }

function showAllMessages(cb) {
  fetch('/messages', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then((response) => {
     return response.json();
  }).then((res)=>{
    cb(null,res)
  })
  .catch((err) => {
    cb(err)
  });
}

setInterval(()=>{
  showAllMessages((err,{ posts }) => {
    if (posts) {
      const room = document.querySelector('.room ul');
      room.innerHTML = posts.reduce((acc, post)=>{
        acc += `<li>${post.username } : ${post.message}</li>`;
        return acc;
      },'');
    }
});
},3000);


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
