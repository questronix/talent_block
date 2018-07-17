const TAG = '[SignUp]';
const express = require('express');
const router = express.Router();
const logger = require('../Common/services/Logger');
const signUp = require('./model/SignUp');

router.post('/', (req, res, next) => {
  const ACTION = '[postSignUp]';
  logger.log('debug', TAG + ACTION, ' request body', req.body);
  signUp.register(req.body)
    .then((data) => {
      res.success(data);
    }).catch((err) => {
      res.error(err);
    });
});

module.exports = router;