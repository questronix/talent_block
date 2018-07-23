const TAG     = '[Student]';
const router  = require('express').Router();
const logger  = require('../Common/services/Logger');
const err     = require('../Common/services/Errors');
const mw      = require('../Common/middleware/Authentication');
const async   = require('async');

const student = require('./model/Student');
const eduBg   = require('./model/EducBg');
const famBg   = require('./model/FamilyBg');
const idBg    = require('./model/IdBg');
const ss      = require('./model/Student_Schedule');

/* get all students */
router.get('/', mw.isAuthenticated, (req, res)=>{
  const ACTION = '[getAllStudent]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  student.findAll()
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
    }]
  }, function(err, result){
    if(err) res.error(err);
    else{
      result.student_info.educ = result.student_edu_bg;
      res.success(result.student_info);
    }
  });
});

/* create student profile */
router.post('/', mw.isAuthenticated, (req, res)=>{
  const ACTION = '[postStudent]';
  req.body.user_id = req.user.id;
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  student.add(req.body)
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
  student.update(req.body, req.user.id)
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
  student.remove(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

// Educational Background
router.post(`/education`, mw.isAuthenticated, (req,res)=>{
  const ACTION = '[education]';
  logger.log('debug', TAG + ACTION + ' request body', req.body);

  req.body.user_id = req.user.id;
  eduBg.add(req.body).then(data=>{
    res.success(data);
  }).catch(error=>{
    res.error(error);
  })
});


router.get('/:id/family-background', (req, res, next) => {
  const ACTION = '[getFamilyBackground]';
  logger.log('debug', TAG + ACTION, ' request parameters ', req.params);

  famBg.view(req.params.id)
  .then(data=>{
      res.success(data);
  })
  .catch(error=>{
      res.error(error);
  })
});

router.post('/:id/family-background', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[postFamilyBackground]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  logger.log('debug', TAG + ACTION + ' request body', req.body);

  if(parseInt(req.params.id) === req.user.id){
    famBg.add(req.body)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    })
  }else{
    let error = err.raise('UNAUTHORIZED');
    logger.log('error', TAG + ACTION, error);
    res.error(error);
  }
});

router.put('/:id/family-background', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[putFamilyBackground]';
  logger.log('debug', TAG + ACTION, ' request parameters ', req.params);
  logger.log('debug', TAG + ACTION, ' request body ', req.body);

  if(parseInt(req.params.id) === req.user.id){
    famBg.update(req.body, req.user.id)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    })
  }else{
    let error = err.raise('UNAUTHORIZED');
    logger.log('error', TAG + ACTION, error);
    res.error(error);
  }
});

router.delete('/:id/family-background', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[deleteFamilyBackground]';
  logger.log('debug', TAG + ACTION, ' request parameters ', req.params);
  logger.log('debug', TAG + ACTION + ' request body', req.body);

  if(parseInt(req.params.id) === req.user.id){
    famBg.delete(req.user.id, req.body.id)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    })
  }else{
    let error = err.raise('UNAUTHORIZED');
    logger.log('error', TAG + ACTION, error);
    res.error(error);
  }
});

router.get('/:id/id-bg', (req, res, next) => {
  const ACTION = '[getIdBackground]';
  logger.log('debug', TAG + ACTION, ' request parameters ', req.params);

  idBg.viewUserIds(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  })
});

router.post('/:id/id-bg', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[postId]';
  logger.log('debug', TAG + ACTION, ' request body ', req.body);

  if(parseInt(req.params.id) === req.user.id){
    req.body.user_id = req.user.id;
    idBg.addAsync(req.body)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    })
  }else{
    let error = err.raise('UNAUTHORIZED');
    logger.log('error', TAG + ACTION, error);
    res.error(error);
  }
});

router.put('/:id/id-bg', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[putId]';
  logger.log('debug', TAG + ACTION, ' request parameters ', req.params);
  logger.log('debug', TAG + ACTION, ' request body ', req.body);

  if(parseInt(req.params.id) === req.user.id){
    idBg.update(req.body, req.user.id)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    })
  }else{
    let error = err.raise('UNAUTHORIZED');
    logger.log('error', TAG + ACTION, error);
    res.error(error);
  }
});

router.delete('/:id/id-bg', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[deleteId]';
  logger.log('debug', TAG + ACTION, ' request parameters ', req.params);
  logger.log('debug', TAG + ACTION, ' request body ', req.body);

  if(parseInt(req.params.id) === req.user.id){
    idBg.delete(req.user.id, req.body.id)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    })
  }else{
    let error = err.raise('UNAUTHORIZED');
    logger.log('error', TAG + ACTION, error);
    res.error(error);
  }
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