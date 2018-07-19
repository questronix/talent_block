const TAG = '[OccuBG]';
const logger = require('../../Common/services/Logger');
const err = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');

//=========== querry all occupation bg
module.exports.findAll = () => {
  const ACTION = '[findAll]';
  logger.log('info', `${TAG}${ACTION}`);
  return new Promise((resolve, reject)=>{
    db.execute(`SELECT * FROM occu_bg`)
      .then((data) => {
        resolve({
          status: 200,
          occubg: data
        });
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

//=========== querry occupation bg ID
module.exports.find = (id) => {
  const ACTION = '[find]';
  logger.log('info', `${TAG}${ACTION}`, { id });
  return new Promise((resolve, reject)=>{
    db.execute(` SELECT * FROM occu_bg WHERE id = ?`, [id])
      .then((data) => {
        if (data.length > 0 ) {
          resolve({
            status: 200,
            occubg: data
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

// ********************* add occupation bg
module.exports.add = (occubg) => {
  const ACTION = '[add]';
  logger.log('info', `${TAG}${ACTION}`, { occubg });
  return new Promise((resolve, reject)=>{
    db.execute(`INSERT INTO occu_bg SET ?`, [occubg])
      .then((data) => {
        //TODO: add validation
        if (data.affectedRows > 0 ) {
          occubg.id = data.insertId;
          resolve({
            status: 200,
            data: occubg
          });
        }
      }).catch((err) => {
        logger.log('error', TAG+ACTION, err);
        reject(err.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

/************ Delete occupation */

module.exports.remove = (id) => {
  const ACTION = '[remove]';
  logger.log('info', `${TAG}${ACTION}`, { id });
  return new Promise((resolve, reject)=>{
    db.execute(`DELETE FROM occu_bg WHERE id = ?`, [id])
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

module.exports.update = (occubg, id) => {
  const ACTION = '[update]';
  logger.log('info', `${TAG}${ACTION}`, { occubg, id });
  return new Promise((resolve, reject)=>{
    db.execute(`UPDATE occu_bg SET ? WHERE id = ?`, [occubg, id])
      .then((data) => {
       if (data.affectedRows > 0) {
        occubg.id = id;
        resolve({
          status: 200,
          data: occubg
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