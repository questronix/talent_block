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
          console.log(data);
          db.execute(`SELECT code, name FROM course WHERE code=?`,
          [data.code])
          .then( data=>{
            callback(null, data);
          })
          .catch( error=>{
            logger.log('error', TAG+ACTION, error);
            callback(err.raise('INTERNAL_SERVER_ERROR'));
          })
        },

        addCourse: ['checker',
          function(result, callback){
            if (result.checker.length === 0){
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
              const error = err.raise('NO_AFFECTED_ROWS');
              error.error.message = 'Course code already in use';
              logger.log('error', TAG+ACTION, error);
              callback(error);
            }
          }
        ]
      },
      function(error, result){
        if (error){
          reject(error);
        }else{
          resolve(result.addCourse);
        }
      }
    );
  });
}

exports. search = (data)=>{
  const ACTION = '[searchCourse]';

  let query = `SELECT
    c.id, c.code, c.name, c.banner_img, c.thumbnail, c.prereq, c.tags, c.full_desc,
    (SELECT name FROM school WHERE id=c.school_id) "school",
    (SELECT name FROM category WHERE id=c.category_id) "category"
    FROM course c`;

  // // suko na ako -- hard coded na ampota
  // let keys = Object.keys(data);
  // if (keys.length > 0){
  //   if (data.code){
  //     query += ' WHERE ';
  //     query += `c.code='?'`;
  //     values = values.concat(data.code);
  //   }else if (data.school && data.category){
  //     query += ' WHERE ';
  //     query += `c.school_id in (SELECT id FROM school WHERE name like '%?%')
  //       AND
  //       c.category_id in (SELECT id FROM category WHERE name like '%?%')
  //       `;
  //     values = values.concat(data.school).concat(data.category);
  //   }else if (data.school){
  //     query += ' WHERE ';
  //     query += `c.category_id in (SELECT id FROM category WHERE name like '%?%')`;
  //     values = values.concat(data.school);
  //   }else if (data.category){
  //     query += ' WHERE ';
  //     query += `c.category_id in (SELECT id FROM category WHERE name like '%?%')`;
  //     values = values.concat(data.category);
  //   }
  // }

  return new Promise((resolve,reject)=>{
    db.execute(query)
    .then( result=>{
      resolve(result);
    })
    .catch( error=>{
      logger.log('error', TAG+ACTION, error);
      reject(err.raise('INTERNAL_SERVER_ERROR'));
    })
  });
}

function getCourseSchedule(course_id){
  return new Promise((resolve, reject)=>{
    // QUERY TESTED
    const query = `
      SELECT
        s.id, s.start_time, s.end_time, s.start_date, s.end_date,
        t.id, t.fn, t.ln, t.title, t.occupation, t.profile_img, t.thumbnail
      FROM schedule s LEFT JOIN teacher t ON s.teacher_id=t.id
      WHERE s.course_id=?`;

    db.execute(query,[course_id])
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
    const query = `SELECT
    c.id, c.code, c.name, c.banner_img, c.thumbnail, c.prereq, c.tags, c.full_desc,
    (SELECT name FROM school WHERE id=c.school_id) "school",
    (SELECT name FROM category WHERE id=c.category_id) "category"
    FROM course c WHERE c.id=?`

    db.execute(query,[course_id])
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

  return new Promise( (resolve, reject)=>{
    // QUERY TESTED
    const query = `SELECT * FROM student WHERE id in
      (SELECT student_id FROM student_schedule WHERE schedule_id in
      (SELECT id FROM schedule WHERE course_id=?))`;

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
    // QUERY TESTED
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
  return new Promise( (resolve, reject)=>{
    // QUERY TESTED
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