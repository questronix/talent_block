const TAG = '[SignUp]';
const logger = require('../../Common/services/Logger');
const Errors = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');
const bcrypt = require('bcrypt');


function signup(user){
  const ACTION = '[signup]';
  logger.log('info', `${TAG}${ACTION}`, user);
  if(user.password){
    user.password = bcrypt.hashSync(user.password, 10);
  }
  return new Promise((resolve, reject) => {
    db.execute(`
      INSERT INTO user SET ?
    `, user)
      .then((result) => {
        if(result.affectedRows > 0){
          resolve({
            id: result.insertId,
            email: user.email,
            username: user.username
          });
        }else{
          reject(Errors.raise('NO_AFFECTED_ROWS' , result));
        }
      }).catch((error) => {
        let out_err = {
          code : error.code,
          errno: error.errno,
          msg: error.sqlMessage
        };
        logger.log('error', TAG+ACTION, out_err);
        reject(Errors.raise('INTERNAL_SERVER_ERROR', out_err));
      });
  });
}

module.exports.registerStudent = (user) => {
  const ACTION = '[registerStudent]';
  logger.log('info', `${TAG}${ACTION}`, {user, role:1});
  user.role = 1;
  return signup(user);
};

module.exports.registerSchool = (user) => {
  const ACTION = '[registerSchool]';
  logger.log('info', `${TAG}${ACTION}`, {user, role:2});
  user.role = 2;
  return signup(user);
};

module.exports.registerAdmin = (user) => {
  const ACTION = '[registerAdmin]';
  logger.log('info', `${TAG}${ACTION}`, {user, role:3});
  user.role = 3;
  return signup(user);
};