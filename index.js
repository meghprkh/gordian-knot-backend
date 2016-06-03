var express = require('express');
var app = express();

app.use(require('morgan')('dev'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello!'));

app.listen(3000);
