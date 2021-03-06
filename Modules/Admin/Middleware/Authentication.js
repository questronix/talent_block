const TAG = `[MIDDLEWARE][Authentication]`;
// const Error = require('../services/Errors');
const Logger = require('../../Common/services/Logger');

module.exports.isAuthenticated = (req, res, next)=>{
  const ACTION = `[isAuthenticated]`;
  //Get user session
  let user = req.session.user;
  Logger.log('info', `${TAG}${ACTION} - session user`, user);
  //if user doen't exist
  if(!user){
    req.session.redirectTo = `/admin${req.path}`;
    // res.error(Error.raise('NO_USER_SESSION'));
    res.redirect(`/admin/login`);
  }else{
    // set local user to easyly access user info in ejs template
    res.locals.user = req.session.user;
    //return the session
    req.user = req.session.user;
    next();
  }
};