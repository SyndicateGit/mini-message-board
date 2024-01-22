var express = require('express');
var router = express.Router();
const {DateTime} = require('luxon');

const messages = [{
  user_name: "Raymond",
  message: "Welcome to the message board!",
  date: DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS),
}]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages});
});

/* POST form page. 
Included here so it can access messages.*/
router.post('/form', function(req, res, next) {
  messages.push({
    user_name: req.body.user_name,
    message: req.body.message,
    date: DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS),
  })
  res.redirect('/');
});


module.exports = router;
