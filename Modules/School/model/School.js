const db = require('../../Common/services/Database');
const err = require('../../Common/services/Errors');
const logger = require('../../Common/services/Logger');
const async = require('async');
const TAG = '[School]';

const school = {
    getSchoolById: function(school_id){
        const ACTION = '[getSchoolById]';
        return new Promise((resolve, reject) => {
            db.execute(`SELECT * FROM school WHERE id = ?`, [school_id])
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

    updateSchool: function(school_id, user_id, data){
        const ACTION = '[updateSchool]';
        return new Promise ((resolve, reject) => {
            db.execute(`UPDATE school SET ? WHERE id = ? AND user_id = ?`, [data, school_id, user_id])
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

    getSchoolByUser: function(id){
        const ACTION = '[getSchoolByUser]';
        return new Promise ((resolve, reject) => {
            db.execute(`SELECT * FROM school WHERE user_id = ?`, [id])
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

    createSchool: function(data){
        const ACTION = '[createSchool]';
        return new Promise ((resolve, reject) => {
            db.execute(`INSERT INTO school SET ?`, [data])
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
        })
    },

    createSchoolAsync: function(data){
        const ACTION = '[createSchoolAsync]';
        logger.log('info', TAG+ACTION, data);

        return new Promise((resolve, reject) => {
            async.auto({
                getSchool: function(callback){
                    school.getSchoolByUser(data.user_id)
                    .then(data=>{
                        callback(null, data);
                    })
                    .catch(error=>{
                        logger.log('error', TAG + ACTION, error);
                        callback(error);
                    })
                },

                create: ['getSchool', function(result, callback){
                    let rows = result.getSchool;
                    console.log(rows);
                    if(rows.length === 0){
                        school.createSchool(data)
                        .then(data=>{
                            callback(null, data)
                        })
                        .catch(error=>{
                            logger.log('error', TAG + ACTION, error);
                            callback(error);
                        })
                    }else{
                        let error = err.raise('UNAUTHORIZED');
                        logger.log('error', TAG + ACTION, error);
                        callback(error);
                    }
                }]
            }, function(err, result){
                if(err) reject(err);
                resolve(result.create);
            })
        });
    }
}

module.exports = {...school};