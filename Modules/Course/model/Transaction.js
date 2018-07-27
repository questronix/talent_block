const TAG = '[Course][Transaction]';
const logger = require('../../Common/services/Logger');
const err = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');

const transaction = {
  addTransaction: function(transaction){
      const ACTION = '[addTransaction]';
      logger.log('info', `${TAG}${ACTION}`, transaction);

      return new Promise((resolve, reject) => {
          db.execute(`INSERT INTO transaction SET ?`, transaction)
          .then(data=>{
              if(data.affectedRows > 0)
                  resolve({id: data.insertId, ...transaction});
              else
                  reject(err.raise('NO_AFFECTED_ROWS'));
          })
          .catch(error=>{
              logger.log('error', TAG+ACTION, error);
              let err = err.raise('INTERNAL_SERVER_ERROR');
              err.error.details = error;
              reject(err);
          })
      });
  },

  addTransactionDetails: function(transaction){
    const ACTION = '[addTransactionDetails]';
    logger.log('info', `${TAG}${ACTION}`, transaction);

    return new Promise((resolve, reject) => {
        db.execute(`INSERT INTO transaction_details SET ?`, transaction)
        .then(data=>{
            if(data.affectedRows > 0)
                resolve({id: data.insertId, ...transaction});
            else
                reject(err.raise('NO_AFFECTED_ROWS'));
        })
        .catch(error=>{
            logger.log('error', TAG+ACTION, error);
            let err = err.raise('INTERNAL_SERVER_ERROR');
            err.error.details = error;
            reject(err);
        })
    });
},
}

module.exports = {...transaction};