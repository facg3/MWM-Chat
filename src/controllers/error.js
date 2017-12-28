const path = require('path');
exports.client = (req, res) => {
  res.render('404',{
    activePage: {
      login: true
    }})
};
exports.server = (err, req, res, next) => {
  res.render('500',{
    activePage: {
      login: true
    }});
};
