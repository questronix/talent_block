const TAG = '[Student]';
const logger = require('../../Common/services/Logger');
const err = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');

module.exports.findAll = () => {
  const ACTION = '[findAll]';
  logger.log('info', `${TAG}${ACTION}`);
  return new Promise((resolve, reject)=>{
    db.execute(`SELECT * FROM student`)
      .then((data) => {
        resolve({
          status: 200,
          student: data
        });
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.getProfile = (id) => {
  const ACTION = '[find]';
  logger.log('info', `${TAG}${ACTION}`, { id });

  return new Promise((resolve, reject)=>{
    db.execute(`SELECT user_id, fn, ln, mn, address FROM student WHERE user_id = ?`, [id])
      .then((data) => {
        if (data.length > 0 ) {
          resolve(data[0]);
        } else {
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

module.exports.add = (student) => {
  const ACTION = '[add]';
  logger.log('info', `${TAG}${ACTION}`, { student });
  return new Promise((resolve, reject)=>{
    db.execute(`INSERT INTO student SET ?`, [student])
      .then((data) => {
        //TODO: add validation
        if (data.affectedRows > 0 ) {
          student.id = data.insertId;
          resolve({
            status: 200,
            data: student
          });
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.update = (student, id) => {
  const ACTION = '[update]';
  logger.log('info', `${TAG}${ACTION}`, { student, id });
  return new Promise((resolve, reject)=>{
    db.execute(`UPDATE student SET ? WHERE user_id = ?`, [student, id])
      .then((data) => {
       if (data.affectedRows > 0) {
        student.id = id;
        resolve({
          status: 200,
          data: student
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
    db.execute(`DELETE FROM student WHERE id = ?`, [id])
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