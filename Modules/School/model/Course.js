const TAG = '[Course]';
const db      = require('../../Common/services/Database');
const err     = require('../../Common/services/Errors');
const logger  = require('../../Common/services/Logger');

// const async   = require('async');

module.exports.getCourses = (sid) => {
  const ACTION = '[getCourses]';
  logger.log('info', `${TAG}${ACTION}`, { sid });
  return new Promise((resolve, reject)=>{
    db.execute(`SELECT * FROM course WHERE school_id = ?`, [sid])
      .then((data) => {
        if (data.length > 0 ) {
          resolve({data});
        } else {
          let error = Errors.raise('NOT_FOUND');
          logger.log('error', TAG+ACTION, error);
          reject(error);
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};