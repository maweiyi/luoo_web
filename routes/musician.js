const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render("musician");
});

router.get('/jj', function (req, res, next) {
    res.json({jj: "NNNN"});
});


module.exports = router;