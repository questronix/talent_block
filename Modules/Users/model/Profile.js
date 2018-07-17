const db = require('../../Common/services/Database');
const err = require('../../Common/services/Errors');
const logger = require('../../Common/services/Logger');
const TAG = '[Users][Profile]';

exports.getProfile = (username)=> {
  const ACTION = '[getProfile]';
  return new Promise((resolve, reject)=>{
    db.execute(`
    SELECT 
      id, username, mobile_no, email, type
    FROM user a
    WHERE a.username = ?`,
      [username])
    .then(data=>{
      if(data.length > 0){
        resolve({
          status: 200,
          user: data[0]
        });
      }else{
        let error = err.raise('NOT_FOUND');
        logger.log('error', TAG+ACTION, error);
        reject(err.raise('NOT_FOUND'));
      }
    }).catch(error=>{
      logger.log('error', TAG+ACTION, error);
      reject(err.raise('INTERNAL_SERVER_ERROR', error));
    });
  })
}

exports.editUserProfile = (data, id) => {
  const ACTION = '[editProfile]';
  return new Promise((resolve, reject)=>{
    db.execute(`UPDATE account SET ? WHERE id = ?;`, [data, id])
    .then(data=>{
      resolve({
        msg: 'Successfully edited profile'
      });
    })
    .catch(error=>{
      logger.log('error', TAG+ACTION, error);
      reject(err.raise('INTERNAL_SERVER_ERROR', error));
    });
  });
}