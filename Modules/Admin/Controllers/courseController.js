const TAG = '[ADMIN_COURSE]';
const logger = require('../../Common/services/Logger');
const course = require('../../Course/model/Course');
const school = require('../../School/model/School');

// Admin course homepage
module.exports.home = (req, res) => {
  var ACTION = '[home]';
  logger.log('info', TAG + ACTION)
  res.render('admin/course/index');
};

// Admin create new course
module.exports.new = async(req, res) => {
  var ACTION = '[new]';
  logger.log('info', TAG + ACTION);

  // If the user wants to add a new course
  if (req.method === "POST") {
    try {
      let profile = await school.getProfile(req.user.id);
      req.body.school_id = profile.id;
      req.body.category_id = 1;
      let result = await course.newCourse(req.body);
      console.log(result);
      res.redirect('/admin/courses');
    } catch (error) {
      console.log(err); 
      res.redirect('/admin/courses/new');
    }
  }

  res.render('admin/course/new');
};

// Admin find or update course
module.exports.findOrUpdate = async(req, res) => {
  var ACTION = '[find]';
  logger.log('info', TAG + ACTION);

  try {
    // Update course on user request
    if (req.method === "POST") {
      await course.updateCourse(req.params.id, req.body);
    }
    let response = await course.find(req.params.id);
    if (response) {
      console.log(response);
      res.render('admin/course/update', { course: response });
    }
  } catch (error) {
    console.log(error);
    res.redirect('/admin/courses');
  }
};