"use strict";
import express from 'express';
import path from 'path';
import fs from 'fs';
var routes = require('./routes');
var http = require('http');
import mongoose from 'mongoose';
import api from './routes/api';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://SpanriDb:nysha2161@ds046939.mlab.com:46939/spanridb');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('DB connected!'));

const app = express();

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500).send({
    status: 'error',
    message: err.message || 'Server error'
  });
});

module.exports = app;