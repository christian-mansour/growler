var express = require('express');
var router = express.Router();
var session = require('express-session')
var Growls = require('../models/growls')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Growler' });
});

router.get('/growls', function(req, res, next) {
  res.render('growlsPage', { title: 'All Growls' });
});


router.post('/growls', function(req, res, next) {
  var singleGrowl = req.body.inputGrowl;
  // new Growls(session.singleGrowl);


  console.log(singleGrowl);


  res.redirect('/growls');
});




















module.exports = router;
