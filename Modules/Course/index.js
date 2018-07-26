const TAG = '[Courses]';

const router  = require('express').Router();
const logger  = require('../Common/services/Logger');
const mw      = require('../Common/middleware/Authentication');

const course  = require('./model/Course');
const schedule = require('./model/Schedule');
const transaction = require('./model/Transaction');

// POST	/courses		Add new course.
// GET	/courses		Get all courses
// GET	/courses/:course_id		Get course by ID.
// GET	/courses/:course_id/students		Get all enrolled students in a course.
// GET	/courses?search=SAMPLE&category=SAMPLE&school=SAMPLE		Search course. filters[category, school]
// GET	/courses?category		Get course by category
// PUT	/courses/:course_id		Update course by ID.
// DELETE	/courses/:course_id		Delete course by ID.
// GET	/courses?schedule=		get courses by schedule
// GET	/courses?school		GET courses of school


// add a new course
// prereqs must be existing before adding it
// course code must be unique per school

 router.get('/', (req, res)=>{ //temporary for homepage, & courses page to display course list
  const ACTION = '[getAllCourses]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  course.findAll()
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.get('/:id', (req, res)=>{//temporary for course page to display course info
  const ACTION = '[getCourse]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  course.find(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.post('/', /*mw.isAuthenticated,/*some middleware to verify admin*/
  (req,res)=>{
    const ACTION = '[createCourse]';
    logger.log('debug', TAG+ACTION+' request body', req.body);

    course.newCourse(req.body)
    .then( result=>{
      res.success(result);
    })
    .catch( error=>{
      res.error(error);
    });
  }
);

// get Courses filtered by Category/School/Teacher
router.get('/', /*mw.isAuthenticated,*/
  (req,res)=>{
    const ACTION = '[searchCourses]';
    logger.log('debug', TAG+ACTION+' request query', req.query);

    course.search(req.query)
    .then( (data)=>{
      res.success(data);
    })
    .catch( (error)=>{
      res.error(error);
    })
  }
);

// get details of one Course
router.get('/:course_id', /*mw.isAuthenticated,*/
  (req,res)=>{
    const ACTION = '[getCourse]';
    logger.log('debug', TAG+ACTION+' request parameters', req.params);

    course.getCourse(req.params.course_id)
    .then( data=>{
      res.success(data);
    })
    .catch( error=>{
      res.error(error);
    })
  }
);

router.get('/:course_id/students', /*mw.isAuthenticated,*/
  (req,res)=>{
    const ACTION = '[getCourseStudents]';
    logger.log('debug', TAG+ACTION+' request parameters', req.params);    

    course.getCourseStudents(req.params.course_id)
    .then( data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    })
  }
);

router.put('/:course_id',/*mw.isAuthenticated,*/
  (req,res)=>{
    const ACTION = '[updateCourse]';
    logger.log('debug', TAG+ACTION, `request:\n
      ${req.params},\n
      ${req.body}\n
    `);

    course.updateCourse(req.params.course_id, req.body)
    .then( result=>{
      res.success(result);
    })
    .catch( error=>{
      res.error(error);
    })
  }
);

router.delete('/:course_id', /*mw.isAuthenticated,*/
  (req,res)=>{
    const ACTION = '[deleteCourse]';
    logger.log('debug', TAG+ACTION+' request parameters', req.params);

    course.deleteCourse(req.params.cours_id)
    .then( result=>{
      res.success(result);
    })
    .catch(error=>{
      res.error(error);
    })
  }
);

router.get('/:course_id/schedule', (req, res) => {
  const ACTION = '[getCourseSchedule]';
  logger.log('debug', TAG+ACTION+' request parameters', req.params);

  schedule.getAllSchedule(req.params.course_id)
  .then( result=>{
    res.success(result);
  })
  .catch(error=>{
    res.error(error);
  })
});

router.post('/transaction/', mw.isAuthenticated, (req,res) => {
  const ACTION = '[postTransaction]';
  logger.log('debug', TAG+ACTION+' request parameters', req.params);
  req.body.user_id = req.user.id;
  transaction.addTransaction(req.body)
  .then(result=>{
    res.success(result);
  })
  .catch(error=>{
    res.error(error);
  })
});

module.exports = router;