const queries = require('../database/queries');
const jwt = require('jsonwebtoken')
exports.get = (req, res) => {
  res.render('login', {
    activePage: {
      login: true
    }
  });
};
exports.post = (req, res) => {
  const dataUser = req.body;
  queries.passwordUserFromDb(dataUser, (err, result, data) => {
    if (err){
      res.status(401).send();
    }
    else {
      if (result) {
        const userData = {
          id: data[0].id,
          username: data[0].username,
        }
        token = jwt.sign(userData, process.env.SECRET_COOKIE);
        res.cookie('accessToken',token);
        res.end();
      } else {
        res.status(401).send();
      }
    };
  });
};
