const TAG = '[Users]';
const express = require('express');
const router = express.Router();

const mw = require('../Common/middleware/Authentication');
const logger = require('../Common/services/Logger');

const profile   = require('./model/Profile');

router.get('/:username', mw.isAuthenticated, (req, res)=>{
  if (req.params.username === 'me'){
    const ACTION = '[getProfile Me]';
    logger.log('debug', TAG + ACTION + ' request parameters', req.params);
    profile.getProfile(req.user.username)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    });
  }else{
    const ACTION = '[getProfile]';
    logger.log('debug', TAG + ACTION + ' request parameters', req.params);
    profile.getProfile(req.params.username)
    .then( data=> {
      res.success(data);
    })
    .catch(error => {
      res.error(error);
    });
  }
});

module.exports = router;