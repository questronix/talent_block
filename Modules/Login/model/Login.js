const TAG = '[Login]';
const logger = require('../../Common/services/Logger');
const err = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');

module.exports.authenticate = (username, password)=>{
  const ACTION = '[authenticate]';
  logger.log('info', `${TAG}${ACTION}`, {username, password});
  return new Promise((resolve, reject)=>{
    db.execute(`
      SELECT
        id, username, mobile_no, email, type
      FROM user u
      WHERE u.username = ? AND u.password = ?`,
      [username, password])
      .then((data) => {
        if (data.length > 0) {
          resolve({
            status: 200,
            user: data[0]
          });
        }
        else {
          // TODO: log error
          // logger.log('error', TAG+ACTION, error);
          reject(err.raise('NOT_FOUND'));
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
    
  });
};