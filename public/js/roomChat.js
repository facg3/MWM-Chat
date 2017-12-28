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
     cb('/roomChat');
  })
  .catch( (err) => {
    console.log(err);
  });

}

function showMessage(cb) {
  fetch('/roomChat', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then((response) => {
     cb(response);
  })
  .catch( (err) => {
    console.log(err);
  });

}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
