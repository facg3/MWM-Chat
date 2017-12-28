function sendMassage(message,cb) {
  fetch('/message', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: message,
    credentials: 'include'
  })
  .then((response) => {
     cb(response);
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
