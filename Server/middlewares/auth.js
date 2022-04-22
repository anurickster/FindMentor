const User = require('../models/user');
const jwt = require('jsonwebtoken');

const isAuthenticatedUser = async function (req, res, next) {
  // extract token for req header
  // console.log(req.headers);
  const token = req.headers['authorization'];
  console.log(token);
  if (token) {
    const tokens = token.split(' ');

    // verify tthe token
    try {
      const decodedData = jwt.verify(tokens[1], 'p@ssw0rd');
      console.log(decodedData);
      if (decodedData.role) {
        req.role = decodedData.role;
      }
      next();
    } catch (err) {
      console.log('Error caught: ', err);
      res.status(403).send('You are not authorized to access this data');
    }
  } else {
    res.status(403).send('You are not authorized to access this data');
  }
};

const authenticateUser = async function (req, res, next) {
  const user = await User.findOne({ email: req.body.email });
  console.log(user);

  if (user) {
    // Match the password
    const isMatch = await user.matchPassword(req.body.password);
    if (isMatch) {
      next();
    } else {
      res.status(401).send({ auth: false, error: 'Invalid password' });
    }
  } else {
    res.status(404).send({ auth: false, error: 'Invalid credentials' });
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (roles.includes(req.role)) {
      next();
    } else {
      res.status(403).send('You dont have an authorized role to access');
    }
  };
};

// const userexists = async function (req, res, next) {
//   const user = await User.findOne({ email: req.body.email });
//   if (user) {
//     res.status(401).send({ auth: false, error: 'User already exists' });
//   } else {
//     next();
//   }
// };

module.exports = {
  authenticateUser,
  isAuthenticatedUser,
  authorizeRoles,
};
