const TAG = '[School]'
const express = require('express');
const router = express.Router();

const mw = require('../Common/middleware/Authentication');
const logger = require('../Common/services/Logger');
const err = require('../Common/services/Errors');

const school = require('./model/School');

router.get('/:school_id', (req, res, next) => {
    const ACTION = '[getSchoolById]';
    logger.log('debug', TAG + ACTION + ' request parameters ', req.params);
    school.getSchoolById(req.params.school_id)
    .then(data=>{
        res.success(data);
    })
    .catch(error=>{
        res.error(error);
    })
});

router.get('/', (req, res, next) => {
    const ACTION = '[getSchoolsByCourse]';
    logger.log('debug', TAG + ACTION + ' request query ', req.query);

    school.getSchoolsByCourse(req.query.course)
    .then(data=>{
        res.success(data);
    })
    .catch(error=>{
        res.error(error);
    })
});

router.post('/', mw.isAuthenticated, (req, res, next) => {
    const ACTION = '[postSchool]';
    logger.log('debug', TAG + ACTION + ' request body ', req.body);
    
    req.body.user_id = req.user.id;
    school.createSchoolAsync(req.body)
    .then(data=>{
        res.success(data);
    })
    .catch(error=>{
        res.error(error);
    })
});

router.put('/:school_id', mw.isAuthenticated, (req, res, next) => {
    const ACTION = '[putUpdateSchool]';
    logger.log('debug', TAG + ACTION + ' request parameters ', req.params);
    logger.log('debug', TAG + ACTION + ' request body ', req.body);

    school.updateSchool(req.params.school_id, req.user.id, req.body)
    .then(data=>{
        res.success(data);
    })
    .catch(error=>{
        res.error(error);
    })
});

module.exports = router;