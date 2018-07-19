const TAG = '[HOME]';
const express = require('express');
const router = express.Router();

const logger = require('../Common/services/Logger');
const session = require('../Common/middleware/Session');

router.get('/', /*mw.isAuthenticated,*/(req, res, next)=>{

  var ACTION = '[index]';
  let user = req.session.user;
  logger.log('info', TAG + ACTION);
  res.render('index', { user: user });
});

router.post('/logout', session.destroy , (req, res, next)=>{
  var ACTION = '[logout]';
  logger.log('info', TAG + ACTION)
  res.success({
    redirectUrl: '/'
  });
});

module.exports = router;