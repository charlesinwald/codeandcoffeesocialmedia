var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
const cors = require('cors');
var parser = require('body-parser');



var SQLiteStore = require('connect-sqlite3')(session);

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


var corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use(session({
    secret: 'nyccodeandcoffee',
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
  }));
  app.use(passport.authenticate('session'));

app.use('/', indexRouter);
app.use('/auth', authRouter);

module.exports = app;
