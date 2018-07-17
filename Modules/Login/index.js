const TAG = '[Login]';
const express = require('express');
const router = express.Router();

const lm = require('./model/Login');
const logger = require('../Common/services/Logger');

router.post('/', (req, res, next)=>{
  const ACTION = '[postLogin]';
  logger.log('debug', TAG + ACTION + ' request body', req.body)
  lm.authenticateStudent(req.body.username, req.body.password)
  .then(data=>{
    req.session.user = data;
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.post('/school', (req, res, next)=>{
  const ACTION = '[postLogin]';
  logger.log('debug', TAG + ACTION + ' request body', req.body)
  lm.authenticateSchool(req.body.username, req.body.password)
  .then(data=>{
    req.session.user = data;
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.post('/admin', (req, res, next)=>{
  const ACTION = '[postLogin]';
  logger.log('debug', TAG + ACTION + ' request body', req.body)
  lm.authenticateAdmin(req.body.username, req.body.password)
  .then(data=>{
    req.session.user = data;
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

module.exports = router;