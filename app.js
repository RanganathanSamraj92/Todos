var express = require('express')
var router = express.Router()
var path = require('path');
var createError = require('http-errors');
var indexRouter = require('./routes/index');
var standardFormatRouter = require('./routes/api_format');
var app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

var server = app.listen(port,host, function() {
	console.log(`Example app listening on port ${port}!`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));


app.use('/app', indexRouter);
app.use('/api', standardFormatRouter);


//catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message +' !';    
    res.locals.description = 'sorry we are not find any path you specified..';
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.use('/',function(req, res, next) {
	console.log('Time:', Date.now());
	next();
});




module.exports = app;
