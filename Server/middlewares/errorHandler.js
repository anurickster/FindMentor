module.exports = (err, req, res, next) => {
  let status = 500;
  let message = '';

  if (err.name === 'MongoServerError') {
    status = 500;
    message = 'User Already Exists';
  }
  if (err.name === 'Internal Server Error') {
    status = 500;
    message = 'Internal Server Error';
  }

  res.status(status).json({
    data: {},
    message: message,
    error: err.message,
  });
};
