exports.get = (req, res) => {
  res.render('roomChat', { activePage: { roomChat: true } });
};
