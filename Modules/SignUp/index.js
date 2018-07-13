const TAG = '[SignUp]';
const express = require('express');
const router = express.Router();
const logger = require('../Common/services/Logger');
const signUp = require('./model/SignUp');

router.post('/', (req, res, next) => {
  const ACTION = '[postSignUp]';
  logger.log('debug', TAG + ACTION, ' request body', req.body);
  signUp.signUp(req.body)
    .then((data) => {
      res.success(data);
    }).catch((err) => {
      res.error(err);
    });
});

router.get('/verify/:token', (req, res, next) => {
  const ACTION = '[getVerifyToken]';
  logger.log('debug', TAG + ACTION, ' request parameters ', req.params);
  signUp.verify(req.params.token)
    .then((data) => {
      res.success(data);
    }).catch((err) => {
      res.err(err);
    });
});

module.exports = router;