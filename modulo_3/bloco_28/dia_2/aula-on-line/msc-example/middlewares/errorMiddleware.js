// eslint-disable-next-line no-unused-vars
const error = (err, req, res, _next) => {
  if (err.status) {
    const { status, message } = err;

    return res.status(status).json({ message });
  }

  return res.status(500).json({ message: 'Internal Error' });
};

module.exports = error;
