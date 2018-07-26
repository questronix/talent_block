const TAG = '[Wallet]';
const logger = require('../../Common/services/Logger');
const Errors = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');

module.exports.getBalance = (uid) => {
  const ACTION = '[getWallet]';
  logger.log('info', `${TAG}${ACTION}`);
  return new Promise((resolve, reject)=>{
    db.execute(`
      SELECT COALESCE(SUM(amount), 0) "wallet" 
      FROM wallet 
      WHERE user_id = ?
      `, uid)
      .then((data) => {
        resolve(data[0]);
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(Errors.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};