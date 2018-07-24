const TAG = '[Student]';
const express = require('express');
const router = express.Router();
const logger = require('../Common/services/Logger');
const err = require('../Common/services/Errors');
const mw = require('../Common/middleware/Authentication');
const async = require('async');

const student   = require('./model/Student');
const eduBg = require('./model/EducBg');
const famBg = require('./model/FamilyBg');
const occuBg = require('./model/OccuBg');
const idBg = require('./model/IdBg');
const ss      = require('./model/Student_Schedule');

/* get all students */
router.get('/', mw.isAuthenticated, (req, res)=>{
  const ACTION = '[getAllStudents]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  
  student.getAllStudents()
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

/* get one student */
router.get('/me', mw.isAuthenticated, (req, res)=>{
  const ACTION = '[getStudent]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  async.auto({
    student_info: function(callback){
      student.getProfile(req.user.id)
      .then(data=>{
        callback(null, data);
      })
      .catch(error=>{
        callback(error);
      });
    },
    student_edu_bg: ['student_info', function(result, callback){
      eduBg.getStudentEduc(result.student_info.user_id).then(data=>{
        callback(null, data);
      }).catch(error=>{
        callback(error);
      });
    }],
    student_fam_bg: ['student_edu_bg', function(result, callback){
      famBg.getStudentFam(result.student_info.user_id).then((data) => {
        callback(null, data);
      }).catch((error) => {
        callback(error);
      });
    }],
    student_occu_bg: ['student_fam_bg', function(result, callback){
      occuBg.getStudentOccu(result.student_info.user_id).then((data) => {
        callback(null, data);
      }).catch((error) => { 
        callback(error);
      });
    }],
    student_ids_bg: ['student_occu_bg', function(result, callback){
      idBg.getStudentIds(result.student_info.user_id).then((data) => {
        callback(null, data);
      }).catch((error) => { 
        callback(error);
      });
    }]
  }, function(err, result){
    if(err) res.error(err);
    else{
      result.student_info.educ = result.student_edu_bg;
      result.student_info.fam = result.student_fam_bg;
      result.student_info.occupations = result.student_occu_bg;
      result.student_info.ids = result.student_ids_bg;
      res.success(result.student_info);
    }
  });
});

