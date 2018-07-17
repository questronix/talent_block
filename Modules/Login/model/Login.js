const TAG = '[Login]';
const db = require('../../Common/services/Database');
const err = require('../../Common/services/Errors');
const logger = require('../../Common/services/Logger');
const bcrypt = require('bcrypt');

module.exports.authenticateStudent = (username, password)=>{
  const ACTION = '[authenticate]';
  logger.log('info', `${TAG}${ACTION}`, {username, password});
  return new Promise((resolve, reject)=>{
    //Find user name first
    db.execute(`SELECT * FROM user WHERE username = ? and status = 1 and role = 1`, [username])
    .then(data=>{
      //if username found in db
      if(data.length > 0){
        let user = data[0];
        //validate its password
        bcrypt.compare(password, user.password).then(data=>{
          if(data){
            delete user.password;
            delete user.role;
            delete user.status;
            resolve(user);
          }else{
            reject(err.raise('INVALID_CREDENTIALS'));
          }
        }).catch(error=>{
          reject(err.raise('UNAUTHORIZED'));
        });
      }
    })
    .catch(error=>{
      logger.log('error', TAG + ACTION, error);
      reject(err.raise('INTERNAL_SERVER_ERROR', error));
    });
  });
};

module.exports.authenticateSchool = (username, password)=>{
  const ACTION = '[authenticateSchool]';
  logger.log('info', `${TAG}${ACTION}`, {username, password});
  return new Promise((resolve, reject)=>{
    //Find user name first
    db.execute(`SELECT * FROM user WHERE username = ? and status = 1 and role = 2`, [username])
    .then(data=>{
      //if username found in db
      if(data.length > 0){
        let user = data[0];
        //validate its password
        bcrypt.compare(password, user.password).then(data=>{
          if(data){
            delete user.password;
            delete user.role;
            delete user.status;
            resolve(user);
          }else{
            reject(err.raise('INVALID_CREDENTIALS'));
          }
        }).catch(error=>{
          reject(err.raise('UNAUTHORIZED'));
        });
      }
    })
    .catch(error=>{
      logger.log('error', TAG + ACTION, error);
      reject(err.raise('INTERNAL_SERVER_ERROR', error));
    });
  });
};

module.exports.authenticateAdmin = (username, password)=>{
  const ACTION = '[authenticateAdmin]';
  logger.log('info', `${TAG}${ACTION}`, {username, password});
  return new Promise((resolve, reject)=>{
    //Find user name first
    db.execute(`SELECT * FROM user WHERE username = ? and status = 1 and role = 3`, [username])
    .then(data=>{
      //if username found in db
      if(data.length > 0){
        let user = data[0];
        //validate its password
        bcrypt.compare(password, user.password).then(data=>{
          if(data){
            delete user.password;
            delete user.role;
            delete user.status;
            resolve(user);
          }else{
            reject(err.raise('INVALID_CREDENTIALS'));
          }
        }).catch(error=>{
          reject(err.raise('UNAUTHORIZED'));
        });
      }
    })
    .catch(error=>{
      logger.log('error', TAG + ACTION, error);
      reject(err.raise('INTERNAL_SERVER_ERROR', error));
    });
  });
};