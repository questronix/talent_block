const TAG = '[Users]';
const express = require('express');
const router = express.Router();

const mw = require('../Common/middleware/Authentication');
const logger = require('../Common/services/Logger');
const profile = require('./model/Profile');

router.get('/student/:user_id', mw.isAuthenticated, (req, res)=>{
  const ACTION = '[getStudentProfile]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);

  profile.getStudentProfile(req.params.user_id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

module.exports = router;