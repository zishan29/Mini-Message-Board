const express = require('express');

const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini MessageBoard', msg: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form');
});

router.post('/new', (req, res, next) => {
  const messageText = req.body.message;
  const messageUser = req.body.author;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

router.post('/', (req, res, next) => {
  res.redirect('/new');
});

module.exports = router;
