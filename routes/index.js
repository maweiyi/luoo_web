var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {cur: 1});
});

router.get('/:num', function (req, res, next) {
    console.log('num----->', req.params.num);
    res.render('music', {cur: req.params.num})
});




module.exports = router;
