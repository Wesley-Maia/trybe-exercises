// controllers/me.js

module.exports = (req, res, next) => {
  const {username, admin} = req.user;

  res.status(200).json({username, admin});
}