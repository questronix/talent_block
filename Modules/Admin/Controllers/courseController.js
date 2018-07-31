const TAG = '[COURSE]';
const logger = require('../../Common/services/Logger');

module.exports.home = (req, res) => {
  var ACTION = '[home]';
  logger.log('info', TAG + ACTION)
  res.render('admin/course/index', { url: '/courses'});
};

module.exports.new = (req, res) => {
  var ACTION = '[new]';
  logger.log('info', TAG + ACTION)
  res.render('admin/course/new', { url: '/courses'});
};