const TAG = '[Student][Wallet]';
const logger = require('../../Common/services/Logger');
const Errors = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');

module.exports.addTransaction = (wallet) => {
  const ACTION = '[postWallet]';
  logger.log('info', `${TAG}${ACTION}`, { wallet });
  return new Promise((resolve, reject)=>{
    db.execute(`INSERT INTO wallet SET ?`, [wallet])
      .then((data) => {
        if (data.affectedRows > 0 ) {
          resolve({
            id: data.insertId,
            ...wallet
          });
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(Errors.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.checkCurrentBalance = (uid) => {
  const ACTION = '[checkBalance]';
  logger.log('info', `${TAG}${ACTION}`, { uid });
  return new Promise((resolve, reject)=>{
    db.execute(`SELECT current_balance FROM wallet WHERE user_id = ? ORDER BY created_at DESC LIMIT 1`, [uid])
      .then((data) => {
          resolve(data[0]);
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(Errors.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.updateWallet = (wallet, id) => {
  const ACTION = '[updateRef]';
  logger.log('info', `${TAG}${ACTION}`, { wallet, id });
  return new Promise((resolve, reject)=>{
    db.execute(`UPDATE wallet SET ? WHERE id=? `, [wallet, id])
      .then((data) => {
        if (data.affectedRows > 0)
          resolve(data);
        else
          reject(Errors.raise('NO_AFFECTED_ROWS'));
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(Errors.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.getWallet = (id) => {
  const ACTION = '[getWallet]';
  logger.log('info', `${TAG}${ACTION}`, id);
  return new Promise((resolve, reject)=>{
    db.execute(`SELECT * FROM wallet WHERE id=? `, id)
      .then((data) => {
        resolve(data[0]);
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(Errors.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};