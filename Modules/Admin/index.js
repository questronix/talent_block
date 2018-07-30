const TAG = '[HOME]';
const express = require('express');
const router = express.Router();

const logger = require('../Common/services/Logger');
const session = require('../Common/middleware/Session');

router.get('/', /*mw.isAuthenticated,*/(req, res, next)=>{

  var ACTION = '[index]';
  // let user = req.session.user;
  logger.log('info', TAG + ACTION);
  res.render('admin/index');
});

module.exports = router;