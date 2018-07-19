const TAG = '[SignUp]';
const express = require('express');
const async = require('async');
const router = express.Router();
const logger = require('../Common/services/Logger');
const signUp = require('./model/SignUp');
const Mailer = require('../Common/services/Mailer');
const Token = require('../Common/model/Token');
const Errors = require('../Common/services/Errors');


router.post('/', (req, res, next) => {
  const ACTION = '[postSignUp]';
  logger.log('debug', TAG + ACTION, ' request body', req.body);
  
  async.auto({
    create: function(callback){
      signUp.register(req.body)
      .then(data => {
        callback(null, data)
      }).catch((err) => {
        callback(err);
      });
    },
    token: ['create', function(result, callback){
      console.log('Token', result);
      Token.createVerifyEmail(result.create.id, result.create).then(data=>{
        callback(null, data);
      }).catch(error=>{
        callback(error);
      });
    }],
    mail: ['token', function(result, callback){
      console.log('Mail', result);
      Mailer.sendEmailVerification(result.create.email, {
        name: result.create.username,
        token: result.token.token
      }).then(data=>{
        callback(null, data);
      }).catch(error=>{
        callback(error);
      });
    }]
  },function(err, result){
    if(err){
      res.error(Errors.raise('INTERNAL_SERVER_ERROR', err));
    }
    res.success(result.create);
  });
});

module.exports = router;