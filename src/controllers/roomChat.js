const jwt = require('jsonwebtoken');
require('env2')('config.env')
const queries = require('../database/queries');
exports.get = (req, res) => {
  const cookie = req.cookies.accessToken;
  if (cookie === undefined) {
    res.render('login', {
      activePage: {
        login: true
      }
    });
  } else {
    const verifyCookie = jwt.verify(cookie, process.env.SECRET_COOKIE)
    const dataMessage = {
      message: req.body.message,
      users_id: verifyCookie.id,
      username: verifyCookie.username
    }
    queries.allPost((err, result) => {
      if (err) {
        console.log(err);
      }
      res.render('roomChat', {
        activePage: {
          register: true
        },
        posts: result,
        data: dataMessage
      });
    });
  }
};
exports.getMessages = (req, res) => {
  const cookie = req.cookies.accessToken;
  if (cookie === undefined) {
    res.render('login', {
      activePage: {
        login: true
      }
    });
  } else {
    queries.allPost((err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(JSON.stringify({ posts: result }));
    });
  }
};

exports.post = (req, res) => {
  const cookie = req.cookies.accessToken;
  const verifyCookie = jwt.verify(cookie, process.env.SECRET_COOKIE)
  const dataMessage = {
    message: req.body.message,
    users_id: verifyCookie.id,
    username: verifyCookie.username
  }
  queries.message(dataMessage, (err, result) => {
    if (err) {
      return console.log(err);
    }
    res.send();
  });

}
