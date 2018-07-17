const TAG = '[School]'
const express = require('express');
const router = express.Router();

const mw = require('../Common/middleware/Authentication');
const logger = require('../Common/services/Logger');

const school = require('./model/School');

router.post('/', (req, res, next) => {
    const ACTION = '[createSchool]';
    logger.log('debug', TAG + ACTION + ' request body ', req.body);
    school.createSchoolAsync(req.body)
    .then(data=>{
        res.success(data);
    })
    .catch(error=>{
        res.error(error);
    })
});

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

router.put('/:school_id', (req, res, next) => {
    const ACTION = '[updateSchool]';
    logger.log('debug', TAG + ACTION + ' request parameters ', req.params);
    logger.log('debug', TAG + ACTION + ' request body ', req.body);
    school.updateSchool(req.params.school_id, 0, req.body)
    .then(data=>{
        res.success(data);
    })
    .catch(error=>{
        res.error(error);
    })
});

module.exports = router;