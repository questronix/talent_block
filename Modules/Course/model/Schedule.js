const TAG = '[Schedule]';
const logger = require('../../Common/services/Logger');
const err = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');

module.exports.getAllSchedule = (id) => {
  const ACTION = '[getAllSchedule]';
  logger.log('info', `${TAG}${ACTION}`, { id });
  return new Promise((resolve, reject)=>{
    db.execute(`
      SELECT 
        schedule.id "schedule_id", 
        teacher.id "teacher_id", teacher.fn "teacher_fn", teacher.ln "teacher_ln", 
        DATE_FORMAT(schedule.start_date, '%Y-%m-%d') as start_date, DATE_FORMAT(schedule.end_date, '%Y-%m-%d') as end_date
      FROM schedule 
      LEFT JOIN teacher ON teacher.id = teacher_id
      WHERE course_id = ?
      `, id)
      .then((data) => {
        if (data.length > 0 ) {
          resolve({
            status: 200,
            data
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

