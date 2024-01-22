var express = require('express');
var router = express.Router();

/* GET form page. */
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Mini Message Board'});
});

/* POST form page. */
router.post('/form', function(req, res, next) {
  messages.push({
    user_name: req.body.user_name,
    message: req.body.message,
    date: DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS),
  })
  res.redirect('/');
});

module.exports = router;
