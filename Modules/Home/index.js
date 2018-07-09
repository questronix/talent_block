const TAG = '[HOME]';
const express = require('express');
const router = express.Router();

const logger = require('../Common/services/Logger');

router.get('/', (req, res, next)=>{
  var ACTION = '[index]';
  logger.log('debug', TAG + ACTION)
  res.render('index');
});

module.exports = router;