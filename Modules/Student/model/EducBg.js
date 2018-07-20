const db = require('../../Common/services/Database');
const Errors = require('../../Common/services/Errors');
const logger = require('../../Common/services/Logger');
const TAG = '[EducationalBackground]';

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

    update: function(data, uid){
        const ACTION = '[update]';
        logger.log('info', `${TAG}${ACTION}`, { data, uid });

        return new Promise((resolve, reject) => {
            let fid = data.id;
            delete data.id;
            data.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');
            db.execute(`UPDATE edu_bg SET ? WHERE user_id=? AND id=?`, [data, uid, fid])
            .then(data=>{
                if(data.affectedRows > 0)
                    resolve(data);
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

    delete: function(uid, fid){
        const ACTION = '[delete]';
        logger.log('info', `${TAG}${ACTION}`, { uid, fid });

        return new Promise((resolve, reject) => {
            db.execute(`DELETE FROM edu_bg WHERE user_id=? AND id=?`, [uid, fid])
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