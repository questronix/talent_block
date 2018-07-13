const TAG = '[SignUp]';
const logger = require('../../Common/services/Logger');
const err = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');
const token = require('../../Common/services/Token');

module.exports.signUp = (user) => {
  //TODO: Check if user already exists.
  const ACTION = '[signUp]';
  user.reg_token = token.generate(); // Add user registration token
  logger.log('info', `${TAG}${ACTION}`, user);
  return new Promise((resolve, reject) => {
    db.execute(`
      INSERT INTO user SET ?
    `, user)
      .then((result) => {
        resolve({
          status: 200,
          data: {
            userId: result.insertId,
          }
        })
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.verify = (token) => {
  const ACTION = '[verify]';
  logger.log('info', `${TAG}${ACTION}`, { token });
  return new Promise((resolve, reject) => {
    db.execute(`
      UPDATE user SET is_enabled = 1 WHERE reg_token = ?
    `, [token])
      .then((result) => {
        if (result.affectedRows > 0 ) {
          resolve({
            status: 200,
            msg: "Successfuly registered"
          });
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  })
}