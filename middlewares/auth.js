const admin = require('../firebase'); // index.js

exports.authCheck = (req, res, next) => {
    console.log(req.headers);
    next();
}