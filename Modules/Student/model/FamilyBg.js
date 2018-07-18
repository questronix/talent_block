const db = require('../../Common/services/Database');
const err = require('../../Common/services/Errors');
const logger = require('../../Common/services/Logger');
const TAG = '[Family Background]';

const family_bg = {
    add: function(data){
        const ACTION = '[add]';
        logger.log('info', `${TAG}${ACTION}`, data);

        return new Promise((resolve, reject) => {
            db.execute(`INSERT INTO family_bg SET ?`, [data])
            .then(data=>{
                if(data.affectedRows > 0)
                    resolve(data);
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

    view: function(id){
        const ACTION = '[view]';
        logger.log('info', `${TAG}${ACTION}`, id);

        return new Promise((resolve, reject) => {
            db.execute(`SELECT * FROM family_bg WHERE user_id = ?`, [id])
            .then(data=>{
                if(data.length > 0)
                    resolve(data);
                else
                    reject(err.raise('NOT_FOUND'));
            })
            .catch(error=>{
                logger.log('error', TAG+ACTION, error);
                let err = err.raise('INTERNAL_SERVER_ERROR');
                err.error.details = error;
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
            data.updated_at = new Date();
            db.execute(`UPDATE family_bg SET ? WHERE user_id=? AND id=?`, [data, uid, fid])
            .then(data=>{
                if(data.affectedRows > 0)
                    resolve(data);
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

    delete: function(uid, fid){
        const ACTION = '[delete]';
        logger.log('info', `${TAG}${ACTION}`, { uid, fid });

        return new Promise((resolve, reject) => {
            db.execute(`DELETE FROM family_bg WHERE user_id=? AND id=?`, [uid, fid])
            .then(data=>{
                if(data.affectedRows > 0)
                    resolve(data);
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
    }
}

module.exports = {...family_bg};