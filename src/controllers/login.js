const queries = require('../database/queries');
exports.get = (req, res) => {
  res.render('login', { activePage: { login: true } });
};


exports.post = (req, res) => {
  const dataUser = req.body;
  queries.passwordUserFromDb(dataUser,(err,result) =>{
    if(err) console.log(err);
    else {
      if(result){
        res.status(200).send();
      }
      else {
        res.status(401).send();
      }
    };
  });
};
