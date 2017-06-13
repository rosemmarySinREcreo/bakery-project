var express = require('express');
var router = express.Router();

/* GEThome page. */
router.get ('/', function(req, res, next){
  const context = {
    title: 'profile',
    name: 'rose',
    age: 15,
    position: 'instructor',
    height: 5.9,
    hobies: ['circus, pool, beach']
    }
    res.render('profile', context);
});

module.exports = router;
