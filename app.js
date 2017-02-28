var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var music = require('./routes/music');

var app = express();

// view engine setup


app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

app.use(function (req, res, next) {
    //编写自己的中间件
    //console.log(__dirname);
    //console.log("1");
    next();
});

app.use(function (req, res, next) {
    //console.log("2");
    next();
});

// uncomment after placing your favicon in s/public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//普通中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//路由中间件，相当于在Java的类上@RequestMapping
app.use('/', index);
app.use('/users', users);
app.use('/music', music);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
