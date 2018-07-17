const TAG = '[Courses]';

const db      = require('../../Common/services/Database');
const err     = require('../../Common/services/Errors');
const logger  = require('../../Common/services/Logger');

const async   = require('async');

exports.newCourse = (data)=>{
  const ACTION = '[newCourse]'

  // not tested
  return new Promise( (resolve, reject)=>{
    async.auto(
      {
        // checks Course table if School already uses the course code
        checker: function(callback){
          db.execute(`SELECT code, name FROM course WHERE code='?'`,
          [data.code])
          .then( data=>{
            callback(null, data);
          })
          .catch( error=>{
            logger.log('error', TAG+ACTION, error);
            callback(err.raise('INTERNAL_SERVER_ERROR'));
          })
        },

        // add the course
        addCourse: ['checker',
          function(result, callback){
            if (result.length === 0){
              db.execute(`INSERT INTO course SET ?`, [data])
              .then( result=>{
                logger.log('info', TAG+ACTION, result);
                callback(null, result);
              })
              .catch( error=>{
                logger.log('error', TAG+ACTION, error);
                callback(err.raise('INTERNAL_SERVER_ERROR'));
              });
            }else{
              callback({
                msg: 'Course Code already in use'
              })
            }
          }
        ]
      },
      function(error, result){
        if (error)  reject(error);
        else        resolve(result);
      }
    );
  });
}

exports. search = (data)=>{
  const ACTION = '[searchCourse]';

  // *in Juday voice* walang nangyayari
  return new Promise((resolve,reject)=>{
    if(true)resolve({msg: "OK"});
    else    reject( {msg: "NO"});
  });
}

function getCourseSchedule(course_id){
  return new Promise((resolve, reject)=>{
    // not tested
    db.execute(`
    SELECT
      s.id, s.start_time, s.end_time, s.start_date, s.end_date,
      t.id, t.fn, t.ln, t.title, t.occupation, t.profile_img, t.thumbnail
    FROM schedule s LEFT JOIN teacher t ON s.teacher_id=t.id
    WHERE s.course_id=?`,
    [course_id])
    .then( data=>{
      resolve(data);
    })
    .catch(error=>{
      reject(error);
    })
  });
}

exports.getCourse = (course_id)=>{
  const ACTION = '[getCourse]';

  return new Promise( (resolve, reject) =>{
    // QUERY TESTED
    db.execute(`SELECT
      c.id,
      c.code,
      c.name,
      c.banner_img,
      c.thumbnail,
      c.prereq,
      c.tags,
      c.full_desc,
      (SELECT name FROM school WHERE id=c.school_id) "school",
      (SELECT name FROM category WHERE id=c.category_id) "category"
      FROM course c WHERE c.id=?`,
    [course_id])
    .then( data=>{
      getCourseSchedule(course_id)
      .then(sched=>{
        if (data.length > 0){
          data[0].schedule = sched;
          resolve(data[0]);
        }
      })
      .catch(error=>{
        logger.log('error', TAG+ACTION, error);
        reject(err.raise('INTERNAL_SERVER_ERROR'));
      });
    })
    .catch( error=>{
      logger.log('error', TAG+ACTION, error);
      reject(err.raise('INTERNAL_SERVER_ERROR'));
    });
  });
}

exports.getCourseStudents = (course_id)=>{
  const ACTION = '[getCourseStudents]';

  const query = `SELECT * FROM student WHERE id in
      (SELECT student_id FROM student_schedule WHERE schedule_id in
      (SELECT id FROM schedule WHERE course_id=?))`;

  return new Promise( (resolve, reject)=>{
    db.execute(query, [course_id])
    .then( data=>{
      resolve(data);
    })
    .catch( error=>{
      logger.log('error', TAG+ACTION, error);
      reject(err.raise('INTERNAL_SERVER_ERROR'));
    });
  });
}

exports.updateCourse = (course_id, data)=>{
  const ACTION = '[updateCourse]';

  return new Promise( (resolve, reject)=>{
    // query tested
    db.execute(`UPDATE course SET ? WHERE id=?`,
    [data, course_id])
    .then( result=>{
      logger.log('info', TAG+ACTION, result);
      resolve(result);
    })
    .catch( error=>{
      logger.log('error', TAG+ACTION, error);
      reject(err.raise('INTERNAL_SERVER_ERROR'));
    });
  });
}

exports.deleteCourse = (course_id)=>{
  const ACTION = '[deleteCourse]';
  // query tested
  return new Promise( (resolve, reject)=>{
    db.execute(`DELETE FROM course WHERE id=?`, [course_id])
    .then( result=>{
      logger.log('info', TAG+ACTION, result);
      resolve(result);
    })
    .catch( error=>{
      logger.log('error', TAG+ACTION, error);
      reject(err.raise('INTERNAL_SERVER_ERROR'));
    });
  });
}