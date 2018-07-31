const TAG = '[School]'
const express = require('express');
const router = express.Router();

const mw = require('../Common/middleware/Authentication');
const logger = require('../Common/services/Logger');
const err = require('../Common/services/Errors');
const async = require('async');

const school = require('./model/School');
const course = require('./model/Course');

/* GET All Courses of School */
router.get('/courses', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getSchoolProfile]';
  logger.log('debug', TAG + ACTION + ' request parameters ', req.user);

  async.auto({
    school_info: function (callback) {
      school.getProfile(req.user.id)
        .then((data) => {
          callback(null, data);
        }).catch((error) => {
          callback(error);
        });
    },
    school_courses: ['school_info', function (result, callback) {
      course.getCourses(result.school_info.id)
        .then((data) => {
          callback(null, data);
        }).catch((error) => {
          callback(error);
        });
    }]
  },
    function (err, result) {
      if (err) {
        res.error(err);
      }
      else {
        result.courses = result.school_courses;
        res.success(result.courses);
      }
    });
});

/* GET School Courses by school_id */
router.get('/:school_id/courses', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[getSchoolCourses]';
  logger.log('debug', TAG + ACTION + ' request parameters ', req.params);

  course.getCourses(req.params.school_id)
    .then((data) => {
      res.success(data);
    }).catch((err) => {
      res.error(err);
    });
});

/* GET School Profile by user_id */
router.get('/profile', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getSchoolProfile]';
  logger.log('debug', TAG + ACTION + ' request parameters ', req.user);

  school.getProfile(req.user.id)
    .then((data) => {
      res.success(data);
    }).catch((err) => {
      res.error(err);
    });
});


router.get('/:school_id', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[getSchoolById]';
  logger.log('debug', TAG + ACTION + ' request parameters ', req.params);
  school.getSchoolById(req.params.school_id)
    .then(data => {
      res.success(data);
    })
    .catch(error => {
      res.error(error);
    })
});

router.get('/', (req, res, next) => {
  const ACTION = '[getSchoolsByCourse]';
  logger.log('debug', TAG + ACTION + ' request query ', req.query);

  school.getSchoolsByCourse(req.query.course)
    .then(data => {
      res.success(data);
    })
    .catch(error => {
      res.error(error);
    })
});

router.post('/', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[postSchool]';
  logger.log('debug', TAG + ACTION + ' request body ', req.body);

  req.body.user_id = req.user.id;
  school.createSchoolAsync(req.body)
    .then(data => {
      res.success(data);
    })
    .catch(error => {
      res.error(error);
    })
});

router.put('/:school_id', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[putUpdateSchool]';
  logger.log('debug', TAG + ACTION + ' request parameters ', req.params);
  logger.log('debug', TAG + ACTION + ' request body ', req.body);

  school.updateSchool(req.params.school_id, req.user.id, req.body)
    .then(data => {
      res.success(data);
    })
    .catch(error => {
      res.error(error);
    })
});

module.exports = router;