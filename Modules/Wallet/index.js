const TAG = '[Wallet]';
const express = require('express');
const router = express.Router();
const logger = require('../Common/services/Logger');
const err = require('../Common/services/Errors');
const mw = require('../Common/middleware/Authentication');
const wallet = require('./model/Wallet');

router.get('/', mw.isAuthenticated, (req, res)=>{
  const ACTION = '[getWalletBalance]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  
  wallet.getBalance(req.user.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

module.exports = router;
