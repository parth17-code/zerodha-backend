const router = require('express').Router();
const {VerifyUser} = require('../utils/JwtVerify')

router.get('/verify' , VerifyUser);

module.exports = router;