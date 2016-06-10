var express = require('express');
var app = express();

app.use(require('morgan')('dev'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use('/auth', require('./auth'))

require('./models')
var middleware = require('./middleware')

app.get('/', (req, res) => res.send('Hello!'));
app.get('/hi', middleware.isAuthenticated, (req, res) => res.send(req.user));

app.listen(3000);
