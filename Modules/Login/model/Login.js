const TAG = '[Authenticate]';
const db = require('../../Common/services/Database');
const err = require('../../Common/services/Errors');
const logger = require('../../Common/services/Logger');
const JWT = require('../../Common/services/JWT');
const errors = require('../../Common/services/Errors');

module.exports.authenticate = (username, password)=>{
  const ACTION = '[authenticate]';
  logger.log('info', `${TAG}${ACTION}`, {username, password});
  return new Promise((resolve, reject)=>{
    if(username == "johndoe"){
      if(password == "P@ssw0rd"){
        let user = {
            id: '1',
            email: 'john.doe@gmail.com',
            username: 'johndoe',
            fn: 'John',
            ln: 'Doe',
            address: 'San Pedro, Laguna',
            status: 1,
            date_created: new Date('2010/10/10')
        };
        resolve(user);
      }else{
        let error = Errors.raise('MISSING_INVALID_PARAMS');
        error.error.params.push('password');
        reject(error);
      }
    }else{
      let error = Errors.raise('MISSING_INVALID_PARAMS');
        error.error.params.push('username');
        reject(error);
    }
  });
};