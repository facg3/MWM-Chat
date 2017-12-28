const queries = require('../database/queries');
exports.get = (req, res) => {
  res.render('register', { activePage: { register: true } });
};


exports.post = (req, res) => {
  const userData=req.body;
  queries.register(userData,(err,result)=>{
    if (err) {
      console.log(err);
    }
    else {
      res.send('/')
    }
  })
  res.render('login', { activePage: { login: true } });
};
