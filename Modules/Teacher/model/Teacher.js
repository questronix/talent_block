const TAG = '[Teacher]';
const logger = require('../../Common/services/Logger');
const err = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');

module.exports.findAll = () => {
  const ACTION = '[findAll]';
  logger.log('info', `${TAG}${ACTION}`);
  return new Promise((resolve, reject)=>{
    db.execute(`SELECT * FROM teacher`)
      .then((data) => {
        resolve({
          status: 200,
          teacher: data
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
    db.execute(` SELECT * FROM teacher WHERE id = ?`, [id])
      .then((data) => {
        if (data.length > 0 ) {
          resolve({
            status: 200,
            teacher: data
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

module.exports.add = (teacher) => {
  const ACTION = '[add]';
  logger.log('info', `${TAG}${ACTION}`, { teacher });
  return new Promise((resolve, reject)=>{
    db.execute(`INSERT INTO teacher SET ?`, [teacher])
      .then((data) => {
        //TODO: add validation
        if (data.affectedRows > 0 ) {
          teacher.id = data.insertId;
          resolve({
            status: 200,
            data: teacher
          });
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};


module.exports.update = (teacher, id) => {
  const ACTION = '[update]';
  logger.log('info', `${TAG}${ACTION}`, { teacher, id });
  return new Promise((resolve, reject)=>{
    db.execute(`UPDATE teacher SET ? WHERE id = ?`, [teacher, id])
      .then((data) => {
       if (data.affectedRows > 0) {
        teacher.id = id;
        resolve({
          status: 200,
          data: teacher
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
    db.execute(`DELETE FROM teacher WHERE id = ?`, [id])
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