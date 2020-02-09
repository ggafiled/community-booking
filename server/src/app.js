'use strict';
const express = require("express");
const cors = require('cors');
const { sequelize } = require('../models');
const config = require('../config/index');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require('connect-flash');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const redis = require('redis');
const redisClient = redis.createClient();
const redisStore = require('connect-redis')(session);
// var FileStore = require('session-file-store')(session);
// var fileStoreOptions = {};
require('../config/passport')(passport);
var app = express();
app.use(morgan('combined'));

redisClient.on('error', (err) => {
  console.log('Redis error: ', err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 100000}));
app.use(bodyParser.json({ limit: '50mb', parameterLimit: 100000}));
app.use(cookieParser(config.COOKIE.COOKIE_KEY));
app.use(
  session({
    name: '_redisPractice',
    secret: config.COOKIE.COOKIE_KEY,
    resave: true,
    saveUninitialized: true,
    store: new redisStore({ host: 'localhost', port: 6379, client: redisClient, ttl: 86400 })
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.all('*',function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Request-Headers","*");
  res.header("Access-Control-Allow-Methods","GET, POST, DELETE, PUT, OPTIONS");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Cache-Control', 'private');
  next();
});

require("../route/routes")(app);

sequelize.sync({force:false}).then(() => {
    app.listen(config.PORT, console.log(`Server started on port ${config.PORT}`));
});