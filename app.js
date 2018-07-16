const express = require('express');


const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();

console.log(appEnv);

const path = require('path');

//middleware to process POST data
const bodyParser = require('body-parser');

//service for logging
const logger = require('./Modules/Common/services/Logger');

const app = express();

// implement standard security from helmet
const helmet = require('helmet');
app.use(helmet());

//set the template engine into ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// setup success/error handler
app.use(function(req, res, next) {
  res.success = function(body) {
    logger.log('debug', res.req.method + ' ' + req.originalUrl + ' response', body);
    res.status(200);
    res.json(body);
  };

  res.error = function(error) {
    logger.log('error', res.req.method + ' ' + req.originalUrl + ' response', error);
    res.status(error.status);
    res.json(error.error);
  };

  next();
});

// serve the files out of ./public as our main files
app.use('/static/', express.static(path.join(__dirname, 'dist')));
app.use('/static/img/', express.static(path.join(__dirname, 'src/assets/img')));
app.use('/static/css/', express.static(path.join(__dirname, 'src/assets/css')));


const db = require('./Modules/Common/services/Database');
let mysqlConnect = db.connect();
mysqlConnect.then((connect)=>{
  logger.log('info', '[MySQLDB]', `Connected to ${process.env.DB_HOST}:${process.env.DB_PORT}`);
}).catch((error) => {
  logger.log('error', '[MySQLDB]', `Connection to ${error.address}:${error.port} failed - connect ${error.code} ${error.address}:${error.port}`);
});

const session = require('express-session');
if(process.env.SKIP_REDIS === 'true'){
  //declare session middleware
  if(process.env.SKIP_CLOUDANT === 'true'){
    
  }else{
    let cloudant_store = require('connect-cloudant-store')(session);
    let store = new cloudant_store({
      url: process.env.CLOUDANT_URL
    });
    store.on('connect', function(){
      logger.log('info', '[CLOUDANT][STORE] is connected!');
      setInterval(function() { store.cleanupExpired(); }, 3600 * 1000);
    });
    store.on('disconnect', function(){
      logger.log('info', '[CLOUDANT][STORE] is disconnected!');
    });
    store.on('error', function(err) {
      let error = require('./Modules/Common/services/Errors').raise('CLOUDANT_ERROR');
      error.error.details = err;
      logger.log('error', '[CLOUDANT][STORE] has error!', err);
    });
  }
  app.use(session({
    secret: 'session.secret.key',
    saveUninitialized: false,
    resave: false
  }));
}else{
  const redis = require('redis');
  const redisStore = require('connect-redis')(session);
  const client = redis.createClient();

  client.on('connect', ()=>{
    logger.log('info', '[Redis]', `Connected to ${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`);
  });
  client.on('error', (error)=>{
    logger.log('error', '[Redis]', `Connection to ${error.address}:${error.port} failed - connect ${error.code} ${error.address}:${error.port}`);
  });

  //declare session middleware using redis
  app.use(session({
    secret: 'session.secret.key',
    // create new redis store.
    store: new redisStore({
        client: client,
        host: process.env.REDIS_HOST || 'localhost', //redis host
        port: process.env.REDIS_PORT || '6379', //redis port
        ttl: process.env.REDIS_TTL || '3600' //redis ttl (time to live)
    }), 
    saveUninitialized: false,
    resave: false
  }));
}

//for CORS
// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET,HEAD,OPTIONS,POST,PUT,DELETE'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
//   );
//   next();
// });

/**
 * Routes
 * 
 * GET  /
 * POST /login
 */

let home = require('./Modules/Home');
let login = require('./Modules/Login');
let user = require('./Modules/Users');
let signup = require('./Modules/SignUp');
let school = require('./Modules/School');

app.use('/', home);
app.use('/login', login);
app.use('/user', user);
app.use('/signup', signup);
app.use('/schools', school);

module.exports = app;
