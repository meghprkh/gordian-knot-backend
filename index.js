var express = require('express');
var app = express();

var router = require('express').Router()

if (process.env.NODE_ENV == 'DEV') {
  // Allow CORS
  router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  })
}

router.use(require('morgan')('dev'));
router.use(require('cookie-parser')());
router.use(require('body-parser').urlencoded({ extended: true }));

router.use('/auth', require('./auth'))
router.use('/question', require('./question'))

app.use('/api', router)

if (process.env.NODE_ENV != 'DEV') {
  // Serve static files and allow history API fallback
  var fallback = require('express-history-api-fallback')
  app.use(express.static('public'))
  app.use(fallback('index.html', { root: 'public' }))
}

require('./models')
var middleware = require('./middleware')

app.listen(3000);
