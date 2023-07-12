const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require("cors")

const usersRouter = require('./routes/users')
const checkinRouter = require('./routes/checkin')
const catatanRouter = require('./routes/catatan')

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/checkin', checkinRouter);
app.use('/api/catatan', catatanRouter)

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(process.env.PORT || 3000, function () {
  console.log('Server running...');
});