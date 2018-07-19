const db = require('../../Common/services/Database');
const err = require('../../Common/services/Errors');
const logger = require('../../Common/services/Logger');
const TAG = '[Users][Profile]';

exports.getStudentProfile = (id)=> {
  const ACTION = '[getStudentProfile]';
  
  return new Promise((resolve, reject)=>{
    db.execute(`SELECT * FROM student WHERE user_id = ?`, [id])
    .then(data=>{
      if(data.length > 0){
        resolve({
          status: 200,
          data: data
        });
      }else{
        let error = err.raise('NOT_FOUND');
        logger.log('error', TAG+ACTION, error);
        reject(err.raise('NOT_FOUND'));
      }
    })
    .catch(error=>{
      logger.log('error', TAG+ACTION, error);
      let err = err.raise('INTERNAL_SERVER_ERROR');
      err.error.details = error;
      reject(err);
    })
  })
}