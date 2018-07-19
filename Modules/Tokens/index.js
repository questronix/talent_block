const TAG = '[Tokens]';
const express = require('express');
const async = require('async');
const router = express.Router();
const logger = require('../Common/services/Logger');
const Token = require('../Common/model/Token');
const Errors = require('../Common/services/Errors');


router.get('/email/:token', (req, res)=>{
  const ACTION = '[/email/:token]';
  logger.log('info', `${TAG}${ACTION} - params`, req.params);
  if(!req.params.token){
    res.render('verify', {
      status: 0,
      error: Errors.raise('JWT_TOKEN_VERIFY_ERROR')
    });
  }else{
    async.auto({
      verify_token: function(callback){
        Token.validateEmail(req.params.token).then(data=>{
          callback(null, data);
        }).catch(error=>{
          callback(error);
        });
      },
      update_token: ['verify_token', function(result, callback){
        Token.verifyEmailbyToken(req.params.token).then(data=>{
          callback(null, data);
        }).catch(error=>{
          callback(error);
        });
      }]
    }, function(err, result){
      if(err){
        res.render('verify', {
          status: 0,
          error: err
        });
      }else{
        res.render('verify', {
          status: 1,
          data: result.verify_token
        });
      }
    });
  }
});

module.exports = router;