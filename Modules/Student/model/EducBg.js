const db = require('../../Common/services/Database');
const Errors = require('../../Common/services/Errors');
const logger = require('../../Common/services/Logger');
const TAG = '[EducationalBackground]';
const moment = require('moment');

const edu_bg = {
    add: function(data){
        const ACTION = '[add]';
        logger.log('info', `${TAG}${ACTION}`, data);

        return new Promise((resolve, reject) => {
            db.execute(`INSERT INTO edu_bg SET ?`, [data])
            .then(data=>{
                if(data.affectedRows > 0)
                    resolve(data);
                else
                    reject(Errors.raise('NO_AFFECTED_ROWS'));
            })
            .catch(error=>{
                logger.log('error', TAG+ACTION, error);
                let err = err.raise('INTERNAL_SERVER_ERROR');
                err.error.details = error;
                reject(err);
            })
        });
    },

    getStudentEduc: function(user_id){
        const ACTION = '[getStudentEduc]';
        logger.log('info', `${TAG}${ACTION}`, user_id);

        return new Promise((resolve, reject) => {
            db.execute(`SELECT * FROM edu_bg WHERE user_id = ?`, [user_id])
            .then(data=>{
              resolve(data);
            })
            .catch(error=>{
                logger.log('error', TAG+ACTION, error);
                let err = Errors.raise('INTERNAL_SERVER_ERROR', error);
                reject(err);
            })
        });
    },

    getSpecificEduc: function(id){
        const ACTION = '[getSpecificEduc]';
        logger.log('info', `${TAG}${ACTION}`, id);

        return new Promise((resolve, reject) => {
            db.execute(`SELECT * FROM edu_bg WHERE id = ?`, [id])
            .then(data=>{
                if(data.length > 0)
                    resolve(data);
                else
                    reject(Errors.raise('NOT_FOUND'));
            })
            .catch(error=>{
                logger.log('error', TAG+ACTION, error);
                let err = Errors.raise('INTERNAL_SERVER_ERROR', error);
                reject(err);
            })
        });
    },

    update: function(data){
        const ACTION = '[update]';
        logger.log('info', `${TAG}${ACTION}`, data);
        let fid = data.id;
        if (data.user_id) {
            delete data.user_id;
        }
        if (data.id) {
            delete data.id;
        }
        if (data.created_at) {
            delete data.created_at;
        }
        data.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');

        return new Promise((resolve, reject) => {
            
            db.execute(`UPDATE edu_bg SET ? WHERE id=?`, [data, fid])
            .then(results=>{
                if(results.affectedRows > 0)
                    resolve(results);
                else
                    reject(Errors.raise('NO_AFFECTED_ROWS'));
            })
            .catch(error=>{
                logger.log('error', TAG+ACTION, error);
                let err = Errors.raise('INTERNAL_SERVER_ERROR', error);
                reject(err);
            })
        });
    },

    delete: function(id){
        const ACTION = '[delete]';
        logger.log('info', `${TAG}${ACTION}`, id);

        return new Promise((resolve, reject) => {
            db.execute(`DELETE FROM edu_bg WHERE id=?`, id)
            .then(data=>{
                if(data.affectedRows > 0)
                    resolve(data);
                else   
                    reject(err.raise('NO_AFFECTED_ROWS'));
            })
            .catch(error=>{
                logger.log('error', TAG+ACTION, error);
                let err = Errors.raise('INTERNAL_SERVER_ERROR', error);
                reject(err);
            })
        });
    }
}

module.exports = {...edu_bg};