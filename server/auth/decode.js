const jwt = require('jsonwebtoken');

function decode(req, res, next) {
  console.log('Getting auth token  ...')
  const token = req.header('x-auth-token');
  
  // Check for token
  if (!token) {
    console.log('')
    return res.status(401).json({ msg: 'No token, authorizaton denied' });
  } 
  
  console.log('Token received ...');
  try {
    // Verify and decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Invalid token' });
  }
}

module.exports = decode;