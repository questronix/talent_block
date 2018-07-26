const TAG = '[Schedule]';
const logger = require('../../Common/services/Logger');
const err = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');

module.exports.findAll = () => {
  const ACTION = '[findAll]';
  logger.log('info', `${TAG}${ACTION}`);
  return new Promise((resolve, reject)=>{
    db.execute(`SELECT * FROM schedule`)
      .then((data) => {
        resolve({
          status: 200,
          Schedule: data
        });
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.find = (id) => {
  const ACTION = '[find]';
  logger.log('info', `${TAG}${ACTION}`, { id });
  return new Promise((resolve, reject)=>{
    db.execute(` SELECT * FROM Schedule WHERE course_id = ?`, id)
      .then((data) => {
        if (data.length > 0 ) {
          resolve({
            status: 200,
            data
          });
        }
        else {
          let error = err.raise('NOT_FOUND');
          logger.log('error', TAG+ACTION, error);
          reject(err.raise('NOT_FOUND'));
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.add = (Schedule) => {
  const ACTION = '[add]';
  logger.log('info', `${TAG}${ACTION}`, { Schedule });
  return new Promise((resolve, reject)=>{
    db.execute(`INSERT INTO Schedule SET ?`, [Schedule])
      .then((data) => {
        //TODO: add validation
        if (data.affectedRows > 0 ) {
          Schedule.id = data.insertId;
          resolve({
            status: 200,
            data: Schedule
          });
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};


module.exports.update = (Schedule, id) => {
  const ACTION = '[update]';
  logger.log('info', `${TAG}${ACTION}`, { Schedule, id });
  return new Promise((resolve, reject)=>{
    db.execute(`UPDATE Schedule SET ? WHERE id = ?`, [Schedule, id])
      .then((data) => {
       if (data.affectedRows > 0) {
        Schedule.id = id;
        resolve({
          status: 200,
          data: Schedule
        });
       }
      else {
        let error = err.raise('NOT_FOUND');
        logger.log('error', TAG+ACTION, error);
        reject(error);
      }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.remove = (id) => {
  const ACTION = '[remove]';
  logger.log('info', `${TAG}${ACTION}`, { id });
  return new Promise((resolve, reject)=>{
    db.execute(`DELETE FROM schedule WHERE id = ?`, [id])
      .then((data) => {
        //TODO: add validation for affected rows.
        if (data.affectedRows > 0) {
          resolve({
            status: 200,
            data: {
              id,
            }
          });
        }
        else {
          let error = err.raise('NOT_FOUND');
          logger.log('error', TAG+ACTION, error);
          reject(error);
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};