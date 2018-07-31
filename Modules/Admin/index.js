const TAG = '[HOME]';
const express = require('express');
const router = express.Router();
const logger = require('../Common/services/Logger');
const mw = require('./Middleware/Authentication');
const session = require('../Common/middleware/Session');

const course = require('./Controllers/courseController')

// Dashboard
router.get('/', mw.isAuthenticated, (req, res, next)=>{

  var ACTION = '[index]';
  // let user = req.session.user;
  logger.log('info', TAG + ACTION);
  res.render('admin/index', { url: '/admin'});
});

//  Login
router.get('/login', /*mw.isAuthenticated,*/(req, res, next)=>{

  var ACTION = '[adminLogin]';
  // let user = req.session.user;
  logger.log('info', TAG + ACTION);
  res.render('admin/login/index');
});

// Logout 
router.post('/logout', session.destroy, (req, res, next)=>{
  var ACTION = '[logout]';
  logger.log('info', TAG + ACTION)
  res.redirect('/admin/login');
});

// Course
router.get('/courses', mw.isAuthenticated, course.home);
router.get('/courses/new', mw.isAuthenticated, course.new);

module.exports = router;