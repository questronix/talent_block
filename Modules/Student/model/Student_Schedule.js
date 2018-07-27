const TAG = '[Student]';
const logger = require('../../Common/services/Logger');
const Errors = require('../../Common/services/Errors');
const db = require('../../Common/services/Database');

exports.getCoursesScheduled = (user_id, status)=>{
  const ACTION = '[getCoursesEnrolled]';

  return new Promise( (resolve,reject)=>{
    let query = `select
        course.id "course_id", course.name "course_name", course.code "course_code", course.tags "course_tags",
        school.id "school_id", school.name "school_name",
        category.id "category_id", category.name "category_name",
        schedule.id "sched_id", schedule.start_time, schedule.end_time, DATE_FORMAT(schedule.start_date, '%Y-%m-%d') as start_date, DATE_FORMAT(schedule.end_date, '%Y-%m-%d') as end_date, schedule.address,
        teacher.id "teacher_id", teacher.ln "teacher_ln", teacher.fn "teacher_fn",
        student_schedule.grade
      from student_schedule
      left join student   on student.id=student_schedule.student_id
      left join schedule  on schedule.id=student_schedule.schedule_id
      left join course    on course.id=schedule.course_id
      left join teacher   on teacher.id=schedule.teacher_id
      left join school    on school.id=course.school_id
      left join category  on category.id=course.category_id
      where student.user_id=?`;

    if (status==='enrolled') query += ' and student_schedule.status=0';  /*courses currently enrolled*/
    else if(status==='taken')query += ' and student_schedule.status!=0'; /*courses already taken*/
    else ;                                                               /*no filter*/
    db.execute(query, [user_id])
    .then( data=>{
      if (data.length > 0){
        resolve(data);
      }else{
        let error = Errors.raise('NOT_FOUND');
        logger.log('error', TAG+ACTION, error);
        reject(error);
      }
    })
    .catch( error=>{
      logger.log('error', TAG+ACTION, error);
      reject(Errors.raise('INTERNAL_SERVER_ERROR', error));
    })
  });
}

exports.enrollCourse = (student_id, schedule_id, amount)=>{
  const ACTION = '[enrollCourse]';

  return new Promise( (resolve,reject)=>{
    // TODO: update number of slots available for course
    db.execute(`INSERT INTO student_schedule(student_id, schedule_id)
      values(?,?)`, [student_id, schedule_id])
    .then( result=>{
      if (result.affectedRows > 0 ) {
        resolve({
          schedule_id,
          student_id,
          amount
        });
      }else{
        let error = Errors.raise('NO_AFFECTED_ROWS', result);
        logger.log('error', TAG+ACTION, error);
        reject(error);
      }
    })
    .catch( error=>{
      logger.log('error', TAG+ACTION, error);
      reject(Errors.raise('INTERNAL_SERVER_ERROR', error));
    })
  });
}

exports.dropCourse = (user_id, schedule_id)=>{
  const ACTION = '[dropCourse]';

  return new Promise( (resolve,reject)=>{
    // TODO: update slots in course
    db.execute(`update student_schedule
      set deleted_at=CURRENT_TIMESTAMP, status=-1
      where student_id=(select id from student where user_id=?) and schedule_id=? and status=0
    `, [user_id, schedule_id])
    .then( result=>{
      if (result.affectedRows > 0 ) {
        resolve(result);
      }else{
        let error = Errors.raise('NO_AFFECTED_ROWS', result);
        logger.log('error', TAG+ACTION, error);
        reject(error);
      }
    })
    .catch( error=>{
      logger.log('error', TAG+ACTION, error);
      reject(Errors.raise('INTERNAL_SERVER_ERROR', error));
    })
  });
}

// wala na finish na
exports.completeCourse = (user_id, schedule_id)=>{
  const ACTION = '[completeCourse]';

  return new Promise( (resolve,reject)=>{
    db.execute(`update student_schedule
      set deleted_at=CURRENT_TIMESTAMP, status=1
      where student_id=(select id from student where user_id=?) and schedule_id=? and status=0
    `, [user_id, schedule_id])
    .then( result=>{
      if (result.affectedRows > 0 ) {
        resolve(result);
      }else{
        let error = Errors.raise('NO_AFFECTED_ROWS', result);
        logger.log('error', TAG+ACTION, error);
        reject(error);
      }
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