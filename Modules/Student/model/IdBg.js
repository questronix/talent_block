const db = require('../../Common/services/Database');
const err = require('../../Common/services/Errors');
const logger = require('../../Common/services/Logger');
const async = require('async');
const TAG = '[IdBackground]';

const id_bg = {
    /* view all ids of the user*/
    viewUserIds: function(id){
        const ACTION = '[view]';
        logger.log('info', `${TAG}${ACTION}`, id);

        return new Promise((resolve, reject) => {
            db.execute(`SELECT * FROM id_bg WHERE user_id = ?`, [id])
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

    /* insert row in id_bg under the present user */
    create: function(data){
        const ACTION = '[create]';
        logger.log('info', `${TAG}${ACTION}`, data);

        return new Promise((resolve, reject) => {
            db.execute(`INSERT INTO id_bg SET ?`, [data])
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

    /* view specific id of user */
    viewOneId: function(filter){
        const ACTION = '[viewOneId]';
        logger.log('info', `${TAG}${ACTION}`, filter);

        return new Promise((resolve, reject) => {
            db.execute(`SELECT * FROM id_bg WHERE 
            user_id = ? AND name = ? AND number = ? AND type = ?`, 
            [filter.user_id, filter.name, filter.number, filter.type])
            .then(data=>{
                resolve(data);
            })
            .catch(error=>{
                logger.log('error', TAG+ACTION, error);
                let err = err.raise('INTERNAL_SERVER_ERROR');
                err.error.details = error;
                reject(err);
            })
        });
    },

    /* main function for creating new element in id_bg */
    addAsync: function(data){
        const ACTION = '[addAsync]';
        logger.log('info', `${TAG}${ACTION}`, data)

        return new Promise((resolve, reject) => {
            async.auto({
                getId: function(callback){
                    id_bg.viewOneId(data)
                    .then(data=>{
                        callback(null, data);
                    })
                    .catch(error=>{
                        logger.log('error', TAG + ACTION, error);
                        callback(error);
                    })
                },

                createId: ['getId', function(result, callback){
                    let rows = result.getId;

                    if(rows.length === 0){
                        id_bg.create(data)
                        .then(data=>{
                            callback(null, data)
                        })
                        .catch(error=>{
                            logger.log('error', TAG + ACTION, error);
                            callback(error);
                        })
                    }else{
                        let error = err.raise('DUPLICATE_RECORD');
                        logger.log('error', TAG + ACTION, error);
                        callback(error);
                    }
                }]
            }, function(err, result){
                if(err) reject(err);
                resolve(result.createId);
            })
        })
    },

    /* update specific id of user */
    update:function(data, uid){
        const ACTION = '[update]';
        logger.log('info', `${TAG}${ACTION}`, data);

        return new Promise((resolve, reject) => {
            let id = data.id;
            delete data.id;
            data.updated_at = new Date();
            db.execute(`UPDATE id_bg SET ? WHERE user_id = ? AND id = ?`, [data, uid, id])
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

    /* delete specific id of user */
    delete: function(uid, id){
        const ACTION = '[delete]';
        logger.log('info', `${TAG}${ACTION}`, { uid, id });

        return new Promise((resolve, reject) => {
            db.execute(`DELETE from id_bg WHERE user_id = ? AND id = ?`, [uid, id])
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

module.exports = {...id_bg};