/* add student info */
router.post('/', mw.isAuthenticated, (req, res)=>{
  const ACTION = '[postStudent]';
  req.body.user_id = req.user.id;
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  
  student.addStudentInfo(req.body)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.put('/', mw.isAuthenticated, (req, res)=>{
  const ACTION = '[putUpdateStudent]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  
  student.updateStudentInfo(req.body, req.user.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

/* delete student profile */
router.delete('/:id', mw.isAuthenticated, (req, res)=>{
  const ACTION = '[deleteStudent]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  
  student.removeStudent(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

// Educational Background
router.post(`/education`, mw.isAuthenticated, (req,res)=>{
  const ACTION = '[postEducation]';
  logger.log('debug', TAG + ACTION + ' request body', req.body);

  req.body.user_id = req.user.id;
  eduBg.addStudentEduc(req.body).then(data=>{
    res.success(data);
  }).catch(error=>{
    res.error(error);
  })
});

router.put(`/education`, mw.isAuthenticated, (req,res)=>{
  const ACTION = '[putUpdateEducation]';
  logger.log('debug', TAG + ACTION + ' request body', req.body);

  eduBg.updateStudentEduc(req.body).then(data=>{
    res.success(data);
  }).catch(error=>{
    console.log(error);
    res.error(error);
  })
});

router.delete(`/education/:id`, mw.isAuthenticated, (req,res)=>{
  const ACTION = '[deleteEducation]';
  logger.log('debug', TAG + ACTION + ' request body', req.params);

  eduBg.deleteStudentEduc(req.params.id).then(data=>{
    res.success(data);
  }).catch(error=>{
    console.log(error);
    res.error(error);
  })
});

// Family Background
router.post(`/family`, mw.isAuthenticated, (req,res)=>{
  const ACTION = '[postFamily]';
  logger.log('debug', TAG + ACTION + ' request body', req.body);

  req.body.user_id = req.user.id;
  famBg.addStudentFam(req.body).then(data=>{
    res.success(data);
  }).catch(error=>{
    res.error(error);
  })
});

router.put(`/family`, mw.isAuthenticated, (req,res)=>{
  const ACTION = '[putFamilyEducation]';
  logger.log('debug', TAG + ACTION + ' request body', req.body);

  famBg.updateStudentFam(req.body).then(data=>{
    res.success(data);
  }).catch(error=>{
    console.log(error);
    res.error(error);
  })
});

router.delete(`/family/:id`, mw.isAuthenticated, (req,res)=>{
  const ACTION = '[deleteFamily]';
  logger.log('debug', TAG + ACTION + ' request body', req.params);

  famBg.deleteStudentFam(req.params.id).then(data=>{
    res.success(data);
  }).catch(error=>{
    console.log(error);
    res.error(error);
  })
});

// Occupational Background
router.post(`/occupation`, mw.isAuthenticated, (req,res)=>{
  const ACTION = '[postOccupation]';
  logger.log('debug', TAG + ACTION + ' request body', req.body);

  req.body.user_id = req.user.id;
  occuBg.addStudentOccu(req.body).then(data=>{
    res.success(data);
  }).catch(error=>{
    res.error(error);
  })
});

router.put(`/occupation`, mw.isAuthenticated, (req,res)=>{
  const ACTION = '[putOccupationBackground]';
  logger.log('debug', TAG + ACTION + ' request body', req.body);

  occuBg.updateStudentOccu(req.body).then(data=>{
    res.success(data);
  }).catch(error=>{
    console.log(error);
    res.error(error);
  })
});

router.delete(`/occupation/:id`, mw.isAuthenticated, (req,res)=>{
  const ACTION = '[deleteOccupation]';
  logger.log('debug', TAG + ACTION + ' request body', req.params);

  occuBg.deleteStudentOccu(req.params.id).then(data=>{
    res.success(data);
  }).catch(error=>{
    console.log(error);
    res.error(error);
  })
});

// IDs Background
router.post(`/ids`, mw.isAuthenticated, (req,res)=>{
  const ACTION = '[postStudentIDs]';
  logger.log('debug', TAG + ACTION + ' request body', req.body);

  req.body.user_id = req.user.id;
  idBg.addStudentIdAsync(req.body).then(data=>{
    res.success(data);
  }).catch(error=>{
    res.error(error);
  })
});

router.put(`/ids`, mw.isAuthenticated, (req,res)=>{
  const ACTION = '[putUpdateStudentIDs]';
  logger.log('debug', TAG + ACTION + ' request body', req.body);

  idBg.updateStudentId(req.body).then(data=>{
    res.success(data);
  }).catch(error=>{
    console.log(error);
    res.error(error);
  })
});

router.delete(`/ids/:id`, (req,res)=>{
  const ACTION = '[deleteStudentIDs]';
  logger.log('debug', TAG + ACTION + ' request body', req.params);

  idBg.deleteStudentId(req.params.id).then(data=>{
    res.success(data);
  }).catch(error=>{
    console.log(error);
    res.error(error);
  })
});

// temporary routes for student_schedule

router.get('/:student_id/courses', (req,res)=>{
  const ACTION = '[getCourses]';
  logger.log('debug', TAG+ACTION, `request parameters:\n${JSON.stringify(req.params)}`);

  ss.getCourses(req.params.student_id)
  .then( data=>{
    res.success(data);
  })
  .catch( error=>{
    res.error(error);
  })

})

router.get('/:student_id/coursesEnrolled', (req,res)=>{
  const ACTION = '[getCoursesEnrolled]';
  logger.log('debug', TAG+ACTION, `request parameters:\n${JSON.stringify(req.params)}`);

  ss.getCourses(req.params.student_id, 'enrolled')
  .then( data=>{
    res.success(data);
  })
  .catch( error=>{
    res.error(error);
  })
});

router.get('/:student_id/coursesTaken', (req,res)=>{
  const ACTION = '[getCoursesTaken]';
  logger.log('debug', TAG+ACTION, `request parameters:\n${JSON.stringify(req.params)}`);

  ss.getCourses(req.params.student_id, 'taken')
  .then( data=>{
    res.success(data);
  })
  .catch( error=>{
    res.error(error);
  })
});

router.post('/:student_id/enroll', (req,res)=>{
  const ACTION = '[postEnrollCourse]';
  logger.log('debug', TAG+ACTION,
  `request parameters:\n${JSON.stringify(req.params)}\nrequest body:\n${JSON.stringify(req.body)}`);

  ss.enrollCourse(req.params.student_id, req.body.sched_id)
  .then( result=>{
    res.success(result);
  })
  .catch(error=>{
    res.error(error);
  })

});

router.put('/:student_id/complete', (req,res)=>{
  const ACTION = '[putCompleteCourse]';
  logger.log('debug', TAG+ACTION,
  `request parameters:\n${JSON.stringify(req.params)}\nrequest body:\n${JSON.stringify(req.body)}`);

  ss.completeCourse(req.params.student_id, req.body.sched_id)
  .then( result=>{
    res.success(result);
  })
  .catch( error=>{
    res.error(error);
  })
});

router.delete('/:student_id/drop/:sched_id', (req,res)=>{
  const ACTION ='[deleteDropCourse]';
  logger.log('debug', TAG+ACTION, `request parameters:\n${JSON.stringify(req.params)}`);

  ss.dropCourse(req.params.student_id, req.params.sched_id)
  .then( result=>{
    res.success(result);
  })
  .catch( error=>{
    res.error(error);
  })
});

module.exports = router;