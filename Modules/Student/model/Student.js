const TAG = '[Student]';
const logger = require('../../Common/services/Logger');
const Errors = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');
const moment = require('moment');

module.exports.getAllStudents = () => {
  const ACTION = '[findAll]';
  logger.log('info', `${TAG}${ACTION}`);
  return new Promise((resolve, reject)=>{
    db.execute(`SELECT * FROM student`)
      .then((data) => {
        resolve(data);
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(Errors.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.getStudentProfile = (id) => {
  const ACTION = '[find]';
  logger.log('info', `${TAG}${ACTION}`, { id });

  return new Promise((resolve, reject)=>{
    db.execute(` SELECT * FROM student WHERE user_id = ?`, [id])
      .then((data) => {
        if (data.length > 0 ) {
          resolve(data[0]);
        } else {
          let error = Errors.raise('NOT_FOUND');
          logger.log('error', TAG+ACTION, error);
          reject(error);
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(Errors.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.addStudentInfo = (student) => {
  const ACTION = '[add]';
  logger.log('info', `${TAG}${ACTION}`, { student });
  return new Promise((resolve, reject)=>{
    db.execute(`INSERT INTO student SET ?`, [student])
      .then((data) => {
        //TODO: add validation
        if (data.affectedRows > 0 ) {
          resolve({
            id: data.insertId
          });
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(Errors.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.updateStudentInfo = (student, id) => {
  const ACTION = '[update]';
  logger.log('info', `${TAG}${ACTION}`, { student, id });
  student = {
    fn: student.fn,
    ln: student.ln,
    mn: student.mn,
    contact_no: student.contact_no,
    address: student.address,
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
  }
  return new Promise((resolve, reject)=>{
    db.execute(`UPDATE student SET ? WHERE user_id = ?`, [student, id])
      .then((data) => {
       if (data.affectedRows > 0) {
        student.id = id;
        resolve(data);
       }
      else {
        let error = Errors.raise('NOT_FOUND');
        logger.log('error', TAG+ACTION, error);
        reject(error);
      }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(Errors.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.removeStudent = (id) => {
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
          let error = Errors.raise('NOT_FOUND');
          logger.log('error', TAG+ACTION, error);
          reject(error);
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(Errors.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};