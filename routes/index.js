var express = require('express');
var router = express.Router();
var session = require('express-session')
var Growls = require('../models/growls')

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { feed: req.session.feed });
});




router.post('/', function(req, res, next) {
  var temp = req.body;
  var session = req.session.feed
  session.push(temp);
  console.log(req.session.feed);
  res.redirect('/');
});





















module.exports = router;
