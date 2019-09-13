const express = require('express');
const router  = express.Router();

router.get('/register',(req, res, next) => {
    res.send('REGISTER');
});

// authenticate route

router.get('/authenticate',(req, res, next) => {
    res.send('AUTHENTICATE');
});

//profile

router.get('/profile',(req, res, next) => {
    res.send('PROFILE');
});

// validate
router.get('/validate',(req, res, next) => {
    res.send('VALIDATE');
});

module.exports = router;