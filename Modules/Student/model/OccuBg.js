const db = require('../../Common/services/Database');
const err = require('../../Common/services/Errors');
const logger = require('../../Common/services/Logger');
const moment = require('moment');
const TAG = '[OccupationalBackground]';

const occu_bg = {
  add: function (data) {
    const ACTION = '[add]';
    logger.log('info', `${TAG}${ACTION}`, data);

    return new Promise((resolve, reject) => {
      db.execute(`INSERT INTO occu_bg SET ?`, [data])
        .then(data => {
          if (data.affectedRows > 0)
            resolve(data);
          else
            reject(err.raise('NO_AFFECTED_ROWS'));
        })
        .catch(error => {
          logger.log('error', TAG + ACTION, error);
          let err = err.raise('INTERNAL_SERVER_ERROR');
          err.error.details = error;
          reject(err);
        })
    });
  },

  getStudentOccu: function (user_id) {
    const ACTION = '[getStudentOccu]';
    logger.log('info', `${TAG}${ACTION}`, user_id);

    return new Promise((resolve, reject) => {
      db.execute(`SELECT * FROM occu_bg WHERE user_id = ?`, [user_id])
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          logger.log('error', TAG + ACTION, error);
          let err = Errors.raise('INTERNAL_SERVER_ERROR', error);
          reject(err);
        })
    });
  },

  update: function (data) {
    const ACTION = '[update]';
    logger.log('info', `${TAG}${ACTION}`, data);

    let fid = data.id;
    if (data.user_id) {
      delete data.user_id;
    }
    if (data.id) {
      delete data.id;
    }
    if (data.created_at) {
      delete data.created_at;
    }
    data.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');

    return new Promise((resolve, reject) => {

      db.execute(`UPDATE occu_bg SET ? WHERE id=?`, [data, fid])
        .then(data => {
          if (data.affectedRows > 0)
            resolve(data);
          else
            reject(err.raise('NO_AFFECTED_ROWS'));
        })
        .catch(error => {
          logger.log('error', TAG + ACTION, error);
          let err = err.raise('INTERNAL_SERVER_ERROR');
          err.error.details = error;
          reject(err);
        })
    });
  },

};

module.exports = { ...occu_bg };