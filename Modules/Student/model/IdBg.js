const db = require('../../Common/services/Database');
const err = require('../../Common/services/Errors');
const logger = require('../../Common/services/Logger');
const async = require('async');
const moment = require('moment');
const TAG = '[IdBackground]';

const id_bg = {
  add: function (data) {
    const ACTION = '[add]';
    logger.log('info', `${TAG}${ACTION}`, data);

    return new Promise((resolve, reject) => {
      db.execute(`INSERT INTO id_bg SET ?`, [data])
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

  getStudentIds: function (user_id) {
    const ACTION = '[getStudentIds]';
    logger.log('info', `${TAG}${ACTION}`, user_id);

    return new Promise((resolve, reject) => {
      db.execute(`SELECT * FROM id_bg WHERE user_id = ?`, [user_id])
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

      db.execute(`UPDATE id_bg SET ? WHERE id=?`, [data, fid])
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


  /* view all ids of the user*/
  viewUserIds: function (id) {
    const ACTION = '[view]';
    logger.log('info', `${TAG}${ACTION}`, id);

    return new Promise((resolve, reject) => {
      db.execute(`SELECT * FROM id_bg WHERE user_id = ?`, [id])
        .then(data => {
          if (data.length > 0)
            resolve(data);
          else
            reject(err.raise('NOT_FOUND'));
        })
        .catch(error => {
          logger.log('error', TAG + ACTION, error);
          let err = err.raise('INTERNAL_SERVER_ERROR');
          err.error.details = error;
          reject(err);
        })
    });
  },

  /* insert row in id_bg under the present user */
  create: function (data) {
    const ACTION = '[create]';
    logger.log('info', `${TAG}${ACTION}`, data);

    return new Promise((resolve, reject) => {
      db.execute(`INSERT INTO id_bg SET ?`, [data])
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

  /* view specific id of user */
  viewOneId: function (filter) {
    const ACTION = '[viewOneId]';
    logger.log('info', `${TAG}${ACTION}`, filter);

    return new Promise((resolve, reject) => {
      db.execute(`SELECT * FROM id_bg WHERE 
            user_id = ? AND name = ? AND number = ? AND type = ?`,
        [filter.user_id, filter.name, filter.number, filter.type])
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          logger.log('error', TAG + ACTION, error);
          let err = err.raise('INTERNAL_SERVER_ERROR');
          err.error.details = error;
          reject(err);
        })
    });
  },

  /* main function for creating new element in id_bg */
  addAsync: function (data) {
    const ACTION = '[addAsync]';
    logger.log('info', `${TAG}${ACTION}`, data)

    return new Promise((resolve, reject) => {
      async.auto({
        getId: function (callback) {
          id_bg.viewOneId(data)
            .then(data => {
              callback(null, data);
            })
            .catch(error => {
              logger.log('error', TAG + ACTION, error);
              callback(error);
            })
        },

        createId: ['getId', function (result, callback) {
          let rows = result.getId;

          if (rows.length === 0) {
            id_bg.create(data)
              .then(data => {
                callback(null, data)
              })
              .catch(error => {
                logger.log('error', TAG + ACTION, error);
                callback(error);
              })
          } else {
            let error = err.raise('DUPLICATE_RECORD');
            logger.log('error', TAG + ACTION, error);
            callback(error);
          }
        }]
      }, function (err, result) {
        if (err) reject(err);
        resolve(result.createId);
      })
    })
  },

  /* delete specific id of user */
  delete: function (id) {
    const ACTION = '[delete]';
    logger.log('info', `${TAG}${ACTION}`, id);

    return new Promise((resolve, reject) => {
      db.execute(`DELETE FROM id_bg WHERE id=?`, id)
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
  }
}

module.exports = { ...id_bg };