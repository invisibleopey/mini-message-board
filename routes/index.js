var express = require('express');
var router = express.Router();

// messages

const messages = [
  {
    text: "It's cold at the top",
    user: 'Bello',
    added: new Date(),
  },
  {
    text: 'Que sera sera',
    user: 'Unknown',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Add New Message To The Board' });
});

router.post('/new', function (req, res, next) {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

module.exports = router;
