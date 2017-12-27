exports.get = (req, res) => {
  res.render('register', { activePage: { register: true } });
};


exports.post = (req, res) => {
  res.render('login', { activePage: { login: true } });
};
