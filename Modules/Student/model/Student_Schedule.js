const TAG = '[Student]';
const logger = require('../../Common/services/Logger');
const Errors = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');

exports.getCourses = (student_id, status)=>{
  const ACTION = '[getCoursesEnrolled]';

  return new Promise( (resolve,reject)=>{
    let query = `select
        course.id "course_id", course.name "course_name", course.code "course_code", course.tags "course_tags",
        school.id "school_id", school.name "school_name",
        category.id "category_id", category.name "category_name",
        schedule.id "sched_id", schedule.start_time, schedule.end_time,
        teacher.id "teacher_id", teacher.ln "teacher_ln", teacher.fn "teacher_fn",
        student_schedule.grade
      from course
      left join school    on course.school_id=school.id
      left join category  on course.category_id=category.id
      left join schedule  on course.id=schedule.course_id
      left join teacher   on schedule.teacher_id=teacher.id
      left join student_schedule on schedule.id=student_schedule.schedule_id
      where student_schedule.student_id=?`;

    if (status==='enrolled') query += ' and student_schedule.status=0';  /*courses currently enrolled*/
    else if(status==='taken')query += ' and student_schedule.status!=0'; /*courses already taken*/
    else ;                                                               /*no filter*/
    db.execute(query, [student_id])
    .then( data=>{
      resolve(data);
    })
    .catch( error=>{
      logger.log('error', TAG+ACTION, error);
      reject(Errors.raise('INTERNAL_SERVER_ERROR', error));
    })
  });
}

exports.enrollCourse = (student_id, schedule_id)=>{
  const ACTION = '[enrollCourse]';

  return new Promise( (resolve,reject)=>{
    // TODO: update number of slots available for course
    db.execute(`INSERT INTO student_schedule(student_id, schedule_id)
      values(?,?)`, [student_id, schedule_id])
    .then( result=>{
      if (result.affectedRows > 0 ) {
        resolve(result);
      }
    })
    .catch( error=>{
      logger.log('error', TAG+ACTION, error);
      reject(Errors.raise('INTERNAL_SERVER_ERROR', error));
    })
  });
}

exports.dropCourse = (student_id, schedule_id)=>{
  const ACTION = '[dropCourse]';

  return new Promise( (resolve,reject)=>{
    // TODO: update slots in course
    db.execute(`update student_schedule
      set deleted_at=CURRENT_TIMESTAMP, status=-1
      where student_id=? and schedule_id=? and status=0
    `, [student_id, schedule_id])
    .then( result=>{
      resolve(result);
    })
    .catch( error=>{
      logger.log('error', TAG+ACTION, error);
      reject(Errors.raise('INTERNAL_SERVER_ERROR', error));
    })
  });
}

// wala na finish na
exports.completeCourse = (student_id, schedule_id)=>{
  const ACTION = '[completeCourse]';

  return new Promise( (resolve,reject)=>{
    db.execute(`update student_schedule
      set deleted_at=CURRENT_TIMESTAMP, status=1
      where student_id=? and schedule_id=? and status=0
    `, [student_id, schedule_id])
    .then( result=>{
      resolve(result);
    })
    .catch( error=>{
      logger.log('error', TAG+ACTION, error);
      reject(Errors.raise('INTERNAL_SERVER_ERROR',error));
    })
  })
}

// TODO:
//  exports.viewGrades = (student_id, term/*?*/)=>{
//    
//  }
//  exports.getCoursesTakenDuring = (student_id, time_period)=>{
//
//  }