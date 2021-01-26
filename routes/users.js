const express = require('express');
const router = express.Router();

// @route   POST api/users
//  @desc Register a user 
// @access  Public

router.post('/', (req, res) => {
    res.send(`register users`);
});


// @route   GET api/users
//  @desc Get logged in user 
// @access  Private

router.get('/', (req, res) => {
    res.send(`Get logged in user`);
});


module.exports = router;