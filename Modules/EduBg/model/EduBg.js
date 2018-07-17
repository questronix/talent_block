const TAG = '[EduBg]';
const logger = require('../../Common/services/Logger');
const err = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');

module.exports.findAll = () => {
  const ACTION = '[findAll]';
  logger.log('info', `${TAG}${ACTION}`);
  return new Promise((resolve, reject)=>{
    db.execute(`SELECT * FROM edu_bg`)
      .then((data) => {
        resolve({
          status: 200,
          edu_bg: data
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
    db.execute(` SELECT * FROM edu_bg WHERE id = ?`, [id])
      .then((data) => {
        if (data.length > 0 ) {
          resolve({
            status: 200,
            edu_bg: data
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

module.exports.add = (edu_bg) => {
  const ACTION = '[add]';
  logger.log('info', `${TAG}${ACTION}`, { edu_bg });
  return new Promise((resolve, reject)=>{
    db.execute(`INSERT INTO edu_bg SET ?`, [edu_bg])
      .then((data) => {
        //TODO: add validation
        if (data.affectedRows > 0 ) {
          edu_bg.id = data.insertId;
          resolve({
            status: 200,
            data: edu_bg
          });
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};


module.exports.update = (edu_bg, id) => {
  const ACTION = '[update]';
  logger.log('info', `${TAG}${ACTION}`, { edu_bg, id });
  return new Promise((resolve, reject)=>{
    db.execute(`UPDATE edu_bg SET ? WHERE id = ?`, [edu_bg, id])
      .then((data) => {
       if (data.affectedRows > 0) {
        edu_bg.id = id;
        resolve({
          status: 200,
          data: edu_bg
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
    db.execute(`DELETE FROM edu_bg WHERE id = ?`, [id])
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