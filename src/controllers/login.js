exports.get = (req, res) => {
  res.render('login', { activePage: { login: true } });
};


exports.post = (req, res) => {
  res.render('roomChat', { activePage: { roomChat: true } });
};
