const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    console.log("LLLLLLLLLLLLL");
    res.render('music');
});


module.exports = router;